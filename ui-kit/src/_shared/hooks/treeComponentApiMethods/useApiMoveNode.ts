import {useCallback} from 'react';
import {CloneObject} from '@krinopotam/js-helpers';
import {ITreeComponentApi} from "@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes";

export const useApiMoveNode = (api: {
    getNode: ITreeComponentApi['getNode'];
    addNode: ITreeComponentApi['addNode'];
    removeNode: ITreeComponentApi['removeNode'];
    getDataSet: ITreeComponentApi['getDataSet'];
    setDataSet: ITreeComponentApi['setDataSet'];
}): ITreeComponentApi['moveNode'] => {
    return useCallback(
        (key, targetKey, position, opts, externalDataSet) => {
            const node = api.getNode(key);
            const targetNode = api.getNode(targetKey);
            if (!node || !targetNode) return;

            let dataSet = externalDataSet ?? CloneObject(api.getDataSet() ?? []);
            dataSet = api.removeNode(key, undefined, dataSet) ?? [];
            dataSet = api.addNode(node, targetKey, position, opts, dataSet) ?? [];
            if (!externalDataSet) api.setDataSet(dataSet);
            return dataSet;
        },
        [api]
    );
};
