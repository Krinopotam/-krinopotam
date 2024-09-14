import {describe, it, expect} from 'vitest';
import {getNodeFromTree} from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/getNodeFromTree';

describe('getNodeFromTree', () => {
    it('should return undefined when dataSet is undefined', () => {
        const result = getNodeFromTree('key', undefined, {key: 'id', children: 'children'});
        expect(result).toBeUndefined();
    });

    it('should return undefined when key is undefined', () => {
        const dataSet = [
            {id: '1', children: []},
            {id: '2', children: []},
        ];
        const result = getNodeFromTree(undefined, dataSet, {key: 'id', children: 'children'});
        expect(result).toBeUndefined();
    });

    it('should return node when key is found in dataSet', () => {
        const dataSet = [
            {id: '1', children: []},
            {id: '2', children: []},
        ];
        const result = getNodeFromTree('2', dataSet, {key: 'id', children: 'children'});
        expect(result).toEqual({id: '2', children: []});
    });

    it('should return node when key is found in nested children', () => {
        const dataSet = [
            {id: '1', children: [{id: '2', children: []}]},
            {id: '3', children: []},
        ];
        const result = getNodeFromTree('2', dataSet, {key: 'id', children: 'children'});
        expect(result).toEqual({id: '2', children: []});
    });

    it('should return node when key is found in deeply nested children', () => {
        const item = {id: '3', children: []};
        const dataSet = [
            {id: '1', children: [{id: '2', children: [item]}]},
            {id: '4', children: []},
        ];
        const result = getNodeFromTree('3', dataSet, {key: 'id', children: 'children'});
        expect(result).toEqual({id: '3', children: []});
        expect(result).toBe(item);
    });
});
