import {IBaseField} from '@src/dForm/fields/base';
import React, {CSSProperties, useEffect, useRef, useSyncExternalStore} from 'react';
import {Form} from 'antd';
import {InlineGroupField} from '@src/dForm/fields/inlineGroup/inlineGroupField';
import {CSSTransition} from 'react-transition-group';

/*
 * inline group Field (for horizontal field display)
 * Unlike other fields, this field during rendering does not wrap into BaseField. Therefore, his own processing of animation
 */

export const InlineGroupRender = ({field}: {field: InlineGroupField}): React.JSX.Element => {
    useSyncExternalStore(field.subscribe.bind(field), field.getSnapshot.bind(field));

    useEffect(() => {
        field.setReady(true);
    }, [field]);

    const nodeRef = useRef(null);

    const model = field.getModel();
    const formProps = model.getFormProps();
    const fieldProps = field.getProps();

    const childrenFields = field.getRootFields();

    let firstField: IBaseField | undefined;
    for (const fieldName in childrenFields) {
        const childrenField = childrenFields[fieldName];
        if (childrenField.isHidden()) continue;
        if (!firstField) firstField = childrenField;
    }

    const fieldHidden = field.isHidden() || !field.hasVisibleChildren(); //has visible field

    let groupLabel: React.ReactNode = '';
    if (formProps.layout === 'horizontal') groupLabel = firstField?.getLabel();

    const defStyle: CSSProperties = {width: field.getWidth(), margin: 0, marginBottom: 0};
    if (fieldProps.autoHeightResize) defStyle.height = '100%';
    const groupItemStyle = {...defStyle, ...fieldProps.style};

    const gap = 24;
    const groupContainerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        gap: gap + 'px',
        alignItems: 'top',
        width: '100%',
    };
    if (fieldProps.autoHeightResize) groupContainerStyle.height = '100%';

    const gapOffset = getGapOffset(childrenFields, gap);

    return (
        <CSSTransition nodeRef={nodeRef} in={!fieldHidden} timeout={300} classNames="zoom" unmountOnExit>
            <div ref={nodeRef} className={'dform-field-container'}>
                <Form.Item label={groupLabel} style={groupItemStyle} className={fieldProps.className}>
                    <div style={groupContainerStyle}>
                        {Object.keys(childrenFields).map(fieldName => {
                            const childField = childrenFields[fieldName];
                            const childProps = childField.getProps();

                            const fieldContainerStyle: React.CSSProperties = {
                                flex: childProps.width || childField.noGrowWidth() ? `0 0 auto` : '1 1 auto',
                                width: parseWidth(childField, gapOffset),
                            };

                            const altLabel = formProps.layout === 'horizontal' && childField === firstField ? null : undefined;
                            return (
                                <React.Fragment key={`item_${field.getName()}_subitem_${childField.getName()}`}>{childField.renderField({altLabel, fieldContainerStyle})}</React.Fragment>
                            );
                        })}
                    </div>
                </Form.Item>
            </div>
        </CSSTransition>
    );
};

const getGapOffset = (childrenFields: Record<string, IBaseField>, gap: number) => {
    const totalFields = Object.keys(childrenFields).length;
    return totalFields > 0 ? ((totalFields - 1) * gap) / totalFields : 0;
};

const parseWidth = (field: IBaseField, gapOffset: number) => {
    const childProps = field.getProps();
    if (!childProps.width) return undefined;
    if (strIsNumber(childProps.width)) return childProps.width + 'px';
    return `calc(${childProps.width} - ${gapOffset}px)`;
};

const strIsNumber = (s: string | number) => {
    if (typeof s === 'number') return true;
    return s.length > 0 && !isNaN(Number(s[s.length - 1]));
};
