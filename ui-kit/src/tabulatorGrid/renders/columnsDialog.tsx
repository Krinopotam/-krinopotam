import React, {useEffect, useState} from 'react';

import {Modal} from '@src/modal';
import {ButtonsRow} from '@src/buttonsRow';
import {IGridApi} from '@src/tabulatorGrid';
import {Tree} from 'antd';
import type {DataNode} from 'antd/es/tree';
import {ColumnComponent} from 'tabulator-tables';

export interface IColumnsDialogProps {
    open?: boolean;
    gridApi: IGridApi;
}

interface IColumnsDialogApi {
    columnsMap: Record<string, ColumnComponent>;
    visibleMap: Record<string, boolean>;
    setChecked: React.Dispatch<React.SetStateAction<React.Key[]>>;
}

export const ColumnsDialog = (props: IColumnsDialogProps): React.JSX.Element => {
    const [dialogApi] = useState<IColumnsDialogApi>({} as IColumnsDialogApi);
    return (
        <Modal
            title="Столбцы"
            destroyOnClose={true}
            centered
            open={props.open}
            onCancel={() => props.gridApi.openColumnDialog(false)}
            footer={<Footer formProps={props} dialogApi={dialogApi} />}
        >
            {props.open && <DialogBody dialogProps={props} dialogApi={dialogApi} />}
        </Modal>
    );
};

const DialogBody = ({dialogProps, dialogApi}: {dialogProps: IColumnsDialogProps; dialogApi: IColumnsDialogApi}): React.JSX.Element => {
    const tableApi = dialogProps.gridApi.tableApi!;
    const [checked, setChecked] = useState<React.Key[]>([]);
    const [expanded, setExpanded] = useState<React.Key[]>([]);
    const [dataItems, setDataItems] = useState<DataNode[]>();

    useEffect(() => {
        const [items, columnsMap, visibleMap, visibleCols] = initColumnsInfo(tableApi.getColumns(true));
        dialogApi.columnsMap = columnsMap;
        dialogApi.visibleMap = visibleMap;
        dialogApi.setChecked = setChecked;
        setDataItems(items);
        setChecked(visibleCols);

        const exd = [];
        for (const id in dialogApi.columnsMap) exd.push(id); //expand all
        setExpanded(exd);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Tree
            blockNode
            defaultExpandAll
            checkable
            expandedKeys={expanded}
            checkedKeys={checked}
            treeData={dataItems}
            selectable={false}
            onCheck={keys => {
                for (const id in dialogApi.visibleMap) {
                    dialogApi.visibleMap[id] = (keys as string[]).indexOf(id) > -1;
                }
                setChecked(keys as React.Key[]);
            }}
            onExpand={keys => {
                setExpanded(keys);
            }}
        />
    );
};

const Footer = ({formProps, dialogApi}: {formProps: IColumnsDialogProps; dialogApi: IColumnsDialogApi}): React.JSX.Element => {
    return (
        <ButtonsRow
            arrowsSelection={true}
            buttons={{
                ok: {
                    title: 'OK',
                    position: 'right',
                    active: true,
                    onClick: () => onSubmitClick(formProps, dialogApi),
                },
                cancel: {
                    title: 'Отмена',
                    position: 'right',
                    onClick: () => {
                        formProps.gridApi.openColumnDialog(false);
                    },
                },
                default: {title: 'По умолчанию', position: 'left', onClick: () => onResetClick(formProps, dialogApi)},
            }}
        />
    );
};

const initColumnsInfo = (
    cols: ColumnComponent[],
    colNum?: {val: number},
    columnsMap?: Record<string, ColumnComponent>,
    visibleMap?: Record<string, boolean>,
    visibleCols?: string[]
): [DataNode[], Record<string, ColumnComponent>, Record<string, boolean>, string[]] => {
    if (!colNum) colNum = {val: 0};
    if (!columnsMap) columnsMap = {};
    if (!visibleCols) visibleCols = [];
    if (!visibleMap) visibleMap = {};

    const items: DataNode[] = [];
    for (const col of cols) {
        colNum.val++;
        const columnDef = col.getDefinition();
        const id = colNum.val.toString();
        const item: DataNode = {
            key: id,
            title: columnDef.title,
        };

        const subCols = col.getSubColumns();
        if (subCols?.length) {
            const [childrenItems] = initColumnsInfo(subCols, colNum, columnsMap, visibleMap, visibleCols);
            item.children = childrenItems;
        }
        items.push(item);
        visibleMap[id] = col.isVisible();
        if (col.isVisible()) {
            visibleCols.push(id);
        }
        columnsMap[id] = col;
    }

    return [items, columnsMap, visibleMap, visibleCols];
};

const onSubmitClick = (props: IColumnsDialogProps, dialogApi: IColumnsDialogApi) => {
    for (const id in dialogApi.visibleMap) {
        const col = dialogApi.columnsMap[id];
        const isVisible = dialogApi.visibleMap[id];
        if (isVisible && !col.isVisible()) col.show();
        else if (!isVisible && col.isVisible()) col.hide();
        props.gridApi.openColumnDialog(false);
    }
};

const onResetClick = (props: IColumnsDialogProps, dialogApi: IColumnsDialogApi) => {
    const result: string[] = [];
    for (const id in dialogApi.columnsMap) {
        const col = dialogApi.columnsMap[id];
        const colDef = col.getDefinition();
        if (colDef.visible !== false) result.push(id);
        dialogApi.visibleMap[id] = colDef.visible !== false;
    }

    dialogApi.setChecked(result);
};
