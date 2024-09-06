import {Key, useCallback} from 'react';

import {ITreeComponentApi} from "@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes";

export const useApiEnsureNodeVisible = (
    api: {expandParentNodes: ITreeComponentApi['expandParentNodes']},
    extraFn?: (key: Key, externalDataset?: Record<string, unknown>[]) => void
): ITreeComponentApi['ensureNodeVisible'] => {
    return useCallback(
        (key, externalDataset) => {
            api.expandParentNodes(key, externalDataset);
            if (extraFn) extraFn(key, externalDataset);
        },
        [api, extraFn]
    );
};
