import {Key, useCallback} from 'react';
import {ITreeComponentApi} from "@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes";

export const useApiExpandParentNodes = (api: {
    expandNode: ITreeComponentApi['expandNode'];
    getDataSet: ITreeComponentApi['getDataSet'];
    getFieldNames: ITreeComponentApi['getFieldNames'];
}): ITreeComponentApi['expandParentNodes'] => {
    return useCallback(
        (key, externalDataset) => {
            const fieldNames = api.getFieldNames();
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

            const data = externalDataset ?? api.getDataSet();

            if (!data) return;
            recursive(data);
        },
        [api]
    );
};
