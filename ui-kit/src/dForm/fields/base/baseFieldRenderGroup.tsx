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
import {IBaseFieldAny} from "@src/dForm/fields/base/baseField";
import {DModel} from "@src/dForm";

interface IFieldGroupRenderProps {
    field: IBaseFieldAny

    /** tab name */
    tabName: string;

    /** fields inline group name */
    groupName: string;
}

export const BaseFieldRenderGroup = ({field, tabName, groupName}: IFieldGroupRenderProps): React.JSX.Element | null => {
    const model = field.getFormModel();
    useExternalRenderCall(model, tabName, groupName);

    const formProps = field.getFormProps()
    const fieldProps = field.getProps()

    const fields = model.getGroupsProps(tabName)[groupName];

    const firstField = model.getFirstVisibleFieldInGroup(tabName, groupName);
    const groupHidden = !firstField;

    let groupLabel: React.ReactNode = '';
    if (formProps.layout === 'horizontal') groupLabel = firstField?.label ?? groupName;

    let isFirst = true;
    return (
        <Animate component="" transitionName="zoom">
            {!groupHidden ? (
                <Form.Item label={groupLabel} style={{margin: 0}}>
                    <div style={{display: 'inline-flex', gap: '24px', alignItems: 'center', width: '100%'}}>
                        {Object.keys(fields).map((fieldName) => {
                            const fieldProps = formProps?.fieldsProps?.[fieldName]
                            if (!fieldProps) return null;
                            const noLabel = formProps.layout === 'horizontal' && !!groupLabel && isFirst;
                            isFirst = false;
                            return field.renderField(noLabel)
                        })}
                    </div>
                </Form.Item>
            ) : null}
        </Animate>
    );
};

//TODO:rework needed
const useExternalRenderCall = (model: DModel, tabName: string, groupName: string) => {
    const subscribe = model.subscribeRenderGroup(tabName, groupName);

    const snaps = model.getGroupRenderSnapshots();

    const getSnapshot = () => {
        if (!snaps?.[tabName]?.[groupName]) return undefined;
        return snaps[tabName][groupName];
    };

    return useSyncExternalStore(subscribe, getSnapshot);
};
