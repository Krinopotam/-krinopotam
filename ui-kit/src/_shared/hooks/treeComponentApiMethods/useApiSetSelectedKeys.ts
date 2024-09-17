import React from 'react';

import {ITreeComponentApi} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';
import {IsArray} from '@krinopotam/js-helpers/helpersObjects/isArray';
import {IKey} from '@krinopotam/service-types';

export const useApiSetSelectedKeys = (setSelectedKeys: React.Dispatch<React.SetStateAction<IKey[] | undefined>>): ITreeComponentApi['setSelectedKeys'] => {
    return keys => {
        if (!keys) {
            setSelectedKeys(undefined);
            return;
        }

        if (!IsArray(keys)) setSelectedKeys([keys]);
        else setSelectedKeys(keys);
    };
};
