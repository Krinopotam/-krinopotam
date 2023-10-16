import React from "react";
import {DForm} from "@src/dForm";
import {ITreeSelectFieldProps, TreeSelectField} from "@src/dForm/fields/treeSelect/treeSelectField";
import {TreeSelectDataSet} from "../../../datasets/treeSelect";

type IComponent = ITreeSelectFieldProps

/** DForm TreeSelect field */
export const TreeSelectComponent = (props: IComponent): React.JSX.Element => <DForm
    buttons={null}
    fieldsProps={
        {field1: {...props, dataSet:TreeSelectDataSet, component: TreeSelectField}}
    }
/>

export default TreeSelectComponent
