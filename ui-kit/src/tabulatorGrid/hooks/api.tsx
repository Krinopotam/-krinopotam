import React, {MutableRefObject, useCallback, useRef, useState} from 'react';
import {GetUuid, IsArray, IsPromise} from '@krinopotam/js-helpers';

import {RowComponent, ScrollToRowPosition, TabulatorFull as Tabulator} from 'tabulator-tables';
import {ITabulator} from '@src/tabulatorBase';
import {MessageBox, MessageBoxApi} from '@src/messageBox';
import {GenerateAjaxRequestFunc} from '@src/tabulatorGrid/helpers/fetchHelpers';
import {IError} from '@krinopotam/service-types';
import {IsDebugMode} from '@krinopotam/common-hooks';
import {IGridDeletePromise, IGridProps, IGridRowData} from '@src/tabulatorGrid';
import {IGridApi, IRowKey, IRowKeys} from '@src/tabulatorGrid/types/tabulatorGridTypes';
import {useUnmountedRef} from "ahooks";
import {useTranslate} from "@src/tabulatorGrid/hooks/translate";

export const useInitGridApi = ({
                                   gridApi,
                                   props,
                                   tableRef,
                                   editFormApi,
                                   selectionFormApi,
                                   buttonsApi,
                                   setColumnsDialog,
                               }: {
    gridApi: IGridApi;
    props: IGridApi['gridProps'];
    tableRef: MutableRefObject<Tabulator | undefined>;
    editFormApi: IGridApi['editFormApi'];
    selectionFormApi: IGridApi['selectionFormApi'];
    buttonsApi: IGridApi['buttonsApi'];
    setColumnsDialog: React.Dispatch<React.SetStateAction<boolean>>;
}): IGridApi => {
    const dataSetRef = useRef<IGridProps['dataSet']>(undefined);
    const curDataFetchHandler = useRef<IGridProps['onDataFetch'] | undefined>();
    const curDataFetchParams = useRef<Record<string, unknown> | undefined>();

    const [isLoading, setIsLoading] = useState(false);
    const unmountRef = useUnmountedRef();

    useUpdateDataSetFromProps(dataSetRef, props.dataSet);

    gridApi.gridProps = props;
    gridApi.tableApi = tableRef.current as ITabulator;
    gridApi.editFormApi = editFormApi;
    gridApi.selectionFormApi = selectionFormApi;
    gridApi.buttonsApi = buttonsApi;
    gridApi.getIsMounted = useApiIsMounted(unmountRef);
    gridApi.getId = useApiGetId(gridApi);
    gridApi.getDataSet = useApiGetDataSet(dataSetRef, gridApi);
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
    gridApi.setSelectedRows = useApiSetSelectedRows(gridApi);
    gridApi.getNodeByKey = useApiGetNodeByKey(gridApi);
    gridApi.getRowByKey = useApiGetRowByKey(gridApi);
    gridApi.insertRows = useApiInsertRows(dataSetRef, gridApi);
    gridApi.updateRows = useApiUpdateRows(dataSetRef, gridApi);
    gridApi.removeRowsByKeys = useApiRemoveRowsByKeys(dataSetRef, gridApi);
    gridApi.removeRows = useApiRemoveRows(gridApi);
    gridApi.deleteRows = useApiDeleteRows(gridApi, props);
    gridApi.fetchData = useApiFetchData(gridApi);
    gridApi.retryFetchData = useApiRetryFetchData(gridApi);
    gridApi.setCurrentDataFetchHandler = useSetCurrentDataFetchHandler(curDataFetchHandler, curDataFetchParams);
    gridApi.getCurrentDataFetchHandler = useGetCurrentDataFetchHandler(curDataFetchHandler, curDataFetchParams);
    gridApi.getRowData = useApiGetRowData(gridApi);
    gridApi.openColumnDialog = useApiOpenColumnDialog(gridApi, setColumnsDialog);

    return gridApi;
};

/**
 * DataSet can change both via Props and via api.
 * If the DataSet has changed via Props, set the new current dataSet
 */
