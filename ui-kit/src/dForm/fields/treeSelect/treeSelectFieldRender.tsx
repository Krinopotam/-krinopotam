import React, {CSSProperties, useCallback, useEffect, useMemo, useState, useSyncExternalStore} from 'react';
import {ITreeSelectFieldOnlyProps, TreeSelectField} from '@src/dForm/fields/treeSelect/treeSelectField';
import {ITreeSelectApi, ITreeSelectProps, TreeSelect} from '@src/treeSelect';
import {SplitObject} from '@krinopotam/js-helpers';
import {IAnyFieldProps} from '@src/dForm/fields/base';

export const TreeSelectFieldRender = ({field}: {field: TreeSelectField}): React.JSX.Element => {
    useSyncExternalStore(field.subscribe.bind(field), field.getSnapshot.bind(field));
    const [api] = useState({} as ITreeSelectApi);

    const fieldProps = field.getProps();
    const value = field.getValue();
    const onChange = useOnChange(field);
    const onBlur = useOnBlur(field);
    const onClear = useOnClear(field);

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
            onReady={() => fieldProps.onReady?.(field)}
        />
    );
};

const useSplitTreeSelectProps = (props: IAnyFieldProps) => {
    return useMemo((): ITreeSelectProps => {
        const result = SplitObject<ITreeSelectFieldOnlyProps, ITreeSelectProps>(props, {
            autoFocus: true,
            autoHeightResize: true,
            component: true,
            dependsOn: true,
            disabled: true,
            helpClass: true,
            hidden: true,
            inlineGroup: true,
            label: true,
            nonEditable: true,
            onDirtyStateChanged: true,
            onDisabledStateChanged: true,
            onErrorChanged: true,
            onHiddenStateChanged: true,
            onLabelChanged: true,
            onReadOnlyStateChanged: true,
            onReady: true,
            onReadyStateChanged: true,
            onTouchedStateChanged: true,
            onValidated: true,
            onValueChanged: true,
            placeholder: true,
            readOnly: true,
            requiredMark: true,
            rowStyle: true,
            rules: true,
            style: true,
            tab: true,
            tooltip: true,
            value: true,
            width: true,
        });

        return result[1];
    }, [props]);
};

const useOnChange = (field: TreeSelectField) => {
    return useCallback<NonNullable<ITreeSelectProps['onChange']>>(
        (keys, nodes) => {
            if (field.isReady()) {
                //const nodes = api.getNodes(value as Key|Key[])
                field.setValue(keys[0] ?? null);
                field.setDirty(true);
            }
            const fieldProps = field.getProps();
            fieldProps.onChange?.(keys, nodes);
        },
        [field]
    );
};

const useOnBlur = (field: TreeSelectField) => {
    return useCallback(() => {
        field.setTouched(true);
    }, [field]);
};

const useOnClear = (field: TreeSelectField) => {
    return useCallback(() => {
        field.setDirty(true);
        field.setTouched(true);
        const fieldProps = field.getProps();
        fieldProps.onClear?.();
    }, [field]);
};
