/**
 * @PasswordComponent
 * @version 0.0.29.4
 * @link omegatester@gmail.com
 * @author Maksim Zaytsev
 * @license MIT
 */

import React, {useCallback, useEffect} from 'react';

import {IDFormComponentProps, IDFormFieldProps} from './baseComponent';
import {Input} from 'antd';

// !used in configGenerator parsing. Don't use multi rows comments!
export interface IDFormFieldPasswordProps extends IDFormFieldProps {
    /** Default value */
    value?: string | number;

    /** Show input counter */
    showCount?: boolean;

    /** Max input length */
    maxLength?: number;

    /** Icons render */
    iconRender?: (visible: boolean) => React.ReactNode;
}

interface IDFormPasswordComponentProps extends IDFormComponentProps {
    fieldProps: IDFormFieldPasswordProps
}

export const PasswordComponent = ({formApi, fieldName, fieldProps}: IDFormPasswordComponentProps): React.JSX.Element => {
    const value = formApi.model.getFieldValue(fieldName) as string | number | readonly string[] | undefined;

    const onChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            formApi.model.setFieldValue(fieldName, e.target.value || null);
            formApi.model.setFieldDirty(fieldName, true);
        },
        [fieldName, formApi.model]
    );
    const onBlur = useCallback(() => {
        formApi.model.setFieldTouched(fieldName, true);
    }, [fieldName, formApi.model]);

    useEffect(() => {
        formApi.model.setFieldReady(fieldName, true);
    }, [fieldName, formApi.model]);

    return (
        <Input.Password
            autoFocus={fieldProps.autoFocus}
            disabled={formApi.model.isFieldDisabled(fieldName)}
            iconRender={fieldProps.iconRender}
            maxLength={fieldProps.maxLength}
            name={fieldName}
            onBlur={onBlur}
            onChange={onChange}
            placeholder={fieldProps.placeholder}
            readOnly={formApi.model.isFieldReadOnly(fieldName)}
            showCount={fieldProps.showCount}
            value={value}
            style={fieldProps.style}
        />
    );
};