const useUpdateDataSetFromProps = (curDataSetRef: MutableRefObject<IGridProps['dataSet'] | undefined>, propsDataSet: IGridProps['dataSet']) => {
    const propsDataSetRef = useRef<IGridProps['dataSet']>(undefined);
    if (propsDataSetRef.current === propsDataSet) return;
    propsDataSetRef.current = propsDataSet;
    curDataSetRef.current = propsDataSet;
};

const useApiGetId = (gridApi: IGridApi): IGridApi['getId'] => {
    const [gridId] = useState(gridApi.gridProps.id ?? 'grid-' + GetUuid());
    return useCallback(() => gridId, [gridId]);
};

const useApiIsMounted = (unmountRef: React.MutableRefObject<boolean>): IGridApi['getIsMounted'] => {
    return useCallback(() => !unmountRef.current, [unmountRef]);
};

const useApiGetDataSet = (curDataSetRef: React.MutableRefObject<IGridProps['dataSet'] | undefined>, gridApi: IGridApi): IGridApi['getDataSet'] => {
    return useCallback(() => {
        if (!gridApi.tableApi) return curDataSetRef.current ?? undefined;
        return gridApi.tableApi.getData();
    }, [curDataSetRef, gridApi.tableApi]);
};

const useApiSetDataSet = (curDataSetRef: React.MutableRefObject<IGridProps['dataSet']>, gridApi: IGridApi): IGridApi['setDataSet'] => {
    return useCallback(
        (dataSet: IGridProps['dataSet'] | null) => {
            if (!gridApi.tableApi) return;

            curDataSetRef.current = dataSet ?? undefined;

            gridApi.tableApi?.deselectRow();
            gridApi.tableApi?.clearData();
            if (curDataSetRef.current?.length) gridApi.tableApi?.setData(curDataSetRef.current);

            gridApi.gridProps.onDataChanged?.(curDataSetRef.current, gridApi);
        },
        [curDataSetRef, gridApi]
    );
};

const useApiGetIsLoading = (isLoading: boolean): IGridApi['getIsLoading'] => {
    return useCallback(() => {
        return isLoading;
    }, [isLoading]);
};

const useApiSetIsLoading = (setIsLoading: React.Dispatch<React.SetStateAction<boolean>>): IGridApi['setIsLoading'] => {
    return useCallback(
        (isLoading: boolean) => {
            setTimeout(() => {
                setIsLoading(isLoading);
            }, 0);
        },
        [setIsLoading]
    );
};

const useApiSetActiveRowKey = (gridApi: IGridApi): IGridApi['setActiveRowKey'] => {
    return useCallback(
        (key: IRowKey | null, clearSelection?: boolean, scrollPosition?: ScrollToRowPosition) => {
            if (!gridApi.tableApi) return;
            gridApi.tableApi.setActiveRowByKey(key, clearSelection, scrollPosition);
        },
        [gridApi]
    );
};

const useApiGetActiveRowKey = (gridApi: IGridApi): IGridApi['getActiveRowKey'] => {
    return useCallback(() => gridApi.tableApi?.getActiveRowKey?.(), [gridApi]);
};

const useApiGetActiveNode = (gridApi: IGridApi): IGridApi['getActiveNode'] => {
    return useCallback(() => gridApi.tableApi?.getActiveRow?.(), [gridApi]);
};

const useApiGetActiveRow = (gridApi: IGridApi): IGridApi['getActiveRow'] => {
    return useCallback(() => {
        return gridApi.getActiveNode()?.getData() as IGridRowData;
    }, [gridApi]);
};

const useApiGetNextRowKey = (gridApi: IGridApi): IGridApi['getNextRowKey'] => {
    return useCallback(
        (key: IRowKey | undefined, step?: number) => {
            if (!gridApi.tableApi || !key) return undefined;
            if (!step) step = 1;
            let curNode: RowComponent | undefined = gridApi.tableApi?.getRow(key);
            if (!curNode) return undefined;
            for (let i = 0; i < step; i++) {
                const nextNode = curNode?.getNextRow();
                if (!nextNode) return curNode.getData().id;
                curNode = nextNode;
            }

            return curNode.getData().id;
        },
        [gridApi.tableApi]
    );
};

