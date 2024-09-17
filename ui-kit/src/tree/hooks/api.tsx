import React, {Key, useCallback, useEffect, useRef, useState} from 'react';
import {AddElementToArray, CloneObject, GetUuid} from '@krinopotam/js-helpers';
import {useUnmountedRef} from 'ahooks';
import {IExtTreeApi, IExtTreeNode, IExtTreeProps, IFindNodeOptions} from '@src/tree/types/types';
import {IDFormModalApi} from '@src/dFormModal/types/dFormModalTypes';
import {IButtonsRowApi} from '@src/buttonsRow/types/types';
import {usePrepareData} from '@src/tree/hooks/prepareData';
import {FolderOutlined} from '@ant-design/icons';

interface IFieldNames {
    key: string;
    children: string;
}

export const useInitTreeApi = ({
    treeApi,
    props,
    editFormApi,
    editGroupFormApi,
    buttonsApi,
}: {
    treeApi: IExtTreeApi;
    props: IExtTreeProps;
    editFormApi: IDFormModalApi;
    editGroupFormApi: IDFormModalApi;
    buttonsApi: IButtonsRowApi & {refreshButtons: () => void};
}): IExtTreeApi => {
    const [isLoading, setIsLoading] = useState(false);

    const dataMutator = usePrepareData(props);

    const [dataSet, setDataSet] = useState(dataMutator(props.dataSet));
    useEffect(() => {
        setDataSet(dataMutator(props.dataSet)); //user can set dataSet in props
    }, [dataMutator, props.dataSet]);

    const [selectedKeys, setSelectedKeys] = useState(props.selectedKeys ?? props.defaultSelectedKeys);
    useEffect(() => {
        setSelectedKeys(props.selectedKeys); //user can set selectedKeys in props
    }, [props.selectedKeys]);

    const [expandedKeys, setExpandedKeys] = useState(props.expandedKeys ?? props.defaultExpandedKeys);
    useEffect(() => {
        setExpandedKeys(props.expandedKeys); //user can set expandedKeys in props
    }, [props.expandedKeys]);

    const unmountRef = useUnmountedRef();

    treeApi.treeRef = useRef(null);
    treeApi.getTreeProps = useApiGetProps(props);
    treeApi.editFormApi = editFormApi;
    treeApi.editGroupFormApi = editGroupFormApi;
    treeApi.buttonsApi = buttonsApi;
    treeApi.getFieldNames = useApiGetFieldNames(props);
    treeApi.getIsMounted = useApiIsMounted(unmountRef);
    treeApi.getId = useApiGetId(props);
    treeApi.prepareNode = useApiPrepareNode(props);
    treeApi.getIsLoading = useApiGetIsLoading(isLoading);
    treeApi.setIsLoading = useApiSetIsLoading(setIsLoading);
    treeApi.getDataSet = useApiGetDataSet(dataSet);
    treeApi.setDataSet = useApiSetDataSet(setDataSet, props);
    treeApi.getSelectedKeys = useApiGetSelectedKeys(selectedKeys);
    treeApi.setSelectedKeys = useApiSetSelectedKeys(setSelectedKeys);
    treeApi.getSelectedNodes = useApiGetSelectedNodes(treeApi);
    treeApi.selectNode = useApiSelectNode(treeApi);
    treeApi.getActiveNode = useApiGetActiveNode(treeApi);
    treeApi.getActiveNodeKey = useApiGetActiveNodeKey(treeApi);
    treeApi.getExpandedKeys = useApiGetExpandedKeys(expandedKeys);
    treeApi.setExpandedKeys = useApiSetExpandedKeys(setExpandedKeys);
    treeApi.getExpandedNodes = useApiGetExpandedNodes(treeApi);
    treeApi.isNodeExpanded = useApiIsNodeExpanded(treeApi);
    treeApi.expandNode = useApiExpandNode(treeApi);
    treeApi.collapseNode = useApiCollapseNode(treeApi);
    treeApi.toggleNode = useApiToggleNode(treeApi);
    treeApi.getNode = useApiGetNode(treeApi);
    treeApi.getParentNode = useApiGetParentNode(treeApi);
    treeApi.addNode = useApiAddNode(treeApi);
    treeApi.updateNode = useApiUpdateNode(treeApi);
    treeApi.moveNode = useApiMoveNode(treeApi);
    treeApi.removeNode = useApiRemoveNode(treeApi);
    treeApi.expandParentNodes = useApiExpandParentNodes(treeApi);
    treeApi.ensureNodeVisible = useApiEnsureNodeVisible(treeApi);
    treeApi.getNextNodeKey = useApiGetNextNodeKey(treeApi);
    treeApi.getPrevNodeKey = useApiGetPrevNodeKey(treeApi);
    treeApi.getNextNode = useApiGetNextNode(treeApi);
    treeApi.getPrevNode = useApiGetPrevNode(treeApi);

    return treeApi;
};

