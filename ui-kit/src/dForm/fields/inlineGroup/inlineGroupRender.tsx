import React, {CSSProperties, useSyncExternalStore} from 'react';
import {Form} from 'antd';
import {InlineGroupField} from '@src/dForm/fields/inlineGroup/inlineGroupField';
import {IBaseField} from '@src/dForm/fields/base/baseField';
import Animate from 'rc-animate';

export const InlineGroupRender = ({field}: {field: InlineGroupField}): React.JSX.Element => {
    useSyncExternalStore(field.subscribe.bind(field), field.getSnapshot.bind(field));
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

    let defStyle: CSSProperties = {};
    if (fieldProps.width) {
        defStyle = {width: fieldProps.width, margin: 0};
    }

    const groupStyle = {...defStyle, ...fieldProps.style};

    return (
        <Animate component="" transitionName="zoom">
            {!isHidden ? (
                <Form.Item label={groupLabel} style={groupStyle}>
                    <div style={{display: 'inline-flex', gap: '24px', alignItems: 'center', width: '100%'}}>
                        {Object.keys(childFields).map(fieldName => {
                            const childField = childFields[fieldName];
                            const childProps = childField.getProps();

                            if (childField.isHidden()) return null;

                            const style: React.CSSProperties = {
                                flexGrow: childProps.width ? 0 : 1,
                                flexShrink: childProps.width ? 0 : 1,
                                flexBasis: childProps.width ? undefined : 0,
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
