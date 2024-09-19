import {useMemo} from 'react';
import {GetUuid} from '@krinopotam/js-helpers/helpersString/getUuid';
import {IGridApi, IGridProps, IGridRowData} from '@src/tabulatorGrid';

export const useGetEditFormProps = (gridApi: IGridApi, gridProps: IGridProps) => {
    return useMemo(() => {
        const editFormProps = gridProps?.editFormProps;
        if (!editFormProps) return undefined;

        const formProps = {...editFormProps};
        if (gridProps.language && !formProps.language) formProps.language = gridProps.language;

        const prevOnSubmitSuccess = editFormProps?.onSubmitSuccess;

        formProps.onSubmitSuccess = (values, dataSet, resultData, formApi, cbControl) => {
            prevOnSubmitSuccess?.(values, dataSet, resultData, formApi, cbControl);
            if (cbControl.isPrevented()) return;
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
