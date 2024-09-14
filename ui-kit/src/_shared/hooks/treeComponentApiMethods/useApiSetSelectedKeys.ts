import React, {Key, useCallback} from 'react';

import {ITreeComponentApi} from "@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes";
import {IsArray} from "@krinopotam/js-helpers/helpersObjects/isArray";

export const useApiSetSelectedKeys = (setSelectedKeys: React.Dispatch<React.SetStateAction<Key[] | undefined>>): ITreeComponentApi['setSelectedKeys'] => {
    return useCallback(
        keys => {
            if (!keys) {
                setSelectedKeys(undefined);
                return;
            }

            if (!IsArray(keys)) setSelectedKeys([keys]);
            else setSelectedKeys(keys);
        },
        [setSelectedKeys]
    );
};
