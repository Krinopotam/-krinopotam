import {Key, useCallback} from 'react';

import {ITreeComponentApi} from "@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes";

export const useApiGetSelectedKeys = (selectedKeys: Key[] | undefined): ITreeComponentApi['getSelectedKeys'] => {
    return useCallback(() => selectedKeys, [selectedKeys]);
};
