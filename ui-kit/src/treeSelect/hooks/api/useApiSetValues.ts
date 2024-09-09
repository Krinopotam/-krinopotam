import React, {useCallback} from 'react';
import {ITreeSelectValue} from '@src/treeSelect';
import {IBaseValueWithLabel} from '@src/treeSelect/types/types';

export const useApiSetValues = (setValues: React.Dispatch<React.SetStateAction< IBaseValueWithLabel[] | undefined>>) => {
    return useCallback(
        (value: ITreeSelectValue) => {
            setValues(convertValueToValuesWithLabel(value));
        },
        [setValues]
    );
};

export const convertValueToValuesWithLabel = (value: ITreeSelectValue): IBaseValueWithLabel[] | undefined => {
    if (!value) return undefined;
    if (!Array.isArray(value)) {
        if (typeof value === 'object') return [value];
        else return [{value: value}];
    }

    const result: IBaseValueWithLabel[] = [];
    for (const item of value) {
        if (!item) continue;

        if (typeof item === 'object') result.push(item);
        else result.push({value: item});
    }
    return result;
};
