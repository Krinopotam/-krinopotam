import {ITreeSelectFieldProps, TreeSelectField} from '@src/dForm/fields/treeSelect/treeSelectField';
import {useCallback} from 'react';
import {ITreeSelectProps} from '@src/treeSelect';

export const useOnDataSetChanged = (field: TreeSelectField, fieldProps: ITreeSelectFieldProps) => {
    return useCallback<NonNullable<ITreeSelectProps['onDataSetChanged']>>(data => fieldProps.onDataSetChanged?.(data, field), [field, fieldProps]);
};