const useApiGetPrevRowKey = (gridApi: IGridApi): IGridApi['getPrevRowKey'] => {
    return useCallback(
        (key: IRowKey | undefined, step?: number) => {
            if (!gridApi.tableApi || !key) return undefined;
            if (!step) step = 1;
            let curNode: RowComponent | undefined = gridApi.tableApi?.getRow(key);
            if (!curNode) return undefined;
            for (let i = 0; i < step; i++) {
                const prevNode = curNode?.getPrevRow() as RowComponent | false;
                if (!prevNode) return curNode.getData().id;
                curNode = prevNode;
            }

            return curNode.getData().id;
        },
        [gridApi.tableApi]
    );
};

const useApiGetSelectedRowKeys = (gridApi: IGridApi): IGridApi['getSelectedRowKeys'] => {
    const emptyArray = useRef<IRowKey[]>([]);
    return useCallback((): IRowKey[] => {
        if (!gridApi.tableApi) return emptyArray.current;
        const selectedRows = gridApi.tableApi.getSelectedData() as IGridRowData[];

        const result: IRowKey[] = [];

        for (const row of selectedRows) {
            result.push(row.id);
        }

        return result;
    }, [gridApi]);
};

const useApiSetSelectedRowsKeys = (gridApi: IGridApi): IGridApi['setSelectedRowKeys'] => {
    return useCallback(
        (keys: IRowKeys | null | undefined, clearPrevSelection?: boolean) => {
            if (!gridApi.tableApi) return;

            if (!keys || clearPrevSelection) gridApi.tableApi?.deselectRow();

            const selKeys: IRowKey[] = IsArray(keys) ? (keys as IRowKey[]) : [keys as IRowKey];
            gridApi.tableApi?.selectRow(selKeys);
        },
        [gridApi]
    );
};

const useApiSetSelectedRows = (gridApi: IGridApi): IGridApi['setSelectedRows'] => {
    return useCallback(
        (rows: IGridRowData[] | undefined, clearPrevSelection?: boolean) => {
            if (!gridApi.tableApi) return;

            if (!rows) return gridApi.setSelectedRowKeys(undefined, clearPrevSelection);

            const keys = [];
            for (const row of rows) keys.push(row.id);
            gridApi.setSelectedRowKeys(keys, clearPrevSelection);
        },
        [gridApi]
    );
};

const useApiGetSelectedNodes = (gridApi: IGridApi): IGridApi['getSelectedNodes'] => {
    return useCallback((): RowComponent[] => gridApi.tableApi?.getSelectedRows?.() ?? [], [gridApi]);
};

const useApiGetSelectedRows = (gridApi: IGridApi): IGridApi['getSelectedRows'] => {
    return useCallback((): IGridRowData[] => gridApi.tableApi?.getSelectedData?.() ?? [], [gridApi]);
};

const useApiGetNodeByKey = (gridApi: IGridApi): IGridApi['getNodeByKey'] => {
    return useCallback(
        (key: IRowKey) => {
            if (!key || !gridApi.tableApi) return undefined;
            return gridApi.tableApi?.getRow(key);
        },
        [gridApi]
    );
};

const useApiGetRowByKey = (gridApi: IGridApi): IGridApi['getRowByKey'] => {
    return useCallback(
        (key: IRowKey) => {
            return gridApi.getNodeByKey(key)?.getData() as IGridRowData;
        },
        [gridApi]
    );
};

const useApiInsertRows = (dataSetRef: React.MutableRefObject<IGridProps['dataSet'] | undefined>, gridApi: IGridApi): IGridApi['insertRows'] => {
    return useCallback(
        (rows: IGridRowData[] | IGridRowData, place?: 'above' | 'below', key?: IRowKey, updateActiveRow?: boolean) => {
            const tableApi = gridApi.tableApi;
            if (!tableApi) return;

            const dataTree = gridApi.gridProps.dataTree;

            const above = place === 'above';

            const _rows: IGridRowData[] = IsArray(rows) ? [...(rows as IGridRowData[])] : [rows as IGridRowData];

            for (const row of _rows) {
                if (!dataTree) tableApi.addData([row], above, key).then();
                else addTreeRows(gridApi, [row], place, key);
            }

            dataSetRef.current = tableApi.getData() || [];
            gridApi.gridProps.onDataChanged?.(dataSetRef.current, gridApi);

            if (updateActiveRow && _rows[0]) gridApi.setActiveRowKey(_rows[0].id, true, 'center');

            tableApi.setTableBodyFocus();
        },
        [dataSetRef, gridApi]
    );
};

