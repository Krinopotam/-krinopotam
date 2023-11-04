import React, { useSyncExternalStore } from 'react';
import Animate from 'rc-animate';
import { Form } from 'antd';
export const BaseFieldRender = ({ field, altLabel, children }) => {
    var _a;
    const fieldProps = field.getProps();
    const formProps = field.getFormProps();
    useSyncExternalStore(field.subscribe.bind(field), field.getSnapshot.bind(field));
    const error = field.getError();
    const fieldHidden = field.isHidden();
    const style = Object.assign({ height: '100%' }, fieldProps.rowStyle);
    let emptyLabel = undefined;
    if (formProps.layout === 'horizontal')
        emptyLabel = ' ';
    const label = typeof altLabel !== 'undefined' ? altLabel : (_a = fieldProps.label) !== null && _a !== void 0 ? _a : emptyLabel;
    return (React.createElement(Animate, { component: "", transitionName: "zoom" }, !fieldHidden ? (React.createElement(Form.Item, { label: label, help: error || undefined, validateStatus: error ? 'error' : undefined, required: !!fieldProps.requiredMark, tooltip: fieldProps.tooltip, style: style }, children)) : null));
};
//# sourceMappingURL=baseFieldRender.js.map