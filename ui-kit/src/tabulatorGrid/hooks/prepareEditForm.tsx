import {useMemo} from 'react';
import {IDFormApi, IDFormDataSet} from '@src/dForm';
import {GetUuid} from "@krinopotam/js-helpers";
import {IGridApi, IGridProps, IGridRowData} from "@src/tabulatorGrid";

export const usePrepareEditForm = (gridApi: IGridApi, gridProps: IGridProps) => {
    return useMemo(() => {
        const editFormProps = gridProps?.editFormProps;
        if (!editFormProps) return undefined;

        const formProps = {...editFormProps};
        if (gridProps.language && !formProps.language) formProps.language = gridProps.language

        const prevOnSubmitSuccess = editFormProps?.onSubmitSuccess;

        formProps.onSubmitSuccess = (values: Record<string, unknown>, dataSet: IDFormDataSet, resultData: Record<string, unknown> | undefined, formApi: IDFormApi) => {
            if (prevOnSubmitSuccess && prevOnSubmitSuccess(values, dataSet, resultData, formApi) === false) return false;
            const updatedRow = {...resultData} as IGridRowData;

            const formMode = formApi.model.getFormMode();

            if (formMode === 'create' || formMode === 'clone') {
                if (!updatedRow.id) updatedRow.id = GetUuid();
                const activeKey = gridApi.getActiveRowKey();
                gridApi.insertRows(updatedRow, 'below', activeKey ?? undefined, true);
            } else if (formMode === 'update') {
                gridApi.updateRows(updatedRow, true);
            }
        };

        return formProps;
    }, [gridApi, gridProps?.editFormProps, gridProps.language]);
};
