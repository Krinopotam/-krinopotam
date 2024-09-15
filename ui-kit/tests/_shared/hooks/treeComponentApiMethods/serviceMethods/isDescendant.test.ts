import {describe, expect, it} from 'vitest';
import {isDescendant} from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/isDescendant';

describe('isDescendant', () => {
    const dataSet = [
        {
            id: 1,
            children: [
                {id: 2, children: []},
                {id: 3, children: [{id: 4, children: []}]},
            ],
        },
    ];
    const fieldNames = {key: 'id', children: 'children'};

    it('should return true if the child is a descendant of the parent', () => {
        const result = isDescendant(1, 4, dataSet, fieldNames);
        expect(result).toBe(true);
    });

    it('should return false if the child is not a descendant of the parent', () => {
        const result = isDescendant(2, 1, dataSet, fieldNames);
        expect(result).toBe(false);
    });

    it('should return false if the child is undefined', () => {
        const result = isDescendant(1, undefined, dataSet, fieldNames);
        expect(result).toBe(false);
    });

    it('should return false if the parent has no children', () => {
        const result = isDescendant(2, 4, dataSet, fieldNames); // 2 has no children
        expect(result).toBe(false);
    });
});