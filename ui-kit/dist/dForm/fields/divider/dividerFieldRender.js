import React, { useEffect, useSyncExternalStore } from 'react';
import { Divider } from 'antd';
export const DividerFieldRender = ({ field }) => {
    useSyncExternalStore(field.subscribe.bind(field), field.getSnapshot.bind(field));
    const fieldProps = field.getProps();
    useEffect(() => {
        field.setReady(true);
    }, [field]);
    let defStyle = {};
    if (fieldProps.width) {
        defStyle = { width: fieldProps.width, margin: 0 };
    }
    const style = Object.assign(Object.assign({}, defStyle), fieldProps.style);
    return (React.createElement(Divider, { orientation: fieldProps.orientation, orientationMargin: fieldProps.orientationMargin, plain: fieldProps.plain, dashed: fieldProps.dashed, style: style }, fieldProps.value));
};
//# sourceMappingURL=dividerFieldRender.js.map