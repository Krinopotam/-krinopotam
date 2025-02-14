import {getFieldInfoClassByClassName} from "@src/dFormConstructor/renders/fieldsTree/tools/getFieldInfoClassByClassName";
import {BaseComponentInfo} from "@src/dFormConstructor/fields/baseComponentInfo";
import {IDFormFieldsProps} from "@src/dForm";

/** Function to populate FieldInfo child elements based on passed fields props.
 * Had to extract into a separate function from the BaseComponentInfo class due to errors
 * related to circular referencing of the BaseComponentInfo class before its full initialization
 */
export const setChildrenProps = (field:BaseComponentInfo,  fieldsProps: IDFormFieldsProps | undefined)=> {
    if (field.canHaveChildren() === false) return;
    field.clearChildren();

    if (typeof fieldsProps !== 'object') return;
    for (const key in fieldsProps) {
        const fProps = fieldsProps[key];
        if (!fProps.component) continue;
        const componentClassName = typeof fProps.component === 'function' ? fProps.component.name : String(fProps.component);
        const fieldInfoClass = getFieldInfoClassByClassName(componentClassName);
        if (!fieldInfoClass) continue;
        const fieldInfo = new fieldInfoClass({id: key, label: fProps.label});
        if (field.canHaveChildren() !== true && field.canHaveChildren() !== fieldInfo.CODE) continue;
        if (fieldInfo.shouldHaveParent() !== true && fieldInfo.shouldHaveParent() !== field.CODE) continue;
        fieldInfo.setProps(fProps);
        field.addChild(fieldInfo);
    }
}