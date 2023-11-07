import React, { useEffect, useState } from 'react';
import { Modal } from '../../modal';
import { ButtonsRow } from '../../buttonsRow';
import { Tree } from 'antd';
export const ColumnsDialog = (props) => {
    const [dialogApi] = useState({});
    return (React.createElement(Modal, { title: "\u0421\u0442\u043E\u043B\u0431\u0446\u044B", destroyOnClose: true, centered: true, open: props.open, onCancel: () => props.gridApi.openColumnDialog(false), footer: React.createElement(Footer, { formProps: props, dialogApi: dialogApi }) }, props.open && React.createElement(DialogBody, { dialogProps: props, dialogApi: dialogApi })));
};
const DialogBody = ({ dialogProps, dialogApi }) => {
    const tableApi = dialogProps.gridApi.tableApi;
    const [checked, setChecked] = useState([]);
    const [expanded, setExpanded] = useState([]);
    const [dataItems, setDataItems] = useState();
    useEffect(() => {
        const [items, columnsMap, visibleMap, visibleCols] = initColumnsInfo(tableApi.getColumns(true));
        dialogApi.columnsMap = columnsMap;
        dialogApi.visibleMap = visibleMap;
        dialogApi.setChecked = setChecked;
        setDataItems(items);
        setChecked(visibleCols);
        const exd = [];
        for (const id in dialogApi.columnsMap)
            exd.push(id);
        setExpanded(exd);
    }, []);
    return (React.createElement(Tree, { blockNode: true, defaultExpandAll: true, checkable: true, expandedKeys: expanded, checkedKeys: checked, treeData: dataItems, selectable: false, onCheck: keys => {
            for (const id in dialogApi.visibleMap) {
                dialogApi.visibleMap[id] = keys.indexOf(id) > -1;
            }
            setChecked(keys);
        }, onExpand: keys => {
            setExpanded(keys);
        } }));
};
const Footer = ({ formProps, dialogApi }) => {
    return (React.createElement(ButtonsRow, { arrowsSelection: true, buttons: {
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
            default: { title: 'По умолчанию', position: 'left', onClick: () => onResetClick(formProps, dialogApi) },
        } }));
};
const initColumnsInfo = (cols, colNum, columnsMap, visibleMap, visibleCols) => {
    if (!colNum)
        colNum = { val: 0 };
    if (!columnsMap)
        columnsMap = {};
    if (!visibleCols)
        visibleCols = [];
    if (!visibleMap)
        visibleMap = {};
    const items = [];
    for (const col of cols) {
        colNum.val++;
        const columnDef = col.getDefinition();
        const id = colNum.val.toString();
        const item = {
            key: id,
            title: columnDef.title,
        };
        const subCols = col.getSubColumns();
        if (subCols === null || subCols === void 0 ? void 0 : subCols.length) {
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
const onSubmitClick = (props, dialogApi) => {
    for (const id in dialogApi.visibleMap) {
        const col = dialogApi.columnsMap[id];
        const isVisible = dialogApi.visibleMap[id];
        if (isVisible && !col.isVisible())
            col.show();
        else if (!isVisible && col.isVisible())
            col.hide();
        props.gridApi.openColumnDialog(false);
    }
};
const onResetClick = (props, dialogApi) => {
    const result = [];
    for (const id in dialogApi.columnsMap) {
        const col = dialogApi.columnsMap[id];
        const colDef = col.getDefinition();
        if (colDef.visible !== false)
            result.push(id);
        dialogApi.visibleMap[id] = colDef.visible !== false;
    }
    dialogApi.setChecked(result);
};
