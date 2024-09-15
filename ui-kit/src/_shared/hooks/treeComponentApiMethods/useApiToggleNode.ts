import {ITreeComponentApi} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';
import {IKey} from '@krinopotam/service-types';

export const useApiToggleNode = (api: {
    getExpandedKeys: ITreeComponentApi['getExpandedKeys'];
    setExpandedKeys: ITreeComponentApi['setExpandedKeys'];
    getFieldNames: ITreeComponentApi['getFieldNames'];
}): ITreeComponentApi['toggleNode'] => {
    return node => {
        const fieldNames = api.getFieldNames();
        const key = typeof node === 'object' ? (node[fieldNames.key] as IKey) : node;
        const expandedKeys = api.getExpandedKeys();
        if (expandedKeys?.includes(key)) {
            api.setExpandedKeys(expandedKeys?.filter(curKey => curKey !== key));
            return false;
        } else {
            api.setExpandedKeys([...(expandedKeys ?? []), key]);
            return true;
        }
    };
};
