import {ILabeledValue} from '@src/treeSelect/types/types';
import {useCallback} from 'react';
import {IKey} from "@krinopotam/service-types";
import {IsArray} from "@krinopotam/js-helpers/helpersObjects/isArray";

export const useApiGetSelectedKeys = (value?: ILabeledValue | ILabeledValue[]) => {
    return useCallback(
        (extraValue?: ILabeledValue | ILabeledValue[]) => {
            const val = extraValue ?? value;
            if (!val) return undefined;

            if (!IsArray(val)) return [val.value];
            const result: IKey[] = [];
            for (const item of val) {
                result.push(item.value);
            }
            return result;
        },
        [value]
    );
};