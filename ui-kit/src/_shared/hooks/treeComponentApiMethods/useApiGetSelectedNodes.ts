import {useCallback} from 'react';

import {ITreeComponentApi} from "@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes";

export const useApiGetSelectedNodes = (api: {
    getSelectedKeys: ITreeComponentApi['getSelectedKeys'];
    getNode: ITreeComponentApi['getNode'];
}): ITreeComponentApi['getSelectedNodes'] => {
    return useCallback(
        extDataSet => {
            const selectedKeys = api.getSelectedKeys();
            if (!selectedKeys) return undefined;

            const result: Record<string, unknown>[] = [];
            for (const key of selectedKeys) {
                const foundNode = api.getNode(key, extDataSet);
                if (foundNode) result.push(foundNode);
            }
            return result;
        },
        [api]
    );
};
