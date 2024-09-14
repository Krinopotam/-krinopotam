import {IKey} from '@krinopotam/service-types';

/**
 * Get all parents keys
 * @param dataSet - hierarchy collection of nodes
 * @param fieldNames - key and children field names
 */
export const getAllParentsKeys = <T extends Record<string, unknown>>(
    dataSet: T[] | undefined,
    fieldNames: {
        key: string;
        children: string;
    }
) => {
    const parentsKeys: IKey[] = [];

    const recursive = (data: T[]) => {
        for (const node of data) {
            if (!node[fieldNames.children]) continue;
            parentsKeys.push(node[fieldNames.key] as IKey);
            recursive(node[fieldNames.children] as T[]);
        }
    };
    if (!dataSet) return undefined;
    recursive(dataSet);
    return parentsKeys;
};
