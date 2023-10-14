import React, {CSSProperties, useEffect, useSyncExternalStore} from 'react';
import {DividerField} from '@src/dForm/fields/divider/dividerField';
import {Divider} from 'antd';

export const DividerFieldRender = ({field}: {field: DividerField}): React.JSX.Element => {
    useSyncExternalStore(field.subscribe.bind(field), field.getSnapshot.bind(field));

    const fieldProps = field.getProps();

    useEffect(() => {
        field.setReady(true);
    }, [field]);

    const style: CSSProperties = {margin: 0, ...fieldProps.style};

    return (
        <Divider
            orientation={fieldProps.orientation}
            orientationMargin={fieldProps.orientationMargin}
            plain={fieldProps.plain}
            dashed={fieldProps.dashed}
            style={style}
        >
            {fieldProps.value}
        </Divider>
    );
};
