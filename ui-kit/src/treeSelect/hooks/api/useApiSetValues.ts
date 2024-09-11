import React, {useCallback} from 'react';
import {ITreeSelectValue} from '@src/treeSelect';
import {ILabeledValue} from '@src/treeSelect/types/types';
import {IFieldNames} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';
import {anyValueToValuesWithLabel} from '@src/treeSelect/tools/dataConvertors';

export const useApiSetValues = (setValues: React.Dispatch<React.SetStateAction<ILabeledValue[] | undefined>>, fieldNames: IFieldNames) => {
    return useCallback(
        (value: ITreeSelectValue) => {
            setValues(anyValueToValuesWithLabel(value, fieldNames));
        },
        [fieldNames, setValues]
    );
};

