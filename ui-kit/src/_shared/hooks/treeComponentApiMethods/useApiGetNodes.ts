import {AnyType} from "@krinopotam/service-types";
import {ITreeComponentApi} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';
import {IsArray} from "@krinopotam/js-helpers/helpersObjects/isArray";

export const useApiGetNodes = (api: {getNode: ITreeComponentApi['getNode']}): ITreeComponentApi['getNodes'] => {
    return (keys, externalDataset) => {
        if (!keys) return undefined;
        if (!IsArray(keys)) keys = [keys];
        const result: Record<string, AnyType>[] = [];
        for (const key of keys) {
            const node = api.getNode(key, externalDataset);
            if (node) result.push(node);
        }
        return result;
    };
};
