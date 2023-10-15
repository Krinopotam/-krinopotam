import React from "react";
import {DForm} from "@src/dForm";
import {ISelectFieldProps, SelectField} from "@src/dForm/fields/select/selectField";
import {ISelectOptions} from "@src/select";

type IComponent = ISelectFieldProps

const dataSet: ISelectOptions = [
    {
        id: '01',
        label: 'Аналитика',
    },

    {
        id: '02',
        label: 'Продажи',
    },
    {
        id: '03',
        label: 'Закупки',
    },
];

/** DForm Select component */
export const SelectComponent = (props: IComponent): React.JSX.Element => <DForm
    buttons={null}
    fieldsProps={
        {field1: {...props, dataSet:dataSet, component: SelectField}}
    }
/>

export default SelectComponent
