import {useCallback} from 'react';
import {findNextNodeKey} from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/findeNextNodeKey';
import {ITreeComponentApi} from "@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes";

export const useApiGetNextNodeKey = (api: {
    getDataSet: ITreeComponentApi['getDataSet'];
    getExpandedKeys: ITreeComponentApi['getExpandedKeys'];
    getFieldNames: ITreeComponentApi['getFieldNames'];
}): ITreeComponentApi['getNextNodeKey'] => {
    return useCallback(
        (key, opts, externalDataset) => findNextNodeKey(externalDataset ?? api.getDataSet(), key, api.getExpandedKeys(), api.getFieldNames(), opts),
        [api]
    );
};
