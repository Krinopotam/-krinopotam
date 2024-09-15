import {useMemo} from 'react';
import {IFieldNames, ITreeComponentApi} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';

export const useApiGetFieldNames = (props: {fieldNames?: Partial<IFieldNames>}): ITreeComponentApi['getFieldNames'] => {
    const fieldNames = useFieldNames(props);
    return () => fieldNames;
};

const useFieldNames = (props: {fieldNames?: Partial<IFieldNames>}) => {
    return useMemo(
        //we use each field of the fieldNames separately (not using [...props.fieldNames]) to avoid re-render when props.fieldNames is new object with same fields
        (): IFieldNames => ({
            key: props.fieldNames?.key ?? 'id',
            children: props.fieldNames?.children ?? 'children',
            title: props.fieldNames?.title ?? 'title',
            parent: props.fieldNames?.parent ?? 'parent',
            isLeaf: props.fieldNames?.isLeaf ?? 'isLeaf',
            isGroup: props.fieldNames?.isGroup ?? 'isGroup',
            disabled: props.fieldNames?.disabled ?? 'disabled',
            selectable: props.fieldNames?.selectable ?? 'selectable',
        }),
        [
            props.fieldNames?.key,
            props.fieldNames?.children,
            props.fieldNames?.title,
            props.fieldNames?.parent,
            props.fieldNames?.isLeaf,
            props.fieldNames?.isGroup,
            props.fieldNames?.disabled,
            props.fieldNames?.selectable,
        ]
    );
};
