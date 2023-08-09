import { useMemo, useState } from 'react';
import { HelpersStrings } from "@krinopotam/js-helpers";
export const useEditableInit = (api) => {
    var _a;
    const treeProps = api.getProps();
    const treeFormProps = treeProps.editFormProps;
    const [formApi] = useState(((treeFormProps === null || treeFormProps === void 0 ? void 0 : treeFormProps.apiRef) || {}));
    const [formId] = useState((_a = treeFormProps === null || treeFormProps === void 0 ? void 0 : treeFormProps.formId) !== null && _a !== void 0 ? _a : 'SelectItemEdit-' + HelpersStrings.getUuid());
    const formProps = useMemo(() => {
        var _a;
        if (!treeFormProps)
            return undefined;
        const defaultProps = {
            width: 400,
            minWidth: 200,
            bodyHeight: 200,
            bodyMinHeight: 40,
        };
        const props = Object.assign(Object.assign(Object.assign({}, defaultProps), treeFormProps), { apiRef: formApi, formId: formId });
        if (!props.callbacks)
            props.callbacks = {};
        const userOnSubmitSuccess = (_a = props.callbacks) === null || _a === void 0 ? void 0 : _a.onSubmitSuccess;
        props.callbacks.onSubmitSuccess = (values, resultVal, formApi) => {
            var _a;
            if (!resultVal || (userOnSubmitSuccess === null || userOnSubmitSuccess === void 0 ? void 0 : userOnSubmitSuccess(values, resultVal, formApi)) === false)
                return;
            const resultNode = Object.assign(Object.assign({}, ((_a = formApi.model.getFormDataSet()) !== null && _a !== void 0 ? _a : {})), resultVal);
            const formProps = formApi.getFormProps();
            if (formProps.formMode === 'update')
                api.updateNodes(resultNode);
            else {
                const parents = api.getValues();
                const parent = parents && parents.length > 0 ? parents[0] : undefined;
                api.addNodes(parent, resultNode);
            }
            api.setValues([resultNode]);
        };
        return props;
    }, [treeFormProps, formApi, formId, api]);
    return [formProps, formApi];
};
