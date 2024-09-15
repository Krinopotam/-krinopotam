import {beforeEach, describe, expect, it, vi} from 'vitest';
import {moveNode} from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/moveNode';
import {INodePosition} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';

vi.mock('@krinopotam/common-hooks', () => ({
    IsDebugMode: vi.fn().mockReturnValue(true),
}));

describe('moveNode', () => {
    const fieldNames = {
        key: 'id',
        children: 'children',
        isLeaf: 'isLeaf',
        isGroup: 'isGroup',
    };

    let dataSet: Record<string, unknown>[];

    beforeEach(() => {
        dataSet = [
            {
                id: 1,
                children: [
                    {id: 11, children: []},
                    {id: 12, isLeaf: true},
                    {id: 13, children: []},
                ],
            },
            {id: 2, children: [{id: 21, children: [{id: 211, children: []}]}]},
            {id: 3, isGroup: true, children: [{id: 31, isGroup: true, children: [{id: 311, children: []}]}]},
            {id: 4},
        ];
    });

    it('should move node 1 to the last position if target is undefined', () => {
        const node = {id: 1};
        const target = undefined;
        const position: INodePosition = 'above';

        const result = moveNode(node, target, dataSet, fieldNames, position);

        expect(result).toEqual([
            {id: 2, children: [{id: 21, children: [{id: 211, children: []}]}]},
            {id: 3, isGroup: true, children: [{id: 31, isGroup: true, children: [{id: 311, children: []}]}]},
            {id: 4},
            {
                id: 1,
                children: [
                    {id: 11, children: []},
                    {id: 12, isLeaf: true},
                    {id: 13, children: []},
                ],
            },
        ]);
    });

    it('should handle moving a node that does not exist', () => {
        const consoleLogSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
        const node = {id: 99};
        const target = {id: 2};

        const result = moveNode(node, target, dataSet, fieldNames);

        expect(result).toEqual(dataSet); // Ожидаем, что результат останется таким же, т.к. узел не существует
        expect(consoleLogSpy).toHaveBeenCalled();
        consoleLogSpy.mockRestore();
    });

    it('should handle moving to a target that does not exist', () => {
        const node = {id: 1};
        const target = {id: 99};

        const result = moveNode(node, target, dataSet, fieldNames);

        expect(result).toEqual(dataSet); // Ожидаем, что результат останется таким же, т.к. целевой узел не существует
    });

    it('should move node below another node if position not set', () => {
        const node = {id: 1};
        const target = {id: 2};

        const result = moveNode(node, target, dataSet, fieldNames);

        expect(result).toEqual([
            {id: 2, children: [{id: 21, children: [{id: 211, children: []}]}]},
            {
                id: 1,
                children: [
                    {id: 11, children: []},
                    {id: 12, isLeaf: true},
                    {id: 13, children: []},
                ],
            },
            {id: 3, isGroup: true, children: [{id: 31, isGroup: true, children: [{id: 311, children: []}]}]},
            {id: 4},
        ]);
    });

    it('should move node inside another node at bottom', () => {
        const node = {id: 1};
        const target = {id: 2};
        const position: INodePosition = 'insideBottom';
        const result = moveNode(node, target, dataSet, fieldNames, position);

        expect(result).toEqual([
            {
                id: 2,
                children: [
                    {id: 21, children: [{id: 211, children: []}]},
                    {
                        id: 1,
                        children: [
                            {id: 11, children: []},
                            {id: 12, isLeaf: true},
                            {id: 13, children: []},
                        ],
                    },
                ],
            },
            {id: 3, isGroup: true, children: [{id: 31, isGroup: true, children: [{id: 311, children: []}]}]},
            {id: 4},
        ]);
    });

    it('should move node inside another node at top', () => {
        const node = {id: 1};
        const target = {id: 2};
        const position: INodePosition = 'insideTop';
        const result = moveNode(node, target, dataSet, fieldNames, position);

        expect(result).toEqual([
            {
                id: 2,
                children: [
                    {
                        id: 1,
                        children: [
                            {id: 11, children: []},
                            {id: 12, isLeaf: true},
                            {id: 13, children: []},
                        ],
                    },
                    {id: 21, children: [{id: 211, children: []}]},
                ],
            },
            {id: 3, isGroup: true, children: [{id: 31, isGroup: true, children: [{id: 311, children: []}]}]},
            {id: 4},
        ]);
    });

    it('should move node below a leaf node even if position is set to inside', () => {
        const node = {id: 3};
        const target = 12;
        const position: INodePosition = 'insideBottom';
        const result = moveNode(node, target, dataSet, fieldNames, position);

        // Expect no changes since target is a leaf node
        expect(result).toEqual([
            {
                id: 1,
                children: [
                    {id: 11, children: []},
                    {id: 12, isLeaf: true},
                    {id: 3, isGroup: true, children: [{id: 31, isGroup: true, children: [{id: 311, children: []}]}]},
                    {id: 13, children: []},
                ],
            },
            {id: 2, children: [{id: 21, children: [{id: 211, children: []}]}]},
            {id: 4},
        ]);
    });

    it('when groupsMode=true should move node below target if it not a group', () => {
        const node = 1;
        const target = 311;
        const groupsMode = true;
        const position: INodePosition = 'insideTop';

        const result = moveNode(node, target, dataSet, fieldNames, position, groupsMode);

        expect(result).toEqual([
            {id: 2, children: [{id: 21, children: [{id: 211, children: []}]}]},
            {
                id: 3,
                isGroup: true,
                children: [
                    {
                        id: 31,
                        isGroup: true,
                        children: [
                            {id: 311, children: []},
                            {
                                id: 1,
                                children: [
                                    {id: 11, children: []},
                                    {id: 12, isLeaf: true},
                                    {id: 13, children: []},
                                ],
                            },
                        ],
                    },
                ],
            },
            {id: 4},
        ]);
    });

    it('when groupsMode=true should move node at top position of a target children if the target is a group', () => {
        const node = 4;
        const target = 31;
        const groupsMode = true;
        const position: INodePosition = 'insideTop';

        const result = moveNode(node, target, dataSet, fieldNames, position, groupsMode);

        expect(result).toEqual([
            {
                id: 1,
                children: [
                    {id: 11, children: []},
                    {id: 12, isLeaf: true},
                    {id: 13, children: []},
                ],
            },
            {id: 2, children: [{id: 21, children: [{id: 211, children: []}]}]},
            {id: 3, isGroup: true, children: [{id: 31, isGroup: true, children: [{id: 4}, {id: 311, children: []}]}]},
        ]);
    });

    it('should move node to the first position of another node', () => {
        const node = {id: 4};
        const target = {id: 1};
        const position: INodePosition = 'insideTop';

        const result = moveNode(node, target, dataSet, fieldNames, position);

        expect(result).toEqual([
            {
                id: 1,
                children: [{id: 4}, {id: 11, children: []}, {id: 12, isLeaf: true}, {id: 13, children: []}],
            },
            {id: 2, children: [{id: 21, children: [{id: 211, children: []}]}]},
            {id: 3, isGroup: true, children: [{id: 31, isGroup: true, children: [{id: 311, children: []}]}]},
        ]);
    });

    it('should move node to the last position of another node', () => {
        const node = {id: 4};
        const target = {id: 1};
        const position: INodePosition = 'insideBottom';

        const result = moveNode(node, target, dataSet, fieldNames, position);

        expect(result).toEqual([
            {
                id: 1,
                children: [{id: 11, children: []}, {id: 12, isLeaf: true}, {id: 13, children: []}, {id: 4}],
            },
            {id: 2, children: [{id: 21, children: [{id: 211, children: []}]}]},
            {id: 3, isGroup: true, children: [{id: 31, isGroup: true, children: [{id: 311, children: []}]}]},
        ]);
    });

    it('should not move node to itself', () => {
        const consoleLogSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
        const node = 1;
        const target = 1;
        const position: INodePosition = 'insideTop';

        const result = moveNode(node, target, dataSet, fieldNames, position);

        expect(result).toEqual([
            {
                id: 1,
                children: [
                    {id: 11, children: []},
                    {id: 12, isLeaf: true},
                    {id: 13, children: []},
                ],
            },
            {id: 2, children: [{id: 21, children: [{id: 211, children: []}]}]},
            {id: 3, isGroup: true, children: [{id: 31, isGroup: true, children: [{id: 311, children: []}]}]},
            {id: 4},
        ]);

        expect(consoleLogSpy).toHaveBeenCalled();
        consoleLogSpy.mockRestore();
    });

    it('should not move node to its descendant', () => {
        const consoleLogSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
        const node = 2;
        const target = 211;
        const position: INodePosition = 'insideTop';

        const result = moveNode(node, target, dataSet, fieldNames, position);

        expect(result).toEqual([
            {
                id: 1,
                children: [
                    {id: 11, children: []},
                    {id: 12, isLeaf: true},
                    {id: 13, children: []},
                ],
            },
            {id: 2, children: [{id: 21, children: [{id: 211, children: []}]}]},
            {id: 3, isGroup: true, children: [{id: 31, isGroup: true, children: [{id: 311, children: []}]}]},
            {id: 4},
        ]);

        expect(consoleLogSpy).toHaveBeenCalled();
        consoleLogSpy.mockRestore();
    });
});
