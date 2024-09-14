import {describe, it, expect} from 'vitest';
import {removeFromDataSet} from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/removeFromDataSet';

describe('removeFromDataSet', () => {
    it('should remove the node with the given key from the data set', () => {
        const dataSet = [
            {id: 1, name: 'Node 1', children: []},
            {id: 2, name: 'Node 2', children: []},
            {id: 3, name: 'Node 3', children: []},
        ];
        const key = 2;
        const fieldNames = {key: 'id', children: 'children'};

        removeFromDataSet(dataSet, key, fieldNames);

        expect(dataSet).toEqual([
            {id: 1, name: 'Node 1', children: []},
            {id: 3, name: 'Node 3', children: []},
        ]);
    });

    it('should remove the node with the given key from the complex data set', () => {
        const dataSet = [
            {
                id: 1,
                name: 'Node 1',
                children: [
                    {
                        id: 11,
                        name: 'Node 11',
                        children: [
                            {id: 111, name: 'Node 111', children: []},
                            {id: 112, name: 'Node 112', children: []},
                        ],
                    },
                    {id: 12, name: 'Node 12', children: []},
                ],
            },
            {id: 2, name: 'Node 2', children: []},
            {id: 3, name: 'Node 3', children: []},
        ];
        const fieldNames = {key: 'id', children: 'children'};

        removeFromDataSet(dataSet, 11, fieldNames);

        expect(dataSet).toEqual([
            {
                id: 1,
                name: 'Node 1',
                children: [{id: 12, name: 'Node 12', children: []}],
            },
            {id: 2, name: 'Node 2', children: []},
            {id: 3, name: 'Node 3', children: []},
        ]);
    });

    it('should not remove any nodes if the key is not found', () => {
        const dataSet = [
            {id: 1, name: 'Node 1', children: []},
            {id: 2, name: 'Node 2', children: []},
            {id: 3, name: 'Node 3', children: []},
        ];
        const key = 4;
        const fieldNames = {key: 'id', children: 'children'};

        removeFromDataSet(dataSet, key, fieldNames);

        expect(dataSet).toEqual([
            {id: 1, name: 'Node 1', children: []},
            {id: 2, name: 'Node 2', children: []},
            {id: 3, name: 'Node 3', children: []},
        ]);
    });

    it('should not remove any nodes if the data set is empty', () => {
        const dataSet: [] = [];
        const key = 1;
        const fieldNames = {key: 'id', children: 'children'};

        removeFromDataSet(dataSet, key, fieldNames);

        expect(dataSet).toEqual([]);
    });
});
