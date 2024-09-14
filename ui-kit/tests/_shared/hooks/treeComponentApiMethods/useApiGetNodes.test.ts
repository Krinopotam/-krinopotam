import {useCallback} from 'react';

import {ITreeComponentApi} from "@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes";

export const useApiGetNodes = (api: {getNode: ITreeComponentApi['getNode']}): ITreeComponentApi['getNodes'] => {
    return useCallback(
        (keys, externalDataset) => {
            if (!keys) return undefined;
            if (!Array.isArray(keys)) keys = [keys];
            const result: Record<string, unknown>[] = [];
            for (const key of keys) {
                const node = api.getNode(key, externalDataset);
                if (node) result.push(node);
            }
            return result;
        },
        [api]
    );
};
