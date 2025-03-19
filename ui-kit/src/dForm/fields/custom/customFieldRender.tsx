import {useOnClick} from '@src/dForm/fields/base/baseFieldRender';
import React, {CSSProperties, useEffect, useRef, useSyncExternalStore} from 'react';
import {CustomField} from '@src/dForm/fields/custom/customField';
import {CSSTransition} from 'react-transition-group';

export const CustomFieldRender = ({field}: {field: CustomField}): React.JSX.Element => {
    useSyncExternalStore(field.subscribe.bind(field), field.getSnapshot.bind(field));

    const fieldProps = field.getProps();

    const value = field.getValue();
    const render = fieldProps?.onRender?.(value, field) ?? value;

    useEffect(() => {
        field.setReady(true);
    }, [field]);

    const model = field.getModel();
    const defStyle: CSSProperties = {width: field.getWidth() ?? '100%'};
    const highlightedFieldStyle: CSSProperties | undefined = field.getId() === model.getHighlightedId() ? field.getHighlightedStyle() : undefined;
    const style: CSSProperties = {...defStyle, ...highlightedFieldStyle, ...fieldProps.style};

    const nodeRef = useRef(null);
    const fieldHidden = field.isHidden();

    const onClick = useOnClick(field);

    if (fieldProps.fieldWrapper) return <>{render}</>;

    return (
        <CSSTransition nodeRef={nodeRef} in={!fieldHidden} timeout={300} classNames="zoom" unmountOnExit>
            <div ref={nodeRef} style={style} className={'dform-field-container' + fieldProps.className} onClick={onClick}>
                {render}
            </div>
        </CSSTransition>
    );
};
