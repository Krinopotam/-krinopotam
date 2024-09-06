import {findPrevNodeKey} from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/findeNextNodeKey';
import {useCallback} from 'react';
import {ITreeComponentApi} from "@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes";

export const useApiGetPrevNodeKey = (api: {
    getDataSet: ITreeComponentApi['getDataSet'];
    getExpandedKeys: ITreeComponentApi['getExpandedKeys'];
    getFieldNames: ITreeComponentApi['getFieldNames'];
}): ITreeComponentApi['getPrevNodeKey'] => {
    return useCallback(
        (key, opts, externalDataset) => findPrevNodeKey(externalDataset ?? api.getDataSet(), key, api.getExpandedKeys(), api.getFieldNames(), opts),
        [api]
    );
};
