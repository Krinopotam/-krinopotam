import {TreeSelectField} from '@src/dForm/fields/treeSelect/treeSelectField';
import {useCallback} from 'react';

export const useOnBlur = (field: TreeSelectField) => {
    return useCallback(() => {
        field.setTouched(true);
    }, [field]);
};