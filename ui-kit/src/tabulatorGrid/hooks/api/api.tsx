import React, {MutableRefObject, useRef, useState} from 'react';
import {GetNanoId} from '@krinopotam/js-helpers/helpersString/getNanoId';

import {TabulatorFull as Tabulator} from 'tabulator-tables';
import {ITabulator} from '@src/tabulatorBase';
import {IGridProps} from '@src/tabulatorGrid';
import {IGridApi} from '@src/tabulatorGrid/types/tabulatorGridTypes';
import {IButtonsRowApi} from '@src/buttonsRow';
import {useApiGetButtonsApi} from '@src/_shared/hooks/componentApiMethods/useApiGetButtonsApi';
import {useApiGetId} from '@src/_shared/hooks/componentApiMethods/useApiGetId';
import {useApiIsMounted} from '@src/_shared/hooks/componentApiMethods/useApiIsMointed';
import {useApiGetProps} from '@src/_shared/hooks/componentApiMethods/useApiGetProps';
import {useApiSetProps} from '@src/_shared/hooks/componentApiMethods/useApiSetProps';
import {useApiUpdateProps} from '@src/_shared/hooks/componentApiMethods/useApiUpdateProps';
import {IDFormModalApi} from '@src/dFormModal';
import {useApiT} from '@src/tabulatorGrid/hooks/api/useApiT';
import {useApiOpenColumnDialog} from '@src/tabulatorGrid/hooks/api/useApiOpenColumnDialog';
import {useApiGetRowData} from '@src/tabulatorGrid/hooks/api/useApiGetRowData';
import {useApiRetryFetchData} from '@src/tabulatorGrid/hooks/api/useApiRetryFetchData';
import {useGetCurrentDataFetchHandler} from '@src/tabulatorGrid/hooks/api/useGetCurrentDataFetchHandler';
import {useSetCurrentDataFetchHandler} from '@src/tabulatorGrid/hooks/api/useSetCurrentDataFetchHandler';
import {useApiFetchData} from '@src/tabulatorGrid/hooks/api/useApiFetchData';
import {useApiDeleteRows} from '@src/tabulatorGrid/hooks/api/useApiDeleteRows';
import {useApiRemoveRows} from '@src/tabulatorGrid/hooks/api/useApiRemoveRows';
import {useApiRemoveRowsByKeys} from '@src/tabulatorGrid/hooks/api/useApiRemoveRowsByKeys';
import {useApiUpdateRows} from '@src/tabulatorGrid/hooks/api/useApiUpdateRows';
import {useApiInsertRows} from '@src/tabulatorGrid/hooks/api/useApiInsertRows';
import {useApiGetRowByKey} from '@src/tabulatorGrid/hooks/api/useApiGetRowByKey';
import {useApiGetNodeByKey} from '@src/tabulatorGrid/hooks/api/useApiGetNodeByKey';
import {useApiGetSelectedRows} from '@src/tabulatorGrid/hooks/api/useApiGetSelectedRows';
import {useApiGetSelectedNodes} from '@src/tabulatorGrid/hooks/api/useApiGetSelectedNodes';
import {useApiSetSelectedRows} from '@src/tabulatorGrid/hooks/api/useApiSetSelectedRows';
import {useApiSetSelectedRowsKeys} from '@src/tabulatorGrid/hooks/api/useApiSetSelectedRowsKeys';
import {useApiGetSelectedRowKeys} from '@src/tabulatorGrid/hooks/api/useApiGetSelectedRowKeys';
import {useApiGetPrevRowKey} from '@src/tabulatorGrid/hooks/api/useApiGetPrevRowKey';
import {useApiGetNextRowKey} from '@src/tabulatorGrid/hooks/api/useApiGetNextRowKey';
import {useApiGetActiveRow} from '@src/tabulatorGrid/hooks/api/useApiGetActiveRow';
import {useApiGetActiveNode} from '@src/tabulatorGrid/hooks/api/useApiGetActiveNode';
import {useApiGetActiveRowKey} from '@src/tabulatorGrid/hooks/api/useApiGetActiveRowKey';
import {useApiSetActiveRowKey} from '@src/tabulatorGrid/hooks/api/useApiSetActiveRowKey';
import {useApiSetIsLoading} from '@src/tabulatorGrid/hooks/api/useApiSetIsLoading';
import {useApiGetIsLoading} from '@src/tabulatorGrid/hooks/api/useApiGetIsLoading';
import {useApiSetDataSet} from '@src/tabulatorGrid/hooks/api/useApiSetDataSet';
import {useApiGetDataSet} from '@src/tabulatorGrid/hooks/api/useApiGetDataSet';
import {useUpdateDataSetFromProps} from '@src/tabulatorGrid/hooks/api/useUpdateDataSetFromProps';

