import {ITreeComponentApi} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';
import {getParentNode} from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/getParentNode';

export const useApiGetParentNode = (api: {
    getDataSet: ITreeComponentApi['getDataSet'];
    getFieldNames: ITreeComponentApi['getFieldNames'];
}): ITreeComponentApi['getParentNode'] => {
    return (node, externalDataset) => {
        const fieldNames = api.getFieldNames();
        const data = externalDataset ?? api.getDataSet();
        return getParentNode(node, data, fieldNames);
    };
};
