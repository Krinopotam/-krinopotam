import {describe, expect, it} from 'vitest';
import {getGroupsOnly} from "@src/_shared/hooks/treeComponentApiMethods/serviceMethods/getGroupsOnly";

const fieldNames = {
    key:'id',
    children:'children',
    isGroup:'isGroup'
}

describe('keepGroupsOnly', () => {
    it('should remove non-group nodes', () => {
        const dataSet = [
            {id: '1', isGroup: true, children: []},
            {id: '2', isGroup: false},
            {id: '3', isGroup: true, children: []},
        ];
        const result = getGroupsOnly(dataSet, fieldNames);
        expect(result).toEqual([
            {id: '1', isGroup: true, children: []},
            {id: '3', isGroup: true, children: []},
        ]);
    });

    it('should remove the specified branch', () => {
        const dataSet = [
            {id: '1', isGroup: true, children: []},
            {id: '2', isGroup: true, children: []},
            {id: '3', isGroup: true, children: []},
        ];
        const removeBranch = '2';
        const result = getGroupsOnly(dataSet, fieldNames, removeBranch);
        expect(result).toEqual([
            {id: '1', isGroup: true, children: []},
            {id: '3', isGroup: true, children: []},
        ]);
    });

    it('should handle nested groups', () => {
        const dataSet = [
            {
                id: '1',
                isGroup: true,
                children: [
                    {id: '1.1', isGroup: true, children: []},
                    {id: '1.2', isGroup: false},
                ],
            },
            {id: '2', isGroup: true, children: []},
        ];

        const result = getGroupsOnly(dataSet, fieldNames);
        expect(result).toEqual([
            {
                id: '1',
                isGroup: true,
                children: [{id: '1.1', isGroup: true, children: []}],
            },
            {id: '2', isGroup: true, children: []},
        ]);
    });

    it('should handle nested groups and remove the specified branch', () => {
        const dataSet= [
            {
                id: '1',
                isGroup: true,
                children: [
                    {id: '1.1', isGroup: true, children: []},
                    {
                        id: '1.2',
                        isGroup: true,
                        children: [{id: '1.2.1'}],
                    },
                    {id: '1.3', isGroup: true, children: []},
                    {id: '1.3'},
                ],
            },
            {id: '2', isGroup: true, children: []},
        ];

        const removeBranch = '1.2';
        const result = getGroupsOnly(dataSet, fieldNames, removeBranch);
        expect(result).toEqual([
            {
                id: '1',
                isGroup: true,
                children: [
                    {id: '1.1', isGroup: true, children: []},
                    {id: '1.3', isGroup: true, children: []},
                ],
            },
            {id: '2', isGroup: true, children: []},
        ]);
    });
});
