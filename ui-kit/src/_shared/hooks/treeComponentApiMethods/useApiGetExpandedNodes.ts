import {ITreeComponentApi} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';

export const useApiGetExpandedNodes = (api: {
    getExpandedKeys: ITreeComponentApi['getExpandedKeys'];
    getNode: ITreeComponentApi['getNode'];
}): ITreeComponentApi['getExpandedNodes'] => {
    return () => {
        const expandedKeys = api.getExpandedKeys();
        if (!expandedKeys) return undefined;

        const result: Record<string, unknown>[] = [];
        for (const key of expandedKeys) {
            const foundNode = api.getNode(key);
            if (foundNode) result.push(foundNode);
        }
        return result;
    };
};
