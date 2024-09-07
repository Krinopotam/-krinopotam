import {ITreeSelectProps, ITreeSelectValue} from '@src/treeSelect';
import React, {Key, useEffect, useRef, useState} from 'react';

export const useApiSelectedState = (
    props: ITreeSelectProps
): [selectedKeys: Key[] | undefined, setSelectedKeys: React.Dispatch<React.SetStateAction<Key[] | undefined>>] => {
    const [selectedKeys, setSelectedKeys] = useState(valueToArray(props.value));
    const firstUpdate = useRef(true);
    /** Set selectedKeys if props changed*/
    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }
        setSelectedKeys(valueToArray(props.value));
    }, [props.value]);

    return [selectedKeys, setSelectedKeys];
};

const valueToArray = (value: ITreeSelectValue | undefined) => {
    if (!value) return undefined;
    if (!Array.isArray(value)) return [value];
    return value;
};