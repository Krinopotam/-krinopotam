import {describe, expect, it} from 'vitest';
import {anyValueToValuesWithLabel} from '@src/treeSelect/tools/anyValueToValuesWithLabel';
import {ITreeSelectValue} from '@src/treeSelect';

describe('anyValueToValuesWithLabel', () => {
    const fieldNames = {
        key: 'id',
        title: 'title',
    };

    it('should return undefined if val is falsy', () => {
        expect(anyValueToValuesWithLabel(undefined, fieldNames)).toBeUndefined();
    });

    it('should convert a single primitive value to ILabeledValue', () => {
        const result = anyValueToValuesWithLabel('key1', fieldNames);
        expect(result).toEqual([{value: 'key1'}]);
    });

    it('should convert an array of primitive values to ILabeledValue[]', () => {
        const result = anyValueToValuesWithLabel(['key1', 'key2'], fieldNames);
        expect(result).toEqual([{value: 'key1'}, {value: 'key2'}]);
    });

    it('should convert a single object to ILabeledValue', () => {
        const obj = {id: 'key1', title: 'label1'};
        const result = anyValueToValuesWithLabel(obj, fieldNames);
        expect(result).toEqual([{value: 'key1', label: 'label1'}]);
    });

    it('should convert an array of objects to ILabeledValue[]', () => {
        const objs = [
            {id: 'key1', title: 'label1'},
            {id: 'key2', title: 'label2'},
        ];
        const result = anyValueToValuesWithLabel(objs, fieldNames);
        expect(result).toEqual([
            {value: 'key1', label: 'label1'},
            {value: 'key2', label: 'label2'},
        ]);
    });

    it('should handle mixed arrays of primitives and objects', () => {
        const mixed = ['key1', {id: 'key2', title: 'label2'}] as ITreeSelectValue;
        const result = anyValueToValuesWithLabel(mixed, fieldNames);
        expect(result).toEqual([{value: 'key1'}, {value: 'key2', label: 'label2'}]);
    });
});