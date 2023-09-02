import React from "react";
import {DForm} from "@src/dynamic-form";
import {IDFormFieldCheckBoxProps, CheckboxComponent} from "@src/dynamic-form/components/checkboxComponent";

type IComponent = Omit<IDFormFieldCheckBoxProps, 'component'>

/** Dynamic Form CheckboxComponent */
export const CheckboxField = (props: IComponent): React.JSX.Element => <DForm formId={"testForm"} fieldsProps={{field1: {...props, component: CheckboxComponent}}}/>

export default CheckboxField