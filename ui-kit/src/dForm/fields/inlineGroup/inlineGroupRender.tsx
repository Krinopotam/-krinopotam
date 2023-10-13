import React from 'react';
import {Form} from 'antd';
import {InlineGroupField} from '@src/dForm/fields/inlineGroup/inlineGroupField';
import {IBaseField} from '@src/dForm/fields/base/baseField';
import Animate from 'rc-animate';

export const InlineGroupRender = ({field}: {field: InlineGroupField}): React.JSX.Element => {
    const model = field.getFormModel();
    const formProps = model.getFormProps();

    const childrenFields = field.getRootFields();

    let firstField: IBaseField | undefined;
    for (const fieldName in childrenFields) {
        const childrenField = childrenFields[fieldName];
        if (!childrenField.isHidden()) {
            firstField = childrenField;
            break;
        }
    }

    const isHidden = !firstField;

    const groupName = field.getLabel();

    let groupLabel: React.ReactNode = '';
    if (formProps.layout === 'horizontal') groupLabel = groupName ?? firstField?.getLabel();

    return (
        <Animate component="" transitionName="zoom">
            {!isHidden ? (
                <Form.Item label={groupLabel} style={{margin: 0}}>
                    <div style={{display: 'inline-flex', gap: '24px', alignItems: 'center', width: '100%'}}>
                        {Object.keys(childrenFields).map(fieldName => {
                            const field = childrenFields[fieldName];
                            const altLabel = formProps.layout === 'horizontal' && field === firstField ? null : undefined;
                            return <div key={'item_' + field.getName()} style={{width:'100%'}}>{field.renderField(altLabel)}</div>;
                        })}
                    </div>
                </Form.Item>
            ) : null}
        </Animate>
    );
};
