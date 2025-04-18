import {useOnBlur} from '@src/dForm/fields/treeSelect/hooks/useOnBlur';
import {useOnChange} from '@src/dForm/fields/treeSelect/hooks/useOnChange';
import {useOnClear} from '@src/dForm/fields/treeSelect/hooks/useOnClear';
import {useOnDataSetChanged} from '@src/dForm/fields/treeSelect/hooks/useOnDataSetChanged';
import {useSplitTreeSelectProps} from '@src/dForm/fields/treeSelect/hooks/useSplitTreeSelectProps';
import {ITreeSelectFieldProps, TreeSelectField} from '@src/dForm/fields/treeSelect/treeSelectField';
import {ITreeSelectApi, ITreeSelectProps, TreeSelect} from '@src/treeSelect';
import React, {CSSProperties, useEffect, useMemo, useState, useSyncExternalStore} from 'react';

export const TreeSelectFieldRender = ({field}: {field: TreeSelectField}): React.JSX.Element => {
    useSyncExternalStore(field.subscribe.bind(field), field.getSnapshot.bind(field));
    const [api] = useState({} as ITreeSelectApi);

    const fieldProps = field.getProps();

    const value = field.getValue() ?? null;

    const onBlur = useOnBlur(field);
    const onClear = useOnClear(field);
    const dataSet = useDataSet(field, fieldProps.dataSet);
    const onChange = useOnChange(field, fieldProps);
    const onDataSetChanged = useOnDataSetChanged(field, fieldProps);
    const onDataFetch = useOnDataFetch(field, fieldProps);
    const onReady = useOnReady(field, fieldProps);

    useEffect(() => {
        field.setReady(true);
    }, [field]);

    const defStyle: CSSProperties = {width: field.getWidth() ?? '100%'};
    const style: React.CSSProperties = {...defStyle, ...fieldProps.style};

    const treeProps = useSplitTreeSelectProps(fieldProps);

    return (
        <TreeSelect
            className={fieldProps.className}
            apiRef={api}
            style={style}
            {...treeProps}
            /***** No overrides ***/
            dataSet={dataSet}
            autoFocus={fieldProps.autoFocus}
            disabled={field.isDisabled()}
            readOnly={field.isReadOnly()}
            value={value}
            placeholder={fieldProps.placeholder ?? 'Choose'}
            onChange={onChange}
            onDataSetChanged={onDataSetChanged}
            onDataFetch={onDataFetch}
            onReady={onReady}
            onClear={onClear}
            onBlur={onBlur}
        />
    );
};

export const useDataSet = (field: TreeSelectField, dataSet: ITreeSelectFieldProps['dataSet']) => {
    return useMemo(() => {
        if (typeof dataSet !== 'function') return dataSet;
        else return () => dataSet(field);
    }, [dataSet, field]);
};

export const useOnDataFetch = (field: TreeSelectField, fieldProps: ITreeSelectFieldProps): ITreeSelectProps['onDataFetch'] => {
    return (search, api) => fieldProps.onDataFetch?.(search, api, field);
};

export const useOnReady = (field: TreeSelectField, fieldProps: ITreeSelectFieldProps): ITreeSelectProps['onReady'] => {
    return () => fieldProps.onReady?.(field);
};