const useApiGetProps = (treeProps: IExtTreeProps): IExtTreeApi['getTreeProps'] => {
    return useCallback(() => treeProps, [treeProps]);
};

const useApiGetId = (props: IExtTreeProps): IExtTreeApi['getId'] => {
    const [treeId] = useState(props.id ?? 'extended-tree-' + GetUuid());
    return useCallback(() => treeId, [treeId]);
};

const useApiIsMounted = (unmountRef: React.MutableRefObject<boolean>): IExtTreeApi['getIsMounted'] => {
    return useCallback(() => !unmountRef.current, [unmountRef]);
};

const useApiGetFieldNames = (props: IExtTreeProps): IExtTreeApi['getFieldNames'] => {
    return useCallback(() => ({key: 'id', children: 'children', title: 'title', ...props.fieldNames}), [props.fieldNames]);
};

const useApiGetIsLoading = (isLoading: boolean): IExtTreeApi['getIsLoading'] => {
    return useCallback(() => isLoading, [isLoading]);
};

const useApiSetIsLoading = (setIsLoading: React.Dispatch<React.SetStateAction<boolean>>): IExtTreeApi['setIsLoading'] => {
    return useCallback(
        isLoading => {
            setTimeout(() => {
                setIsLoading(isLoading);
            }, 0);
        },
        [setIsLoading]
    );
};

const useApiGetDataSet = (dataSet: IExtTreeProps['dataSet']): IExtTreeApi['getDataSet'] => {
    return useCallback(() => dataSet, [dataSet]);
};

const useApiSetDataSet = (setDataSet: React.Dispatch<React.SetStateAction<IExtTreeProps['dataSet']>>, props: IExtTreeProps): IExtTreeApi['setDataSet'] => {
    const dataMutator = usePrepareData(props);
    return useCallback(
        dataSet => {
            setDataSet(dataMutator(dataSet));
        },
        [dataMutator, setDataSet]
    );
};

const useApiGetSelectedKeys = (selectedKeys: IExtTreeProps['selectedKeys']): IExtTreeApi['getSelectedKeys'] => {
    return useCallback(() => selectedKeys, [selectedKeys]);
};

const useApiSetSelectedKeys = (setSelectedKeys: React.Dispatch<React.SetStateAction<IExtTreeProps['selectedKeys']>>): IExtTreeApi['setSelectedKeys'] => {
    return useCallback(
        keys => {
            setSelectedKeys(keys);
        },
        [setSelectedKeys]
    );
};

const useApiGetSelectedNodes = (api: IExtTreeApi): IExtTreeApi['getSelectedNodes'] => {
    return useCallback(() => {
        const selectedKeys = api.getSelectedKeys();
        if (!selectedKeys) return undefined;

        const result: IExtTreeNode[] = [];
        for (const key of selectedKeys) {
            const foundNode = api.getNode(key);
            if (foundNode) result.push(foundNode);
        }
        return result;
    }, [api]);
};

const useApiSelectNode = (api: IExtTreeApi): IExtTreeApi['selectNode'] => {
    return useCallback(
        (key, isSelect = true) => {
            const selectedKeys = api.getSelectedKeys();
            const props = api.getTreeProps();
            if (isSelect) {
                if (selectedKeys?.includes(key)) return;
                if (props.multiple) api.setSelectedKeys([...(selectedKeys ?? []), key]);
                else api.setSelectedKeys([key]);
            } else {
                if (!selectedKeys?.includes(key)) return;
                if (props.multiple) api.setSelectedKeys(selectedKeys?.filter(curKey => curKey !== key));
                else api.setSelectedKeys([]);
            }
        },
        [api]
    );
};

