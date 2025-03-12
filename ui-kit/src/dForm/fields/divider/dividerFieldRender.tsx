import {useOnClick} from '@src/dForm/fields/base/baseFieldRender';
import React, {CSSProperties, useEffect, useRef, useSyncExternalStore} from 'react';
import {CSSTransition} from 'react-transition-group';
import {DividerField} from '@src/dForm/fields/divider/dividerField';
import {Divider} from 'antd';

/*
 * Divider Field
 * Unlike other fields, this field during rendering does not wrap into Basefield. Therefore, his own processing of animation
 */

export const DividerFieldRender = ({field}: {field: DividerField}): React.JSX.Element => {
    useSyncExternalStore(field.subscribe.bind(field), field.getSnapshot.bind(field));

    const fieldProps = field.getProps();

    const fieldHidden = field.isHidden();

    useEffect(() => {
        field.setReady(true);
    }, [field]);

    const defStyle: CSSProperties = {width: field.getWidth() ?? '100%', margin: 0};

    const style = {...defStyle, ...fieldProps.style};

    const model = field.getModel();
    const highlightedFieldStyle: CSSProperties | undefined = field.getId() === model.getHighlightedId() ? field.getHighlightedStyle() : undefined;
    const containerStyle: CSSProperties = {...highlightedFieldStyle};

    const nodeRef = useRef(null);

    const onClick = useOnClick(field);

    return (
        <CSSTransition nodeRef={nodeRef} in={!fieldHidden} timeout={300} classNames="zoom" unmountOnExit>
            <div ref={nodeRef} className={'dform-field-container'} style={containerStyle} onClick={onClick}>
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
        </CSSTransition>
    );
};
