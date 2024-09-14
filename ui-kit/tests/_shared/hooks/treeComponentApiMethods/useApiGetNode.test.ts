import {useCallback} from 'react';
import {findNodeIndex} from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/findNodeIndex';

import {ITreeComponentApi} from "@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes";

export const useApiGetNode = (api: {
    getFieldNames: ITreeComponentApi['getFieldNames'];
    getDataSet: ITreeComponentApi['getDataSet'];
}): ITreeComponentApi['getNode'] => {
    return useCallback(
        (key, externalDataset) => {
            const fieldNames = api.getFieldNames();
            if (!key) return undefined;
            const data = externalDataset ?? api.getDataSet();
            const {idx, nodes} = findNodeIndex(data, key, fieldNames);
            return idx > -1 ? nodes![idx] : undefined;
        },
        [api]
    );
};
