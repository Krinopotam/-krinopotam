import React, {CSSProperties, Key, useCallback, useEffect, useMemo, useState, useSyncExternalStore} from 'react';
import {ITreeSelectFieldOnlyProps, TreeSelectField} from '@src/dForm/fields/treeSelect/treeSelectField';
import {IAntTreeSelectProps, ITreeSelectApi, ITreeSelectProps, ITreeSelectValue, TreeSelect} from '@src/treeSelect';
import {SplitObject} from '@krinopotam/js-helpers';
import {IDFormFieldProps} from '@src/dForm/fields';

export const TreeSelectFieldRender = ({field}: { field: TreeSelectField }): React.JSX.Element => {
    useSyncExternalStore(field.subscribe.bind(field), field.getSnapshot.bind(field));

    const [api] = useState({} as ITreeSelectApi);

    const fieldProps = field.getProps();

    const value = field.getValue() as ITreeSelectValue | string;
    const treeProps = useSplitTreeSelectProps(fieldProps);

    const onChange = useCallback<NonNullable<IAntTreeSelectProps['onChange']>>(
        (value, label, extra) => {
            if (field.isReady()) {
                const nodes = api.getNodes(value as Key|Key[])
                field.setValue(value ?? null);
                field.setDirty(true);
            }
            fieldProps.onChange?.(value, label, extra);
        },
        [api, field, fieldProps]
    );
    const onBlur = useCallback(() => {
        field.setTouched(true);
    }, [field]);

    const onClear = useCallback(() => {
        field.setDirty(true);
        field.setTouched(true);
        fieldProps.onClear?.();
    }, [field, fieldProps]);

    useEffect(() => {
        field.setReady(true);
    }, [field]);

    const style: CSSProperties = {width: fieldProps.width ?? '100%', ...fieldProps.style};

    console.log(treeProps)
    return (
        <TreeSelect
            apiRef={api}
            style={style}
            {...treeProps}
            autoFocus={fieldProps.autoFocus}
            defaultValueCallback={fieldProps.defaultValueCallback}
            disabled={field.isDisabled()}
            readOnly={field.isReadOnly()}
            value={value}
            placeholder={fieldProps.placeholder ?? 'Choose'}
            allowClear={fieldProps.allowClear !== false}
            /** --- Callbacks --------------- */
            onChange={onChange}
            onClear={onClear}
            onBlur={onBlur}
            onDataFetch={fieldProps.onDataFetch}
            onDataFetchComplete={fieldProps.onDataFetchComplete}
            onDataFetchError={fieldProps.onDataFetchError}
            onDataFetchSuccess={fieldProps.onDataFetchSuccess}
            onDelete={fieldProps.onDelete}
            onReady={() => fieldProps.onReady?.(field)}
            onKeyUp={fieldProps.onKeyUp}
            onKeyDown={fieldProps.onKeyDown}
            onClick={fieldProps.onClick}
            onSelect={fieldProps.onSelect}
            onMouseLeave={fieldProps.onMouseLeave}
            onMouseEnter={fieldProps.onMouseEnter}
            onMouseDown={fieldProps.onMouseDown}
            onFocus={fieldProps.onFocus}
            onDeselect={fieldProps.onDeselect}
            onDropdownVisibleChange={fieldProps.onDropdownVisibleChange}
            onInputKeyDown={fieldProps.onInputKeyDown}
            onTreeExpand={fieldProps.onTreeExpand}
            onPopupScroll={fieldProps.onPopupScroll}
            onSearch={fieldProps.onSearch}
            onTreeLoad={fieldProps.onTreeLoad}
        />
    );
};

const useSplitTreeSelectProps = (props: IDFormFieldProps) => {
    return useMemo((): ITreeSelectProps => {
        const result = SplitObject<ITreeSelectFieldOnlyProps, ITreeSelectProps>(props, {
            component: true,
            helpClass: true,
            label: true,
            placeholder: true,
            tab: true,
            inlineGroup: true,
            value: true,
            hidden: true,
            dependsOn: true,
            width: true,
            autoFocus: true,
            style: true,
            tooltip: true,
            disabled: true,
            requiredMark: true,
            readOnly: true,
            nonEditable: true,
            rowStyle: true,
            autoHeightResize: true,
            onDirtyStateChanged: true,
            onReady: true,
            onDisabledStateChanged: true,
            onErrorChanged: true,
            onHiddenStateChanged: true,
            onLabelChanged: true,
            onReadOnlyStateChanged: true,
            onTouchedStateChanged: true,
            onValidated: true,
            onValueChanged: true,
            onReadyStateChanged: true,
            rules: true,
        });

        return result[1];
    }, [props]);
};