export const useInitGridApi = ({
    props,
    setProps,
    tableRef,
    setColumnsDialog,
}: {
    props: IGridProps;
    setProps: (props: IGridProps | ((prevValue: IGridProps) => IGridProps)) => void;
    tableRef: MutableRefObject<Tabulator | undefined>;
    setColumnsDialog: React.Dispatch<React.SetStateAction<boolean>>;
}): IGridApi => {
    const [editFormApi] = useState<IDFormModalApi>((props.editFormProps?.apiRef ?? {}) as IDFormModalApi);
    const [selectionFormApi] = useState<IDFormModalApi>((props.selectionFormProps?.apiRef ?? {}) as IDFormModalApi);
    const [api] = useState((props.apiRef || {}) as IGridApi);

    const dataSetRef = useRef<IGridProps['dataSet']>(undefined);
    const curDataFetchHandler = useRef<IGridProps['onDataFetch'] | undefined>();
    const curDataFetchParams = useRef<Record<string, unknown> | undefined>();

    const [isLoading, setIsLoading] = useState(false);

    useUpdateDataSetFromProps(dataSetRef, props.dataSet);

    const apiMethods: IGridApi = {
        /** Component Api methods*/
        getId: useApiGetId(props.id ?? 'grid-' + GetNanoId()),
        getProps: useApiGetProps(props),
        setProps: useApiSetProps(setProps),
        updateProps: useApiUpdateProps(props, setProps),
        getIsMounted: useApiIsMounted(),

        /** Component own api methods */
        tableApi: tableRef.current as ITabulator,
        editFormApi,
        selectionFormApi,

        t: useApiT(props),
        getButtonsApi: useApiGetButtonsApi<IButtonsRowApi & {refreshButtons: () => void}>(),
        getDataSet: useApiGetDataSet(dataSetRef, api),
        setDataSet: useApiSetDataSet(dataSetRef, api),
        getIsLoading: useApiGetIsLoading(isLoading),
        setIsLoading: useApiSetIsLoading(setIsLoading),
        setActiveRowKey: useApiSetActiveRowKey(api),
        getActiveRowKey: useApiGetActiveRowKey(api),
        getActiveNode: useApiGetActiveNode(api),
        getActiveRow: useApiGetActiveRow(api),
        getNextRowKey: useApiGetNextRowKey(api),
        getPrevRowKey: useApiGetPrevRowKey(api),
        getSelectedRowKeys: useApiGetSelectedRowKeys(api),
        getSelectedNodes: useApiGetSelectedNodes(api),
        getSelectedRows: useApiGetSelectedRows(api),
        setSelectedRowKeys: useApiSetSelectedRowsKeys(api),
        setSelectedRows: useApiSetSelectedRows(api),
        getNodeByKey: useApiGetNodeByKey(api),
        getRowByKey: useApiGetRowByKey(api),
        insertRows: useApiInsertRows(dataSetRef, api),
        updateRows: useApiUpdateRows(dataSetRef, api),
        removeRowsByKeys: useApiRemoveRowsByKeys(dataSetRef, api),
        removeRows: useApiRemoveRows(api),
        deleteRows: useApiDeleteRows(api, props),
        fetchData: useApiFetchData(api),
        retryFetchData: useApiRetryFetchData(api),
        setCurrentDataFetchHandler: useSetCurrentDataFetchHandler(curDataFetchHandler, curDataFetchParams),
        getCurrentDataFetchHandler: useGetCurrentDataFetchHandler(curDataFetchHandler, curDataFetchParams),
        getRowData: useApiGetRowData(api),
        openColumnDialog: useApiOpenColumnDialog(setColumnsDialog),
    };

    Object.assign(api, apiMethods);
    return api;
};
