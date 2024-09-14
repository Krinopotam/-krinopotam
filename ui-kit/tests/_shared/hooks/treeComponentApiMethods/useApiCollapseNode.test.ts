import {Key, useCallback} from 'react';

import {ITreeComponentApi} from "@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes";

export const useApiCollapseNode = (api: {
    getExpandedKeys: ITreeComponentApi['getExpandedKeys'];
    setExpandedKeys: ITreeComponentApi['setExpandedKeys'];
    getFieldNames: ITreeComponentApi['getFieldNames'];
}): ITreeComponentApi['collapseNode'] => {
    return useCallback(
        node => {
            const fieldNames = api.getFieldNames();
            const key = typeof node === 'object' ? (node[fieldNames.key] as Key) : node;
            const expandedKeys = api.getExpandedKeys();
            if (!expandedKeys?.includes(key)) return;
            api.setExpandedKeys(expandedKeys?.filter(curKey => curKey !== key));
        },
        [api]
    );
};
