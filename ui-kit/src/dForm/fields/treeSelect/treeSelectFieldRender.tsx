import React, {CSSProperties, useEffect, useState, useSyncExternalStore} from 'react';
import {TreeSelectField} from '@src/dForm/fields/treeSelect/treeSelectField';
import {ITreeSelectApi, TreeSelect} from '@src/treeSelect';
import {useOnChange} from '@src/dForm/fields/treeSelect/hooks/useOnChange';
import {useOnBlur} from '@src/dForm/fields/treeSelect/hooks/useOnBlur';
import {useOnClear} from '@src/dForm/fields/treeSelect/hooks/useOnClear';
import {useOnDataSetChanged} from '@src/dForm/fields/treeSelect/hooks/useOnDataSetChanged';
import {useSplitTreeSelectProps} from '@src/dForm/fields/treeSelect/hooks/useSplitTreeSelectProps';

export const TreeSelectFieldRender = ({field}: {field: TreeSelectField}): React.JSX.Element => {
    useSyncExternalStore(field.subscribe.bind(field), field.getSnapshot.bind(field));
    const [api] = useState({} as ITreeSelectApi);

    const fieldProps = field.getProps();
    const value = field.getValue();
    const onChange = useOnChange(field);
    const onBlur = useOnBlur(field);
    const onClear = useOnClear(field);
    const onDataSetChanged = useOnDataSetChanged(field, fieldProps);

    useEffect(() => {
        field.setReady(true);
    }, [field]);

    const style: CSSProperties = {width: fieldProps.width ?? '100%', ...fieldProps.style};

    const treeProps = useSplitTreeSelectProps(fieldProps);

    return (
        <TreeSelect
            apiRef={api}
            style={style}
            {...treeProps}
            /***** No overrides ***/
            autoFocus={fieldProps.autoFocus}
            disabled={field.isDisabled()}
            readOnly={field.isReadOnly()}
            value={value}
            placeholder={fieldProps.placeholder ?? 'Choose'}
            onChange={onChange}
            onClear={onClear}
            onBlur={onBlur}
            onDataSetChanged={onDataSetChanged}
            onReady={() => fieldProps.onReady?.(field)}
        />
    );
};
