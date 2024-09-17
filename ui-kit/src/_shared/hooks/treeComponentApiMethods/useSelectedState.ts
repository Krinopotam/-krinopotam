import React, {useState} from 'react';
import {IsArray} from '@krinopotam/js-helpers/helpersObjects/isArray';
import {useUpdateEffect} from '@krinopotam/common-hooks';
import {IKey} from "@krinopotam/service-types";

export const useSelectedState = (
    key: IKey | IKey[] | undefined
): [selectedKeys: IKey[] | undefined, setSelectedKeys: React.Dispatch<React.SetStateAction<IKey[] | undefined>>] => {
    const [selectedKeys, setSelectedKeys] = useState(valueToArray(key));

    useUpdateEffect(() => {
        /** Set selectedKeys if props changed*/
        setSelectedKeys(valueToArray(key));
    }, [key]);

    return [selectedKeys, setSelectedKeys];
};

const valueToArray = (value: IKey | IKey[] | undefined) => {
    if (!value) return undefined;
    return !IsArray(value) ? [value] : value;
};
