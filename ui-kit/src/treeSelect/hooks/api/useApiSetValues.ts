import {IFieldNames} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';
import {ITreeSelectValue} from '@src/treeSelect';

import {anyValueToValuesWithLabel} from '@src/treeSelect/tools/anyValueToValuesWithLabel';
import {ILabeledValue} from '@src/treeSelect/types/types';
import React, {useCallback} from 'react';

export const useApiSetValues = (setValues: React.Dispatch<React.SetStateAction<ILabeledValue[] | null>>, fieldNames: IFieldNames) => {
    return useCallback(
        (value: ITreeSelectValue) => {
            setValues(anyValueToValuesWithLabel(value, fieldNames));
        },
        [fieldNames, setValues]
    );
};
