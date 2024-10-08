import {ITreeComponentApi} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';
import {IKey} from '@krinopotam/service-types';

export const useApiExpandNode = (api: {
    getExpandedKeys: ITreeComponentApi['getExpandedKeys'];
    setExpandedKeys: ITreeComponentApi['setExpandedKeys'];
    getFieldNames: ITreeComponentApi['getFieldNames'];
}): ITreeComponentApi['expandNode'] => {
    return node => {
        const fieldNames = api.getFieldNames();
        const key = typeof node === 'object' ? (node[fieldNames.key] as IKey) : node;
        const expandedKeys = api.getExpandedKeys();
        if (expandedKeys?.includes(key)) return;
        api.setExpandedKeys([...(expandedKeys ?? []), key]);
    };
};
