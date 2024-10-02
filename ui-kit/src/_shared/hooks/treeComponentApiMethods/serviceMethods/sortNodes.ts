import {AnyType} from '@krinopotam/service-types';

type SortOrder = 'asc' | 'desc';
type comparator = (a: AnyType, b: AnyType) => number;

const getDefaultComparator = (fields: string[], order: SortOrder) => {
    return (a: Record<string, AnyType>, b: Record<string, AnyType>): number => {
        for (const field of fields) {
            if (a[field] < b[field]) return order === 'asc' ? -1 : 1;
            if (a[field] > b[field]) return order === 'asc' ? 1 : -1;
        }
        return 0;
    };
};

export const sortNodes = <T extends Record<string, AnyType> = Record<string, AnyType>>(dataSet: T[] | undefined, comparator: (keyof T)[] | comparator, order: SortOrder = 'asc'): T[] | undefined => {
    if (!dataSet) return undefined;
    const compFn = typeof comparator === 'function' ? comparator : getDefaultComparator(comparator as string[] , order);
    const sort = (nodes: T[]): T[] => {
        return nodes
            .map(node => ({
                ...node,
                children: node.children ? sort(node.children) : undefined,
            }))
            .sort(compFn);
    };

    return sort(dataSet);
};

