import {useCallback} from 'react';

import {ITreeComponentApi} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';

export const useApiGetActiveNode = (api: {
    getNode: ITreeComponentApi['getNode'];
    getActiveNodeKey: ITreeComponentApi['getActiveNodeKey'];
    getFieldNames: ITreeComponentApi['getFieldNames'];
}): ITreeComponentApi['getActiveNode'] => {
    return useCallback(
        (singleOnly, withChildren, externalDataset) => {
            const activeKey = api.getActiveNodeKey(singleOnly);
            const node = api.getNode(activeKey, externalDataset);
            if (!node) return undefined;
            if (withChildren) return node;

            const fieldNames = api.getFieldNames();
            const cleanNode = {...node};
            delete cleanNode[fieldNames.children];
            return cleanNode;
        },
        [api]
    );
};