const useApiGetActiveNode = (api: IExtTreeApi): IExtTreeApi['getActiveNode'] => {
    return useCallback((singleOnly) => {
        const activeKey = api.getActiveNodeKey(singleOnly)
        return api.getNode(activeKey);
    }, [api]);
};

const useApiGetActiveNodeKey = (api: IExtTreeApi): IExtTreeApi['getActiveNodeKey'] => {
    return useCallback((singleOnly) => {
        const selectedKeys = api.getSelectedKeys();
        if (!selectedKeys?.length) return undefined;
        if (singleOnly) return  selectedKeys?.length === 1 ? selectedKeys[0] : undefined
        return selectedKeys[selectedKeys.length - 1];
    }, [api]);
};

const useApiExpandedKeys = (props: IExtTreeProps): [React.Key[] | undefined, React.Dispatch<React.SetStateAction<React.Key[] | undefined>>] => {
    const [expandedKeys, setExpandedKeys] = useState(props.expandedKeys ?? props.defaultExpandedKeys);
    useEffect(() => {
        if (!props.defaultExpandAll) {
            setExpandedKeys(props.expandedKeys); //user can set treeExpandedKeys in props
        }
    }, [props.defaultExpandAll, props.expandedKeys]);
    return [expandedKeys, setExpandedKeys];
};

const useApiGetExpandedKeys = (expandedKeys: IExtTreeProps['expandedKeys']): IExtTreeApi['getExpandedKeys'] => {
    return useCallback(() => expandedKeys, [expandedKeys]);
};

const useApiSetExpandedKeys = (setExpandedKeys: React.Dispatch<React.SetStateAction<IExtTreeProps['expandedKeys']>>): IExtTreeApi['setExpandedKeys'] => {
    return useCallback(
        keys => {
            setExpandedKeys(keys);
        },
        [setExpandedKeys]
    );
};

const useApiGetExpandedNodes = (api: IExtTreeApi): IExtTreeApi['getExpandedNodes'] => {
    return useCallback(() => {
        const expandedKeys = api.getExpandedKeys();
        if (!expandedKeys) return undefined;

        const result: IExtTreeNode[] = [];
        for (const key of expandedKeys) {
            const foundNode = api.getNode(key);
            if (foundNode) result.push(foundNode);
        }
        return result;
    }, [api]);
};

const useApiIsNodeExpanded = (api: IExtTreeApi): IExtTreeApi['isNodeExpanded'] => {
    return useCallback((key: Key) => api.getExpandedKeys()?.includes(key) ?? false, [api]);
};

const useApiExpandNode = (api: IExtTreeApi): IExtTreeApi['expandNode'] => {
    return useCallback(
        key => {
            const expandedKeys = api.getExpandedKeys();
            if (expandedKeys?.includes(key)) return;
            api.setExpandedKeys([...(expandedKeys ?? []), key]);
        },
        [api]
    );
};

const useApiCollapseNode = (api: IExtTreeApi): IExtTreeApi['collapseNode'] => {
    return useCallback(
        key => {
            const expandedKeys = api.getExpandedKeys();
            if (!expandedKeys?.includes(key)) return;
            api.setExpandedKeys(expandedKeys?.filter(curKey => curKey !== key));
        },
        [api]
    );
};

const useApiToggleNode = (api: IExtTreeApi): IExtTreeApi['toggleNode'] => {
    return useCallback(
        key => {
            const expandedKeys = api.getExpandedKeys();
            if (expandedKeys?.includes(key)) api.setExpandedKeys(expandedKeys?.filter(curKey => curKey !== key));
            else api.setExpandedKeys([...(expandedKeys ?? []), key]);
        },
        [api]
    );
};

const useApiGetNode = (api: IExtTreeApi): IExtTreeApi['getNode'] => {
    return useCallback(
        (key, externalDataset) => {
            const fieldNames = api.getFieldNames();
            if (!key) return undefined;
            const data = externalDataset ?? api.getDataSet();
            const {idx, nodes} = findNodeIndex(data, key, fieldNames);
            return idx > -1 ? nodes![idx] : undefined;
        },
        [api]
    );
};

