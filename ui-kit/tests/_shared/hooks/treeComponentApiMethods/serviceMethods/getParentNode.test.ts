import { describe, it, expect } from 'vitest';
import { getParentNode } from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/getParentNode';

describe('findParentNode', () => {
    it('should return undefined when dataSet is undefined', () => {
        const result = getParentNode('key', undefined, { key: 'id', children: 'children' });
        expect(result).toBeUndefined();
    });

    it('should return undefined when key is not found in dataSet', () => {
        const dataSet = [
            { id: '1', children: [] },
            { id: '2', children: [] },
        ];
        const result = getParentNode('3', dataSet, { key: 'id', children: 'children' });
        expect(result).toBeUndefined();
    });

    it('should return parent node when key is found in dataSet', () => {
        const dataSet = [
            { id: '1', children: [{ id: '2', children: [] }] },
            { id: '3', children: [] },
        ];
        const result = getParentNode('2', dataSet, { key: 'id', children: 'children' });
        expect(result).toEqual({ id: '1', children: [{ id: '2', children: [] }] });
    });

    it('should return parent node when key is found in nested children', () => {
        const dataSet = [
            { id: '1', children: [{ id: '2', children: [{ id: '3', children: [] }] }] },
            { id: '4', children: [] },
        ];
        const result = getParentNode('3', dataSet, { key: 'id', children: 'children' });
        expect(result).toEqual({ id: '2', children: [{ id: '3', children: [] }] });
    });

    it('should return parent node when key is node', () => {
        const dataSet = [
            { id: '1', children: [{ id: '2', children: [{ id: '3', children: [] }] }] },
            { id: '4', children: [] },
        ];
        const result = getParentNode({id: '3'}, dataSet, { key: 'id', children: 'children' });
        expect(result).toEqual({ id: '2', children: [{ id: '3', children: [] }] });
    });
});