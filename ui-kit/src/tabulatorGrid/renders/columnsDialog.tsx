import React, {useCallback, useEffect, useState} from 'react';

import {Modal} from '@src/modal/modal';
import {ButtonsRow} from '@src/buttonsRow';
import {IGridApi, IGridProps} from '@src/tabulatorGrid';
import {Tree, TreeProps} from 'antd';
import type {DataNode} from 'antd/es/tree';
import {ColumnComponent, ColumnDefinition} from 'tabulator-tables';
import {FolderOutlined} from '@ant-design/icons';
import {IsDebugMode} from '@krinopotam/common-hooks';
import {useTranslate} from "@src/_shared/hooks/useTranslate";
import {translations} from "@src/tabulatorGrid/translations/translations";

//region Types
export interface IColumnsDialogProps {
    open?: boolean;
    gridApi: IGridApi;
}

interface IColumnsDialogApi {
    gridApi: IGridApi;
    nodes: DataNode[];
    checked: React.Key[];
    columnsDefsMap: Record<string, ColumnDefinition>;
    setChecked: React.Dispatch<React.SetStateAction<React.Key[]>>;
    setNodes: React.Dispatch<React.SetStateAction<DataNode[]>>;
    setExpanded: React.Dispatch<React.SetStateAction<React.Key[]>>;
    default?: boolean;
}

//endregion

//region Components
export const ColumnsDialog = (props: IColumnsDialogProps): React.JSX.Element => {
    const [dialogApi] = useState<IColumnsDialogApi>({} as IColumnsDialogApi);
    const gridProps = props.gridApi.gridProps
    const t = useTranslate(gridProps.language, translations, gridProps.translation);
    return (
        <Modal
            title={t('columns')}
            destroyOnClose={true}
            centered
            open={props.open}
            onCancel={() => props.gridApi.openColumnDialog(false)}
            footer={<Footer formProps={props} dialogApi={dialogApi}/>}
        >
            {props.open && <DialogBody dialogProps={props} dialogApi={dialogApi}/>}
        </Modal>
    );
};

