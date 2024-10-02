import {getNodeIndex} from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/getNodeIndex';
import {ITreeComponentApi} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';

export const useApiGetNode = (api: {
    getFieldNames: ITreeComponentApi['getFieldNames'];
    getDataSet: ITreeComponentApi['getDataSet'];
}): ITreeComponentApi['getNode'] => {
    return (key, extDataset) => {
        const fieldNames = api.getFieldNames();
        if (!key) return undefined;
        const data = extDataset ?? api.getDataSet();
        const {idx, nodes} = getNodeIndex(data, key, fieldNames);
        return idx > -1 ? nodes![idx] : undefined;
    };
};
