import {BaseField, IBaseFieldProps,} from "@src/dForm/fields/base/baseField";
import React from "react";
import {SwitchFieldRender} from "@src/dForm/fields/switch/switchFieldRender";

export interface ISwitchFieldProps extends IBaseFieldProps<SwitchField> {
    /** Default value */
    value?: boolean;

    /** The content to be shown when the state is checked */
    checkedChildren?: React.ReactNode;

    /** The content to be shown when the state is unchecked */
    unCheckedChildren?: React.ReactNode;

    /** Loading state of switch */
    loading?: boolean;
}

export class SwitchField extends BaseField<ISwitchFieldProps> {
    protected render() {
        return <SwitchFieldRender field={this} />
    }
}
