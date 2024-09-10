import {IBaseValueWithLabel} from '@src/treeSelect/types/types';
import {Key, useCallback} from 'react';

export const useApiGetSelectedKeys = (value?: IBaseValueWithLabel | IBaseValueWithLabel[]) => {
    return useCallback(
        (extraValue?: IBaseValueWithLabel | IBaseValueWithLabel[]) => {
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