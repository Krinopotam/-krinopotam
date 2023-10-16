import React from "react";
import {DForm} from "@src/dForm";
import {INumberFieldProps, NumberField} from "@src/dForm/fields/number/numberField";

type IComponent = INumberFieldProps;

/** DForm Number field */
export const NumberComponent = (props: IComponent): React.JSX.Element => <DForm
    buttons={null}
    fieldsProps={
        {field1: {...props, component: NumberField} }
    }/>

export default NumberComponent