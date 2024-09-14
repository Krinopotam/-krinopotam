import {useCallback} from 'react';

import {ITreeComponentApi} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';
import {IKey} from '@krinopotam/service-types';
import {findParentNode} from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/findParentNode';

export const useApiGetParentNode = (api: {
    getDataSet: ITreeComponentApi['getDataSet'];
    getFieldNames: ITreeComponentApi['getFieldNames'];
}): ITreeComponentApi['getParentNode'] => {
    return useCallback(
        (node, externalDataset) => {
            const fieldNames = api.getFieldNames();
            const key = typeof node === 'object' ? (node[fieldNames.key] as IKey) : node;
            const data = externalDataset ?? api.getDataSet();
            return findParentNode(data, key, fieldNames);
        },
        [api]
    );
};
