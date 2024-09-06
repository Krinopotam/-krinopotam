import {useCallback} from 'react';
import {ITreeComponentApi} from "@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes";

export const useApiGetFieldNames = (fieldNames?: Record<string, unknown>): ITreeComponentApi['getFieldNames'] => {
    return useCallback(() => ({key: 'id', children: 'children', title: 'title', ...fieldNames}), [fieldNames]);
};
