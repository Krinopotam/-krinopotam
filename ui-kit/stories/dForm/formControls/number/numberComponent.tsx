import React from "react";
import {DForm, IDFormFieldProps} from "@src/dForm";
import {NumberField} from "@src/dForm/fields/number/numberField";

type IComponent = IDFormFieldProps;

/** DForm Number component */
export const NumberComponent = (props: IComponent): React.JSX.Element => <DForm
    buttons={null}
    fieldsProps={
        {field1: {...props, component: NumberField} }
    }/>

export default NumberComponent