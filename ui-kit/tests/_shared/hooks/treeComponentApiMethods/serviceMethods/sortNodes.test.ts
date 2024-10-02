import {describe, expect, it} from 'vitest';
import {sortNodes} from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/sortNodes';

describe('sortTree', () => {
    it('should sort tree nodes in ascending order using default comparator', () => {
        const tree = [
            {id: 3, name: 'Node 3'},
            {id: 1, name: 'Node 1'},
            {id: 2, name: 'Node 2'},
        ];

        const sortedTree = sortNodes(tree, ['id'], 'asc');

        expect(sortedTree).toEqual([
            {id: 1, name: 'Node 1'},
            {id: 2, name: 'Node 2'},
            {id: 3, name: 'Node 3'},
        ]);
    });

    it('should sort tree nodes in descending order using default comparator', () => {
        const tree = [
            {id: 3, name: 'Node 3'},
            {id: 1, name: 'Node 1'},
            {id: 2, name: 'Node 2'},
        ];

        const sortedTree = sortNodes(tree, ['id'], 'desc');

        expect(sortedTree).toEqual([
            {id: 3, name: 'Node 3'},
            {id: 2, name: 'Node 2'},
            {id: 1, name: 'Node 1'},
        ]);
    });

    it('should sort tree nodes using custom comparator function', () => {
        const tree = [
            {id: 3, name: 'Node 3'},
            {id: 1, name: 'Node 1'},
            {id: 2, name: 'Node 2'},
        ];

        const comparator = (a: {id: number; name: string}, b: {id: number; name: string}) => a.name.localeCompare(b.name);

        const sortedTree = sortNodes(tree, comparator, 'asc');

        expect(sortedTree).toEqual([
            {id: 1, name: 'Node 1'},
            {id: 2, name: 'Node 2'},
            {id: 3, name: 'Node 3'},
        ]);
    });

    it('should sort tree nodes using list of fields as comparator', () => {
        const tree = [
            {id: 3, name: 'Node 3', category: 'A'},
            {id: 1, name: 'Node 1', category: 'B'},
            {id: 2, name: 'Node 2', category: 'A'},
        ];

        const sortedTree = sortNodes(tree, ['category', 'name'], 'asc');

        expect(sortedTree).toEqual([
            {id: 2, name: 'Node 2', category: 'A'},
            {id: 3, name: 'Node 3', category: 'A'},
            {id: 1, name: 'Node 1', category: 'B'},
        ]);
    });

    it('should sort tree nodes with children', () => {
        const tree = [
            {
                id: 1,
                name: 'Node 1',
                children: [
                    {id: 3, name: 'Node 3'},
                    {id: 2, name: 'Node 2'},
                ],
            },
            {
                id: 4,
                name: 'Node 4',
                children: [
                    {id: 6, name: 'Node 6'},
                    {id: 5, name: 'Node 5'},
                ],
            },
        ];

        const sortedTree = sortNodes(tree, ['id'], 'asc');

        expect(sortedTree).toEqual([
            {
                id: 1,
                name: 'Node 1',
                children: [
                    {id: 2, name: 'Node 2'},
                    {id: 3, name: 'Node 3'},
                ],
            },
            {
                id: 4,
                name: 'Node 4',
                children: [
                    {id: 5, name: 'Node 5'},
                    {id: 6, name: 'Node 6'},
                ],
            },
        ]);
    });
});
