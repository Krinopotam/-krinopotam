import React from 'react';

import {ITreeComponentApi} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';
import {IsArray} from '@krinopotam/js-helpers/helpersObjects/isArray';
import {AnyType, IKey} from '@krinopotam/service-types';

export const useApiSetSelectedKeys = (
    setSelectedKeys: React.Dispatch<React.SetStateAction<IKey[] | undefined>>,
    props: AnyType
): ITreeComponentApi['setSelectedKeys'] => {
    return keys => {
        if (!keys) {
            setSelectedKeys(undefined);
            props?.onSelect?.([]);
            return;
        }

        const val = !IsArray(keys) ? [keys] : keys;
        setSelectedKeys(val);
        props?.onSelect?.(val); //Antd Tree component has issue - it not fires onSelect only when user click on item
    };
};
