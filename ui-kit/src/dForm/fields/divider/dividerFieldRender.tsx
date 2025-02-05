import React, {CSSProperties, useEffect, useRef, useSyncExternalStore} from 'react';
import {CSSTransition} from 'react-transition-group';
import {DividerField} from '@src/dForm/fields/divider/dividerField';
import {Divider} from 'antd';

export const DividerFieldRender = ({field}: {field: DividerField}): React.JSX.Element => {
    useSyncExternalStore(field.subscribe.bind(field), field.getSnapshot.bind(field));

    const fieldProps = field.getProps();

    const fieldHidden = field.isHidden();

    useEffect(() => {
        field.setReady(true);
    }, [field]);

    const defStyle: CSSProperties = {width: field.getWidth() ?? '100%', margin: 0};

    const style = {...defStyle, ...fieldProps.style};

    const nodeRef = useRef(null);
    return (
        <CSSTransition nodeRef={nodeRef} in={!fieldHidden} timeout={300} classNames="zoom" unmountOnExit>
            <div ref={nodeRef}>
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
            </div>
        </CSSTransition>
    );
};
