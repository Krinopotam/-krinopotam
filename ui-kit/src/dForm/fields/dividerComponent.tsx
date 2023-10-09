/**
 * @DividerComponent
 * @version 0.0.1
 * @link omegatester@gmail.com
 * @author Maksim Zaytsev
 * @license MIT
 */

import React, {CSSProperties, useEffect} from 'react';

import {IDFormComponentProps, IDFormFieldProps} from './baseComponent';
import {Divider} from "antd";

// !used in configGenerator parsing. Don't use multi rows comments!
export interface IDFormFieldDividerProps extends Omit<IDFormFieldProps, 'autoFocus'> {
    /** Divider title */
    value?: string | React.ReactNode,

    /** Divider text show as plain style */
    plain?: boolean,

    /** Whether line is dashed */
    dashed?: boolean,

    /** The position of a title inside divider */
    orientation?: "center" | "left" | "right",

    /** The margin-left/right between the title and its closest border, while the orientation must be left or right */
    orientationMargin?: string | number
}

interface IDFormDividerComponentProps extends IDFormComponentProps {
    fieldProps: IDFormFieldDividerProps
}

export const DividerComponent = ({formApi, fieldName, fieldProps}: IDFormDividerComponentProps): React.JSX.Element => {
    useEffect(() => {
        formApi.model.setFieldReady(fieldName, true);
    }, [fieldName, formApi.model]);

    const style: CSSProperties = {margin: 0, ...fieldProps.style}

    return (
        <Divider
            orientation={fieldProps.orientation}
            orientationMargin={fieldProps.orientationMargin}
            plain={fieldProps.plain}
            dashed={fieldProps.dashed}
            style={style}
        >
            {fieldProps.value}
        </Divider>
    );
};
