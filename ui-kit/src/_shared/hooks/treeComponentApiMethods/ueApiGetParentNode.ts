import {useCallback} from 'react';

import {ITreeComponentApi} from "@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes";

export const useApiGetParentNode = (api: {
    getDataSet: ITreeComponentApi['getDataSet'];
    getFieldNames: ITreeComponentApi['getFieldNames'];
}): ITreeComponentApi['getParentNode'] => {
    return useCallback(
        (key, externalDataset) => {
            const fieldNames = api.getFieldNames();
            const keyField = fieldNames.key;
            const childrenField = fieldNames.children;

            const recursive = (nodes: Record<string, unknown>[], parentNode: Record<string, unknown> | undefined): Record<string, unknown> | undefined => {
                for (const node of nodes) {
                    if (node[keyField] === key) return parentNode;
                    if (node[childrenField]) {
                        const result = recursive(node[childrenField] as Record<string, unknown>[], node);
                        if (result) return result;
                    }
                }
                return undefined;
            };

            const data = externalDataset ?? api.getDataSet();

            if (!data) return undefined;
            return recursive(data, undefined);
        },
        [api]
    );
};
