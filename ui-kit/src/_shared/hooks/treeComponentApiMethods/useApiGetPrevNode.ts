import {useCallback} from 'react';
import {ITreeComponentApi} from "@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes";
import {IKey} from "@krinopotam/service-types";
import {findPrevNodeKey} from "@src/_shared/hooks/treeComponentApiMethods/serviceMethods/findPrevNodeKey";

export const useApiGetPrevNode = (api: {
    getDataSet: ITreeComponentApi['getDataSet'];
    getExpandedKeys: ITreeComponentApi['getExpandedKeys'];
    getFieldNames: ITreeComponentApi['getFieldNames'];
    getNode: ITreeComponentApi['getNode'];
    getPrevNodeKey: ITreeComponentApi['getPrevNodeKey'];
}): ITreeComponentApi['getPrevNode'] => {
    return useCallback(
        (node, opts, externalDataset) => {
            const fieldNames = api.getFieldNames();
            const keyField = fieldNames.key;
            const prevKey = findPrevNodeKey(externalDataset ?? api.getDataSet(), node[keyField] as IKey, api.getExpandedKeys(), fieldNames, opts);
            return prevKey ? api.getNode(prevKey, externalDataset) : undefined;
        },
        [api]
    );
};