const useApiUpdateRows = (dataSetRef: React.MutableRefObject<IGridProps['dataSet'] | undefined>, gridApi: IGridApi): IGridApi['updateRows'] => {
    return useCallback(
        (rows: IGridRowData[] | IGridRowData, updateActiveRow?: boolean) => {
            if (!gridApi.tableApi) return;
            const dataTree = gridApi.gridProps.dataTree;

            const _rows: IGridRowData[] = IsArray(rows) ? [...(rows as IGridRowData[])] : [rows as IGridRowData];

            for (const row of _rows) {
                if (!dataTree) gridApi.tableApi.updateData([row]).then();
                else updateTreeRows(gridApi, row);
            }

            dataSetRef.current = gridApi.tableApi?.getData() || [];
            gridApi.gridProps.onDataChanged?.(dataSetRef.current, gridApi);

            if (updateActiveRow && _rows[0]) gridApi.setActiveRowKey(_rows[0].id, true, 'center');
            gridApi.tableApi.setTableBodyFocus();
        },
        [dataSetRef, gridApi]
    );
};

const findParentNode = (gridApi: IGridApi, row: IGridRowData) => {
    if (!gridApi.tableApi) return undefined;
    const parentFieldKey = gridApi.tableApi.options.dataTreeParentField;
    const indexField = gridApi.tableApi.options.index;
    if (!indexField || !parentFieldKey || !row[parentFieldKey]) return undefined;
    let parentKey: string | number | undefined;
    if (typeof row[parentFieldKey] === 'string' || typeof row[parentFieldKey] === 'number') parentKey = row[parentFieldKey] as string | number;
    else if (typeof row[parentFieldKey] === 'object') parentKey = (row[parentFieldKey] as IGridRowData)[indexField] as string | number | undefined;

    if (!parentKey) return undefined;

    return gridApi.tableApi.getRow(parentKey) || undefined;
};

const addTreeRows = (gridApi: IGridApi, rows: IGridRowData[] | IGridRowData, place?: 'above' | 'below', key?: IRowKey) => {
    if (!gridApi.tableApi) return;
    if (!gridApi.gridProps.dataTree) {
        console.warn('TreeData mode is disabled. Tree row updating not available');
        return;
    }

    const above = place === 'above';
    const clonedRows: IGridRowData[] = IsArray(rows) ? [...(rows as IGridRowData[])] : [rows as IGridRowData];

    for (const rowData of clonedRows) {
        const parentNode = findParentNode(gridApi, rowData);
        if (!parentNode) gridApi.tableApi?.addData([rowData], above, key);
        else {
            parentNode.addTreeChild(rowData);
            cascadeNodeExpand(parentNode);
            parentNode.reformat();
        }
    }
};

const updateTreeRows = (gridApi: IGridApi, rows: IGridRowData[] | IGridRowData) => {
    if (!gridApi.tableApi) return;
    if (!gridApi.gridProps.dataTree) {
        console.warn('TreeData mode is disabled. Tree row updating not available');
        return;
    }

    const indexField = gridApi.tableApi.options.index;
    const childField = gridApi.tableApi.options.dataTreeChildField;
    if (!indexField || !childField) return;

    const clonedRows: IGridRowData[] = IsArray(rows) ? [...(rows as IGridRowData[])] : [rows as IGridRowData];

    for (const rowData of clonedRows) {
        const rowKey = rowData[indexField] as string | number;
        const node = gridApi.tableApi.getRow(rowKey);

        // current node has not found
        if (!node) {
            gridApi.tableApi.addData([rowData]).then();
            continue;
        }

        const parentNode = node.getTreeParent();
        const newParentNode = findParentNode(gridApi, rowData);

        if (
            // the same parent
            (!parentNode && !newParentNode) ||
            (parentNode && newParentNode && parentNode.getData()[indexField] === newParentNode.getData()[indexField])
        ) {
            gridApi.tableApi.updateData([rowData]).then();
            continue;
        }

        //remove old node
        rowData[childField] = node.getData()[childField]; //keep row children rows

        gridApi.tableApi.deselectRow(node);
        gridApi.tableApi.deleteRow(rowKey);
        if (parentNode) parentNode.reformat();

        // the parent has changed to root
        if (!newParentNode) {
            gridApi.tableApi.addData([rowData]).then();
            continue;
        }

        // the parent changed to node
        newParentNode.addTreeChild(rowData);
        cascadeNodeExpand(newParentNode);
        newParentNode.reformat();
    }
};

