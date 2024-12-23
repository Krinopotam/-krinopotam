import React, {CSSProperties, useEffect, useSyncExternalStore} from 'react';
import {DividerField} from '@src/dForm/fields/divider/dividerField';
import {Divider} from 'antd';
import Animate from 'rc-animate';

export const DividerFieldRender = ({field}: {field: DividerField}): React.JSX.Element => {
    useSyncExternalStore(field.subscribe.bind(field), field.getSnapshot.bind(field));

    const fieldProps = field.getProps();

    const fieldHidden = field.isHidden();

    useEffect(() => {
        field.setReady(true);
    }, [field]);

    const defStyle: CSSProperties = {width: field.getWidth() ?? '100%', margin: 0};

    const style = {...defStyle, ...fieldProps.style};

    return (
        <Animate component="" transitionName="zoom">
            {!fieldHidden ? (
                <Divider
                    className={fieldProps.className}
                    orientation={fieldProps.orientation}
                    orientationMargin={fieldProps.orientationMargin}
                    plain={fieldProps.plain}
                    dashed={fieldProps.dashed}
                    style={style}
                >
                    {fieldProps.label}
                </Divider>
            ) : null}
        </Animate>
    );
};
