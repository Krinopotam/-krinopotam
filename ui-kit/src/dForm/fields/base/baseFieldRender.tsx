// noinspection DuplicatedCode

import {IBaseField} from '@src/dForm/fields/base';
import {Form} from 'antd';
import React, {useSyncExternalStore} from 'react';

export const BaseFieldRender = ({
    field,
    altLabel,
    children,
}: {
    field: IBaseField;
    altLabel?: React.ReactNode;
    children?: React.ReactNode;
}): React.JSX.Element => {
    useSyncExternalStore(field.subscribe.bind(field), field.getSnapshot.bind(field));

    const fieldProps = field.getProps();
    const formProps = field.getFormProps();

    const error = field.getError();

    const style: React.CSSProperties = {
        //marginBottom: formProps.layout !== 'horizontal' ? 0 : undefined,
        /*        flexGrow: fieldProps.width ? 0 : 1,
                flexShrink: fieldProps.width ? 0 : 1,
                flexBasis: fieldProps.width ? undefined : 0,*/
        //border: '1px solid red',
        height: '100%',
        ...fieldProps.itemWrapperStyle,
    };

    let emptyLabel: string | undefined = undefined;
    if (formProps.layout === 'horizontal') emptyLabel = ' ';
    const label = typeof altLabel !== 'undefined' ? altLabel : (fieldProps.label ?? emptyLabel);

    return (
        <Form.Item
            label={label}
            className={fieldProps.itemWrapperClassName}
            //name={fieldName} //!Do not specify "name". Components inside Form.Item with "name" property will turn into controlled mode, which makes "defaultValue" and "value" not work anymore
            help={error || undefined}
            validateStatus={error ? 'error' : undefined}
            required={!!fieldProps.requiredMark}
            tooltip={fieldProps.tooltip}
            style={style}
        >
            {children}
        </Form.Item>
    );
};