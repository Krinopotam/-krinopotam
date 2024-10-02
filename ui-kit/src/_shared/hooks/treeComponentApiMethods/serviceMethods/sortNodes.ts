import {AnyType} from '@krinopotam/service-types';

type SortOrder = 'asc' | 'desc';

const compareNodes = (fields: (string | number)[], order: SortOrder) => {
    return (a: Record<string, AnyType>, b: Record<string, AnyType>): number => {
        for (const field of fields) {
            if (a[field] < b[field]) return order === 'asc' ? -1 : 1;
            if (a[field] > b[field]) return order === 'asc' ? 1 : -1;
        }
        return 0;
    };
};

const sortTree = <T extends Record<string, AnyType> = Record<string, AnyType>>(tree: T[], fields: (keyof T)[], order: SortOrder = 'asc'): T[] => {
    const sort = (nodes: T[]): T[] => {
        return nodes
            .map(node => ({
                ...node,
                children: node.children ? sort(node.children) : [],
            }))
            .sort(compareNodes(fields as (string | number)[], order));
    };

    return sort(tree);
};


const f = {
    a:1,
    b:2
}

sortTree(f,  ['a', 'b'])