const useApiGetParentNode = (api: IExtTreeApi): IExtTreeApi['getParentNode'] => {
    return useCallback(
        (key, externalDataset) => {
            const fieldNames = api.getFieldNames();
            const keyField = fieldNames.key;
            const childrenField = fieldNames.children;

            const recursive = (nodes: IExtTreeNode[], parentNode: IExtTreeNode | undefined): IExtTreeNode | undefined => {
                for (const node of nodes) {
                    if (node[keyField] === key) return parentNode;
                    if (node[childrenField]) {
                        const result = recursive(node[childrenField] as IExtTreeNode[], node);
                        if (result) return result;
                    }
                }
                return undefined;
            };

            const data = externalDataset ?? api.getDataSet();

            if (!data) return undefined;
            return recursive(data, undefined);
        },
        [api]
    );
};

const useApiAddNode = (api: IExtTreeApi): IExtTreeApi['addNode'] => {
    return useCallback(
        (node, targetKey, position, opts, externalDataset) => {
            if (!node) return;

            const fieldNames = api.getFieldNames();
            const keyField = fieldNames.key;
            const childrenField = fieldNames.children;

            const dataSet = externalDataset ?? CloneObject(api.getDataSet() ?? []);
            const targetNode = api.getNode(targetKey, dataSet);
            if (!targetNode || ((position === 'insideTop' || position === 'insideBottom') && targetNode?.isLeaf)) position = 'below'; //we can't add node into the leaf node or undefined node

            let targetList: IExtTreeNode[] = [];
            if (!targetNode) targetList = dataSet;

            if (targetNode && (position === 'insideTop' || position === 'insideBottom')) {
                if (!targetNode[childrenField]) targetNode[childrenField] = targetList;
                else targetList = targetNode[childrenField] as IExtTreeNode[];
                const arrPos = position === 'insideTop' ? 'top' : 'bottom';
                AddElementToArray(targetList, api.prepareNode(node), undefined, arrPos, false);
            } else {
                if (targetNode) {
                    const parentNode = api.getParentNode(targetNode[keyField] as Key, dataSet);
                    if (parentNode) targetList = parentNode[childrenField] as IExtTreeNode[];
                    else targetList = dataSet;
                }

                if (position === 'above') AddElementToArray(targetList, api.prepareNode(node), targetNode, 'above', false);
                else if (position === 'below') AddElementToArray(targetList, api.prepareNode(node), targetNode, 'below', false);
            }

            if (!externalDataset) api.setDataSet(dataSet);
            if (opts?.ensureVisible) api.ensureNodeVisible(node[keyField] as Key, dataSet);
            if (opts?.select) api.selectNode(node[keyField] as Key, true);
            return dataSet;
        },
        [api]
    );
};

const useApiUpdateNode = (api: IExtTreeApi): IExtTreeApi['updateNode'] => {
    return useCallback(
        (node, targetKey, opts, externalDataset) => {
            const fieldNames = api.getFieldNames();
            const keyField = fieldNames.key;

            let dataSet = externalDataset ?? CloneObject(api.getDataSet() ?? []);
            if (!node || !dataSet) return;

            const {idx, nodes} = findNodeIndex(dataSet, node[keyField] as Key, fieldNames);
            if (idx < 0 || !nodes) return;
            nodes[idx] = api.prepareNode(node);

            const targetNode = api.getNode(targetKey, dataSet);
            const parentNode = api.getParentNode(node[keyField] as Key, dataSet);
            if (targetKey && targetNode !== parentNode) dataSet = api.moveNode(node[keyField] as Key, targetKey, 'insideBottom', opts, dataSet) ?? [];

            if (!externalDataset) api.setDataSet(dataSet);
            if (opts?.ensureVisible) api.ensureNodeVisible(node[keyField] as Key, dataSet);
            if (opts?.select) api.selectNode(node[keyField] as Key, true);
            return dataSet;
        },
        [api]
    );
};

const useApiMoveNode = (api: IExtTreeApi): IExtTreeApi['moveNode'] => {
    return useCallback(
        (key, targetKey, position, opts, externalDataSet) => {
            const node = api.getNode(key);
            const targetNode = api.getNode(targetKey);
            if (!node || !targetNode) return;

            let dataSet = externalDataSet ?? CloneObject(api.getDataSet() ?? []);
            dataSet = api.removeNode(key, undefined, dataSet) ?? [];
            dataSet = api.addNode(node, targetKey, position, opts, dataSet) ?? [];
            if (!externalDataSet) api.setDataSet(dataSet);
            return dataSet;
        },
        [api]
    );
};

