import {useRef} from 'react';

import {ITreeComponentApi} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';
import {AnyType, IKey} from '@krinopotam/service-types';

export const useApiGetSelectedNodes = (api: {
    getSelectedKeys: ITreeComponentApi['getSelectedKeys'];
    getNode: ITreeComponentApi['getNode'];
}): ITreeComponentApi['getSelectedNodes'] => {
    const prevKeysRef = useRef<IKey[] | undefined>(undefined);
    const prevNodesRef = useRef<Record<string, AnyType>[] | undefined>(undefined);
    return extDataSet => {
        const selectedKeys = api.getSelectedKeys();
        if (prevKeysRef.current === selectedKeys) return prevNodesRef.current;
        prevKeysRef.current = selectedKeys;

        if (!selectedKeys) {
            prevNodesRef.current = undefined;
            return undefined;
        }

        const result: Record<string, AnyType>[] = [];
        for (const key of selectedKeys) {
            const foundNode = api.getNode(key, extDataSet);
            if (foundNode) result.push(foundNode);
        }
        prevNodesRef.current = result;
        return result;
    };
};
