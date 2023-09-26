/**
 * @CheckboxComponent
 * @version 0.0.28.93
 * @link omegatester@gmail.com
 * @author Maksim Zaytsev
 * @license MIT
 */

import React, {useCallback, useEffect} from 'react';

import {Checkbox} from 'antd';
import type {CheckboxChangeEvent} from 'antd/es/checkbox';
import {IDFormComponentProps, IDFormFieldProps} from './baseComponent';


// !used in configGenerator parsing. Don't use multi rows comments!
export interface IDFormFieldCheckBoxProps extends Omit<IDFormFieldProps, 'placeholder'> {
    /** default value */
    value?: boolean;

    /** The indeterminate checked state of checkbox */
    indeterminate?: boolean;
}

interface IDFormCheckboxComponentProps extends IDFormComponentProps{
    fieldProps: IDFormFieldCheckBoxProps
}

export const CheckboxComponent = ({formApi, fieldName, fieldProps}: IDFormCheckboxComponentProps): React.JSX.Element => {
    const value = formApi.model.getFieldValue(fieldName) as boolean;

    const onChange = useCallback(
        (e: CheckboxChangeEvent) => {
            formApi.model.setFieldValue(fieldName, e.target.checked || false);
            formApi.model.setFieldTouched(fieldName, true);
            formApi.model.setFieldDirty(fieldName, true);
        },
        [fieldName, formApi.model]
    );

    useEffect(() => {
        formApi.model.setFieldReady(fieldName, true);
    }, [fieldName, formApi.model]);

    return (
        <Checkbox
            checked={value}
            disabled={formApi.model.isFieldDisabled(fieldName) || formApi.model.isFieldReadOnly(fieldName)}
            onChange={onChange}
            autoFocus={fieldProps.autoFocus}
            indeterminate={fieldProps.indeterminate}
            style={fieldProps.style}
        />
    );
};