import {useCallback} from 'react';
import {CloneObject} from '@krinopotam/js-helpers';
import {findNodeIndex} from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/findNodeIndex';

import {ITreeComponentApi} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';
import {IKey} from "@krinopotam/service-types";

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

            const {idx, nodes} = findNodeIndex(dataSet, node[keyField] as IKey, fieldNames);
            if (idx < 0 || !nodes) return;
            updateValues(nodes[idx], node, fieldNames.children);

            const targetNode = typeof target === 'object' ? target : api.getNode(target, dataSet);
            const parentNode = api.getParentNode(node[keyField] as IKey, dataSet);
            if (targetNode !== parentNode) dataSet = api.moveNode(node[keyField] as IKey, target, 'insideBottom', opts, dataSet) ?? [];

            if (!externalDataset) api.setDataSet(dataSet);
            if (opts?.ensureVisible) api.ensureNodeVisible(node[keyField] as IKey, dataSet);
            if (opts?.select) api.selectNode(node[keyField] as IKey, true);
            return dataSet;
        },
        [api]
    );
};

const updateValues = (source: Record<string, unknown>, target: Record<string, unknown>, childrenField: string) => {
    for (const field in target) {
        if (field === childrenField) continue;
        source[field] = target[field];
    }
};
