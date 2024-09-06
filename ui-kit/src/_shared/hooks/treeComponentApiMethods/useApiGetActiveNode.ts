import {useCallback} from 'react';


import {ITreeComponentApi} from "@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes";

export const useApiGetActiveNode = (api: {
    getNode: ITreeComponentApi['getNode'];
    getActiveNodeKey: ITreeComponentApi['getActiveNodeKey'];
}): ITreeComponentApi['getActiveNode'] => {
    return useCallback(
        (singleOnly, externalDataset) => {
            const activeKey = api.getActiveNodeKey(singleOnly);
            return api.getNode(activeKey, externalDataset);
        },
        [api]
    );
};

