import {useMemo} from 'react';
import {IGridApi, IGridProps, IGridRowData} from '@src/tabulatorGrid';

export const usePrepareSelectionForm = (gridApi: IGridApi, gridProps: IGridProps) => {
    return useMemo(() => {
        const selectionFormProps = gridApi.getProps()?.selectionFormProps;
        if (!selectionFormProps) return undefined;

        const formProps = {...selectionFormProps};
        if (gridProps.language && !formProps.language) formProps.language = gridProps.language;

        const prevOnSubmitSuccess = selectionFormProps?.onSubmitSuccess;

        formProps.onSubmitSuccess = (values, dataSet, resultData, formApi, cbControl) => {
            prevOnSubmitSuccess?.(values, dataSet, resultData, formApi, cbControl);
            if (cbControl.isPrevented()) return;

            const formData = {...resultData};

            const selectedRows = (formData.select as IGridRowData[]) ?? [];

            if (!gridProps.appendSelection) return gridApi.setDataSet(selectedRows);

            const gridDataSet = gridApi.getDataSet() ?? [];

            for (const selectedRow of selectedRows) {
                if (
                    gridDataSet.find(row => {
                        return row.id === selectedRow.id;
                    })
                ) {
                    continue;
                }
                gridApi.insertRows(selectedRow);
            }
        };

        return formProps;
    }, [gridApi, gridProps.appendSelection, gridProps.language]);
};
