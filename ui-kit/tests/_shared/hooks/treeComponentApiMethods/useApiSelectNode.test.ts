import {beforeEach, describe, expect, it, vi} from 'vitest';
import {ITreeComponentApi} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';
import {useApiSelectNode} from "@src/_shared/hooks/treeComponentApiMethods/useApiSelectNode";

// Mocking necessary functions
const getSelectedKeysMock = vi.fn();
const setSelectedKeysMock = vi.fn();
const getFieldNamesMock = vi.fn();

// Sample dataset and fieldNames
const fieldNames = {key: 'id', title: 'name', children:'children'};
const dataSet = [
    {id: 1, name: 'Node 1'},
    {id: 2, name: 'Node 2'},
    {id: 3, name: 'Node 3', children:[{id:31, name: 'Node 31'}, {id:32, name: 'Node 32'}]},
];

describe('useApiSelectNode', () => {
    let api: ITreeComponentApi;

    beforeEach(() => {
        getSelectedKeysMock.mockClear();
        setSelectedKeysMock.mockClear();
        getFieldNamesMock.mockClear();

        api = {
            getDataSet:()=>dataSet,
            getSelectedKeys: getSelectedKeysMock,
            setSelectedKeys: setSelectedKeysMock,
            getFieldNames: getFieldNamesMock,
        } as unknown as ITreeComponentApi;
    });

    it('should select a node', () => {
        getSelectedKeysMock.mockReturnValue([]);
        getFieldNamesMock.mockReturnValue(fieldNames);

        const selectNode = useApiSelectNode(api, false);
        selectNode(dataSet[1]);

        expect(setSelectedKeysMock).toHaveBeenCalledWith([2]); // Assuming dataSet[1] key is 2
    });


    it('should deselect old node and select new a node', () => {
        getSelectedKeysMock.mockReturnValue([3]); // old key is 3
        getFieldNamesMock.mockReturnValue(fieldNames);

        const selectNode = useApiSelectNode(api, false);
        selectNode(dataSet[1]);

        expect(setSelectedKeysMock).toHaveBeenCalledWith([2]); // Assuming dataSet[1] key is 2
    });

    it('should deselect a node', () => {
        getSelectedKeysMock.mockReturnValue([2]);
        getFieldNamesMock.mockReturnValue(fieldNames);

        const selectNode = useApiSelectNode(api, false);
        selectNode(dataSet[1], false);

        expect(setSelectedKeysMock).toHaveBeenCalledWith([]);
    });

    it('should handle multiple selection', () => {
        getSelectedKeysMock.mockReturnValue([1]);
        getFieldNamesMock.mockReturnValue(fieldNames);

        const selectNode = useApiSelectNode(api, true);
        selectNode(dataSet[1]);

        expect(setSelectedKeysMock).toHaveBeenCalledWith([1, 2]); // Assuming dataSet[1] key is 2
    });

    it('should deselect node in multiple selection mode', () => {
        getSelectedKeysMock.mockReturnValue([1, 2]);
        getFieldNamesMock.mockReturnValue(fieldNames);

        const selectNode = useApiSelectNode(api, true);
        selectNode(dataSet[0], false);

        expect(setSelectedKeysMock).toHaveBeenCalledWith([2]);
    });

    it('should handle multiple selection with all children', () => {
        getSelectedKeysMock.mockReturnValue([1]);
        getFieldNamesMock.mockReturnValue(fieldNames);

        const selectNode = useApiSelectNode(api, true);
        selectNode(dataSet[2], true, true);

        expect(setSelectedKeysMock).toHaveBeenCalledWith([1, 3, 31, 32]);
    });

    it('should handle deselect node with all children', () => {
        getSelectedKeysMock.mockReturnValue([1, 3, 31, 32]);
        getFieldNamesMock.mockReturnValue(fieldNames);

        const selectNode = useApiSelectNode(api, true);
        selectNode(dataSet[2], false, true);

        expect(setSelectedKeysMock).toHaveBeenCalledWith([1]);
    });
});