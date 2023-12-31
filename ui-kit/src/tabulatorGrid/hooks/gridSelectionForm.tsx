import {useMemo} from 'react';
import {IDFormApi} from '@src/dForm';
import {IGridApi, IGridRowData} from "@src/tabulatorGrid";

export const usePrepareSelectionFormProps = (gridApi: IGridApi) => {
    return useMemo(() => {
        const selectionFormProps = gridApi.gridProps?.selectionFormProps;
        if (!selectionFormProps) return undefined;

        const formProps = {...selectionFormProps};

        const prevOnSubmitSuccess = selectionFormProps?.onSubmitSuccess;

        formProps.onSubmitSuccess = (values: Record<string, unknown>, resultValues: Record<string, unknown> | undefined, formApi: IDFormApi) => {
            if (prevOnSubmitSuccess && prevOnSubmitSuccess(values, resultValues, formApi) === false) return false;
            const formValues = {...formApi.model.getFormDataSet(), ...resultValues};

            const gridProps = gridApi.gridProps;
            const selectedRows = (formValues.select as IGridRowData[]) ?? [];

            if (!gridProps.appendSelection) return gridApi.setDataSet(selectedRows);

            const dataSet = gridApi.getDataSet() ?? [];

            for (const selectedRow of selectedRows) {
                if (
                    dataSet.find(row => {
                        return row.id === selectedRow.id;
                    })
                ) {
                    continue;
                }
                gridApi.insertRows(selectedRow);
            }
        };

        return formProps;
    }, [gridApi]);
};
