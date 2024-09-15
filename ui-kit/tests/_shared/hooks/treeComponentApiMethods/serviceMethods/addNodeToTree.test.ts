import {describe, it, expect} from 'vitest';
import {addNodeToTree} from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/addNodeToTree';

describe('addNodeToTree', () => {
    const fieldNames = {
        key: 'id',
        children: 'children',
        isLeaf: 'isLeaf',
        isGroup: 'isGroup',
    };

    it('should add a node below the target node', () => {
        const dataSet = [
            {id: 1, children: []},
            {id: 2, children: []},
        ];
        const node = {id: 3, children: []};
        const target = 1;
        const position = 'below';

        const result = addNodeToTree(node, target, dataSet, fieldNames, position);

        expect(result).toEqual([
            {id: 1, children: []},
            {id: 3, children: []},
            {id: 2, children: []},
        ]);
    });

    it('should add a node above the target node', () => {
        const dataSet = [
            {id: 1, children: []},
            {id: 2, children: []},
        ];
        const node = {id: 3, children: []};
        const target = 2;
        const position = 'above';

        const result = addNodeToTree(node, target, dataSet, fieldNames, position);

        expect(result).toEqual([
            {id: 1, children: []},
            {id: 3, children: []},
            {id: 2, children: []},
        ]);
    });

    it('should add a node inside the target node at the top', () => {
        const dataSet = [{id: 1, children: [{id: 2, children: []}]}];
        const node = {id: 3, children: []};
        const target = 1;
        const position = 'insideTop';

        const result = addNodeToTree(node, target, dataSet, fieldNames, position);

        expect(result).toEqual([
            {
                id: 1,
                children: [
                    {id: 3, children: []},
                    {id: 2, children: []},
                ],
            },
        ]);
    });

    it('should add a node inside the target node at the bottom', () => {
        const dataSet = [{id: 1, children: [{id: 2, children: []}]}];
        const node = {id: 3, children: []};
        const target = 1;
        const position = 'insideBottom';

        const result = addNodeToTree(node, target, dataSet, fieldNames, position);

        expect(result).toEqual([
            {
                id: 1,
                children: [
                    {id: 2, children: []},
                    {id: 3, children: []},
                ],
            },
        ]);
    });

    it('should not add a node inside a leaf node', () => {
        const dataSet = [{id: 1, children: [], isLeaf: true}];
        const node = {id: 2, children: []};
        const target = 1;
        const position = 'insideTop';

        const result = addNodeToTree(node, target, dataSet, fieldNames, position);

        expect(result).toEqual([
            {id: 1, children: [], isLeaf: true},
            {id: 2, children: []},
        ]);
    });

    it('should handle undefined target node by adding the node to the root', () => {
        const dataSet = [{id: 1, children: []}];
        const node = {id: 2, children: []};

        const result = addNodeToTree(node, undefined, dataSet, fieldNames);

        expect(result).toEqual([
            {id: 1, children: []},
            {id: 2, children: []},
        ]);
    });

    it('should handle groupsMode by preventing adding to non-group nodes: should adding below target', () => {
        const dataSet = [
            {id: 1, children: [], isGroup: false},
            {id: 2, children: [], isGroup: true},
        ];
        const node = {id: 3, children: []};
        const target = 1;
        const result = addNodeToTree(node, target, dataSet, fieldNames, 'insideTop', true);

        expect(result).toEqual([
            {id: 1, children: [], isGroup: false},
            {id: 3, children: []},
            {id: 2, children: [], isGroup: true},
        ]);
    });

    it('should handle groupsMode by adding to group node', () => {
        const dataSet = [
            {id: 1, children: [], isGroup: true},
            {id: 2, children: [], isGroup: true},
        ];
        const node = {id: 3, children: []};
        const target = 1;
        const result = addNodeToTree(node, target, dataSet, fieldNames, 'insideTop', true);

        expect(result).toEqual([
            {id: 1, children: [{id: 3, children: []}], isGroup: true},
            {id: 2, children: [], isGroup: true},
        ]);
    });
});
