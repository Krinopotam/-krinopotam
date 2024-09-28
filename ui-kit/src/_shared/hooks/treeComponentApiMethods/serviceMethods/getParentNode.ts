import {AnyType, IKey} from "@krinopotam/service-types";

export const getParentNode = (
    node: IKey | Record<string, AnyType>,
    dataSet: Record<string, AnyType>[] | undefined,
    fieldNames: {
        key: string;
        children: string;
    }
): Record<string, AnyType> | undefined => {
    const key = typeof node === 'object' ? (node[fieldNames.key] as IKey) : node;

    const recursive = (nodes: Record<string, AnyType>[], parentNode: Record<string, AnyType> | undefined): Record<string, AnyType> | undefined => {
        for (const node of nodes) {
            if (node[fieldNames.key] === key) return parentNode;
            if (node[fieldNames.children]) {
                const result = recursive(node[fieldNames.children] as Record<string, AnyType>[], node);
                if (result) return result;
            }
        }
        return undefined;
    };

    if (!dataSet?.length) return undefined;
    return recursive(dataSet, undefined);
};
