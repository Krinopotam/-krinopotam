import {TreeSelectField} from '@src/dForm/fields/treeSelect/treeSelectField';

export const useOnBlur = (field: TreeSelectField) => {
    return () => {
        field.setTouched(true);
    };
};
