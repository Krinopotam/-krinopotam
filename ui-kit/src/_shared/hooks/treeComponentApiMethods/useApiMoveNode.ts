import {useCallback} from 'react';
import {CloneObject} from '@krinopotam/js-helpers';
import {ITreeComponentApi} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';

export const useApiMoveNode = (api: {
    getNode: ITreeComponentApi['getNode'];
    addNode: ITreeComponentApi['addNode'];
    removeNode: ITreeComponentApi['removeNode'];
    getDataSet: ITreeComponentApi['getDataSet'];
    setDataSet: ITreeComponentApi['setDataSet'];
}): ITreeComponentApi['moveNode'] => {
    return useCallback(
        (source, target, position, opts, externalDataSet) => {
            const movedNode = typeof source === 'object' ? source : api.getNode(source);
            const targetNode = typeof target === 'object' ? target : api.getNode(target);
            if (!movedNode || !targetNode) return;

            let dataSet = externalDataSet ?? CloneObject(api.getDataSet() ?? []);
            dataSet = api.removeNode(movedNode, undefined, dataSet) ?? [];
            dataSet = api.addNode(movedNode, targetNode, position, opts, dataSet) ?? [];
            if (!externalDataSet) api.setDataSet(dataSet);
            return dataSet;
        },
        [api]
    );
};
