import {useCallback} from 'react';
import {CloneObject} from '@krinopotam/js-helpers';
import {ITreeComponentApi} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';
import {IKey} from "@krinopotam/service-types";

export const useApiRemoveNode = (api: {
    getDataSet: ITreeComponentApi['getDataSet'];
    getFieldNames: ITreeComponentApi['getFieldNames'];
    getNextNodeKey: ITreeComponentApi['getNextNodeKey'];
    getPrevNodeKey: ITreeComponentApi['getPrevNodeKey'];
    selectNode: ITreeComponentApi['selectNode'];
    setDataSet: ITreeComponentApi['setDataSet'];
}): ITreeComponentApi['removeNode'] => {
    return useCallback(
        (node, opts, externalDataSet) => {
            const fieldNames = api.getFieldNames();
            const key: IKey = typeof node === 'object' ? (node[fieldNames.key] as IKey) : node;

            const dataSet = externalDataSet ?? CloneObject(api.getDataSet());
            if (!dataSet) return;

            let selectKey: IKey | undefined = undefined;
            const prevKey = api.getPrevNodeKey(key, undefined, dataSet);
            if (opts?.select === 'next') {
                selectKey = api.getNextNodeKey(key, undefined, dataSet);
                //for last key search for previous
                if (!selectKey) selectKey = api.getPrevNodeKey(key, undefined, dataSet);
            } else if (opts?.select === 'prev') {
                selectKey = api.getPrevNodeKey(key, undefined, dataSet);
                //for last key search for next
                if (!selectKey) selectKey = api.getNextNodeKey(key, undefined, dataSet);
            }

            const recursive = (nodes: Record<string, unknown>[]) => {
                for (let i = 0; i < nodes.length; i++) {
                    const node = nodes[i];
                    if (node[fieldNames.key] === key) {
                        nodes.splice(i, 1);
                        return true;
                    }

                    if (node[fieldNames.children]) {
                        const result = recursive(node[fieldNames.children] as Record<string, unknown>[]);
                        if (result) return true;
                    }
                }
            };

            recursive(dataSet);

            if (!externalDataSet) api.setDataSet(dataSet);

            if (opts?.select !=='keep') api.selectNode(key, false);
            if (selectKey) api.selectNode(selectKey, true);

            return dataSet;
        },
        [api]
    );
};
