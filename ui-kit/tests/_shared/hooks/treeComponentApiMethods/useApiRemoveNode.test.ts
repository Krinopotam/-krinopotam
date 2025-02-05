import {afterEach, beforeEach, describe, expect, it, vi} from 'vitest';
import {useApiRemoveNode} from '@src/_shared/hooks/treeComponentApiMethods/useApiRemoveNode';
import {CloneObject} from '@krinopotam/js-helpers/helpersObjects/cloneObject';
import {getNextNodeKey} from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/getNextNodeKey';
import {getPrevNodeKey} from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/getPrevNodeKey';

const fieldNames = {key: 'id', children: 'children', disabled: 'disabled', selectable: 'selectable'};

const originalSetTimeout = globalThis.setTimeout;

// Mocking necessary functions
const getDataSetMock = vi.fn();
const getFieldNamesMock = vi.fn();
const getNextNodeKeyMock = vi.fn((node, opts, externalDataset) => getNextNodeKey(externalDataset, node, [], fieldNames, opts));
const getPrevNodeKeyMock = vi.fn((node, opts, externalDataset) => getPrevNodeKey(externalDataset, node, [], fieldNames, opts));
const selectNodeMock = vi.fn();
const setDataSetMock = vi.fn();
const setTimeoutMock = vi.fn((callback: () => void) => {
    callback();
});


/*vi.mock('@src/_shared/hooks/treeComponentApiMethods/serviceMethods/removeFromTree', () => ({
    removeFromTree: vi.fn(),
}));*/

// Sample dataset and fieldNames
const dataSet = [
    {id: 1, name: 'Node 1', children: []},
    {id: 2, name: 'Node 2', children: []},
    {id: 3, name: 'Node 3', children: []},
];


const api = {
    getDataSet: getDataSetMock,
    getFieldNames: getFieldNamesMock,
    getNextNodeKey: getNextNodeKeyMock,
    getPrevNodeKey: getPrevNodeKeyMock,
    selectNode: selectNodeMock,
    setDataSet: setDataSetMock,
};

describe('useApiRemoveNode', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        vi.stubGlobal('setTimeout', setTimeoutMock);
        getDataSetMock.mockReturnValue(CloneObject(dataSet));
        getFieldNamesMock.mockReturnValue(fieldNames);
    });

    afterEach(() => {
        vi.stubGlobal('setTimeout', originalSetTimeout);
    });

    it('should remove the node, update dataset without externalDataSet and select the next node', () => {
        const removeNode = useApiRemoveNode(api);
        const result = removeNode(2, {select: 'next'});


        expect(setDataSetMock).toHaveBeenCalledWith(result);
        expect(selectNodeMock).toHaveBeenCalledTimes(2);
        /** actually deselecting occurs before deleting, so selectNode is called with the full dataSet, not result.
         * But the dataSet is later mutated by the removeNode function, and vitest compares with the object after the mutation  * */
        expect(selectNodeMock).toHaveBeenCalledWith(2, false, true, result); //deselect node 2

        expect(setTimeoutMock).toHaveBeenCalledTimes(2);
        expect(selectNodeMock).toHaveBeenCalledWith(3, true); //select node 3
    });

    it('should remove the node and update dataset with externalDataSet', () => {
        const externalDataSet = CloneObject(dataSet);
        const removeNode = useApiRemoveNode(api);
        const result = removeNode(2, {select: 'next'}, externalDataSet);

        expect(result).toEqual([
            {id: 1, name: 'Node 1', children: []},
            {id: 3, name: 'Node 3', children: []},
        ]);
        expect(setDataSetMock).not.toHaveBeenCalled();
        expect(selectNodeMock).toHaveBeenCalledWith(2, false, true, result); //deselect node 2

        expect(setTimeoutMock).toHaveBeenCalledTimes(2);
        expect(selectNodeMock).toHaveBeenCalledWith(3, true); //select node 3
    });

    it('should select the next node if opts.select is "next"', () => {
        const removeNode = useApiRemoveNode(api);

        const result  = removeNode(2, {select: 'next'});

        expect(selectNodeMock).toHaveBeenCalledTimes(2);
        expect(selectNodeMock).toHaveBeenCalledWith(2, false, true, result); //deselect node 2

        expect(setTimeoutMock).toHaveBeenCalledTimes(2);
        expect(selectNodeMock).toHaveBeenCalledWith(3, true); //select node 3
    });

    it('should select the previous node if opts.select is "prev"', () => {
        const removeNode = useApiRemoveNode(api);

        const result = removeNode(2, {select: 'prev'}, undefined);

        expect(selectNodeMock).toHaveBeenCalledTimes(2);
        expect(selectNodeMock).toHaveBeenCalledWith(2, false, true,  result); //deselect node 2

        expect(setTimeoutMock).toHaveBeenCalledTimes(2);
        expect(selectNodeMock).toHaveBeenCalledWith(1, true); //select node 1
    });

    it('should deselect the removed node', () => {
        const removeNode = useApiRemoveNode(api);

        const result = removeNode(2, {select: 'next'}, undefined);

        expect(selectNodeMock).toHaveBeenCalledTimes(2);
        expect(selectNodeMock).toHaveBeenCalledWith(2, false, true,  result); //deselect node 2

        expect(setTimeoutMock).toHaveBeenCalledTimes(2);
        expect(selectNodeMock).toHaveBeenCalledWith(3, true); //select node 3
    });

    it('should select the previous node if removed node is the last and select option is "next"', () => {
        const removeNode = useApiRemoveNode(api);

        const result = removeNode(3, {select: 'next'}, undefined);

        expect(selectNodeMock).toHaveBeenCalledTimes(2);
        expect(selectNodeMock).toHaveBeenCalledWith(3, false, true, result); //deselect node 3

        expect(setTimeoutMock).toHaveBeenCalledTimes(2);
        expect(selectNodeMock).toHaveBeenCalledWith(2, true); //select node 2
    });

    it('should select the previous node if removed node is the last and select  option is "prev"', () => {
        const removeNode = useApiRemoveNode(api);

        const result = removeNode(3, {select: 'prev'}, undefined);

        expect(selectNodeMock).toHaveBeenCalledTimes(2);
        expect(selectNodeMock).toHaveBeenCalledWith(3, false, true, result); //deselect node 3

        expect(setTimeoutMock).toHaveBeenCalledTimes(2);
        expect(selectNodeMock).toHaveBeenCalledWith(2, true); //select node 2
    });

    it('should select the next node if removed node is the first and select option is "next"', () => {
        const removeNode = useApiRemoveNode(api);

        const result = removeNode(1, {select: 'next'}, undefined);

        expect(selectNodeMock).toHaveBeenCalledTimes(2);
        expect(selectNodeMock).toHaveBeenCalledWith(1, false, true, result); //deselect node 3

        expect(setTimeoutMock).toHaveBeenCalledTimes(2);
        expect(selectNodeMock).toHaveBeenCalledWith(2, true); //select node 2
    });

    it('should select the next node if removed node is the first and select option is "prev"', () => {
        const removeNode = useApiRemoveNode(api);

        const result = removeNode(1, {select: 'prev'}, undefined);

        expect(selectNodeMock).toHaveBeenCalledTimes(2);
        expect(selectNodeMock).toHaveBeenCalledWith(1, false, true, result); //deselect node 3

        expect(setTimeoutMock).toHaveBeenCalledTimes(2);
        expect(selectNodeMock).toHaveBeenCalledWith(2, true); //select node 2
    });
});
