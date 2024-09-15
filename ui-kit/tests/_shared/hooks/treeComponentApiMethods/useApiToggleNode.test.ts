import {describe, expect, it, vi, beforeEach} from 'vitest';
import {useApiToggleNode} from '@src/_shared/hooks/treeComponentApiMethods/useApiToggleNode';
import {ITreeComponentApi} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';

describe('useApiToggleNode', () => {
    const getExpandedKeysMock = vi.fn();
    const setExpandedKeysMock = vi.fn();
    const getFieldNamesMock = vi.fn();

    const api: ITreeComponentApi = {
        getExpandedKeys: getExpandedKeysMock,
        setExpandedKeys: setExpandedKeysMock,
        getFieldNames: getFieldNamesMock
    } as unknown as ITreeComponentApi;

    const fieldNames = { key: 'id' };
    const node = { id: 'node-1' };

    beforeEach(() => {
        vi.clearAllMocks();
        getFieldNamesMock.mockReturnValue(fieldNames);
    });

    it('should expand the node if it is not already expanded', () => {
        getExpandedKeysMock.mockReturnValue([]);

        const toggleNode = useApiToggleNode(api);
        const result = toggleNode(node);

        expect(result).toBe(true);
        expect(setExpandedKeysMock).toHaveBeenCalledWith(['node-1']);
    });

    it('should collapse the node if it is already expanded', () => {
        getExpandedKeysMock.mockReturnValue(['node-1']);

        const toggleNode = useApiToggleNode(api);
        const result = toggleNode(node);

        expect(result).toBe(false);
        expect(setExpandedKeysMock).toHaveBeenCalledWith([]);
    });

    it('should handle non-object node input', () => {
        getExpandedKeysMock.mockReturnValue([]);

        const toggleNode = useApiToggleNode(api);
        const result = toggleNode('node-1');

        expect(result).toBe(true);
        expect(setExpandedKeysMock).toHaveBeenCalledWith(['node-1']);
    });
});