import {ITreeComponentApi} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';
import {getPrevNodeKey} from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/getPrevNodeKey';

export const useApiGetPrevNodeKey = (api: {
    getDataSet: ITreeComponentApi['getDataSet'];
    getExpandedKeys: ITreeComponentApi['getExpandedKeys'];
    getFieldNames: ITreeComponentApi['getFieldNames'];
}): ITreeComponentApi['getPrevNodeKey'] => {
    return (node, opts, externalDataset) => getPrevNodeKey(externalDataset ?? api.getDataSet(), node, api.getExpandedKeys(), api.getFieldNames(), opts);
};
