import {useMemo} from 'react';
import {IDFormApi} from '@src/dForm';
import {HelpersStrings} from "@krinopotam/js-helpers";
import {IGridApi} from "./api";
import {IGridRowData} from "../tabulatorGrid";

export const usePrepareSelectionFormProps = (gridApi: IGridApi) => {
    return useMemo(() => {
        const selectionFormProps = gridApi.gridProps?.selectionFormProps;
        if (!selectionFormProps) return undefined;

        const formProps = {...selectionFormProps};

        const prevOnSubmitSuccess = selectionFormProps?.onSubmitSuccess;

        formProps.onSubmitSuccess = (values: Record<string, unknown>, resultValues: Record<string, unknown> | undefined, formApi: IDFormApi) => {
            if (prevOnSubmitSuccess && prevOnSubmitSuccess(values, resultValues, formApi) === false) return false;
            const formValues = {...formApi.model.getFormDataSet(), ...resultValues};

            gridApi.setDataSet(formValues.select as  IGridRowData[])
        };

        return formProps;
    }, [gridApi]);
};
