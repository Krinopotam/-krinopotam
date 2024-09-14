import {describe, expect, it} from 'vitest';
import {findNextNodeKey} from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/findeNextNodeKey';
import {IFindNodeOptions} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';
import {IKey} from '@krinopotam/service-types';

describe('findNextNodeKey', () => {
    const fieldNames = {
        key: 'id',
        children: 'children',
    };

    const sampleData = [
        {id: '1', children: [{id: '1-1'}, {id: '1-2'}]},
        {id: '2', children: [{id: '2-1'}]},
        {id: '3', children: [{id: '3-1'}, {id: '3-2'}]},
        {id: '4', children: [{id: '4-1', disabled: true}, {id: '4-2'}]},
        {id: '5', children: [{id: '5-1', selectable: false}, {id: '5-2'}]},
    ];

    it('should return undefined if no dataset is provided', () => {
        const result = findNextNodeKey(undefined, '1', [], fieldNames);
        expect(result).toBeUndefined();
    });

    it('should return the next node key in the same level', () => {
        const result = findNextNodeKey(sampleData, '1', ['1'], fieldNames, {sameLevelOnly: true});
        expect(result).toBe('2');
    });

    it('should return the next node key in the same level for children', () => {
        const result = findNextNodeKey(sampleData, '1-1', [], fieldNames, {sameLevelOnly: true});
        expect(result).toBe('1-2');
    });

    it('should return the undefined if no node on the same level is found', () => {
        const result = findNextNodeKey(sampleData, '2-1', [], fieldNames, {
            sameLevelOnly: true,
            defaultToBoundary: false,
        });
        expect(result).toBe(undefined);
    });

    it('should return the next parent level node key if no node on the same level is found', () => {
        const result = findNextNodeKey(sampleData, '1-2' as IKey, [], fieldNames);
        expect(result).toBe('2');
    });

    it('should return the first child key if the current node has children and no matter if it is expanded', () => {
        const result = findNextNodeKey(sampleData, '2' as IKey, [], fieldNames, {expandedOnly: false});
        expect(result).toBe('2-1');
    });

    it('should return the first child key if the current node has children and it is expanded', () => {
        const result = findNextNodeKey(sampleData, '2' as IKey, ['2'], fieldNames, {expandedOnly: true});
        expect(result).toBe('2-1');
    });

    it('should return the second child key if the current node has children and it is expanded, and first children is disabled', () => {
        const result = findNextNodeKey(sampleData, '4' as IKey, ['4'], fieldNames, {expandedOnly: true});
        expect(result).toBe('4-2');
    });

    it('should return the second child key if the current node has children and it is expanded, and first children is not selectable', () => {
        const result = findNextNodeKey(sampleData, '5' as IKey, ['5'], fieldNames, {expandedOnly: true});
        expect(result).toBe('5-2');
    });

    it('should return the first child key if the current node has children and it is expanded, and no matter children is disabled', () => {
        const result = findNextNodeKey(sampleData, '4' as IKey, ['4'], fieldNames, {expandedOnly: true, notDisabled: false});
        expect(result).toBe('4-1');
    });

    it('should return the first child key if the current node has children and it is expanded, and no matter children is not selectable', () => {
        const result = findNextNodeKey(sampleData, '5' as IKey, ['5'], fieldNames, {expandedOnly: true, selectableOnly: false});
        expect(result).toBe('5-1');
    });

    it('should return next node on same level if current node is not expanded', () => {
        const result = findNextNodeKey(sampleData, '2' as IKey, [], fieldNames, {expandedOnly: true});
        expect(result).toBe('3');
    });

    it('should respect the expandedOnly option with true', () => {
        const opts: IFindNodeOptions = {expandedOnly: true};
        const result = findNextNodeKey(sampleData, '1' as IKey, [], fieldNames, opts);
        expect(result).toBe('2');
    });

    it('should respect the expandedOnly option with false', () => {
        const opts: IFindNodeOptions = {expandedOnly: false};
        const result = findNextNodeKey(sampleData, '1' as IKey, [], fieldNames, opts);
        expect(result).toBe('1-1');
    });

    it('should respect the notDisabled option with true', () => {
        const opts: IFindNodeOptions = {notDisabled: true};
        const result = findNextNodeKey(sampleData, '4' as IKey, ['4'], fieldNames, opts);
        expect(result).toBe('4-2');
    });

    it('should respect the notDisabled option with false', () => {
        const opts: IFindNodeOptions = {notDisabled: false};
        const result = findNextNodeKey(sampleData, '4' as IKey, ['4'], fieldNames, opts);
        expect(result).toBe('4-1');
    });

    it('should respect the selectableOnly option with true', () => {
        const opts: IFindNodeOptions = {selectableOnly: true};
        const result = findNextNodeKey(sampleData, '5' as IKey, ['5'], fieldNames, opts);
        expect(result).toBe('5-2');
    });

    it('should respect the selectableOnly option with false', () => {
        const opts: IFindNodeOptions = {selectableOnly: false};
        const result = findNextNodeKey(sampleData, '5' as IKey, ['5'], fieldNames, opts);
        expect(result).toBe('5-1');
    });

    it('should work without expandedOnly opts parameter (default expandedOnly: true)', () => {
        const result = findNextNodeKey(sampleData, '1' as IKey, [], fieldNames);
        expect(result).toBe('2');
    });

    it('should work without expandedOnly opts parameter (default expandedOnly: true)', () => {
        const result = findNextNodeKey(sampleData, '1' as IKey, ['1'], fieldNames);
        expect(result).toBe('1-1');
    });

    it('should work without notDisabled opts parameter (default notDisabled: true)', () => {
        const result = findNextNodeKey(sampleData, '4' as IKey, ['4'], fieldNames);
        expect(result).toBe('4-2');
    });

    it('should work without selectableOnly opts parameter (default selectableOnly: true)', () => {
        const result = findNextNodeKey(sampleData, '5' as IKey, ['5'], fieldNames);
        expect(result).toBe('5-2');
    });

    it('should return undefined if current node is the last and defaultToBoundary is false', () => {
        const result = findNextNodeKey(sampleData, '5-2' as IKey, [], fieldNames, {defaultToBoundary: false});
        expect(result).toBe(undefined);
    });

    it('should return undefined if current node is the last not expanded and defaultToBoundary is false', () => {
        const result = findNextNodeKey(sampleData, '5' as IKey, [], fieldNames, {expandedOnly: true, defaultToBoundary: false});
        expect(result).toBe(undefined);
    });

    it('should return current node if current node is the last and defaultToBoundary is true', () => {
        const result = findNextNodeKey(sampleData, '5-2' as IKey, ['5'], fieldNames, {defaultToBoundary: true});
        expect(result).toBe('5-2');
    });

    it('should return current node if current node is the last and opts is not defined', () => {
        const result = findNextNodeKey(sampleData, '5' as IKey, [], fieldNames);
        expect(result).toBe('5');
    });

    it('should return first node if current node is undefined', () => {
        const result = findNextNodeKey(sampleData, undefined, [], fieldNames);
        expect(result).toBe('1');
    });
});
