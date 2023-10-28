import { useCallback, useRef, useState } from 'react';
import { HelpersStrings, HelpersObjects } from '@krinopotam/js-helpers';
import useUnmountedRef from 'ahooks/lib/useUnmountedRef';
import { MessageBox } from '../../messageBox';
import { GenerateAjaxRequestFunc } from '../../tabulatorGrid/helpers/fetchHelpers';
export const useInitGridApi = ({ gridApi, props, tableRef, editFormApi, buttonsApi, openColumnsDialog, }) => {
    const dataSetRef = useRef(undefined);
    const curDataFetchHandler = useRef();
    const curDataFetchParams = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const unmountRef = useUnmountedRef();
    useUpdateDataSetFromProps(dataSetRef, props.dataSet);
    gridApi.gridProps = props;
    gridApi.tableApi = tableRef.current;
    gridApi.editFormApi = editFormApi;
    gridApi.buttonsApi = buttonsApi;
    gridApi.getIsMounted = useApiIsMounted(unmountRef);
    gridApi.getGridId = useApiGetGridId(gridApi);
    gridApi.getDataSet = useApiGetDataSet(dataSetRef);
    gridApi.setDataSet = useApiSetDataSet(dataSetRef, gridApi);
    gridApi.getIsLoading = useApiGetIsLoading(isLoading);
    gridApi.setIsLoading = useApiSetIsLoading(setIsLoading);
    gridApi.setActiveRowKey = useApiSetActiveRowKey(gridApi);
    gridApi.getActiveRowKey = useApiGetActiveRowKey(gridApi);
    gridApi.getActiveNode = useApiGetActiveNode(gridApi);
    gridApi.getActiveRow = useApiGetActiveRow(gridApi);
    gridApi.getNextRowKey = useApiGetNextRowKey(gridApi);
    gridApi.getPrevRowKey = useApiGetPrevRowKey(gridApi);
    gridApi.getSelectedRowKeys = useApiGetSelectedRowKeys(gridApi);
    gridApi.getSelectedNodes = useApiGetSelectedNodes(gridApi);
    gridApi.getSelectedRows = useApiGetSelectedRows(gridApi);
    gridApi.setSelectedRowKeys = useApiSetSelectedRowsKeys(gridApi);
    gridApi.getNodeByKey = useApiGetNodeByKey(gridApi);
    gridApi.getRowByKey = useApiGetRowByKey(gridApi);
    gridApi.insertRows = useApiInsertRows(dataSetRef, gridApi);
    gridApi.updateRows = useApiUpdateRows(dataSetRef, gridApi);
    gridApi.removeRowsByKeys = useApiRemoveRowsByKeys(dataSetRef, gridApi);
    gridApi.removeRows = useApiRemoveRows(gridApi);
    gridApi.deleteRows = useApiDeleteRows(gridApi);
    gridApi.fetchData = useApiFetchData(gridApi);
    gridApi.retryFetchData = useApiRetryFetchData(gridApi);
    gridApi.setCurrentDataFetchHandler = useSetCurrentDataFetchHandler(curDataFetchHandler, curDataFetchParams);
    gridApi.getCurrentDataFetchHandler = useGetCurrentDataFetchHandler(curDataFetchHandler, curDataFetchParams);
    gridApi.getRowData = useApiGetRowData(gridApi);
    gridApi.openColumnDialog = useApiOpenColumnDialog(gridApi, openColumnsDialog);
    return gridApi;
};
const useUpdateDataSetFromProps = (curDataSetRef, propsDataSet) => {
    const propsDataSetRef = useRef(undefined);
    if (propsDataSetRef.current === propsDataSet)
        return;
    propsDataSetRef.current = propsDataSet;
    curDataSetRef.current = propsDataSet;
};
const useApiGetGridId = (gridApi) => {
    var _a;
    const [gridId] = useState((_a = gridApi.gridProps.id) !== null && _a !== void 0 ? _a : 'grid-' + HelpersStrings.getUuid());
    return useCallback(() => gridId, [gridId]);
};
const useApiIsMounted = (unmountRef) => {
    return useCallback(() => !unmountRef.current, [unmountRef]);
};
const useApiGetDataSet = (dataSetRef) => {
    return useCallback(() => { var _a; return (_a = dataSetRef.current) !== null && _a !== void 0 ? _a : undefined; }, [dataSetRef]);
};
const useApiSetDataSet = (dataSetRef, gridApi) => {
    return useCallback((dataSet) => {
        var _a, _b, _c, _d, _e;
        if (!gridApi.tableApi)
            return;
        dataSetRef.current = dataSet !== null && dataSet !== void 0 ? dataSet : undefined;
        (_a = gridApi.tableApi) === null || _a === void 0 ? void 0 : _a.deselectRow();
        (_b = gridApi.tableApi) === null || _b === void 0 ? void 0 : _b.clearData();
        (_c = gridApi.tableApi) === null || _c === void 0 ? void 0 : _c.setData(dataSetRef.current);
        (_e = (_d = gridApi.gridProps).onDataChanged) === null || _e === void 0 ? void 0 : _e.call(_d, dataSetRef.current, gridApi);
    }, [dataSetRef, gridApi]);
};
const useApiGetIsLoading = (isLoading) => {
    return useCallback(() => {
        return isLoading;
    }, [isLoading]);
};
const useApiSetIsLoading = (setIsLoading) => {
    return useCallback((isLoading) => {
        setIsLoading(isLoading);
    }, [setIsLoading]);
};
const useApiSetActiveRowKey = (gridApi) => {
    return useCallback((key, clearSelection, scrollPosition) => {
        if (!gridApi.tableApi)
            return;
        gridApi.tableApi.setActiveRowByKey(key, clearSelection, scrollPosition);
    }, [gridApi]);
};
const useApiGetActiveRowKey = (gridApi) => {
    return useCallback(() => { var _a, _b; return (_b = (_a = gridApi.tableApi) === null || _a === void 0 ? void 0 : _a.getActiveRowKey) === null || _b === void 0 ? void 0 : _b.call(_a); }, [gridApi]);
};
const useApiGetActiveNode = (gridApi) => {
    return useCallback(() => { var _a, _b; return (_b = (_a = gridApi.tableApi) === null || _a === void 0 ? void 0 : _a.getActiveRow) === null || _b === void 0 ? void 0 : _b.call(_a); }, [gridApi]);
};
const useApiGetActiveRow = (gridApi) => {
    return useCallback(() => {
        var _a;
        return (_a = gridApi.getActiveNode()) === null || _a === void 0 ? void 0 : _a.getData();
    }, [gridApi]);
};
const useApiGetNextRowKey = (gridApi) => {
    return useCallback((key, step) => {
        var _a;
        if (!gridApi.tableApi || !key)
            return undefined;
        if (!step)
            step = 1;
        let curNode = (_a = gridApi.tableApi) === null || _a === void 0 ? void 0 : _a.getRow(key);
        if (!curNode)
            return undefined;
        for (let i = 0; i < step; i++) {
            const nextNode = curNode === null || curNode === void 0 ? void 0 : curNode.getNextRow();
            if (!nextNode)
                return curNode.getData().id;
            curNode = nextNode;
        }
        return curNode.getData().id;
    }, [gridApi.tableApi]);
};
const useApiGetPrevRowKey = (gridApi) => {
    return useCallback((key, step) => {
        var _a;
        if (!gridApi.tableApi || !key)
            return undefined;
        if (!step)
            step = 1;
        let curNode = (_a = gridApi.tableApi) === null || _a === void 0 ? void 0 : _a.getRow(key);
        if (!curNode)
            return undefined;
        for (let i = 0; i < step; i++) {
            const prevNode = curNode === null || curNode === void 0 ? void 0 : curNode.getPrevRow();
            if (!prevNode)
                return curNode.getData().id;
            curNode = prevNode;
        }
        return curNode.getData().id;
    }, [gridApi.tableApi]);
};
const useApiGetSelectedRowKeys = (gridApi) => {
    const emptyArray = useRef([]);
    return useCallback(() => {
        if (!gridApi.tableApi)
            return emptyArray.current;
        const selectedRows = gridApi.tableApi.getSelectedData();
        const result = [];
        for (const row of selectedRows) {
            result.push(row.id);
        }
        return result;
    }, [gridApi]);
};
const useApiSetSelectedRowsKeys = (gridApi) => {
    return useCallback((keys, clearPrevSelection) => {
        var _a, _b;
        if (!gridApi.tableApi)
            return;
        if (!keys || clearPrevSelection)
            (_a = gridApi.tableApi) === null || _a === void 0 ? void 0 : _a.deselectRow();
        const selKeys = HelpersObjects.isArray(keys) ? keys : [keys];
        (_b = gridApi.tableApi) === null || _b === void 0 ? void 0 : _b.selectRow(selKeys);
    }, [gridApi]);
};
const useApiGetSelectedNodes = (gridApi) => {
    return useCallback(() => { var _a, _b, _c; return (_c = (_b = (_a = gridApi.tableApi) === null || _a === void 0 ? void 0 : _a.getSelectedRows) === null || _b === void 0 ? void 0 : _b.call(_a)) !== null && _c !== void 0 ? _c : []; }, [gridApi]);
};
const useApiGetSelectedRows = (gridApi) => {
    return useCallback(() => { var _a, _b, _c; return (_c = (_b = (_a = gridApi.tableApi) === null || _a === void 0 ? void 0 : _a.getSelectedData) === null || _b === void 0 ? void 0 : _b.call(_a)) !== null && _c !== void 0 ? _c : []; }, [gridApi]);
};
const useApiGetNodeByKey = (gridApi) => {
    return useCallback((key) => {
        var _a;
        if (!key || !gridApi.tableApi)
            return undefined;
        return (_a = gridApi.tableApi) === null || _a === void 0 ? void 0 : _a.getRow(key);
    }, [gridApi]);
};
const useApiGetRowByKey = (gridApi) => {
    return useCallback((key) => {
        var _a;
        return (_a = gridApi.getNodeByKey(key)) === null || _a === void 0 ? void 0 : _a.getData();
    }, [gridApi]);
};
const useApiInsertRows = (dataSetRef, gridApi) => {
    return useCallback((rows, place, key, updateActiveRow) => {
        var _a, _b;
        const tableApi = gridApi.tableApi;
        if (!tableApi)
            return;
        const dataTree = gridApi.gridProps.dataTree;
        const above = place === 'above';
        const _rows = HelpersObjects.isArray(rows) ? [...rows] : [rows];
        for (const row of _rows) {
            if (!dataTree)
                tableApi.addData([row], above, key).then();
            else
                addTreeRows(gridApi, [row], place, key);
        }
        dataSetRef.current = tableApi.getData() || [];
        (_b = (_a = gridApi.gridProps).onDataChanged) === null || _b === void 0 ? void 0 : _b.call(_a, dataSetRef.current, gridApi);
        if (updateActiveRow && _rows[0])
            gridApi.setActiveRowKey(_rows[0].id, true, 'center');
        tableApi.setTableBodyFocus();
    }, [dataSetRef, gridApi]);
};
const useApiUpdateRows = (dataSetRef, gridApi) => {
    return useCallback((rows, updateActiveRow) => {
        var _a, _b, _c;
        if (!gridApi.tableApi)
            return;
        const dataTree = gridApi.gridProps.dataTree;
        const _rows = HelpersObjects.isArray(rows) ? [...rows] : [rows];
        for (const row of _rows) {
            if (!dataTree)
                gridApi.tableApi.updateData([row]).then();
            else
                updateTreeRows(gridApi, row);
        }
        dataSetRef.current = ((_a = gridApi.tableApi) === null || _a === void 0 ? void 0 : _a.getData()) || [];
        (_c = (_b = gridApi.gridProps).onDataChanged) === null || _c === void 0 ? void 0 : _c.call(_b, dataSetRef.current, gridApi);
        if (updateActiveRow && _rows[0])
            gridApi.setActiveRowKey(_rows[0].id, true, 'center');
        gridApi.tableApi.setTableBodyFocus();
    }, [dataSetRef, gridApi]);
};
const findParentNode = (gridApi, row) => {
    if (!gridApi.tableApi)
        return undefined;
    const parentFieldKey = gridApi.tableApi.options.dataTreeParentField;
    const indexField = gridApi.tableApi.options.index;
    if (!indexField || !parentFieldKey || !row[parentFieldKey])
        return undefined;
    let parentKey;
    if (typeof row[parentFieldKey] === 'string' || typeof row[parentFieldKey] === 'number')
        parentKey = row[parentFieldKey];
    else if (typeof row[parentFieldKey] === 'object')
        parentKey = row[parentFieldKey][indexField];
    if (!parentKey)
        return undefined;
    return gridApi.tableApi.getRow(parentKey) || undefined;
};
const addTreeRows = (gridApi, rows, place, key) => {
    var _a;
    if (!gridApi.tableApi)
        return;
    if (!gridApi.gridProps.dataTree) {
        console.warn('TreeData mode is disabled. Tree row updating not available');
        return;
    }
    const above = place === 'above';
    const clonedRows = HelpersObjects.isArray(rows) ? [...rows] : [rows];
    for (const rowData of clonedRows) {
        const parentNode = findParentNode(gridApi, rowData);
        if (!parentNode)
            (_a = gridApi.tableApi) === null || _a === void 0 ? void 0 : _a.addData([rowData], above, key);
        else {
            parentNode.addTreeChild(rowData);
            cascadeNodeExpand(parentNode);
            parentNode.reformat();
        }
    }
};
const updateTreeRows = (gridApi, rows) => {
    if (!gridApi.tableApi)
        return;
    if (!gridApi.gridProps.dataTree) {
        console.warn('TreeData mode is disabled. Tree row updating not available');
        return;
    }
    const indexField = gridApi.tableApi.options.index;
    const childField = gridApi.tableApi.options.dataTreeChildField;
    if (!indexField || !childField)
        return;
    const clonedRows = HelpersObjects.isArray(rows) ? [...rows] : [rows];
    for (const rowData of clonedRows) {
        const rowKey = rowData[indexField];
        const node = gridApi.tableApi.getRow(rowKey);
        if (!node) {
            gridApi.tableApi.addData([rowData]).then();
            continue;
        }
        const parentNode = node.getTreeParent();
        const newParentNode = findParentNode(gridApi, rowData);
        if ((!parentNode && !newParentNode) ||
            (parentNode && newParentNode && parentNode.getData()[indexField] === newParentNode.getData()[indexField])) {
            gridApi.tableApi.updateData([rowData]).then();
            continue;
        }
        rowData[childField] = node.getData()[childField];
        gridApi.tableApi.deselectRow(node);
        gridApi.tableApi.deleteRow(rowKey);
        if (parentNode)
            parentNode.reformat();
        if (!newParentNode) {
            gridApi.tableApi.addData([rowData]).then();
            continue;
        }
        newParentNode.addTreeChild(rowData);
        cascadeNodeExpand(newParentNode);
        newParentNode.reformat();
    }
};
const cascadeNodeExpand = (node) => {
    if (!node)
        return;
    const nodeParent = node.getTreeParent();
    cascadeNodeExpand(nodeParent);
    if (!node.isTreeExpanded())
        node.treeExpand();
};
const useApiRemoveRowsByKeys = (dataSetRef, gridApi) => {
    return useCallback((keys) => {
        var _a, _b, _c;
        const table = gridApi.tableApi;
        if (!table)
            return;
        const indexField = table.options.index;
        const _keys = HelpersObjects.isArray(keys) ? [...keys] : [keys];
        let newActiveNode = false;
        let newActiveNodeCandidate = false;
        for (const key of _keys) {
            const node = table.getRow(key);
            if (!node)
                continue;
            if (newActiveNode && node === newActiveNode)
                newActiveNode = false;
            newActiveNodeCandidate = node.getNextRow() || node.getPrevRow();
            if (newActiveNodeCandidate)
                newActiveNode = newActiveNodeCandidate;
            const parentNode = table.options.dataTree ? node.getTreeParent() : false;
            table.deselectRow(node);
            table.deleteRow(key);
            if (parentNode)
                parentNode.reformat();
        }
        if (newActiveNode && indexField)
            newActiveNode = table.getRow(newActiveNode.getData()[indexField]);
        table.setActiveRow(newActiveNode || null, true, 'bottom');
        dataSetRef.current = (_a = table === null || table === void 0 ? void 0 : table.getData()) !== null && _a !== void 0 ? _a : [];
        (_c = (_b = gridApi.gridProps).onDataChanged) === null || _c === void 0 ? void 0 : _c.call(_b, dataSetRef.current, gridApi);
        table.setTableBodyFocus();
    }, [dataSetRef, gridApi]);
};
const useApiRemoveRows = (gridApi) => {
    return useCallback((rows) => {
        const clonedRows = HelpersObjects.isArray(rows) ? [...rows] : [rows];
        const keys = [];
        for (const row of clonedRows)
            keys.push(row.id);
        gridApi.removeRowsByKeys(keys);
    }, [gridApi]);
};
const useApiDeleteRows = (gridApi) => {
    return useCallback((rows) => {
        var _a;
        if (!rows)
            return;
        const rowsData = Array.isArray(rows) ? rows : [rows];
        const gridProps = gridApi.gridProps;
        let messageBox;
        const removeRows = () => {
            var _a;
            const deletePromise = (_a = gridProps === null || gridProps === void 0 ? void 0 : gridProps.onDelete) === null || _a === void 0 ? void 0 : _a.call(gridProps, rowsData, gridApi);
            if (HelpersObjects.isPromise(deletePromise)) {
                if (!gridProps.confirmDelete)
                    gridApi.setIsLoading(true);
                const promiseResult = deletePromise;
                promiseResult
                    .then(() => {
                    if (!gridApi.getIsMounted())
                        return;
                    gridApi.removeRows(rowsData);
                    if (!gridProps.confirmDelete)
                        gridApi.setIsLoading(false);
                    else
                        messageBox === null || messageBox === void 0 ? void 0 : messageBox.destroy();
                })
                    .catch(error => {
                    if (!gridApi.getIsMounted())
                        return;
                    if (!gridProps.confirmDelete)
                        gridApi.setIsLoading(false);
                    else
                        messageBox === null || messageBox === void 0 ? void 0 : messageBox.destroy();
                    MessageBox.alert({ content: error.message, colorType: 'danger' });
                });
                return;
            }
            gridApi.removeRows(rowsData);
            if (messageBox)
                messageBox.destroy();
        };
        if (gridProps.confirmDelete) {
            messageBox = MessageBox.confirmWaiter({
                content: (_a = gridProps.rowDeleteMessage) !== null && _a !== void 0 ? _a : 'Удалить выбранные строки?',
                onOk: removeRows,
            });
        }
        else {
            removeRows();
        }
    }, [gridApi]);
};
const useApiFetchData = (gridApi) => {
    return useCallback((dataFetchHandler, params) => {
        const table = gridApi.tableApi;
        if (!table)
            return;
        table.modules.page.dataChanging = true;
        table.modules.ajax.setUrl('-');
        if (dataFetchHandler)
            table.modules.ajax.loaderPromise = GenerateAjaxRequestFunc(gridApi, dataFetchHandler, params);
        table.setData(undefined, params).then();
    }, [gridApi]);
};
const useSetCurrentDataFetchHandler = (curDataFetchHandler, curDataFetchParams) => {
    return useCallback((dataFetchFunc, params) => {
        curDataFetchHandler.current = dataFetchFunc;
        curDataFetchParams.current = params;
    }, [curDataFetchHandler, curDataFetchParams]);
};
const useGetCurrentDataFetchHandler = (curDataFetchFunc, curDataFetchParams) => {
    return useCallback(() => {
        return [curDataFetchFunc.current, curDataFetchParams.current];
    }, [curDataFetchFunc, curDataFetchParams]);
};
const useApiRetryFetchData = (gridApi) => {
    return useCallback(() => {
        const [currentDataFetchHandler, currentFetchParams] = gridApi.getCurrentDataFetchHandler();
        if (currentDataFetchHandler)
            gridApi.fetchData(currentDataFetchHandler, currentFetchParams);
    }, [gridApi]);
};
const useApiGetRowData = (gridApi) => {
    return useCallback((node, withParent, selfParent, parentOnly, withChildren) => {
        const tableApi = gridApi.tableApi;
        if (!tableApi || !node)
            return {};
        const rowData = parentOnly ? {} : Object.assign({}, node.getData());
        if (!tableApi.options.dataTree)
            return rowData;
        const parentFieldKey = tableApi.options.dataTreeParentField;
        const childrenKey = tableApi.options.dataTreeChildField;
        if (!withChildren && childrenKey)
            delete rowData[childrenKey];
        if (!parentFieldKey || typeof rowData[parentFieldKey] !== 'undefined')
            return rowData;
        const parentNode = selfParent ? node : node.getTreeParent();
        if (!parentNode)
            return rowData;
        const parentData = parentNode.getData();
        if (!withChildren && childrenKey)
            delete parentData[childrenKey];
        rowData[parentFieldKey] = parentNode.getData();
        return rowData;
    }, [gridApi]);
};
const useApiOpenColumnDialog = (gridApi, openColumnsDialog) => {
    return useCallback((open) => {
        openColumnsDialog(open);
    }, [openColumnsDialog]);
};
