import {findNextNodeKey} from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/findeNextNodeKey';
import {ITreeComponentApi} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';

export const useApiGetNextNodeKey = (api: {
    getDataSet: ITreeComponentApi['getDataSet'];
    getExpandedKeys: ITreeComponentApi['getExpandedKeys'];
    getFieldNames: ITreeComponentApi['getFieldNames'];
}): ITreeComponentApi['getNextNodeKey'] => {
    return (node, opts, externalDataset) => findNextNodeKey(externalDataset ?? api.getDataSet(), node, api.getExpandedKeys(), api.getFieldNames(), opts);
};
