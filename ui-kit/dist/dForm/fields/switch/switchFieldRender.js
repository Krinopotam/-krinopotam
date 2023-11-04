import React, { useCallback, useEffect, useSyncExternalStore } from 'react';
import { Switch } from 'antd';
export const SwitchFieldRender = ({ field }) => {
    useSyncExternalStore(field.subscribe.bind(field), field.getSnapshot.bind(field));
    const fieldProps = field.getProps();
    const value = field.getValue();
    const onChange = useCallback((checked) => {
        if (!field.isReady())
            return;
        field.setValue(checked || false);
        field.setDirty(true);
        field.setTouched(true);
    }, [field]);
    useEffect(() => {
        field.setReady(true);
    }, [field]);
    return (React.createElement(Switch, { autoFocus: fieldProps.autoFocus, checked: value, checkedChildren: fieldProps.checkedChildren, disabled: field.isDisabled() || field.isReadOnly(), loading: fieldProps.loading, onChange: onChange, unCheckedChildren: fieldProps.unCheckedChildren, style: fieldProps.style }));
};
//# sourceMappingURL=switchFieldRender.js.map