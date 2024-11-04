import {IBaseFieldProps} from "@src/dForm/fields/base";
import {BaseField} from '@src/dForm/fields/base/baseField';
import React from 'react';
import {DividerFieldRender} from "@src/dForm/fields/divider/dividerFieldRender";

export interface IDividerFieldProps extends IBaseFieldProps<DividerField, string | React.ReactNode> {
    /** Divider text show as plain style */
    plain?: boolean,

    /** Whether line is dashed */
    dashed?: boolean,

    /** The position of a title inside divider */
    orientation?: "center" | "left" | "right",

    /** The margin-left/right between the title and its closest border, while the orientation must be left or right */
    orientationMargin?: string | number
}

export class DividerField extends BaseField<IDividerFieldProps> {
    protected render() {
        return <DividerFieldRender field={this} />;
    }

    renderField(): React.ReactNode {
        return this.render();
    }
}