const useApiRemoveNode = (api: IExtTreeApi): IExtTreeApi['removeNode'] => {
    return useCallback(
        (key, opts, externalDataSet) => {
            const recursive = (nodes: IExtTreeNode[]) => {
                for (let i = 0; i < nodes.length; i++) {
                    const node = nodes[i];
                    if (node[keyField] === key) {
                        nodes.splice(i, 1);
                        return true
                    }

                    if (node[childrenField]) {
                        const result = recursive(node[childrenField] as IExtTreeNode[]);
                        if (result) return true;
                    }
                }
            };

            const fieldNames = api.getFieldNames();
            const keyField = fieldNames.key;
            const childrenField = fieldNames.children;
            const dataSet = externalDataSet ?? CloneObject(api.getDataSet());
            if (!dataSet) return;

            let selectKey: Key | undefined = undefined;
            if (opts?.select === 'next') {
                selectKey = api.getNextNodeKey(key, undefined, dataSet);
                //for last key search for previous
                if (!selectKey) selectKey = api.getPrevNodeKey(key, undefined, dataSet);
            } else if (opts?.select === 'prev') {
                selectKey = api.getPrevNodeKey(key, undefined, dataSet);
                //for last key search for next
                if (!selectKey) selectKey = api.getNextNodeKey(key, undefined, dataSet);
            }

            recursive(dataSet);

            if (!externalDataSet) api.setDataSet(dataSet);

            api.selectNode(key, false);
            if (selectKey) api.setSelectedKeys([selectKey]);

            return dataSet;
        },
        [api]
    );
};

const useApiEnsureNodeVisible = (api: IExtTreeApi): IExtTreeApi['ensureNodeVisible'] => {
    return useCallback(
        (key, externalDataset) => {
            api.expandParentNodes(key, externalDataset);
        },
        [api]
    );
};

const useApiExpandParentNodes = (api: IExtTreeApi): IExtTreeApi['expandParentNodes'] => {
    return useCallback(
        (key, externalDataset) => {
            const recursive = (nodes: IExtTreeNode[]) => {
                for (const node of nodes) {
                    if (node[keyField] === key) return true;

                    if (node[childrenField]) {
                        const founded = recursive(node[childrenField] as IExtTreeNode[]);

                        if (founded) {
                            api.expandNode(node[keyField] as Key);
                            return true;
                        }
                    }
                }
            };

            const fieldNames = api.getFieldNames();
            const keyField = fieldNames.key;
            const childrenField = fieldNames.children;
            const dataSet = externalDataset ?? api.getDataSet();

            if (!dataSet) return;
            recursive(dataSet);
        },
        [api]
    );
};

const useApiGetNextNodeKey = (api: IExtTreeApi): IExtTreeApi['getNextNodeKey'] => {
    return useCallback(
        (key, opts, externalDataset) => findNextNodeKey(key, externalDataset ?? api.getDataSet(), api.getExpandedKeys(), api.getFieldNames(), opts),
        [api]
    );
};

const useApiGetPrevNodeKey = (api: IExtTreeApi): IExtTreeApi['getPrevNodeKey'] => {
    return useCallback(
        (key, opts, externalDataset) => findPrevNodeKey(key, externalDataset ?? api.getDataSet(), api.getExpandedKeys(), api.getFieldNames(), opts),
        [api]
    );
};

const useApiGetNextNode = (api: IExtTreeApi): IExtTreeApi['getNextNode'] => {
    return useCallback(
        (node, opts, externalDataset) => {
            const fieldNames = api.getFieldNames();
            const keyField = fieldNames.key;
            const nextKey = findNextNodeKey(node[keyField] as Key, externalDataset ?? api.getDataSet(), api.getExpandedKeys(), fieldNames, opts);
            return nextKey ? api.getNode(nextKey, externalDataset) : undefined;
        },
        [api]
    );
};

const useApiGetPrevNode = (api: IExtTreeApi): IExtTreeApi['getPrevNode'] => {
    return useCallback(
        (node, opts, externalDataset) => {
            const fieldNames = api.getFieldNames();
            const keyField = fieldNames.key;
            const prevKey = findPrevNodeKey(node[keyField] as Key, externalDataset ?? api.getDataSet(), api.getExpandedKeys(), fieldNames, opts);
            return prevKey ? api.getNode(prevKey, externalDataset) : undefined;
        },
        [api]
    );
};

