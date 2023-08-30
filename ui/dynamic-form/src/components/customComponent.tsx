/**
 * @CustomComponent
 * @version 0.0.29.7
 * @link omegatester@gmail.com
 * @author Maksim Zaytsev
 * @license MIT
 */

import React, {useEffect} from 'react';

import {IDFormComponentProps, IDFormFieldProps} from './baseComponent';

// !used in configGenerator parsing. Don't use multi rows comments!
export interface IDFormFieldCustomProps extends IDFormFieldProps {
    default?: string | React.ReactNode;
}

interface IDFormCustomComponentProps extends IDFormComponentProps {
    fieldProps: IDFormFieldCustomProps
}

export const CustomComponent = ({formApi, fieldName}: IDFormCustomComponentProps): React.JSX.Element => {
    const value = formApi.model.getFieldValue(fieldName) as string | undefined | React.ReactNode;

    useEffect(() => {
        formApi.model.setFieldReady(fieldName, true);
    }, [fieldName, formApi.model]);

    return (
        <>{value}</>
    );
};
