import React, {CSSProperties, useEffect, useSyncExternalStore} from 'react';
import {Form} from 'antd';
import {InlineGroupField} from '@src/dForm/fields/inlineGroup/inlineGroupField';
import {IBaseField} from '@src/dForm/fields/base/baseField';
import Animate from 'rc-animate';

export const InlineGroupRender = ({field}: {field: InlineGroupField}): React.JSX.Element => {
    useSyncExternalStore(field.subscribe.bind(field), field.getSnapshot.bind(field));

    useEffect(() => {
        field.setReady(true);
    }, [field]);

    if (!field.hasVisibleChildren()) return <> </>;

    const model = field.getModel();
    const formProps = model.getFormProps();
    const fieldProps = field.getProps();

    const childFields = field.getRootFields();

    let firstField: IBaseField | undefined;
    for (const fieldName in childFields) {
        const childrenField = childFields[fieldName];
        if (!childrenField.isHidden()) {
            firstField = childrenField;
            break;
        }
    }

    const isHidden = field.isHidden() || !firstField;

    const groupName = field.getLabel();

    let groupLabel: React.ReactNode = '';
    if (formProps.layout === 'horizontal') groupLabel = groupName ?? firstField?.getLabel();

    const defStyle: CSSProperties = {margin: 0, marginBottom: 0};
    if (fieldProps.width) defStyle.width = fieldProps.width;
    if (fieldProps.autoHeightResize) defStyle.height = '100%';
    const groupItemStyle = {...defStyle, ...fieldProps.style};

    const groupContainerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        gap: '24px',
        alignItems: 'top',
        width: '100%',
    };
    if (fieldProps.autoHeightResize) groupContainerStyle.height = '100%';

    return (
        <Animate component="" transitionName="zoom">
            {!isHidden ? (
                <Form.Item label={groupLabel} style={groupItemStyle}>
                    <div style={groupContainerStyle}>
                        {Object.keys(childFields).map(fieldName => {
                            const childField = childFields[fieldName];
                            const childProps = childField.getProps();

                            if (childField.isHidden()) return null;

                            const style: React.CSSProperties = {
                                flex: childProps.width || childField.noGrowWidth() ? '0 0 auto' : '1 1 0',
                                width:childProps.width
                            };

                            const altLabel = formProps.layout === 'horizontal' && childField === firstField ? null : undefined;
                            return (
                                <div key={'item_' + childField.getName()} style={style}>
                                    {childField.renderField(altLabel)}
                                </div>
                            );
                        })}
                    </div>
                </Form.Item>
            ) : null}
        </Animate>
    );
};
