import {useCallback} from 'react';

import {ITreeComponentApi} from "@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes";
import {IKey} from "@krinopotam/service-types";

export const useApiGetSelectedKeys = (selectedKeys: IKey[] | undefined): ITreeComponentApi['getSelectedKeys'] => {
    return useCallback(() => selectedKeys, [selectedKeys]);
};
