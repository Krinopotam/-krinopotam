import React from "react";
import {DForm} from "@src/dForm";
import {ITabulatorGridFieldProps, TabulatorGridField} from "@src/dForm/fields/tabulatorGrid";

type IComponent = ITabulatorGridFieldProps

/** DForm TabulatorGrid field */
export const TabulatorGridComponent = (props: IComponent): React.JSX.Element => <DForm
    buttons={null}
    fieldsProps={
        {field1: {...props, component: TabulatorGridField}}
    }
/>

export default TabulatorGridComponent
