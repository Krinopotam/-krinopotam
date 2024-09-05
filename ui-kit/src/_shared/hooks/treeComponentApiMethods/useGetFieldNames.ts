import {useCallback, useMemo} from 'react';
import {IBaseTreeComponentProps, IFieldNames} from '@src/_shared/@types/nodes';

export const useFieldNames = (props: IBaseTreeComponentProps) => {
    return useMemo(
        () => ({
            key: 'id',
            title: 'title',
            children: 'children',
            ...props.fieldNames,
        }),
        [props.fieldNames]
    );
};

export const useGetFieldNames = (props: IBaseTreeComponentProps): (() => IFieldNames) => {
    const fieldNames = useFieldNames(props);
    return useCallback(() => fieldNames, [fieldNames]);
};
