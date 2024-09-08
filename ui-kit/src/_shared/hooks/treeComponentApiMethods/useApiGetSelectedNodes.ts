import {Key, useCallback, useRef} from 'react';

import {ITreeComponentApi} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';

export const useApiGetSelectedNodes = (api: {
    getSelectedKeys: ITreeComponentApi['getSelectedKeys'];
    getNode: ITreeComponentApi['getNode'];
}): ITreeComponentApi['getSelectedNodes'] => {
    const prevKeysRef = useRef<Key[] | undefined>(undefined);
    const prevNodesRef = useRef<Record<string, unknown>[] | undefined>(undefined);
    return useCallback(
        extDataSet => {
            const selectedKeys = api.getSelectedKeys();
            if (prevKeysRef.current === selectedKeys) return prevNodesRef.current;
            prevKeysRef.current = selectedKeys;

            if (!selectedKeys) {
                prevNodesRef.current = undefined;
                return undefined;
            }

            const result: Record<string, unknown>[] = [];
            for (const key of selectedKeys) {
                const foundNode = api.getNode(key, extDataSet);
                if (foundNode) result.push(foundNode);
            }
            prevNodesRef.current = result;
            return result;
        },
        [api]
    );
};
