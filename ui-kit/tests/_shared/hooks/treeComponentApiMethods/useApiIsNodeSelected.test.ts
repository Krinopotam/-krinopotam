import {Key, useCallback} from 'react';

import {ITreeComponentApi} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';

export const useApiIsNodeSelected = (api: {
    getSelectedKeys: ITreeComponentApi['getSelectedKeys'];
    getFieldNames: ITreeComponentApi['getFieldNames'];
}): ITreeComponentApi['isNodeSelected'] => {
    return useCallback(
        node => {
            if (!node) return false;
            const key: Key = typeof node === 'object' ? (node[api.getFieldNames().key] as Key) : node;
            const selectedKeys = api.getSelectedKeys();
            if (!selectedKeys) return false;
            return selectedKeys.includes(key);
        },
        [api]
    );
};
