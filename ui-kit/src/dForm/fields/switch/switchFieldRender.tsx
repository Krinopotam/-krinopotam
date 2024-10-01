import React, {CSSProperties, useCallback, useEffect, useSyncExternalStore} from 'react';
import {Switch} from 'antd';
import {SwitchField} from '@src/dForm/fields/switch/switchField';

export const SwitchFieldRender = ({field}: {field: SwitchField}): React.JSX.Element => {
    useSyncExternalStore(field.subscribe.bind(field), field.getSnapshot.bind(field));

    const fieldProps = field.getProps();

    const value = field.getValue() ;

    const onChange = useCallback(
        (checked: boolean) => {
            if (!field.isReady()) return;
            field.setValue(checked || false);
            field.setDirty(true);
            field.setTouched(true);
        },
        [field]
    );

    useEffect(() => {
        field.setReady(true);
    }, [field]);

    const defStyle: CSSProperties = {width: field.getWidth()};
    const style = {...defStyle, ...fieldProps.style};

    return (
        <Switch
            autoFocus={fieldProps.autoFocus}
            checked={value}
            checkedChildren={fieldProps.checkedChildren}
            disabled={field.isDisabled() || field.isReadOnly()}
            loading={fieldProps.loading}
            onChange={onChange}
            unCheckedChildren={fieldProps.unCheckedChildren}
            style={style}
        />
    );
};
