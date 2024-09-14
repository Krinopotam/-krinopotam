import {ITreeComponentApi} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';
import {findPrevNodeKey} from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/findPrevNodeKey';

export const useApiGetPrevNode = (api: {
    getDataSet: ITreeComponentApi['getDataSet'];
    getExpandedKeys: ITreeComponentApi['getExpandedKeys'];
    getFieldNames: ITreeComponentApi['getFieldNames'];
    getNode: ITreeComponentApi['getNode'];
}): ITreeComponentApi['getPrevNode'] => {
    return (node, opts, externalDataset) => {
        const fieldNames = api.getFieldNames();
        const prevKey = findPrevNodeKey(externalDataset ?? api.getDataSet(), node, api.getExpandedKeys(), fieldNames, opts);
        return prevKey ? api.getNode(prevKey, externalDataset) : undefined;
    };
};
