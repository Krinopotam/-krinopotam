/**
 * @CustomComponent
 * @version 0.0.29.7
 * @link omegatester@gmail.com
 * @author Maksim Zaytsev
 * @license MIT
 */

import React, {useEffect} from 'react';

import {IDFormComponentProps, IDFormFieldProps} from './baseComponent';
import {IDFormApi} from "@src/dynamicForm";

// !used in configGenerator parsing. Don't use multi rows comments!
export interface IDFormFieldCustomProps extends Omit<IDFormFieldProps, 'style'> {
    value?: string | React.ReactNode;
    onRender?: ( value: string | React.ReactNode, formApi: IDFormApi) => string | React.ReactNode
}

interface IDFormCustomComponentProps extends IDFormComponentProps {
    fieldProps: IDFormFieldCustomProps
}

export const CustomComponent = ({formApi, fieldName, fieldProps}: IDFormCustomComponentProps): React.JSX.Element => {
    const value =  formApi.model.getFieldValue(fieldName) as string | undefined | React.ReactNode;
    const curValue = fieldProps?.onRender?.(value, formApi) ?? value;

    useEffect(() => {
        formApi.model.setFieldReady(fieldName, true);
    }, [fieldName, formApi.model]);

    return (
        <>{curValue}</>
    );
};
