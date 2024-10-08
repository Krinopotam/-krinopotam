import {ITreeComponentApi} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';
import {AnyType, IKey} from '@krinopotam/service-types';

export const useApiExpandParentNodes = (api: {
    expandNode: ITreeComponentApi['expandNode'];
    getDataSet: ITreeComponentApi['getDataSet'];
    getFieldNames: ITreeComponentApi['getFieldNames'];
}): ITreeComponentApi['expandParentNodes'] => {
    return (node, externalDataset) => {
        const data = externalDataset ?? api.getDataSet();
        if (!data) return;
        const fieldNames = api.getFieldNames();
        const key: IKey = typeof node === 'object' ? (node[fieldNames.key] as IKey) : node;

        const recursive = (nodes: Record<string, AnyType>[]) => {
            for (const node of nodes) {
                if (node[fieldNames.key] === key) return true;

                if (node[fieldNames.children]) {
                    const founded = recursive(node[fieldNames.children] as Record<string, AnyType>[]);

                    if (founded) {
                        api.expandNode(node[fieldNames.key] as IKey);
                        return true;
                    }
                }
            }
        };
        recursive(data);
    };
};
