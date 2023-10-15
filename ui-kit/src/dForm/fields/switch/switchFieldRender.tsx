import React, {useCallback, useEffect, useSyncExternalStore} from 'react';
import {Switch} from 'antd';
import {SwitchField} from '@src/dForm/fields/switch/switchField';

export const SwitchFieldRender = ({field}: {field: SwitchField}): React.JSX.Element => {
    useSyncExternalStore(field.subscribe.bind(field), field.getSnapshot.bind(field));

    const fieldProps = field.getProps();

    const value = field.getValue() as boolean | undefined;

    const onChange = useCallback(
        (checked: boolean) => {
            field.setValue(checked || false);
            field.setDirty(true);
            field.setTouched(true);
        },
        [field]
    );

    useEffect(() => {
        field.setReady(true);
    }, [field]);

    return (
        <Switch
            autoFocus={fieldProps.autoFocus}
            checked={value}
            checkedChildren={fieldProps.checkedChildren}
            disabled={field.isDisabled() || field.isReadOnly()}
            loading={fieldProps.loading}
            onChange={onChange}
            unCheckedChildren={fieldProps.unCheckedChildren}
            style={fieldProps.style}
        />
    );
};