const cascadeNodeExpand = (node: RowComponent | false) => {
    if (!node) return;
    const nodeParent = node.getTreeParent();
    cascadeNodeExpand(nodeParent);
    if (!node.isTreeExpanded()) node.treeExpand();
};

const useApiRemoveRowsByKeys = (dataSetRef: React.MutableRefObject<IGridProps['dataSet'] | undefined>, gridApi: IGridApi): IGridApi['removeRowsByKeys'] => {
    return useCallback(
        (keys: IRowKeys) => {
            const table = gridApi.tableApi;
            if (!table) return;
            const indexField = table.options.index;

            const _keys: IGridRowData['id'][] = IsArray(keys) ? [...(keys as IRowKey[])] : [keys as IRowKey];

            let newActiveNode: RowComponent | false = false;
            let newActiveNodeCandidate: RowComponent | false = false;
            for (const key of _keys) {
                const node = table.getRow(key);
                if (!node) continue;
                if (newActiveNode && node === newActiveNode) newActiveNode = false;
                newActiveNodeCandidate = node.getNextRow() || node.getPrevRow();
                if (newActiveNodeCandidate) newActiveNode = newActiveNodeCandidate;

                const parentNode = table.options.dataTree ? node.getTreeParent() : false;
                table.deselectRow(node);
                table.deleteRow(key);
                if (parentNode) parentNode.reformat();
            }

            if (newActiveNode && indexField) newActiveNode = table.getRow(newActiveNode.getData()[indexField]); //we update the link to the node, because after deleting the node map is rebuilt and the objects are not equal to each other (glitches occur)
            table.setActiveRow(newActiveNode || null, true, 'bottom');

            dataSetRef.current = table?.getData() ?? [];

            gridApi.gridProps.onDataChanged?.(dataSetRef.current, gridApi);

            table.setTableBodyFocus();
        },
        [dataSetRef, gridApi]
    );
};

const useApiRemoveRows = (gridApi: IGridApi): IGridApi['removeRows'] => {
    return useCallback(
        (rows: IGridRowData | IGridRowData[]) => {
            const clonedRows: IGridRowData[] = IsArray(rows) ? [...(rows as IGridRowData[])] : [rows as IGridRowData];
            const keys: IRowKey[] = [];
            for (const row of clonedRows) keys.push(row.id);
            gridApi.removeRowsByKeys(keys);
        },
        [gridApi]
    );
};

const useApiDeleteRows = (gridApi: IGridApi, gridProps:IGridProps): IGridApi['deleteRows'] => {
    const t = useTranslate(gridProps)
    return useCallback(
        (rows: IGridRowData | IGridRowData[] | undefined) => {
            if (!rows) return;
            const rowsData = Array.isArray(rows) ? rows : [rows];
            let messageBox: MessageBoxApi;
            const removeRows = () => {
                const deletePromise = gridProps?.onDelete?.(rowsData, gridApi);

                if (IsPromise(deletePromise)) {
                    if (!gridProps.confirmDelete) gridApi.setIsLoading(true);
                    const promiseResult = deletePromise as IGridDeletePromise;
                    promiseResult
                        .then(() => {
                            if (!gridApi.getIsMounted()) return;
                            gridApi.removeRows(rowsData);
                            if (!gridProps.confirmDelete) gridApi.setIsLoading(false);
                            else messageBox?.destroy();
                        })
                        .catch((error: IError) => {
                            if (!gridApi.getIsMounted()) return;
                            if (!gridProps.confirmDelete) gridApi.setIsLoading(false);
                            else messageBox?.destroy();
                            MessageBox.alert({
                                language: gridProps.language,
                                title:t('error'),
                                content: (
                                    <>
                                        <p>
                                            <b>{error.message}</b>
                                        </p>
                                        {error.stack && IsDebugMode() ? <p>{error.stack}</p> : ''}
                                    </>
                                ),
                                colorType: 'danger',
                            });
                        });
                    return;
                }

                gridApi.removeRows(rowsData);
                if (messageBox) messageBox.destroy();
            };

            if (gridProps.confirmDelete) {
                messageBox = MessageBox.confirmWaiter({
                    language: gridProps.language,
                    content: gridProps.rowDeleteMessage ?? t('deleteSelectedRecordsQt'),
                    onOk: removeRows,
                });
            } else {
                removeRows();
            }
        },
        [gridApi]
    );
};

