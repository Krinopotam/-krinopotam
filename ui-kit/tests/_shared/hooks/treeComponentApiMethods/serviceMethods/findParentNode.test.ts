import { describe, it, expect } from 'vitest';
import { findParentNode } from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/findParentNode';

describe('findParentNode', () => {
    it('should return undefined when dataSet is undefined', () => {
        const result = findParentNode(undefined, 'key', { key: 'id', children: 'children' });
        expect(result).toBeUndefined();
    });

    it('should return undefined when key is not found in dataSet', () => {
        const dataSet = [
            { id: '1', children: [] },
            { id: '2', children: [] },
        ];
        const result = findParentNode(dataSet, '3', { key: 'id', children: 'children' });
        expect(result).toBeUndefined();
    });

    it('should return parent node when key is found in dataSet', () => {
        const dataSet = [
            { id: '1', children: [{ id: '2', children: [] }] },
            { id: '3', children: [] },
        ];
        const result = findParentNode(dataSet, '2', { key: 'id', children: 'children' });
        expect(result).toEqual({ id: '1', children: [{ id: '2', children: [] }] });
    });

    it('should return parent node when key is found in nested children', () => {
        const dataSet = [
            { id: '1', children: [{ id: '2', children: [{ id: '3', children: [] }] }] },
            { id: '4', children: [] },
        ];
        const result = findParentNode(dataSet, '3', { key: 'id', children: 'children' });
        expect(result).toEqual({ id: '2', children: [{ id: '3', children: [] }] });
    });
});