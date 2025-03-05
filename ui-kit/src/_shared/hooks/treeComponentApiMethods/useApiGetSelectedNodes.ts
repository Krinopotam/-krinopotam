import {ITreeComponentApi} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';
import {AnyType} from '@krinopotam/service-types';

export const useApiGetSelectedNodes = (api: {
    getSelectedKeys: ITreeComponentApi['getSelectedKeys'];
    getNode: ITreeComponentApi['getNode'];
}): ITreeComponentApi['getSelectedNodes'] => {
    return extDataSet => {
        const selectedKeys = api.getSelectedKeys();

        if (!selectedKeys) return undefined;

        const result: Record<string, AnyType>[] = [];
        for (const key of selectedKeys) {
            const foundNode = api.getNode(key, extDataSet);
            if (foundNode) result.push(foundNode);
        }
        return result;
    };
};
