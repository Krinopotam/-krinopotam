import {ILabeledValue} from '@src/treeSelect/types/types';
import {Key, useCallback} from 'react';

export const useApiGetSelectedKeys = (value?: ILabeledValue | ILabeledValue[]) => {
    return useCallback(
        (extraValue?: ILabeledValue | ILabeledValue[]) => {
            const val = extraValue ?? value;
            if (!val) return undefined;

            if (!Array.isArray(val)) return [val.value];
            const result: Key[] = [];
            for (const item of val) {
                result.push(item.value);
            }
            return result;
        },
        [value]
    );
};