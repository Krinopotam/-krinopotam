import {CSSTransition} from 'react-transition-group';
import React, {CSSProperties, useRef, useSyncExternalStore} from 'react';
import {useEvent} from '@krinopotam/common-hooks';
import {IBaseField} from '@src/dForm/fields/base/types/types';

export const ContainerRender = ({
    field,
    style,
    children,
    noHighlightContainer,
}: {
    field: IBaseField;
    style?: CSSProperties;
    children?: React.ReactNode;
    noHighlightContainer?: boolean;
}) => {
    useSyncExternalStore(field.subscribe.bind(field), field.getSnapshot.bind(field));

    const fieldProps = field.getProps();
    const fieldHidden = field.isHidden();

    const autoHeightClass = fieldProps.autoHeightResize ? ' auto-height' : '';
    const containerClass = fieldProps.containerClassName ? ' ' + fieldProps.containerClassName : '';

    const onClick = useOnClick(field);

    const highlightedFieldStyle: CSSProperties | undefined = field.isHighlighted() && !noHighlightContainer ? field.getHighlightedStyle() : undefined;
    const fieldContainerStyle: CSSProperties = {...fieldProps.containerStyle, ...style, ...highlightedFieldStyle};

    const nodeRef = useRef<HTMLDivElement>(null);
    return (
        <CSSTransition nodeRef={nodeRef} in={!fieldHidden} timeout={300} classNames="zoom" unmountOnExit>
            <div ref={nodeRef} className={'dform-field-container' + containerClass + autoHeightClass} style={fieldContainerStyle} onClick={onClick}>
                {children}
            </div>
        </CSSTransition>
    );
};

/** Highlight field on click */
export const useOnClick = (field: IBaseField) => {
    const onClick = useEvent((e: React.MouseEvent) => {
        e.stopPropagation();
        const focusedElement = document.activeElement as HTMLElement;
        field.setHighlighted(true);
        setTimeout(() => {
            focusedElement?.focus();
        }, 100);
    });

    const model = field.getModel();
    return model.getFormMode() === 'constructor' ? onClick : undefined;
};
