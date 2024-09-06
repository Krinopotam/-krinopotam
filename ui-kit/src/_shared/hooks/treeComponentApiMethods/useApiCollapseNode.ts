import {useCallback} from 'react';

import {ITreeComponentApi} from "@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes";

export const useApiCollapseNode = (api: {
    getExpandedKeys: ITreeComponentApi['getExpandedKeys'];
    setExpandedKeys: ITreeComponentApi['setExpandedKeys'];
}): ITreeComponentApi['collapseNode'] => {
    return useCallback(
        key => {
            const expandedKeys = api.getExpandedKeys();
            if (!expandedKeys?.includes(key)) return;
            api.setExpandedKeys(expandedKeys?.filter(curKey => curKey !== key));
        },
        [api]
    );
};
