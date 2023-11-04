import { useMemo } from 'react';
export const usePrepareSelectionFormProps = (gridApi) => {
    return useMemo(() => {
        var _a;
        const selectionFormProps = (_a = gridApi.gridProps) === null || _a === void 0 ? void 0 : _a.selectionFormProps;
        if (!selectionFormProps)
            return undefined;
        const formProps = Object.assign({}, selectionFormProps);
        const prevOnSubmitSuccess = selectionFormProps === null || selectionFormProps === void 0 ? void 0 : selectionFormProps.onSubmitSuccess;
        formProps.onSubmitSuccess = (values, resultValues, formApi) => {
            var _a, _b;
            if (prevOnSubmitSuccess && prevOnSubmitSuccess(values, resultValues, formApi) === false)
                return false;
            const formValues = Object.assign(Object.assign({}, formApi.model.getFormDataSet()), resultValues);
            const gridProps = gridApi.gridProps;
            const selectedRows = (_a = formValues.select) !== null && _a !== void 0 ? _a : [];
            if (!gridProps.appendSelection)
                return gridApi.setDataSet(selectedRows);
            const dataSet = (_b = gridApi.getDataSet()) !== null && _b !== void 0 ? _b : [];
            for (const selectedRow of selectedRows) {
                if (dataSet.find(row => {
                    return row.id === selectedRow.id;
                })) {
                    continue;
                }
                gridApi.insertRows(selectedRow);
            }
        };
        return formProps;
    }, [gridApi]);
};
//# sourceMappingURL=gridSelectionForm.js.map