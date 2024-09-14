import {useCallback} from 'react';

import {ITreeComponentApi} from "@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes";
import {IKey} from "@krinopotam/service-types";

export const useApiCollapseNode = (api: {
    getExpandedKeys: ITreeComponentApi['getExpandedKeys'];
    setExpandedKeys: ITreeComponentApi['setExpandedKeys'];
    getFieldNames: ITreeComponentApi['getFieldNames'];
}): ITreeComponentApi['collapseNode'] => {
    return useCallback(
        node => {
            const fieldNames = api.getFieldNames();
            const key = typeof node === 'object' ? (node[fieldNames.key] as IKey) : node;
            const expandedKeys = api.getExpandedKeys();
            if (!expandedKeys?.includes(key)) return;
            api.setExpandedKeys(expandedKeys?.filter(curKey => curKey !== key));
        },
        [api]
    );
};
