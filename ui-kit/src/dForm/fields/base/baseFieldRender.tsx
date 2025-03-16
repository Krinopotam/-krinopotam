// noinspection DuplicatedCode

import {useEvent} from '@krinopotam/common-hooks';
import {IBaseField} from '@src/dForm/fields/base';
import {Form} from 'antd';
import React, {CSSProperties, useRef, useSyncExternalStore} from 'react';
import {CSSTransition} from 'react-transition-group';

export const BaseFieldRender = ({
    field,
    altLabel,
    children,
    fieldContainerStyle,
}: {
    field: IBaseField;
    altLabel?: React.ReactNode;
    children?: React.ReactNode;
    fieldContainerStyle?: CSSProperties;
}): React.JSX.Element => {
    const fieldProps = field.getProps();
    const formProps = field.getFormProps();
    useSyncExternalStore(field.subscribe.bind(field), field.getSnapshot.bind(field));

    const error = field.getError();
    const fieldHidden = field.isHidden();

    const style: React.CSSProperties = {
        //marginBottom: formProps.layout !== 'horizontal' ? 0 : undefined,
        /*        flexGrow: fieldProps.width ? 0 : 1,
                flexShrink: fieldProps.width ? 0 : 1,
                flexBasis: fieldProps.width ? undefined : 0,*/
        //border: '1px solid red',
        height: '100%',
        ...fieldProps.rowStyle,
    };

    let emptyLabel: string | undefined = undefined;
    if (formProps.layout === 'horizontal') emptyLabel = ' ';
    const label = typeof altLabel !== 'undefined' ? altLabel : (fieldProps.label ?? emptyLabel);

    const nodeRef = useRef<HTMLDivElement>(null);

    const autoHeightClass = fieldProps.autoHeightResize ? ' auto-height' : '';

    const model = field.getModel();
    const onClick = useOnClick(field);

    const highlightedFieldStyle: CSSProperties | undefined = field.getId() === model.getHighlightedId() ? field.getHighlightedStyle() : undefined;
    const _fieldContainerStyle: CSSProperties = {...fieldContainerStyle, ...highlightedFieldStyle};

    return (
        <CSSTransition nodeRef={nodeRef} in={!fieldHidden} timeout={300} classNames="zoom" unmountOnExit>
            <div ref={nodeRef} className={'dform-field-container' + autoHeightClass} style={_fieldContainerStyle} onClick={onClick}>
                <Form.Item
                    label={label}
                    className={fieldProps.itemClassName}
                    //name={fieldName} //!Do not specify "name". Components inside Form.Item with "name" property will turn into controlled mode, which makes "defaultValue" and "value" not work anymore
                    help={error || undefined}
                    validateStatus={error ? 'error' : undefined}
                    required={!!fieldProps.requiredMark}
                    tooltip={fieldProps.tooltip}
                    style={style}
                >
                    {children}
                </Form.Item>
            </div>
        </CSSTransition>
    );
};

/** Highlight field on click */
export const useOnClick = (field: IBaseField) => {
    const onClick = useEvent((e: React.MouseEvent) => {
        e.stopPropagation();
        const focusedElement = document.activeElement as HTMLElement
        field.setHighlighted(true);
        setTimeout(()=>{
            focusedElement?.focus();
        }, 100)
    });

    const model = field.getModel();
    return model.getFormMode() === 'constructor' ? onClick : undefined;
};
