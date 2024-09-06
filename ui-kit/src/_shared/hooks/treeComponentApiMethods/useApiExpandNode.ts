import {useCallback} from 'react';

import {ITreeComponentApi} from "@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes";

export const useApiExpandNode = (api: {
    getExpandedKeys: ITreeComponentApi['getExpandedKeys'];
    setExpandedKeys: ITreeComponentApi['setExpandedKeys'];
}): ITreeComponentApi['expandNode'] => {
    return useCallback(
        key => {
            const expandedKeys = api.getExpandedKeys();
            if (expandedKeys?.includes(key)) return;
            api.setExpandedKeys([...(expandedKeys ?? []), key]);
        },
        [api]
    );
};
