import {Key, useCallback} from 'react';

import {ITreeComponentApi} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';

export const useApiEnsureNodeVisible = (
    api: {
        expandParentNodes: ITreeComponentApi['expandParentNodes'];
        getFieldNames: ITreeComponentApi['getFieldNames'];
    },
    extraFn?: (key: Key, externalDataset?: Record<string, unknown>[]) => void
): ITreeComponentApi['ensureNodeVisible'] => {
    return useCallback(
        (node, externalDataset) => {
            const fieldNames = api.getFieldNames();
            const key: Key = typeof node === 'object' ? (node[fieldNames.key] as Key) : node;
            api.expandParentNodes(key, externalDataset);
            if (extraFn) extraFn(key, externalDataset);
        },
        [api, extraFn]
    );
};
