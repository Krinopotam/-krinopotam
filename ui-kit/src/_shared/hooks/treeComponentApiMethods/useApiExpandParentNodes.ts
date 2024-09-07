import {Key, useCallback} from 'react';
import {ITreeComponentApi} from "@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes";

export const useApiExpandParentNodes = (api: {
    expandNode: ITreeComponentApi['expandNode'];
    getDataSet: ITreeComponentApi['getDataSet'];
    getFieldNames: ITreeComponentApi['getFieldNames'];
}): ITreeComponentApi['expandParentNodes'] => {
    return useCallback(
        (node, externalDataset) => {
            const data = externalDataset ?? api.getDataSet();
            if (!data) return;
            const fieldNames = api.getFieldNames();
            const key:Key = typeof node === 'object' ? node[fieldNames.key] as Key : node;

            const recursive = (nodes: Record<string, unknown>[]) => {
                for (const node of nodes) {
                    if (node[fieldNames.key] === key) return true;

                    if (node[fieldNames.children]) {
                        const founded = recursive(node[fieldNames.children] as Record<string, unknown>[]);

                        if (founded) {
                            api.expandNode(node[fieldNames.key] as Key);
                            return true;
                        }
                    }
                }
            };
            recursive(data);
        },
        [api]
    );
};
