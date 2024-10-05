import {TreeSelectField} from '@src/dForm/fields/treeSelect/treeSelectField';

export const useOnClear = (field: TreeSelectField) => {
    return () => {
        field.setDirty(true);
        field.setTouched(true);
        const fieldProps = field.getProps();
        fieldProps.onClear?.();
    };
};
