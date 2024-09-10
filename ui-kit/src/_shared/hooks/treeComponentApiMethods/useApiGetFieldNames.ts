import {useCallback, useMemo} from 'react';
import {ITreeComponentApi} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';

export const useApiGetFieldNames = (props: {fieldNames?: Record<string, unknown>}): ITreeComponentApi['getFieldNames'] => {
    const fieldNames = useFieldNames(props);
    return useCallback(() => fieldNames, [fieldNames]);
};

const useFieldNames = (props: {fieldNames?: Partial<{key: string; children: string; title: string}>}) => {
    return useMemo(
        //we use each field of the fieldNames separately (not using [...props.fieldNames]) to avoid re-render when props.fieldNames is new object with same fields
        () => ({
            key: props.fieldNames?.key ?? 'id',
            children: props.fieldNames?.children ?? 'children',
            title: props.fieldNames?.title ?? 'title',
        }),
        [props.fieldNames?.key, props.fieldNames?.children, props.fieldNames?.title]
    );
};
