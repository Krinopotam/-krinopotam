import {Key, useCallback} from 'react';
import {findNextNodeKey} from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/findeNextNodeKey';
import {ITreeComponentApi} from "@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes";

export const useApiGetNextNode = (api: {
    getDataSet: ITreeComponentApi['getDataSet'];
    getExpandedKeys: ITreeComponentApi['getExpandedKeys'];
    getFieldNames: ITreeComponentApi['getFieldNames'];
    getNode: ITreeComponentApi['getNode'];
    getNextNodeKey: ITreeComponentApi['getNextNodeKey'];
}): ITreeComponentApi['getNextNode'] => {
    return useCallback(
        (node, opts, externalDataset) => {
            const fieldNames = api.getFieldNames();
            const keyField = fieldNames.key;
            const nextKey = findNextNodeKey(externalDataset ?? api.getDataSet(), node[keyField] as Key, api.getExpandedKeys(), fieldNames, opts);
            return nextKey ? api.getNode(nextKey, externalDataset) : undefined;
        },
        [api]
    );
};
