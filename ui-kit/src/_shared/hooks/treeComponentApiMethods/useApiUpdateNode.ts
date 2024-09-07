import {Key, useCallback} from 'react';
import {CloneObject} from '@krinopotam/js-helpers';
import {findNodeIndex} from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/findNodeIndex';

import {ITreeComponentApi} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';

export const useApiUpdateNode = (api: {
    getNode: ITreeComponentApi['getNode'];
    getFieldNames: ITreeComponentApi['getFieldNames'];
    getParentNode: ITreeComponentApi['getParentNode'];
    getDataSet: ITreeComponentApi['getDataSet'];
    setDataSet: ITreeComponentApi['setDataSet'];
    selectNode: ITreeComponentApi['selectNode'];
    ensureNodeVisible: ITreeComponentApi['ensureNodeVisible'];
    moveNode: ITreeComponentApi['moveNode'];
}): ITreeComponentApi['updateNode'] => {
    return useCallback(
        (node, target, opts, externalDataset) => {
            const fieldNames = api.getFieldNames();
            const keyField = fieldNames.key;

            let dataSet = externalDataset ?? CloneObject(api.getDataSet() ?? []);
            if (!node || !dataSet) return;

            const {idx, nodes} = findNodeIndex(dataSet, node[keyField] as Key, fieldNames);
            if (idx < 0 || !nodes) return;
            nodes[idx] = node;

            const targetNode = typeof target === 'object' ? target : api.getNode(target, dataSet);
            const parentNode = api.getParentNode(node[keyField] as Key, dataSet);
            if (target && targetNode !== parentNode) dataSet = api.moveNode(node[keyField] as Key, target, 'insideBottom', opts, dataSet) ?? [];

            if (!externalDataset) api.setDataSet(dataSet);
            if (opts?.ensureVisible) api.ensureNodeVisible(node[keyField] as Key, dataSet);
            if (opts?.select) api.selectNode(node[keyField] as Key, true);
            return dataSet;
        },
        [api]
    );
};
