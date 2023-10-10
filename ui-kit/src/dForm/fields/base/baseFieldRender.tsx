// noinspection DuplicatedCode

import React, {useSyncExternalStore} from 'react';
import Animate from 'rc-animate';
import {Form} from 'antd';
import {IBaseFieldAny} from './baseField';

export const BaseFieldRender = ({field, noLabel, children}: {field: IBaseFieldAny; noLabel?: boolean; children?: React.ReactNode}): React.JSX.Element => {
    const fieldName = field.getName();
    const fieldProps = field.getProps();

    useSyncExternalStore(field.subscribe.bind(field), field.getSnapshot.bind(field));

    const error = field.getError();
    const fieldHidden = field.isHidden();

    //const Component = fieldProps.component;

    const style: React.CSSProperties = {
        //marginBottom: formProps.layout !== 'horizontal' ? 0 : undefined,
        width: fieldProps.width,
        flexGrow: fieldProps.width ? 0 : 1,
        flexShrink: fieldProps.width ? 0 : 1,
        flexBasis: fieldProps.width ? undefined : 0,
        //marginBottom: Component.name === 'DividerComponent' || Component.name === 'CustomComponent' ? 0 : undefined, //WORKAROUND
        ...fieldProps.rowStyle,
    };

    return (
        <Animate key={'item_' + fieldName} component="" transitionName="zoom">
            {!fieldHidden ? (
                <Form.Item
                    label={!noLabel ? fieldProps.label : undefined}
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
};
