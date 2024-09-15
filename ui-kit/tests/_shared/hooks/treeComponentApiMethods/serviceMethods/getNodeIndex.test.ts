import { describe, it, expect } from 'vitest';
import { getNodeIndex } from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/getNodeIndex';

describe('findNodeIndex', () => {
    const fieldNames = { key: 'id', children: 'children' };

    const dataSet = [
        { id: 1, name: 'Node 1', children: [{ id: 2, name: 'Node 1.1' }] },
        { id: 3, name: 'Node 2', children: [{ id: 4, name: 'Node 2.1' }] },
    ];

    it('should find the node index and parent collection', () => {
        const result = getNodeIndex(dataSet, 4, fieldNames);
        expect(result).toEqual({ idx: 0, nodes: dataSet[1].children });
        expect(result.nodes).toBe(dataSet[1].children);
    });

    it('should find the node index and parent collection if node passed', () => {
        const result = getNodeIndex(dataSet, {id:4}, fieldNames);
        expect(result).toEqual({ idx: 0, nodes: dataSet[1].children });
        expect(result.nodes).toBe(dataSet[1].children);
    });

    it('should return -1 and undefined if the node is not found', () => {
        const result = getNodeIndex(dataSet, 5, fieldNames);
        expect(result).toEqual({ idx: -1, nodes: undefined });
    });

    it('should handle undefined dataset', () => {
        const result = getNodeIndex(undefined, 1, fieldNames);
        expect(result).toEqual({ idx: -1, nodes: undefined });
    });
});