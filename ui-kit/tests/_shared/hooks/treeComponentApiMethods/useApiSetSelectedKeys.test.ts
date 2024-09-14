import React, {Key, useCallback} from 'react';

import {ITreeComponentApi} from "@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes";

export const useApiSetSelectedKeys = (setSelectedKeys: React.Dispatch<React.SetStateAction<Key[] | undefined>>): ITreeComponentApi['setSelectedKeys'] => {
    return useCallback(
        keys => {
            if (!keys) {
                setSelectedKeys(undefined);
                return;
            }

            if (!Array.isArray(keys)) setSelectedKeys([keys]);
            else setSelectedKeys(keys);
        },
        [setSelectedKeys]
    );
};
