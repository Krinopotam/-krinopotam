import {ITreeSelectProps} from '@src/treeSelect';
import React, {useEffect, useMemo, useRef, useState} from 'react';
import {IBaseValueWithLabel} from '@src/treeSelect/types/types';
import {convertValueToValuesWithLabel} from '@src/treeSelect/hooks/api/useApiSetValues';

export const useValuesState = (
    props: ITreeSelectProps
): [value: IBaseValueWithLabel[] | undefined, setValue: React.Dispatch<React.SetStateAction<IBaseValueWithLabel[] | undefined>>] => {
    const valuesWithLabel = useValueWithLabel(props);

    const [value, setValue] = useState(valuesWithLabel);
    const firstUpdate = useRef(true);
    /** Set value if props changed*/
    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }
        setValue(convertValueToValuesWithLabel(valuesWithLabel));
    }, [valuesWithLabel]);

    return [value, setValue];
};

const useValueWithLabel = (props: ITreeSelectProps) => {
    return useMemo(() => {
        return convertValueToValuesWithLabel(props.value);
    }, [props.value]);
};
