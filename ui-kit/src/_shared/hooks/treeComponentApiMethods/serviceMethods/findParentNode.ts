import {IKey} from "@krinopotam/service-types";

export const findParentNode = (
    dataSet: Record<string, unknown>[] | undefined,
    node: IKey | Record<string, unknown>,
    fieldNames: {
        key: string;
        children: string;
    }
): Record<string, unknown> | undefined => {
    const key = typeof node === 'object' ? (node[fieldNames.key] as IKey) : node;

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

    if (!dataSet) return undefined;
    return recursive(dataSet, undefined);
};
