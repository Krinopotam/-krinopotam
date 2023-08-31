/**
 * @DividerComponent
 * @version 0.0.1
 * @link omegatester@gmail.com
 * @author Maksim Zaytsev
 * @license MIT
 */

import React, {useEffect} from 'react';

import {IDFormComponentProps, IDFormFieldProps} from './baseComponent';
import {Divider} from "antd";

// !used in configGenerator parsing. Don't use multi rows comments!
export interface IDFormFieldDividerProps extends Omit<IDFormFieldProps, 'readOnly' | 'disabled' | 'default' | 'autoFocus'> {
    /** Divider title */
    title?: string | React.ReactNode,

    /** Divider title without heading style */
    plain?: boolean,

    /** without heading style orientation */
    orientation?: "center" | "left" | "right",

    /** without heading style orientation margin */
    orientationMargin?: string | number
}

interface IDFormDividerComponentProps extends IDFormComponentProps {
    fieldProps: IDFormFieldDividerProps
}

export const DividerComponent = ({formApi, fieldName, fieldProps}: IDFormDividerComponentProps): React.JSX.Element => {
    useEffect(() => {
        formApi.model.setFieldReady(fieldName, true);
    }, [fieldName, formApi.model]);

    return (
        <Divider orientation={fieldProps.orientation} orientationMargin={fieldProps.orientation} plain={fieldProps.plain}>{fieldProps.title}</Divider>
    );
};