const DialogBody = ({dialogProps, dialogApi}: { dialogProps: IColumnsDialogProps; dialogApi: IColumnsDialogApi }): React.JSX.Element => {
    const tableApi = dialogProps.gridApi.tableApi!;
    const [checked, setChecked] = useState<React.Key[]>([]);
    const [expanded, setExpanded] = useState<React.Key[]>([]);
    const [nodes, setNodes] = useState<DataNode[]>([]);

    dialogApi.gridApi = dialogProps.gridApi;
    dialogApi.setNodes = setNodes;
    dialogApi.setChecked = setChecked;
    dialogApi.setExpanded = setExpanded;

    useEffect(() => {
        const curColDefs = getCurrentColumnsDefinitions(tableApi.getColumns(true));
        generateNodes(dialogApi, curColDefs);
        expandAll(dialogApi);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onCheck = useOnCheck(dialogApi, setChecked);

    const onDrop = useOnDrop(dialogApi);
    const onAllowDrop = useOnAllowDrop(dialogApi);
    return (
        <Tree
            draggable
            blockNode
            showIcon
            defaultExpandAll
            checkable
            expandedKeys={expanded}
            checkedKeys={checked}
            treeData={nodes}
            selectable={false}
            onCheck={onCheck}
            allowDrop={onAllowDrop}
            onDrop={onDrop}
            onExpand={keys => {
                setExpanded(keys);
            }}
        />
    );
};

const Footer = ({formProps, dialogApi}: { formProps: IColumnsDialogProps; dialogApi: IColumnsDialogApi }): React.JSX.Element => {
    const gridProps = dialogApi.gridApi.gridProps
    const t = useTranslate(gridProps.language, translations, gridProps.translation);

    return (
        <ButtonsRow
            arrowsSelection={true}
            buttons={{
                ok: {
                    title: t('ok'),
                    position: 'right',
                    active: true,
                    onClick: () => onSubmitClick(formProps, dialogApi),
                },
                cancel: {
                    title: t('cancel'),
                    position: 'right',
                    onClick: () => {
                        formProps.gridApi.openColumnDialog(false);
                    },
                },
                default: {title: t('reset'), position: 'left', onClick: () => onResetClick(formProps, dialogApi)},
            }}
        />
    );
};
//endregion

//region Service methods
const generateNodes = (dialogApi: IColumnsDialogApi, columnsDefs: ColumnDefinition[]) => {
    dialogApi.columnsDefsMap = {};

    const recursive = (colDefs: ColumnDefinition[], colKey?: { val: number }): [DataNode[], string[]] => {
        if (!colKey) colKey = {val: 0};
        let checkedKeys: string[] = [];

        const nodes: DataNode[] = [];
        for (const colDef of colDefs) {
            if (colDef.formatter === 'rowSelection') continue;

            colKey.val++;
            const key = colKey.val.toString();
            const node: DataNode = {
                key: key,
                title: colDef.title,
            };

            let checked = colDef.visible !== false;

            if (colDef.columns?.length) {
                node.icon = <FolderOutlined/>;
                const [childrenNodes, childrenCheckedKeys] = recursive(colDef.columns, colKey);
                node.children = childrenNodes;
                checkedKeys = [...checkedKeys, ...childrenCheckedKeys];
                if (childrenCheckedKeys.length < colDef.columns.length) checked = false; //WORKAROUND: if the parent is checked, then the AntdTree will set checked for all child columns. Therefore, we artificially make it unchecked if there is at least one invisible child column
            }

            nodes.push(node);
            if (checked) checkedKeys.push(key);

            dialogApi.columnsDefsMap[key] = colDef;
        }

        return [nodes, checkedKeys];
    };

    const [newNodes, newChecked] = recursive(columnsDefs);
    dialogApi.nodes = newNodes;
    dialogApi.checked = newChecked;
    dialogApi.setNodes(newNodes);
    dialogApi.setChecked(newChecked);
};

const expandAll = (dialogApi: IColumnsDialogApi) => {
    const expanded = [];
    for (const key in dialogApi.columnsDefsMap) expanded.push(key); //expand all
    dialogApi.setExpanded(expanded);
};

const nodesToColDefs = (dialogApi: IColumnsDialogApi) => {
    const recursive = (nodes: DataNode[]): [ColumnDefinition[], boolean] => {
        const colDefs: ColumnDefinition[] = [];
        let anyVisible = false;
        for (const node of nodes) {
            const colDef = dialogApi.columnsDefsMap[node.key.toString()];
            colDef.visible = dialogApi.checked.indexOf(node.key) > -1;

            if (node.children?.length) {
                const [subColDefs, anyChildrenVisible] = recursive(node.children);
                colDef.columns = subColDefs;
                if (anyChildrenVisible) colDef.visible = true;
            } else delete colDef.columns;

            if (colDef.visible) anyVisible = true;

            colDefs.push(colDef);
        }

        return [colDefs, anyVisible];
    };

    const [resultColDef] = recursive(dialogApi.nodes);
    return resultColDef;
};

const getCurrentColumnsDefinitions = (cols: ColumnComponent[]): ColumnDefinition[] => {
    const colDefs: ColumnDefinition[] = [];
    for (const col of cols) {
        const colDef = {...col.getDefinition()};
        colDef.visible = col.isVisible();
        colDef.width = col.getWidth();

        const subCols = col.getSubColumns();
        if (subCols?.length) colDef.columns = getCurrentColumnsDefinitions(subCols);

        colDefs.push(colDef);
    }

    return colDefs;
};

const getColumnsDefinitionsFromOptions = (gridProps: IGridProps): ColumnDefinition[] => {
    const recursive = (colDefs: ColumnDefinition[], defaultColDef: Partial<ColumnDefinition>) => {
        const newColDefs: ColumnDefinition[] = [];
        for (const colDef of colDefs) {
            const newColDef = {...defaultColDef, ...colDef};
            newColDef.visible = newColDef.visible !== false;
            if (!newColDef.width) newColDef.width = 0;

            if (newColDef.columns?.length) newColDef.columns = recursive(newColDef.columns, defaultColDef);

            newColDefs.push(newColDef);
        }

        return newColDefs;
    };

    return recursive(gridProps.columns, gridProps.columnDefaults ?? {});
};

const commitChanges = (props: IColumnsDialogProps, dialogApi: IColumnsDialogApi) => {
    if (dialogApi.default && props.gridApi.gridProps.persistence) {
        const persistentId = props.gridApi.gridProps.persistenceID ?? props.gridApi.getId();
        localStorage.removeItem(`tabulator-${persistentId}-columns`);
    }

    const colDef = nodesToColDefs(dialogApi);

    const tableApi = dialogApi.gridApi.tableApi;
    tableApi?.setColumnLayout(colDef);
    if (!tableApi?.isHeaderFilterVisible()) tableApi?.toggleHeaderFilter(false);
};
//endregion

//region Drag and drop
const getNodeByKey = (nodes: DataNode[], key: React.Key): DataNode | undefined => {
    for (const node of nodes) {
        if (node.key === key) return node;

        if (!node.children?.length) continue;

        const foundedNode = getNodeByKey(node.children, key);
        if (foundedNode) return foundedNode;
    }

    return undefined;
};

const removeNode = (nodes: DataNode[], key: React.Key) => {
    let idx = 0;
    for (const node of nodes) {
        if (node.key === key) {
            nodes.splice(idx, 1);
            return true;
        }

        if (node.children?.length) removeNode(node.children, key);
        idx++;
    }
};

/** Get a node parent*/
const getParentNode = (nodes: DataNode[], node: DataNode, parentNode?: DataNode): DataNode | undefined => {
    for (const curNode of nodes) {
        if (curNode.key === node.key) return parentNode;

        if (!curNode.children?.length) continue;

        const pNode = getParentNode(curNode.children, node, curNode);
        if (pNode) return pNode;
    }

    return undefined;
};

/** Get a root node with the same parent with levelNode (on the same level)  */
const getRootNode = (node: DataNode, levelNode: DataNode | undefined, dialogApi: IColumnsDialogApi): DataNode | undefined => {
    const rootNode = node;
    const parentNode = getParentNode(dialogApi.nodes, node);
    if (parentNode?.key === levelNode?.key) return rootNode;
    if (!parentNode) return undefined;
    return getRootNode(parentNode, levelNode, dialogApi);
};

/** get a last children node on a last level of the given node */
const getLastChildrenNode = (node: DataNode): DataNode => {
    if (!node.children?.length) return node;

    const lastNode = node.children[node.children.length - 1];
    if (!lastNode.children?.length) return lastNode;

    return getLastChildrenNode(lastNode);
};

const moveNodeIntoNode = (node: DataNode, targetNode: DataNode | undefined, dialogApi: IColumnsDialogApi) => {
    if (!targetNode?.children) return false;
    const parentNode = getParentNode(dialogApi.nodes, node);

    if (targetNode.key === parentNode?.key) {
        removeNode(dialogApi.nodes, node.key);
        targetNode.children?.unshift(node);
        return true;
    }

    if (IsDebugMode()) console.warn('Drop on the content: target is another group');
    return false;
};

const moveNode = (node: DataNode, targetNode: DataNode | undefined, position: 'above' | 'below', dialogApi: IColumnsDialogApi) => {
    if (!targetNode) return false;
    const parentNode = getParentNode(dialogApi.nodes, node);
    const targetParentNode = getParentNode(dialogApi.nodes, targetNode);

    if ((!parentNode && targetParentNode) || (parentNode && !targetParentNode) || parentNode?.key !== targetParentNode?.key) {
        if (IsDebugMode()) console.warn('Node and target node have different parents');
        return false;
    }

    let parentNodesList: DataNode[] = [];
    if (!parentNode && !targetParentNode) parentNodesList = dialogApi.nodes;
    else if (parentNode?.key === targetParentNode?.key) parentNodesList = targetParentNode!.children!;
    else return false;

    removeNode(dialogApi.nodes, node.key);
    const targetIndex = parentNodesList.indexOf(targetNode);
    if (targetIndex < 0) return false;
    parentNodesList.splice(targetIndex + (position === 'below' ? 1 : 0), 0, node);

    return true;
};

const useOnAllowDrop = (dialogApi: IColumnsDialogApi) => {
    const onAllowDrop: TreeProps['allowDrop'] = info => {
        const dragNode = getNodeByKey(dialogApi.nodes, info.dragNode.key);
        const dropNode = getNodeByKey(dialogApi.nodes, info.dropNode.key);
        if (!dragNode || !dropNode) return false;
        const dragNodeParent = getParentNode(dialogApi.nodes, dragNode);
        const dropNodeParent = getParentNode(dialogApi.nodes, dropNode);

        if (info.dropPosition === -1) {
            /** drag above drop node  */
            return dragNodeParent === dropNodeParent; //allowed only if the drag and drop nodes have the same parent
        } else if (info.dropPosition === 0 || info.dropPosition === 1) {
            /** drag on or below drop node  */
            if (!dropNode.children && dragNodeParent === dropNodeParent) return true; //allow drag on or below dropNode if the dragNode and dropNode have the same parent
            if (dropNode.children && dragNodeParent === dropNode) return true; //allow drag on or below dropNode, if dropNode is a parent of the dragNode

            const levelRootNode = getRootNode(dropNode, dragNodeParent, dialogApi); //get a root of the dropNode with the same parent as dragNode parent
            if (!levelRootNode) return false;
            if (dropNode === getLastChildrenNode(levelRootNode)) return true; //allow drag if dropNode is last child node of the levelRootNode
        }

        return false;
    };

    return useCallback(onAllowDrop, [dialogApi]);
};

const useOnDrop = (dialogApi: IColumnsDialogApi) => {
    const onDrop: TreeProps['onDrop'] = info => {
        const dragNode = getNodeByKey(dialogApi.nodes, info.dragNode.key);
        const dropNode = getNodeByKey(dialogApi.nodes, info.node.key);
        if (!dropNode || !dragNode) return;

        const dragNodeParent = getParentNode(dialogApi.nodes, dragNode);
        //const dropNodeParent = getParentNode(dialogApi.nodes, dropNode);

        if (info.node.dragOverGapTop) {
            /** drop above the node */
            moveNode(dragNode, dropNode, 'above', dialogApi);
        } else {
            /** drop on the node or below node */

            const levelRootNode = getRootNode(dropNode, dragNodeParent, dialogApi); //get a root of the dropNode with the same parent as dragNode parent
            if (levelRootNode && dropNode === getLastChildrenNode(levelRootNode)) {
                //allow drag if dropNode is last child node of the levelRootNode
                moveNode(dragNode, levelRootNode, 'below', dialogApi);
            } else if (dropNode.children) moveNodeIntoNode(dragNode, dropNode, dialogApi);
            else moveNode(dragNode, dropNode, 'below', dialogApi);
        }

        dialogApi.setNodes([...dialogApi.nodes]);
    };

    return useCallback(onDrop, [dialogApi]);
};
//endregion

//region Callbacks
const useOnCheck = (dialogApi: IColumnsDialogApi, setChecked: React.Dispatch<React.SetStateAction<React.Key[]>>) => {
    return useCallback(
        (keys: React.Key[] | { checked: React.Key[]; halfChecked: React.Key[] }) => {
            let checkedKeys: React.Key[];
            if (Array.isArray(keys)) checkedKeys = keys;
            else checkedKeys = [...keys.checked, ...keys.halfChecked];
            dialogApi.checked = checkedKeys;
            setChecked(checkedKeys);
        },
        [dialogApi, setChecked]
    );
};

const onSubmitClick = (props: IColumnsDialogProps, dialogApi: IColumnsDialogApi) => {
    commitChanges(props, dialogApi);
    props.gridApi.openColumnDialog(false);
};

const onResetClick = (props: IColumnsDialogProps, dialogApi: IColumnsDialogApi) => {
    const colDef = getColumnsDefinitionsFromOptions(props.gridApi.gridProps);
    dialogApi.default = true;
    generateNodes(dialogApi, colDef);
};
//endregion
