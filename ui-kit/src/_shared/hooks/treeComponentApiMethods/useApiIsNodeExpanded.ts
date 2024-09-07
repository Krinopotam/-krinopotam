import {Key, useCallback} from 'react';

import {ITreeComponentApi} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';

export const useApiIsNodeExpanded = (api: {
    getExpandedKeys: ITreeComponentApi['getExpandedKeys'];
    getFieldNames: ITreeComponentApi['getFieldNames'];
}): ITreeComponentApi['isNodeExpanded'] => {
    return useCallback(
        node => {
            const fieldNames = api.getFieldNames();
            const key = typeof node === 'object' ? (node[fieldNames.key] as Key) : node;
            return api.getExpandedKeys()?.includes(key) ?? false;
        },
        [api]
    );
};
