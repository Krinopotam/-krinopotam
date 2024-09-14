import {findNextNodeKey} from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/findeNextNodeKey';
import {ITreeComponentApi} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';

export const useApiGetNextNode = (api: {
    getDataSet: ITreeComponentApi['getDataSet'];
    getExpandedKeys: ITreeComponentApi['getExpandedKeys'];
    getFieldNames: ITreeComponentApi['getFieldNames'];
    getNode: ITreeComponentApi['getNode'];
}): ITreeComponentApi['getNextNode'] => {
    return (node, opts, externalDataset) => {
        const fieldNames = api.getFieldNames();
        const nextKey = findNextNodeKey(externalDataset ?? api.getDataSet(), node, api.getExpandedKeys(), fieldNames, opts);
        return nextKey ? api.getNode(nextKey, externalDataset) : undefined;
    };
};
