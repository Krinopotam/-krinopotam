import React, {CSSProperties, useEffect, useSyncExternalStore} from 'react';
import {DividerField} from '@src/dForm/fields/divider/dividerField';
import {Divider} from 'antd';

/*
 * Divider Field
 * Unlike other fields, this field during rendering does not wrap into Basefield. Therefore, his own processing of animation
 */

export const DividerFieldRender = ({field}: {field: DividerField}): React.JSX.Element => {
    useSyncExternalStore(field.subscribe.bind(field), field.getSnapshot.bind(field));

    const fieldProps = field.getProps();

    useEffect(() => {
        field.setReady(true);
    }, [field]);

    const defStyle: CSSProperties = { margin: 0};
    const style = {...defStyle, ...fieldProps.style};

    return (
        <div style={{width: field.getWidth() ?? '100%'}}>
        <Divider
            className={fieldProps.className}
            orientation={fieldProps.orientation}
            orientationMargin={fieldProps.orientationMargin}
            plain={fieldProps.plain}
            type={fieldProps.type}
            dashed={fieldProps.dashed}
            style={style}
        >
            {fieldProps.label}
        </Divider>
        </div>
    );
};
