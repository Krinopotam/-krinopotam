import {ITreeComponentApi} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';
import {findPrevNodeKey} from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/findPrevNodeKey';

export const useApiGetPrevNodeKey = (api: {
    getDataSet: ITreeComponentApi['getDataSet'];
    getExpandedKeys: ITreeComponentApi['getExpandedKeys'];
    getFieldNames: ITreeComponentApi['getFieldNames'];
}): ITreeComponentApi['getPrevNodeKey'] => {
    return (node, opts, externalDataset) => findPrevNodeKey(externalDataset ?? api.getDataSet(), node, api.getExpandedKeys(), api.getFieldNames(), opts);
};
