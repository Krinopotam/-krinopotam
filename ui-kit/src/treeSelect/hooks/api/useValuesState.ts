import {ITreeSelectProps, ITreeSelectValue} from '@src/treeSelect';
import React, {useEffect, useMemo, useRef, useState} from 'react';
import {ILabeledValue} from '@src/treeSelect/types/types';
import {IFieldNames} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';
import {anyValueToValuesWithLabel} from '@src/treeSelect/tools/dataConvertors';

export const useValuesState = (
    {value}: ITreeSelectProps,
    fieldNames: IFieldNames
): [value: ILabeledValue[] | undefined, setValue: React.Dispatch<React.SetStateAction<ILabeledValue[] | undefined>>] => {
    const valuesWithLabel = useValueWithLabel(value, fieldNames);

    const [val, setVal] = useState(valuesWithLabel);
    const firstUpdate = useRef(true);
    /** Set value if props changed*/
    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }
        setVal(valuesWithLabel);
    }, [value, valuesWithLabel]);

    return [val, setVal];
};

const useValueWithLabel = (value: ITreeSelectValue, fieldNames: IFieldNames) => {
    return useMemo(() => {
        return anyValueToValuesWithLabel(value, fieldNames);
    }, [fieldNames, value]);
};
