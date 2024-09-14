import {ITreeComponentApi} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';
import {IKey} from '@krinopotam/service-types';

export const useApiEnsureNodeVisible = (
    api: {
        expandParentNodes: ITreeComponentApi['expandParentNodes'];
        getFieldNames: ITreeComponentApi['getFieldNames'];
    },
    extraFn?: (key: IKey, externalDataset?: Record<string, unknown>[]) => void
): ITreeComponentApi['ensureNodeVisible'] => {
    return (node, externalDataset) => {
        const fieldNames = api.getFieldNames();
        const key: IKey = typeof node === 'object' ? (node[fieldNames.key] as IKey) : node;
        api.expandParentNodes(key, externalDataset);
        if (extraFn) extraFn(key, externalDataset);
    };
};
