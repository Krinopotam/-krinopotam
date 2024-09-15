import {describe, it, expect} from 'vitest';
import {nodeToLabeledValue} from '@src/treeSelect/tools/nodeToLabeledValue';
import {IFieldNames} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';
import {ILabeledValue} from '@src/treeSelect/types/types';

const fieldNames = {
    key: 'id',
    title: 'title',
    children: 'children',
};

describe('nodeToLabeledValue', () => {
    it('should convert node to labeled value', () => {
        const node = {id: 'key1', title: 'label1', children: []};
        const result: ILabeledValue = nodeToLabeledValue(node, fieldNames);
        expect(result).toEqual({value: 'key1', label: 'label1'});
    });

    it('should handle nodes without children', () => {
        const node = {id: 'key2', title: 'label2'};
        const result: ILabeledValue = nodeToLabeledValue(node, fieldNames);
        expect(result).toEqual({value: 'key2', label: 'label2'});
    });

    it('should handle nodes with different field names', () => {
        const customFieldNames = {
            key: 'customId',
            title: 'customTitle',
            children: 'customChildren',
        } as IFieldNames;
        const node = {customId: 'key3', customTitle: 'label3', customChildren: []};
        const result: ILabeledValue = nodeToLabeledValue(node, customFieldNames);
        expect(result).toEqual({value: 'key3', label: 'label3'});
    });
});
