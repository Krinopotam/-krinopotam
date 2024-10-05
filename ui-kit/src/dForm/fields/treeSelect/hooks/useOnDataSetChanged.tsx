import {ITreeSelectFieldProps, TreeSelectField} from '@src/dForm/fields/treeSelect/treeSelectField';
import {ITreeSelectProps} from '@src/treeSelect';

export const useOnDataSetChanged = (field: TreeSelectField, fieldProps: ITreeSelectFieldProps): ITreeSelectProps['onDataSetChanged'] => {
    return data => fieldProps.onDataSetChanged?.(data, field);
};