const useApiFetchData = (gridApi: IGridApi): IGridApi['fetchData'] => {
    return useCallback(
        (dataFetchHandler?: IGridProps['onDataFetch'], params?: Record<string, unknown>) => {
            const table = gridApi.tableApi;
            if (!table) return;

            table.modules.page.dataChanging = true; //WORKAROUND: by default dataChanging=false and tabulator will reset params
            table.modules.ajax.setUrl('-'); //WORKAROUND^ Tabulator will request ajax data only when ((!data && url) || typeof dataSet === 'string')

            if (dataFetchHandler) table.modules.ajax.loaderPromise = GenerateAjaxRequestFunc(gridApi, dataFetchHandler, params); //WORKAROUND: update current table AjaxRequestFunc

            table.setData(undefined, params).then();
        },
        [gridApi]
    );
};

const useSetCurrentDataFetchHandler = (
    curDataFetchHandler: React.MutableRefObject<IGridProps['onDataFetch'] | undefined>,
    curDataFetchParams: React.MutableRefObject<Record<string, unknown> | undefined>
) => {
    return useCallback(
        (dataFetchFunc?: IGridProps['onDataFetch'], params?: Record<string, unknown>) => {
            curDataFetchHandler.current = dataFetchFunc;
            curDataFetchParams.current = params;
        },
        [curDataFetchHandler, curDataFetchParams]
    );
};

const useGetCurrentDataFetchHandler = (
    curDataFetchFunc: React.MutableRefObject<IGridProps['onDataFetch'] | undefined>,
    curDataFetchParams: React.MutableRefObject<Record<string, unknown> | undefined>
) => {
    return useCallback((): [IGridProps['onDataFetch'], Record<string, unknown> | undefined] => {
        return [curDataFetchFunc.current, curDataFetchParams.current];
    }, [curDataFetchFunc, curDataFetchParams]);
};

const useApiRetryFetchData = (gridApi: IGridApi): IGridApi['fetchData'] => {
    return useCallback(() => {
        const [currentDataFetchHandler, currentFetchParams] = gridApi.getCurrentDataFetchHandler();
        if (currentDataFetchHandler) gridApi.fetchData(currentDataFetchHandler, currentFetchParams);
    }, [gridApi]);
};

const useApiGetRowData = (gridApi: IGridApi): IGridApi['getRowData'] => {
    return useCallback(
        (node: RowComponent | undefined, withParent?: boolean, selfParent?: boolean, parentOnly?: boolean, withChildren?: boolean) => {
            const tableApi = gridApi.tableApi;

            if (!tableApi || !node) return {};

            const rowData = parentOnly ? {} : {...node.getData()};

            if (!tableApi.options.dataTree) return rowData;

            const parentFieldKey = tableApi.options.dataTreeParentField;
            const childrenKey = tableApi.options.dataTreeChildField;

            if (!withChildren && childrenKey) delete rowData[childrenKey];

            if (!parentFieldKey || typeof rowData[parentFieldKey] !== 'undefined') return rowData;

            const parentNode = selfParent ? node : node.getTreeParent();
            if (!parentNode) return rowData;
            const parentData = parentNode.getData();
            if (!withChildren && childrenKey) delete parentData[childrenKey];
            rowData[parentFieldKey] = parentNode.getData();

            return rowData;
        },
        [gridApi]
    );
};

const useApiOpenColumnDialog = (gridApi: IGridApi, openColumnsDialog: React.Dispatch<React.SetStateAction<boolean>>) => {
    return useCallback(
        (open: boolean) => {
            openColumnsDialog(open);
        },
        [openColumnsDialog]
    );
};
