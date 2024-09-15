import {describe, expect, it} from 'vitest';
import {getPrevNodeKey} from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/getPrevNodeKey';
import {IFindNodeOptions} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';

describe('findPrevNodeKey', () => {
    const fieldNames = {
        key: 'id',
        children: 'children',
        disabled: 'disabled',
        selectable: 'selectable',
    };

    const sampleData = [
        {id: '1', children: [{id: '1-1'}, {id: '1-2'}]},
        {id: '2', children: [{id: '2-1'}]},
        {id: '3', children: [{id: '3-1'}, {id: '3-2'}]},
        {id: '4', children: [{id: '4-1', disabled: true}, {id: '4-2'}]},
        {id: '5', children: [{id: '5-1', selectable: false}, {id: '5-2'}]},
        {id: '6', children: [{id: '6-1'}, {id: '6-2', disabled: true}]},
        {id: '7', children: [{id: '7-1'}, {id: '7-2', selectable: false}]},
        {id: '8', children: [{id: '8-1'}]},
    ];

    it('should return undefined if no dataset is provided', () => {
        const result = getPrevNodeKey(undefined, '1', [], fieldNames);
        expect(result).toBeUndefined();
    });

    it('should return the prev node key in the same level', () => {
        const result = getPrevNodeKey(sampleData, '2', ['2'], fieldNames, {sameLevelOnly: true});
        expect(result).toBe('1');
    });

    it('should return the prev node key in the same level if node passed', () => {
        const result = getPrevNodeKey(sampleData, {id: '2'}, ['2'], fieldNames, {sameLevelOnly: true});
        expect(result).toBe('1');
    });

    it('should return the prev node key in the same level for children', () => {
        const result = getPrevNodeKey(sampleData, '1-2', ['1'], fieldNames, {sameLevelOnly: true});
        expect(result).toBe('1-1');
    });

    it('should return the undefined if no node on the same level is found', () => {
        const result = getPrevNodeKey(sampleData, '2-1', [], fieldNames, {
            sameLevelOnly: true,
            defaultToBoundary: false,
        });
        expect(result).toBe(undefined);
    });

    it('should return the parent node key if no node on the same level is found', () => {
        const result = getPrevNodeKey(sampleData, '2-1', [], fieldNames);
        expect(result).toBe('2');
    });

    it('should return the last child key if prev node on the same the level has children and no matter if it is expanded', () => {
        const result = getPrevNodeKey(sampleData, '2', [], fieldNames, {expandedOnly: false});
        expect(result).toBe('1-2');
    });

    it('should return the last child key of the prev node on the same level has children and it is expanded', () => {
        const result = getPrevNodeKey(sampleData, '2', ['1'], fieldNames, {expandedOnly: true});
        expect(result).toBe('1-2');
    });

    it('should return the first child key if the prev node on the same level has children and it is expanded, and second children is disabled', () => {
        const result = getPrevNodeKey(sampleData, '7', ['6'], fieldNames, {expandedOnly: true});
        expect(result).toBe('6-1');
    });

    it('should return the first child key if the prev node on the same level has children and it is expanded, and second children is not selectable', () => {
        const result = getPrevNodeKey(sampleData, '8', ['7'], fieldNames, {expandedOnly: true});
        expect(result).toBe('7-1');
    });

    it('should return the second child key if the prev node on the same level has children and it is expanded, and no matter is children disabled', () => {
        const result = getPrevNodeKey(sampleData, '7', ['6'], fieldNames, {expandedOnly: true, notDisabled: false});
        expect(result).toBe('6-2');
    });

    it('should return the second child key if the prev node on the same level has children and it is expanded, and no matter is children not selectable', () => {
        const result = getPrevNodeKey(sampleData, '8', ['7'], fieldNames, {expandedOnly: true, selectableOnly: false});
        expect(result).toBe('7-2');
    });

    it('should return prev node on same level if prev node is not expanded', () => {
        const result = getPrevNodeKey(sampleData, '2', [], fieldNames, {expandedOnly: true});
        expect(result).toBe('1');
    });

    it('should return last child node of prev node on the same level if prev node is expanded', () => {
        const result = getPrevNodeKey(sampleData, '2', ['1'], fieldNames, {expandedOnly: true});
        expect(result).toBe('1-2');
    });

    it('should respect the expandedOnly option with true', () => {
        const opts: IFindNodeOptions = {expandedOnly: true};
        const result = getPrevNodeKey(sampleData, '2', [], fieldNames, opts);
        expect(result).toBe('1');
    });

    it('should respect the expandedOnly option with false', () => {
        const opts: IFindNodeOptions = {expandedOnly: false};
        const result = getPrevNodeKey(sampleData, '2', [], fieldNames, opts);
        expect(result).toBe('1-2');
    });

    it('should respect the notDisabled option with true', () => {
        const opts: IFindNodeOptions = {notDisabled: true};
        const result = getPrevNodeKey(sampleData, '7', ['6'], fieldNames, opts);
        expect(result).toBe('6-1');
    });

    it('should respect the notDisabled option with false', () => {
        const opts: IFindNodeOptions = {notDisabled: false};
        const result = getPrevNodeKey(sampleData, '7', ['6'], fieldNames, opts);
        expect(result).toBe('6-2');
    });

    it('should respect the selectableOnly option with true', () => {
        const opts: IFindNodeOptions = {selectableOnly: true};
        const result = getPrevNodeKey(sampleData, '8', ['7'], fieldNames, opts);
        expect(result).toBe('7-1');
    });

    it('should respect the selectableOnly option with false', () => {
        const opts: IFindNodeOptions = {selectableOnly: false};
        const result = getPrevNodeKey(sampleData, '8', ['7'], fieldNames, opts);
        expect(result).toBe('7-2');
    });

    it('should work without expandedOnly opts parameter (default expandedOnly: true)', () => {
        const result = getPrevNodeKey(sampleData, '2', [], fieldNames);
        expect(result).toBe('1');
    });

    it('should work without expandedOnly opts parameter (default expandedOnly: true)', () => {
        const result = getPrevNodeKey(sampleData, '2', ['1'], fieldNames);
        expect(result).toBe('1-2');
    });

    it('should work without notDisabled opts parameter (default notDisabled: true)', () => {
        const result = getPrevNodeKey(sampleData, '7', ['6'], fieldNames);
        expect(result).toBe('6-1');
    });

    it('should work without selectableOnly opts parameter (default selectableOnly: true)', () => {
        const result = getPrevNodeKey(sampleData, '8', ['7'], fieldNames);
        expect(result).toBe('7-1');
    });

    it('should return undefined if current node is the last and defaultToBoundary is false', () => {
        const result = getPrevNodeKey(sampleData, '1', [], fieldNames, {defaultToBoundary: false});
        expect(result).toBe(undefined);
    });

    it('should return current node if current node is the last and defaultToBoundary is true', () => {
        const result = getPrevNodeKey(sampleData, '1', [], fieldNames, {defaultToBoundary: true});
        expect(result).toBe('1');
    });

    it('should return first node if current node is undefined', () => {
        const result = getPrevNodeKey(sampleData, undefined, [], fieldNames);
        expect(result).toBe('1');
    });
});
