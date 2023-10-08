import {useMemo} from 'react';
import {IDFormApi} from '@src/dynamicForm';
import {HelpersStrings} from "@krinopotam/js-helpers";
import {IGridApi} from "./api";
import {IGridRowData} from "../tabulatorGrid";

export const usePrepareEditFormProps = (gridApi: IGridApi) => {
    return useMemo(() => {
        const editFormProps = gridApi.gridProps?.editFormProps;
        if (!editFormProps) return undefined;

        const formProps = {...editFormProps};

        const prevOnSubmitSuccess = editFormProps?.onSubmitSuccess;

        formProps.onSubmitSuccess = (values: Record<string, unknown>, resultValues: Record<string, unknown> | undefined, formApi: IDFormApi) => {
            if (prevOnSubmitSuccess && prevOnSubmitSuccess(values, resultValues, formApi) === false) return false;
            const updatedRow = {...formApi.model.getFormDataSet(), ...resultValues} as IGridRowData;

            const formMode = formApi.model.getFormMode();

            if (formMode === 'create' || formMode === 'clone') {
                if (!updatedRow.id) updatedRow.id = HelpersStrings.getUuid();
                const activeKey = gridApi.getActiveRowKey();
                gridApi.insertRows(updatedRow, 'below', activeKey ?? undefined, true);
            } else if (formMode === 'update') {
                gridApi.updateRows(updatedRow, true);
            }
        };

        return formProps;
    }, [gridApi]);
};
