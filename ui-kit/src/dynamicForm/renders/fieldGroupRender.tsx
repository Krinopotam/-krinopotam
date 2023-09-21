/**
 * @RenderFieldGroup
 * @version 0.0.29.93
 * @link omegatester@gmail.com
 * @author Maksim Zaytsev
 * @license MIT
 */

import React, {useSyncExternalStore} from 'react';

import Animate from 'rc-animate';
import {BaseComponent} from '../components/baseComponent';
import {Form} from 'antd';
import {IDFormApi} from '../hooks/api';
import {IDFormProps} from "../dForm";

interface IFieldGroupRenderProps {
    /** Form props*/
    formProps:IDFormProps

    /** tab name */
    tabName: string;

    /** fields inline group name */
    groupName: string;

    /** form api instance */
    formApi: IDFormApi;
}

export const FieldGroupRender = ({formProps, tabName, groupName, formApi}: IFieldGroupRenderProps): React.JSX.Element | null => {
    useExternalRenderCall(formApi, tabName, groupName);

    const fields = formApi.model.getGroupsProps(tabName)[groupName];

    const firstField = formApi.model.getFirstVisibleFieldInGroup(tabName, groupName);
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
                            return <BaseComponent key={fieldName} formApi={formApi} fieldName={fieldName} fieldProps={fieldProps} noLabel={noLabel}/>;
                        })}
                    </div>
                </Form.Item>
            ) : null}
        </Animate>
    );
};

const useExternalRenderCall = (formApi: IDFormApi, tabName: string, groupName: string) => {
    const subscribe = formApi.model.subscribeRenderGroup(tabName, groupName);

    const snaps = formApi.model.getGroupRenderSnapshots();

    const getSnapshot = () => {
        if (!snaps?.[tabName]?.[groupName]) return undefined;
        return snaps[tabName][groupName];
    };

    return useSyncExternalStore(subscribe, getSnapshot);
};
