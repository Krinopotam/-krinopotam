import {TreeSelectField} from '@src/dForm/fields/treeSelect/treeSelectField';
import {useCallback} from 'react';

export const useOnClear = (field: TreeSelectField) => {
    return useCallback(() => {
        field.setDirty(true);
        field.setTouched(true);
        const fieldProps = field.getProps();
        fieldProps.onClear?.();
    }, [field]);
};