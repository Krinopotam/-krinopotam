import {useCallback} from 'react';

import {ITreeComponentApi} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';
import {IKey} from "@krinopotam/service-types";

export const useApiIsNodeSelected = (api: {
    getSelectedKeys: ITreeComponentApi['getSelectedKeys'];
    getFieldNames: ITreeComponentApi['getFieldNames'];
}): ITreeComponentApi['isNodeSelected'] => {
    return useCallback(
        node => {
            if (!node) return false;
            const key: IKey = typeof node === 'object' ? (node[api.getFieldNames().key] as IKey) : node;
            const selectedKeys = api.getSelectedKeys();
            if (!selectedKeys) return false;
            return selectedKeys.includes(key);
        },
        [api]
    );
};
