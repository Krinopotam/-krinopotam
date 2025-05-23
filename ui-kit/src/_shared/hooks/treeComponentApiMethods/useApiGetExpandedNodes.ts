import {AnyType} from "@krinopotam/service-types";
import {ITreeComponentApi} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';

export const useApiGetExpandedNodes = (api: {
    getExpandedKeys: ITreeComponentApi['getExpandedKeys'];
    getNode: ITreeComponentApi['getNode'];
}): ITreeComponentApi['getExpandedNodes'] => {
    return (externalDataset) => {
        const expandedKeys = api.getExpandedKeys();
        if (!expandedKeys) return undefined;

        const result: Record<string, AnyType>[] = [];
        for (const key of expandedKeys) {
            const foundNode = api.getNode(key, externalDataset);
            if (foundNode) result.push(foundNode);
        }
        return result;
    };
};
