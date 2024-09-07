import {Key, useCallback} from 'react';

import {ITreeComponentApi} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';

export const useApiGetParentNode = (api: {
    getDataSet: ITreeComponentApi['getDataSet'];
    getFieldNames: ITreeComponentApi['getFieldNames'];
}): ITreeComponentApi['getParentNode'] => {
    return useCallback(
        (node, externalDataset) => {
            const fieldNames = api.getFieldNames();
            const key = typeof node === 'object' ? (node[fieldNames.key] as Key) : node;

            const recursive = (nodes: Record<string, unknown>[], parentNode: Record<string, unknown> | undefined): Record<string, unknown> | undefined => {
                for (const node of nodes) {
                    if (node[fieldNames.key] === key) return parentNode;
                    if (node[fieldNames.children]) {
                        const result = recursive(node[fieldNames.children] as Record<string, unknown>[], node);
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
