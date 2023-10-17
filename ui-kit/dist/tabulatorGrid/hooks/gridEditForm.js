import { useMemo } from 'react';
import { HelpersStrings } from "@krinopotam/js-helpers";
export const usePrepareEditFormProps = (gridApi) => {
    return useMemo(() => {
        var _a;
        const editFormProps = (_a = gridApi.gridProps) === null || _a === void 0 ? void 0 : _a.editFormProps;
        if (!editFormProps)
            return undefined;
        const formProps = Object.assign({}, editFormProps);
        const prevOnSubmitSuccess = editFormProps === null || editFormProps === void 0 ? void 0 : editFormProps.onSubmitSuccess;
        formProps.onSubmitSuccess = (values, resultValues, formApi) => {
            if (prevOnSubmitSuccess && prevOnSubmitSuccess(values, resultValues, formApi) === false)
                return false;
            const updatedRow = Object.assign(Object.assign({}, formApi.model.getFormDataSet()), resultValues);
            const formMode = formApi.model.getFormMode();
            if (formMode === 'create' || formMode === 'clone') {
                if (!updatedRow.id)
                    updatedRow.id = HelpersStrings.getUuid();
                const activeKey = gridApi.getActiveRowKey();
                gridApi.insertRows(updatedRow, 'below', activeKey !== null && activeKey !== void 0 ? activeKey : undefined, true);
            }
            else if (formMode === 'update') {
                gridApi.updateRows(updatedRow, true);
            }
        };
        return formProps;
    }, [gridApi]);
};
