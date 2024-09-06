import {Key, useCallback} from 'react';

import {ITreeComponentApi} from "@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes";

export const useApiIsNodeExpanded = (api: {getExpandedKeys: ITreeComponentApi['getExpandedKeys']}): ITreeComponentApi['isNodeExpanded'] => {
    return useCallback((key: Key) => api.getExpandedKeys()?.includes(key) ?? false, [api]);
};
