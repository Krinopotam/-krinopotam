import {SplitObject} from '@krinopotam/js-helpers/helpersObjects/splitObject';
import {IAnyFieldProps} from '@src/dForm/fields/base';
import {ISelectFieldOwnProps, ISelectFieldProps, SelectField} from '@src/dForm/fields/select/selectField';
import {ISelectProps, Select} from '@src/select';
import React, {CSSProperties, useCallback, useEffect, useMemo, useSyncExternalStore} from 'react';

export const SelectFieldRender = ({field}: {field: SelectField}): React.JSX.Element => {
    useSyncExternalStore(field.subscribe.bind(field), field.getSnapshot.bind(field));

    const fieldProps = field.getProps();
    const selectProps = useSplitSelectProps(fieldProps);

    const value = field.getValue();

    const onChange = useCallback<NonNullable<ISelectFieldProps['onChange']>>(
        (val, option) => {
            if (!field.isReady()) return;
            if (fieldProps.fullItemValue) field.setValue(option);
            else field.setValue(val);
            field.setDirty(true);
        },
        [field, fieldProps.fullItemValue]
    );
    const onBlur = useCallback<NonNullable<ISelectFieldProps['onBlur']>>(() => {
        field.setTouched(true);
    }, [field]);

    useEffect(() => {
        field.setReady(true);
    }, [field]);

    const defStyle: CSSProperties = {width: field.getWidth() ?? '100%'};
    const style: React.CSSProperties = {...defStyle, ...fieldProps.style};

    return (
        <Select
            className={fieldProps.className}
            allowClear
            {...selectProps}
            disabled={field.isDisabled()}
            readOnly={field.isReadOnly()}
            value={value}
            style={style}
            /******** Callbacks *********/
            onBlur={onBlur}
            onChange={onChange}
        />
    );
};

export const useSplitSelectProps = (props: IAnyFieldProps) => {
    return useMemo((): ISelectProps => {
        const result = SplitObject<ISelectFieldOwnProps, ISelectProps>(props, {
            autoFocus: true,
            autoHeightResize: true,
            component: true,
            dependsOn: true,
            disabled: true,
            helpClass: true,
            hidden: true,
            label: true,
            nonEditable: true,
            onDirtyStateChanged: true,
            onDisabledStateChanged: true,
            onErrorChanged: true,
            onHiddenStateChanged: true,
            onLabelChanged: true,
            onReadOnlyStateChanged: true,
            onReadyStateChanged: true,
            onTouchedStateChanged: true,
            onValidated: true,
            onValueChanged: true,
            placeholder: true,
            readOnly: true,
            requiredMark: true,
            itemWrapperStyle: true,
            rules: true,
            style: true,
            tooltip: true,
            defaultValue: true,
            width: true,
            onFieldDataFetch: true,
            onFieldDataFetchError: true,
            onFieldDataFetchSuccess: true,
            className: true,
            itemWrapperClassName: true,
            containerClassName: true,
            containerStyle: true,
            noContainer: true,
            noItemWrapper: true,
        });

        return result[1];
    }, [props]);
};