export const useApiPrepareNode = (treeProps: IExtTreeProps): IExtTreeApi['prepareNode'] => {
    return useCallback(
        node => {
            let mutatedNode = {...node};
            if (!mutatedNode.isLeaf) mutatedNode.icon = <FolderOutlined />;

            if (treeProps.dataMutator) mutatedNode = treeProps.dataMutator(mutatedNode);
            return mutatedNode;
        },
        [treeProps]
    );
};

//region Service methods
const isNodeCanBeSelected = (node: IExtTreeNode, opts?: IFindNodeOptions) =>
    (opts?.notDisabled === false || node.disabled !== true) && (opts?.selectableOnly === false || node.selectable !== false);

const shouldSearchInChildren = (node: IExtTreeNode, expandedKeys: IExtTreeProps['expandedKeys'], fieldNames: IFieldNames, opts?: IFindNodeOptions) => {
    const keyField = fieldNames.key;
    return !opts?.sameLevelOnly && (opts?.expandedOnly === false || expandedKeys?.includes(node[keyField] as Key));
};

const findNextNodeKey = (
    key: Key | undefined,
    dataSet: IExtTreeProps['dataSet'],
    expandedKeys: IExtTreeProps['expandedKeys'],
    fieldNames: IFieldNames,
    opts?: IFindNodeOptions
): Key | undefined => {
    let curFound = !key;
    let breakSearch = false;
    const keyField = fieldNames.key;
    const childrenField = fieldNames.children;

    const recursive = (nodes: IExtTreeNode[]): Key | undefined => {
        for (const node of nodes) {
            if (breakSearch) return undefined;
            if (curFound && isNodeCanBeSelected(node, opts)) return node[keyField] as Key;

            if (typeof key === 'undefined' || node[keyField] === key) curFound = true;

            if (node[childrenField] && (!curFound || shouldSearchInChildren(node, expandedKeys, fieldNames, opts))) {
                const childResult = recursive(node[childrenField] as IExtTreeNode[]);
                if (childResult) return childResult;
            }
        }

        if (curFound && opts?.sameLevelOnly) breakSearch = true;
        return undefined;
    };

    if (!dataSet) return undefined;
    return recursive(dataSet);
};

const findPrevNodeKey = (
    key: Key | undefined,
    dataSet: IExtTreeProps['dataSet'],
    expandedKeys: IExtTreeProps['expandedKeys'],
    fieldNames: IFieldNames,
    opts?: IFindNodeOptions
): Key | undefined => {
    let curFound = !key;
    let breakSearch = false;
    const keyField = fieldNames.key;
    const childrenField = fieldNames.children;

    const recursive = (nodes: IExtTreeNode[]): Key | undefined => {
        for (let i = nodes.length - 1; i >= 0; i--) {
            const node = nodes[i];
            if (breakSearch) return undefined;

            if (node[childrenField] && (!curFound || shouldSearchInChildren(node, expandedKeys, fieldNames, opts))) {
                const childResult = recursive(node[childrenField] as IExtTreeNode[]);
                if (childResult) return childResult;
            }

            if (curFound && isNodeCanBeSelected(node, opts)) return node[keyField] as Key;

            if (typeof key === 'undefined' || node[keyField] === key) curFound = true;
        }

        if (curFound && opts?.sameLevelOnly) breakSearch = true;
        return undefined;
    };

    if (!dataSet) return undefined;
    return recursive(dataSet);
};

const findNodeIndex = (
    dataSet: IExtTreeProps['dataSet'],
    key: Key,
    fieldNames: IFieldNames
): {
    idx: number;
    nodes: IExtTreeProps['dataSet'];
} => {
    const keyField = fieldNames.key;
    const recursive = (nodes: IExtTreeProps['dataSet']): {idx: number; nodes: IExtTreeProps['dataSet']} => {
        if (!nodes || !key) return {idx: -1, nodes: undefined};
        for (let i = 0; i < nodes.length; i++) {
            const node = nodes[i];
            if (node[keyField] === key) return {idx: i, nodes};

            const childInfo = recursive(node.children);
            if (childInfo.idx > -1) return childInfo;
        }

        return {idx: -1, nodes: undefined};
    };

    return recursive(dataSet);
};
//endregion
