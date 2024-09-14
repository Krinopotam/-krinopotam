import {useCallback} from 'react';
import {AddElementToArray, CloneObject} from '@krinopotam/js-helpers';
import {ITreeComponentApi} from "@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes";
import {IKey} from "@krinopotam/service-types";

export const useApiAddNode = (api: {
    getDataSet: ITreeComponentApi['getDataSet'];
    setDataSet: ITreeComponentApi['setDataSet'];
    getFieldNames: ITreeComponentApi['getFieldNames'];
    getNode: ITreeComponentApi['getNode'];
    getParentNode: ITreeComponentApi['getParentNode'];
    moveNode: ITreeComponentApi['moveNode'];
    ensureNodeVisible: ITreeComponentApi['ensureNodeVisible'];
    selectNode: ITreeComponentApi['selectNode'];
}): ITreeComponentApi['addNode'] => {
    return useCallback(
        (node, target, position, opts, externalDataset) => {
            if (!node) return;

            const fieldNames = api.getFieldNames();
            const keyField = fieldNames.key;
            const childrenField = fieldNames.children;

            const dataSet = externalDataset ?? CloneObject(api.getDataSet() ?? []);
            const targetKey = typeof target === 'object' ? target[keyField] as IKey: target;
            const targetNode = api.getNode(targetKey, dataSet);
            if (!targetNode || ((position === 'insideTop' || position === 'insideBottom') && targetNode?.isLeaf)) position = 'below'; //we can't add node into the leaf node or undefined node

            let targetList: Record<string, unknown>[] = [];
            if (!targetNode) targetList = dataSet;

            if (targetNode && (position === 'insideTop' || position === 'insideBottom')) {
                if (!targetNode[childrenField]) targetNode[childrenField] = targetList;
                else targetList = targetNode[childrenField] as Record<string, unknown>[];
                const arrPos = position === 'insideTop' ? 'top' : 'bottom';
                AddElementToArray(targetList, node, undefined, arrPos, false);
            } else {
                if (targetNode) {
                    const parentNode = api.getParentNode(targetNode[keyField] as IKey, dataSet);
                    if (parentNode) targetList = parentNode[childrenField] as Record<string, unknown>[];
                    else targetList = dataSet;
                }

                if (position === 'above') AddElementToArray(targetList, node, targetNode, 'above', false);
                else if (position === 'below') AddElementToArray(targetList,node, targetNode, 'below', false);
            }

            if (!externalDataset) api.setDataSet(dataSet);
            if (opts?.ensureVisible) api.ensureNodeVisible(node[keyField] as IKey, dataSet);
            if (opts?.select) api.selectNode(node[keyField] as IKey, true);
            return dataSet;
        },
        [api]
    );
};
