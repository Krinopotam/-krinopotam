import {ITreeComponentApi} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';
import {getPrevNodeKey} from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/getPrevNodeKey';

export const useApiGetPrevNode = (api: {
    getDataSet: ITreeComponentApi['getDataSet'];
    getExpandedKeys: ITreeComponentApi['getExpandedKeys'];
    getFieldNames: ITreeComponentApi['getFieldNames'];
    getNode: ITreeComponentApi['getNode'];
}): ITreeComponentApi['getPrevNode'] => {
    return (node, opts, externalDataset) => {
        const fieldNames = api.getFieldNames();
        const prevKey = getPrevNodeKey(externalDataset ?? api.getDataSet(), node, api.getExpandedKeys(), fieldNames, opts);
        return prevKey ? api.getNode(prevKey, externalDataset) : undefined;
    };
};
