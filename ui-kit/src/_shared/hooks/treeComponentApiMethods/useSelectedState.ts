import React, {Key, useState} from 'react';
import {IsArray} from '@krinopotam/js-helpers/helpersObjects/isArray';
import {useUpdateEffect} from '@krinopotam/common-hooks';

export const useSelectedState = (
    key: Key | Key[] | undefined
): [selectedKeys: Key[] | undefined, setSelectedKeys: React.Dispatch<React.SetStateAction<Key[] | undefined>>] => {
    const [selectedKeys, setSelectedKeys] = useState(valueToArray(key));

    useUpdateEffect(() => {
        /** Set selectedKeys if props changed*/
        setSelectedKeys(valueToArray(key));
    }, [key]);

    return [selectedKeys, setSelectedKeys];
};

const valueToArray = (value: Key | Key[] | undefined) => {
    if (!value) return undefined;
    return !IsArray(value) ? [value] : value;
};
