import React, { useCallback, useRef, useState } from 'react';
import { HelpersStrings, HelpersObjects } from '@krinopotam/js-helpers';
import useUnmountedRef from 'ahooks/lib/useUnmountedRef';
import { MessageBox } from '../../messageBox';
export const useInitGridApi = ({ gridApi, props, tableRef, editFormApi, buttonsApi, }) => {
    const dataSetRef = useRef(undefined);
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
    gridApi.deleteRowsByKeys = useApiDeleteRowsByKeys(dataSetRef, gridApi);
    gridApi.deleteRows = useApiDeleteRows(gridApi);
    gridApi.fetchData = useApiFetchData(gridApi);
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
    return useCallback(() => { var _a; return (_a = dataSetRef.current) !== null && _a !== void 0 ? _a : []; }, [dataSetRef]);
};
const useApiSetDataSet = (dataSetRef, gridApi) => {
    return useCallback((dataSet) => {
        var _a, _b, _c, _d, _e, _f;
        if (!gridApi.tableApi)
            return;
        const newDataSet = (_c = (_b = (_a = gridApi.gridProps) === null || _a === void 0 ? void 0 : _a.onDataSetChange) === null || _b === void 0 ? void 0 : _b.call(_a, dataSet !== null && dataSet !== void 0 ? dataSet : undefined, gridApi)) !== null && _c !== void 0 ? _c : dataSet;
        dataSetRef.current = newDataSet;
        (_d = gridApi.tableApi) === null || _d === void 0 ? void 0 : _d.deselectRow();
        (_e = gridApi.tableApi) === null || _e === void 0 ? void 0 : _e.clearData();
        (_f = gridApi.tableApi) === null || _f === void 0 ? void 0 : _f.addData(dataSetRef.current);
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
    return useCallback(() => { var _a, _b; return ((_b = (_a = gridApi.tableApi) === null || _a === void 0 ? void 0 : _a.getActiveRowKey) === null || _b === void 0 ? void 0 : _b.call(_a)); }, [gridApi]);
};
const useApiGetActiveNode = (gridApi) => {
    return useCallback(() => { var _a, _b; return ((_b = (_a = gridApi.tableApi) === null || _a === void 0 ? void 0 : _a.getActiveRow) === null || _b === void 0 ? void 0 : _b.call(_a)); }, [gridApi]);
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
        var _a, _b, _c, _d;
        if (!gridApi.tableApi)
            return;
        const dataTree = gridApi.gridProps.dataTree;
        const above = place === 'above';
        const clonedRows = HelpersObjects.isArray(rows) ? [...rows] : [rows];
        for (const row of clonedRows) {
            if (!dataTree)
                (_a = gridApi.tableApi) === null || _a === void 0 ? void 0 : _a.addData([row], above, key).then();
            else
                addTreeRows(gridApi, [row], place, key);
        }
        dataSetRef.current = ((_b = gridApi.tableApi) === null || _b === void 0 ? void 0 : _b.getData()) || [];
        (_d = (_c = gridApi.gridProps) === null || _c === void 0 ? void 0 : _c.onDataSetChange) === null || _d === void 0 ? void 0 : _d.call(_c, dataSetRef.current, gridApi);
        if (updateActiveRow && clonedRows[0])
            gridApi.setActiveRowKey(clonedRows[0].id, true, 'center');
        gridApi.tableApi.setTableBodyFocus();
    }, [dataSetRef, gridApi]);
};
const useApiUpdateRows = (dataSetRef, gridApi) => {
    return useCallback((rows, updateActiveRow) => {
        var _a, _b, _c;
        if (!gridApi.tableApi)
            return;
        const dataTree = gridApi.gridProps.dataTree;
        const clonedRows = HelpersObjects.isArray(rows) ? [...rows] : [rows];
        for (const row of clonedRows) {
            if (!dataTree)
                gridApi.tableApi.updateData([row]).then();
            else
                updateTreeRows(gridApi, row);
        }
        dataSetRef.current = ((_a = gridApi.tableApi) === null || _a === void 0 ? void 0 : _a.getData()) || [];
        (_c = (_b = gridApi.gridProps) === null || _b === void 0 ? void 0 : _b.onDataSetChange) === null || _c === void 0 ? void 0 : _c.call(_b, dataSetRef.current, gridApi);
        if (updateActiveRow && clonedRows[0])
            gridApi.setActiveRowKey(clonedRows[0].id, true, 'center');
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
const useApiDeleteRowsByKeys = (dataSetRef, gridApi) => {
    return useCallback((keys) => {
        var _a, _b, _c, _d;
        if (!gridApi.tableApi)
            return;
        const indexField = gridApi.tableApi.options.index;
        const clonedKeys = HelpersObjects.isArray(keys) ? [...keys] : [keys];
        let newActiveNode = false;
        let newActiveNodeCandidate = false;
        for (const key of clonedKeys) {
            const node = (_a = gridApi.tableApi) === null || _a === void 0 ? void 0 : _a.getRow(key);
            if (!node)
                continue;
            if (newActiveNode && node === newActiveNode)
                newActiveNode = false;
            newActiveNodeCandidate = node.getNextRow() || node.getPrevRow();
            if (newActiveNodeCandidate)
                newActiveNode = newActiveNodeCandidate;
            const parentNode = gridApi.tableApi.options.dataTree ? node.getTreeParent() : false;
            gridApi.tableApi.deselectRow(node);
            gridApi.tableApi.deleteRow(key);
            if (parentNode)
                parentNode.reformat();
        }
        if (newActiveNode && indexField)
            newActiveNode = gridApi.tableApi.getRow(newActiveNode.getData()[indexField]);
        gridApi.tableApi.setActiveRow(newActiveNode || null, true, 'bottom');
        dataSetRef.current = ((_b = gridApi.tableApi) === null || _b === void 0 ? void 0 : _b.getData()) || [];
        (_d = (_c = gridApi.gridProps) === null || _c === void 0 ? void 0 : _c.onDataSetChange) === null || _d === void 0 ? void 0 : _d.call(_c, dataSetRef.current, gridApi);
        gridApi.tableApi.setTableBodyFocus();
    }, [dataSetRef, gridApi]);
};
const useApiDeleteRows = (gridApi) => {
    return useCallback((rows) => {
        const clonedRows = HelpersObjects.isArray(rows) ? [...rows] : [rows];
        const keys = [];
        for (const row of clonedRows)
            keys.push(row.id);
        gridApi.deleteRowsByKeys(keys);
    }, [gridApi]);
};
const useApiFetchData = (gridApi) => {
    return useCallback((dataSource) => {
        var _a, _b, _c;
        const props = gridApi.gridProps;
        const curDataSource = dataSource !== null && dataSource !== void 0 ? dataSource : (_a = props === null || props === void 0 ? void 0 : props.onDataFetch) === null || _a === void 0 ? void 0 : _a.call(props, gridApi);
        if (!curDataSource) {
            (_b = props === null || props === void 0 ? void 0 : props.onDataFetchSuccess) === null || _b === void 0 ? void 0 : _b.call(props, undefined, gridApi);
            (_c = props === null || props === void 0 ? void 0 : props.onDataFetchCompleted) === null || _c === void 0 ? void 0 : _c.call(props, gridApi);
            return;
        }
        gridApi.setIsLoading(true);
        curDataSource.then((result) => {
            var _a, _b;
            if (!gridApi.getIsMounted())
                return;
            const values = (result.data || []);
            gridApi.setDataSet(values);
            (_a = props === null || props === void 0 ? void 0 : props.onDataFetchCompleted) === null || _a === void 0 ? void 0 : _a.call(props, gridApi);
            (_b = props === null || props === void 0 ? void 0 : props.onDataFetchSuccess) === null || _b === void 0 ? void 0 : _b.call(props, values, gridApi);
            gridApi.setIsLoading(false);
        }, (error) => {
            var _a, _b;
            if (!gridApi.getIsMounted())
                return;
            (_a = props === null || props === void 0 ? void 0 : props.onDataFetchCompleted) === null || _a === void 0 ? void 0 : _a.call(props, gridApi);
            (_b = props === null || props === void 0 ? void 0 : props.onDataFetchError) === null || _b === void 0 ? void 0 : _b.call(props, error.message, error.code, gridApi);
            gridApi.setIsLoading(false);
            const box = MessageBox.confirm({
                content: (React.createElement(React.Fragment, null,
                    React.createElement("p", null, error.message),
                    React.createElement("p", null, 'Попробовать снова?'))),
                colorType: 'danger',
                buttons: {
                    ok: {
                        onClick: () => {
                            box.destroy();
                            gridApi.fetchData(dataSource);
                        },
                    },
                },
            });
        });
    }, [gridApi]);
};
