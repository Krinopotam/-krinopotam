import {ITreeSelectFieldProps, TreeSelectField} from '@src/dForm/fields/treeSelect/treeSelectField';
import {useCallback} from 'react';
import {ITreeSelectProps} from '@src/treeSelect';

export const useOnChange = (field: TreeSelectField, fieldProps: ITreeSelectFieldProps) => {
    return useCallback<NonNullable<ITreeSelectProps['onChange']>>(
        (labeledVal, keys, nodes) => {
            if (field.isReady()) {
                switch (fieldProps.valueType) {
                    case undefined:
                    case 'node':
                        if (fieldProps.multiple) field.setValue(nodes ?? undefined);
                        else field.setValue(nodes?.length ? nodes[0] : undefined);
                        break;
                    case 'labeledValue':
                        field.setValue(labeledVal ?? undefined);
                        break;
                    case 'key':
                        if (fieldProps.multiple) field.setValue(keys ?? undefined);
                        else field.setValue(keys?.length ? keys[0] : undefined);
                        break;
                }

                field.setDirty(true);
            }

            fieldProps.onChange?.(labeledVal, keys, nodes, field);
        },
        [field, fieldProps]
    );
};