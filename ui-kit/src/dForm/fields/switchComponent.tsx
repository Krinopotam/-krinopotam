/**
 * @SwitchComponent
 * @version 0.0.29.0
 * @link omegatester@gmail.com
 * @author Maksim Zaytsev
 * @license MIT
 */

import React, {useCallback, useEffect} from 'react';

import {IDFormComponentProps, IDFormFieldProps} from './baseComponent';
import {Switch} from 'antd';

// !used in configGenerator parsing. Don't use multi rows comments!
export interface IDFormFieldSwitchProps extends IDFormFieldProps {
    /** Default value */
    value?: boolean;

    /** The content to be shown when the state is checked */
    checkedChildren?: React.ReactNode;

    /** The content to be shown when the state is unchecked */
    unCheckedChildren?: React.ReactNode;

    /** Loading state of switch */
    loading?: boolean;
}

interface IDFormSwitchComponentProps extends IDFormComponentProps {
    fieldProps: IDFormFieldSwitchProps
}

export const SwitchComponent = ({formApi, fieldName, fieldProps}: IDFormSwitchComponentProps): React.JSX.Element => {
    const value = formApi.model.getFieldValue(fieldName) as boolean | undefined;

    const onChange = useCallback(
        (checked: boolean) => {
            formApi.model.setFieldValue(fieldName, checked || false);
            formApi.model.setFieldDirty(fieldName, true);
            formApi.model.setFieldTouched(fieldName, true);
        },
        [fieldName, formApi.model]
    );

    useEffect(() => {
        formApi.model.setFieldReady(fieldName, true);
    }, [fieldName, formApi.model]);

    return (
        <Switch
            autoFocus={fieldProps.autoFocus}
            checked={value}
            checkedChildren={fieldProps.checkedChildren}
            disabled={formApi.model.isFieldDisabled(fieldName) || formApi.model.isFieldReadOnly(fieldName)}
            loading={fieldProps.loading}
            onChange={onChange}
            unCheckedChildren={fieldProps.unCheckedChildren}
            style={fieldProps.style}
        />
    );
};
