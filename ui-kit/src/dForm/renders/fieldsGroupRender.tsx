/**
 * @RenderFieldGroup
 * @version 0.0.29.93
 * @link omegatester@gmail.com
 * @author Maksim Zaytsev
 * @license MIT
 */

import React, {useSyncExternalStore} from 'react';

import Animate from 'rc-animate';
import {Form} from 'antd';
import {DModel} from '@src/dForm';
import {IBaseFieldAny} from '@src/dForm/fields/base/baseField';

interface IFieldGroupRenderProps {
    /** fields inline group name */
    groupName: string;

    /** Fields to render */
    fields: Record<string, IBaseFieldAny>;

    /** form model */
    model: DModel;
}

export const FieldsGroupRender = ({groupName, fields, model}: IFieldGroupRenderProps): React.JSX.Element | null => {
    const formProps = model.getFormProps();
    useExternalRenderCall(model, groupName);

    let firstField: IBaseFieldAny | undefined;
    for (const fieldName in fields) {
        const field = fields[fieldName];
        if (!field.isHidden()) {
            firstField = field;
        }
    }

    const groupHidden = !firstField;

    let groupLabel: React.ReactNode = '';
    if (formProps.layout === 'horizontal') groupLabel = firstField?.getLabel() ?? groupName;

    let isFirst = true;
    return (
        <Animate component="" transitionName="zoom">
            {!groupHidden ? (
                <Form.Item label={groupLabel} style={{margin: 0}}>
                    <div style={{display: 'inline-flex', gap: '24px', alignItems: 'center', width: '100%'}}>
                        {Object.keys(fields).map(fieldName => {
                            const field = fields[fieldName];
                            const noLabel = formProps.layout === 'horizontal' && !!groupLabel && isFirst;
                            isFirst = false;
                            return field.renderField(noLabel);
                        })}
                    </div>
                </Form.Item>
            ) : null}
        </Animate>
    );
};

const useExternalRenderCall = (model: DModel, tabName: string) => {
    const subscribe = model.subscribeRenderTab(tabName);

    const getSnapshot = () => {
        const snaps = model.getTabRenderSnapshots();
        if (!snaps[tabName]) return undefined;
        return snaps[tabName];
    };

    return useSyncExternalStore(subscribe, getSnapshot);
};