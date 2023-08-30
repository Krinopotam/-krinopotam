import React, { useEffect, useSyncExternalStore } from 'react';
import { ButtonsRender } from '@krinopotam/ui-modal';
import { Form } from 'antd';
import { FormBodyRender } from './formBodyRender';
import { LoadingContainer } from '@krinopotam/ui-loading-container';
export const FormRender = ({ formApi, formButtons }) => {
    var _a;
    useExternalRenderCall(formApi);
    const formProps = formApi.getFormProps();
    let labelCol = formProps.labelCol;
    if (!labelCol)
        labelCol = formProps.layout === 'horizontal' ? { span: 8 } : { span: 0 };
    if (!labelCol.style)
        labelCol.style = { paddingBottom: 2 };
    else if (typeof labelCol.style.paddingBottom === 'undefined')
        labelCol.style.paddingBottom = 2;
    let wrapperCol = formProps.wrapperCol;
    if (!wrapperCol)
        wrapperCol = formProps.layout === 'horizontal' ? { span: 16 } : { span: 24 };
    return (React.createElement("div", { className: 'managed-dynamic-buttons-row ' + ((_a = formProps.containerClassName) !== null && _a !== void 0 ? _a : '') },
        React.createElement(LoadingContainer, { isLoading: formApi.model.isFormFetching() || (formApi.model.isFormSubmitting() && !formProps.confirmChanges), notHideContent: true },
            React.createElement(Form, { colon: false, className: formProps.className, name: formApi.getFormId(), labelCol: labelCol, wrapperCol: wrapperCol, autoComplete: "off", labelAlign: formProps.labelAlign, layout: formProps.layout === 'horizontal' ? 'horizontal' : 'vertical' },
                React.createElement(FormInit, { formApi: formApi }),
                React.createElement(FormBodyRender, { formApi: formApi }),
                React.createElement(ButtonsRender, { formId: formApi.getFormId(), buttons: formButtons, formType: formProps.formType, buttonsApi: formApi.buttonsApi, arrowsSelection: false, context: formApi })))));
};
const useExternalRenderCall = (formApi) => {
    const subscribe = formApi.model.subscribeRenderForm();
    const getSnapshot = () => {
        return formApi.model.getFormRenderSnapshot();
    };
    return useSyncExternalStore(subscribe, getSnapshot);
};
const FormInit = ({ formApi }) => {
    useEffect(() => {
        formApi.model.setFormInit();
    }, [formApi.model]);
    return null;
};
