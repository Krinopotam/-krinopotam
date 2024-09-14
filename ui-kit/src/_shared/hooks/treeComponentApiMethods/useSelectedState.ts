import React, {Key, useEffect, useRef, useState} from 'react';
import {IsArray} from "@krinopotam/js-helpers/helpersObjects/isArray";

export const useSelectedState = (
    key: Key | Key[] | undefined
): [selectedKeys: Key[] | undefined, setSelectedKeys: React.Dispatch<React.SetStateAction<Key[] | undefined>>] => {
    const [selectedKeys, setSelectedKeys] = useState(valueToArray(key));
    const firstUpdate = useRef(true);
    /** Set selectedKeys if props changed*/
    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }
        setSelectedKeys(valueToArray(key));
    }, [key]);

    return [selectedKeys, setSelectedKeys];
};

const valueToArray = (value: Key | Key[] | undefined) => {
    if (!value) return undefined;
    return !IsArray(value) ? [value] : value;
};
