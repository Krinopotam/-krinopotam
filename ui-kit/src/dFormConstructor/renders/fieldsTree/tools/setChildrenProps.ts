import {getFieldInfoClassByClassName} from "@src/dFormConstructor/renders/fieldsTree/tools/getFieldInfoClassByClassName";
import {BaseComponentInfo} from "@src/dFormConstructor/fields/baseComponentInfo";
import {IDFormFieldsProps} from "@src/dForm";

/** Function to populate FieldInfo child elements based on passed fields props.
 * Had to extract into a separate function from the BaseComponentInfo class due to errors
 * related to circular referencing of the BaseComponentInfo class before its full initialization
 */
export const setChildrenProps = (parentField:BaseComponentInfo,  fieldsProps: IDFormFieldsProps | undefined)=> {
    if (!parentField.canHaveChild()) return;
    parentField.clearChildren();

    if (typeof fieldsProps !== 'object') return;
    for (const key in fieldsProps) {
        const fieldProps = fieldsProps[key];
        if (!fieldProps.component) continue;
        const componentClassName = typeof fieldProps.component === 'function' ? fieldProps.component.name : String(fieldProps.component);
        const fieldInfoClass = getFieldInfoClassByClassName(componentClassName);
        if (!fieldInfoClass) continue;
        const childField = new fieldInfoClass({id: key, label: fieldProps.label});

        if (!parentField.canHaveChild(childField) || !childField.canHaveParent(parentField)) continue

        childField.setProps(fieldProps);
        parentField.addChild(childField);
    }
}