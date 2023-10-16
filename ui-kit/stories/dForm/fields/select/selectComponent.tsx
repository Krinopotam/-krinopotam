import React from "react";
import {DForm} from "@src/dForm";
import {ISelectFieldProps, SelectField} from "@src/dForm/fields/select/selectField";
import {SelectDataSet} from "../../../datasets/select";

type IComponent = ISelectFieldProps

/** DForm Select field */
export const SelectComponent = (props: IComponent): React.JSX.Element => <DForm
    buttons={null}
    fieldsProps={
        {field1: {...props, dataSet:SelectDataSet, component: SelectField}}
    }
/>

export default SelectComponent
