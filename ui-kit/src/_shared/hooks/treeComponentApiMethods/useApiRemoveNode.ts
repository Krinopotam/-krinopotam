import {Key, useCallback} from "react";
import {CloneObject} from "@krinopotam/js-helpers";
import {ITreeComponentApi} from "@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes";

export const useApiRemoveNode = (api: {
    getDataSet: ITreeComponentApi['getDataSet'];
    getFieldNames: ITreeComponentApi['getFieldNames'];
    getNextNodeKey: ITreeComponentApi['getNextNodeKey'];
    getPrevNodeKey: ITreeComponentApi['getPrevNodeKey'];
    selectNode: ITreeComponentApi['selectNode'];
    setDataSet: ITreeComponentApi['setDataSet'];
    setSelectedKeys: ITreeComponentApi['setSelectedKeys'];
}): ITreeComponentApi['removeNode'] => {
    return useCallback(
        (key, opts, externalDataSet) => {
            const recursive = (nodes: Record<string, unknown>[]) => {
                for (let i = 0; i < nodes.length; i++) {
                    const node = nodes[i];
                    if (node[keyField] === key) {
                        nodes.splice(i, 1);
                        return true;
                    }

                    if (node[childrenField]) {
                        const result = recursive(node[childrenField] as Record<string, unknown>[]);
                        if (result) return true;
                    }
                }
            };

            const fieldNames = api.getFieldNames();
            const keyField = fieldNames.key;
            const childrenField = fieldNames.children;
            const dataSet = externalDataSet ?? CloneObject(api.getDataSet());
            if (!dataSet) return;

            let selectKey: Key | undefined = undefined;
            if (opts?.select === 'next') {
                selectKey = api.getNextNodeKey(key, undefined, dataSet);
                //for last key search for previous
                if (!selectKey) selectKey = api.getPrevNodeKey(key, undefined, dataSet);
            } else if (opts?.select === 'prev') {
                selectKey = api.getPrevNodeKey(key, undefined, dataSet);
                //for last key search for next
                if (!selectKey) selectKey = api.getNextNodeKey(key, undefined, dataSet);
            }

            recursive(dataSet);

            if (!externalDataSet) api.setDataSet(dataSet);

            api.selectNode(key, false);
            if (selectKey) api.setSelectedKeys([selectKey]);

            return dataSet;
        },
        [api]
    );
};