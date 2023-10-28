import { ButtonsRowWrapper } from '../../buttonsRow';
import React, { useEffect, useSyncExternalStore } from 'react';
import { ButtonsRender } from '../../modal';
import { Form } from 'antd';
import { FieldsRender } from './fieldsRender';
import { LoadingContainer } from '../../loadingContainer';
export const FormRender = ({ formProps, formApi, formButtons }) => {
    var _a, _b;
    const model = formApi.model;
    useSyncExternalStore(model.subscribeRenderForm.bind(model), model.getFormRenderSnapshot.bind(model));
    const labelCol = Object.assign({ span: formProps.layout === 'horizontal' ? 8 : 24 }, formProps.labelCol);
    labelCol.style = Object.assign({ paddingBottom: 2 }, (_a = formProps.labelCol) === null || _a === void 0 ? void 0 : _a.style);
    const wrapperCol = Object.assign({ span: formProps.layout === 'horizontal' ? 16 : 24 }, formProps.wrapperCol);
    return (React.createElement("div", { className: (_b = formProps.containerClassName) !== null && _b !== void 0 ? _b : '', style: formProps.containerStyle },
        React.createElement(LoadingContainer, { isLoading: model.isFormFetching() || (model.isFormSubmitting() && !formProps.confirmChanges), notHideContent: true },
            React.createElement(ButtonsRowWrapper, null,
                React.createElement(Form, { colon: false, className: formProps.className, name: model.getFormId(), labelCol: labelCol, wrapperCol: wrapperCol, autoComplete: "off", labelAlign: formProps.labelAlign, layout: formProps.layout === 'horizontal' ? 'horizontal' : 'vertical', requiredMark: formProps.requiredMark, style: formProps.formStyle },
                    React.createElement(FormInit, { model: model }),
                    React.createElement(FieldsRender, { fields: model.getRootFields(), formProps: formProps }),
                    React.createElement(ButtonsRender, { buttons: formButtons, colorType: formProps.colorType, buttonsApi: formApi.buttonsApi, arrowsSelection: formProps.arrowsButtonsSelection, context: formApi }))))));
};
const FormInit = ({ model }) => {
    useEffect(() => {
        model.setFormInit();
    }, [model]);
    return null;
};
