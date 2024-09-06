import {useCallback} from 'react';

import {ITreeComponentApi} from "@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes";

export const useApiSelectNode = (
    api: {
        getSelectedKeys: ITreeComponentApi['getSelectedKeys'];
        setSelectedKeys: ITreeComponentApi['setSelectedKeys'];
    },
    multiple: boolean | undefined
): ITreeComponentApi['selectNode'] => {
    return useCallback(
        (key, isSelect = true) => {
            const selectedKeys = api.getSelectedKeys();
            if (isSelect) {
                if (selectedKeys?.includes(key)) return;
                if (multiple) api.setSelectedKeys([...(selectedKeys ?? []), key]);
                else api.setSelectedKeys([key]);
            } else {
                if (!selectedKeys?.includes(key)) return;
                if (multiple) api.setSelectedKeys(selectedKeys?.filter(curKey => curKey !== key));
                else api.setSelectedKeys([]);
            }
        },
        [api, multiple]
    );
};
