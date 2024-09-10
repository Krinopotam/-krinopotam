import {ITreeSelectProps} from '@src/treeSelect';
import React, {useEffect, useMemo, useRef, useState} from 'react';
import {IBaseValueWithLabel} from '@src/treeSelect/types/types';
import {IFieldNames} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';
import {anyValueToValuesWithLabel} from "@src/treeSelect/tools/dataConvertors";

export const useValuesState = (
    props: ITreeSelectProps,
    fieldNames: IFieldNames
): [value: IBaseValueWithLabel[] | undefined, setValue: React.Dispatch<React.SetStateAction<IBaseValueWithLabel[] | undefined>>] => {
    const valuesWithLabel = useValueWithLabel(props, fieldNames);

    const [value, setValue] = useState(valuesWithLabel);
    const firstUpdate = useRef(true);
    /** Set value if props changed*/
    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }
        setValue(valuesWithLabel);
    }, [valuesWithLabel]);

    return [value, setValue];
};

const useValueWithLabel = (props: ITreeSelectProps, fieldNames: IFieldNames) => {
    return useMemo(() => {
        return anyValueToValuesWithLabel(props.value, fieldNames);
    }, [fieldNames, props.value]);
};
