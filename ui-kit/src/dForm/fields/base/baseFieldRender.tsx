// noinspection DuplicatedCode

import React, {useSyncExternalStore} from "react";
import Animate from "rc-animate";
import {Form} from "antd";
import {IBaseFieldAny} from "./baseField";
import {DModel} from "@src/dForm";

export const BaseFieldRender = ({field, children}: { field: IBaseFieldAny, children?: React.ReactNode }): React.JSX.Element => {
    const fieldName = field.getName();
    const fieldProps = field.getProps();
    const formModel = field.getFormModel()
    useExternalRenderCall(formModel, fieldName);

    const error = field.getError();
    const fieldHidden = field.isHidden();

    const Component = fieldProps.component;

    const style: React.CSSProperties = {
        //marginBottom: formProps.layout !== 'horizontal' ? 0 : undefined,
        width: fieldProps.width,
        flexGrow: fieldProps.width ? 0 : 1,
        flexShrink: fieldProps.width ? 0 : 1,
        flexBasis: fieldProps.width ? undefined : 0,
        marginBottom: Component.name === 'DividerComponent' || Component.name === 'CustomComponent' ? 0 : undefined, //WORKAROUND
        ...fieldProps.rowStyle,
    };

    return (
        <Animate component="" transitionName="zoom">
            {!fieldHidden ? (
                <Form.Item
                    key={'item_' + fieldName}
                    label={fieldProps.label}
                    //name={fieldName} //!Do not specify "name". Components inside Form.Item with "name" property will turn into controlled mode, which makes "defaultValue" and "value" not work anymore
                    help={error || undefined}
                    validateStatus={error ? 'error' : undefined}
                    required={!!fieldProps.requiredMark}
                    tooltip={fieldProps.tooltip}
                    style={style}
                >
                    {children}
                </Form.Item>
            ) : null}
        </Animate>
    );
}

const useExternalRenderCall = (formModel: DModel, fieldName: string) => {
    const subscribe = formModel.subscribeRenderField(fieldName);

    const getSnapshot = () => {
        const snaps = formModel.getFieldRenderSnapshots();
        if (!snaps[fieldName]) return undefined;
        return snaps[fieldName];
    };

    return useSyncExternalStore(subscribe, getSnapshot);
};