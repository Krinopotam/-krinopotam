import { describe, it, expect } from 'vitest';
import {getAllParentsKeys} from "@src/_shared/hooks/treeComponentApiMethods/serviceMethods/getAllParentsKeys";


interface Node extends Record<string, unknown>{
    id: number;
    children?: Node[];
}

describe('getAllParentsKeys', () => {
    it('should return all parent keys', () => {
        const data: Node[] = [
            { id: 1, children: [{ id: 2 }, { id: 3 }] },
            { id: 4, children: [{ id: 5, children: [{ id: 6 }] }] },
        ];

        const result = getAllParentsKeys(data, {key: 'id', children: 'children'});
        expect(result).toEqual([1, 4, 5]);
    });

    it('should return an empty array if no parents found', () => {
        const data: Node[] = [{ id: 1 }, { id: 2 }];

        const result = getAllParentsKeys(data, {key: 'id', children: 'children'});
        expect(result).toEqual([]);
    });

    it('should return undefined if dataSet is undefined', () => {
        const result = getAllParentsKeys(undefined, {key: 'id', children: 'children'});
        expect(result).toBeUndefined();
    });
});