import {Key, useCallback} from 'react';
import {CloneObject} from '@krinopotam/js-helpers';
import {findNodeIndex} from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/findNodeIndex';

import {ITreeComponentApi} from "@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes";

export const useApiUpdateNode = (api: {
    getNode: ITreeComponentApi['getNode'];
    getFieldNames: ITreeComponentApi['getFieldNames'];
    getParentNode: ITreeComponentApi['getParentNode'];
    getDataSet: ITreeComponentApi['getDataSet'];
    setDataSet: ITreeComponentApi['setDataSet'];
    selectNode: ITreeComponentApi['selectNode'];
    ensureNodeVisible: ITreeComponentApi['ensureNodeVisible'];
    moveNode: ITreeComponentApi['moveNode'];
    prepareNode: ITreeComponentApi['prepareNode'];
}): ITreeComponentApi['updateNode'] => {
    return useCallback(
        (node, targetKey, opts, externalDataset) => {
            const fieldNames = api.getFieldNames();
            const keyField = fieldNames.key;

            let dataSet = externalDataset ?? CloneObject(api.getDataSet() ?? []);
            if (!node || !dataSet) return;

            const {idx, nodes} = findNodeIndex(dataSet, node[keyField] as Key, fieldNames);
            if (idx < 0 || !nodes) return;
            nodes[idx] = api.prepareNode(node);

            const targetNode = api.getNode(targetKey, dataSet);
            const parentNode = api.getParentNode(node[keyField] as Key, dataSet);
            if (targetKey && targetNode !== parentNode) dataSet = api.moveNode(node[keyField] as Key, targetKey, 'insideBottom', opts, dataSet) ?? [];

            if (!externalDataset) api.setDataSet(dataSet);
            if (opts?.ensureVisible) api.ensureNodeVisible(node[keyField] as Key, dataSet);
            if (opts?.select) api.selectNode(node[keyField] as Key, true);
            return dataSet;
        },
        [api]
    );
};
