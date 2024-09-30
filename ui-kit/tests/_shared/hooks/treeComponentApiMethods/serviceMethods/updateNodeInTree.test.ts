import {describe, it, expect} from 'vitest';
import {updateNodeInTree} from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/updateNodeInTree';

const fieldNames = {
    key: 'id',
    children: 'children',
    isLeaf: 'isLeaf',
    isGroup: 'isGroup',
};

describe('updateNodeInTree', () => {
    it('should update a node and move it correctly in the tree dataset', () => {
        const dataSet = [
            {id: 1, children: [{id: 2, oldField: 'oldValue'}, {id: 3}]},
            {id: 4, children: [{id: 5}, {id: 6}]},
        ];

        const nodeToUpdate = {id: 2, oldField: 'updated oldValue', newField: 'newValue'};

        const updatedDataSet = updateNodeInTree(nodeToUpdate, 4, dataSet, fieldNames);

        expect(updatedDataSet).toEqual([
            {id: 1, children: [{id: 3}]},
            {id: 4, children: [{id: 5}, {id: 6}, {id: 2, oldField: 'updated oldValue', newField: 'newValue'}]},
        ]);
    });

    it('should not move updated node if target node is the same', () => {
        const dataSet = [
            {id: 1, children: [{id: 2, oldField: 'oldValue'}, {id: 3}]},
            {id: 4, children: [{id: 5}, {id: 6}]},
        ];

        const nodeToUpdate = {id: 2, oldField: 'updated oldValue', newField: 'newValue'};

        const updatedDataSet = updateNodeInTree(nodeToUpdate, 2, dataSet, fieldNames);

        expect(updatedDataSet).toEqual([
            {id: 1, children: [{id: 2, oldField: 'updated oldValue', newField: 'newValue'}, {id: 3}]},
            {id: 4, children: [{id: 5}, {id: 6}]},
        ]);
    });

    it('should move updated node to the root if target node is undefined', () => {
        const dataSet = [
            {id: 1, children: [{id: 2, oldField: 'oldValue'}, {id: 3}]},
            {id: 4, children: [{id: 5}, {id: 6}]},
        ];

        const nodeToUpdate = {id: 2, oldField: 'updated oldValue', newField: 'newValue'};

        const updatedDataSet = updateNodeInTree(nodeToUpdate, undefined, dataSet, fieldNames);

        expect(updatedDataSet).toEqual([
            {id: 1, children: [{id: 3}]},
            {id: 4, children: [{id: 5}, {id: 6}]},
            {id: 2, oldField: 'updated oldValue', newField: 'newValue'}
        ]);
    });

    it('should not update if node or dataSet is undefined', () => {
        const result = updateNodeInTree(undefined, undefined, undefined, fieldNames);
        expect(result).toBeUndefined();
    });
});
