import {describe, expect, it} from 'vitest';
import {labeledValueToNode} from '@src/treeSelect/tools/labeledValueToNode';
import {ILabeledValue} from '@src/treeSelect/types/types';

const fieldNames = {
    key: 'id',
    title: 'title',
    children: 'children',
};

describe('labeledValueToNode', () => {
    it('should return base node if node is not found in dataSet', () => {
        const val: ILabeledValue = {value: 'key1', label: 'label1'};
        const dataSet: Record<string, unknown>[] = [];

        const result = labeledValueToNode(val, dataSet, fieldNames);
        expect(result).toEqual({id: 'key1', title: 'label1'});
    });

    it('should return node from dataSet if found', () => {
        const val: ILabeledValue = {value: 'key2', label: 'label2'};
        const dataSet: Record<string, unknown>[] = [{id: 'key2', title: 'title2', children: []}];

        const result = labeledValueToNode(val, dataSet, fieldNames);
        expect(result).toEqual({id: 'key2', title: 'title2'});
    });

    it('should remove children from node if found', () => {
        const val: ILabeledValue = {value: 'key3', label: 'label3'};
        const dataSet: Record<string, unknown>[] = [{id: 'key3', title: 'title3', children: [{id: 'child1'}]}];

        const result = labeledValueToNode(val, dataSet, fieldNames);
        expect(result).toEqual({id: 'key3', title: 'title3'});
    });
});
