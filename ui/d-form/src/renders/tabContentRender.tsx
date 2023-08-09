/**
 * @RenderFields
 * @version 0.0.30.65
 * @link omegatester@gmail.com
 * @author Maksim Zaytsev
 * @license MIT
 */

import React, {useSyncExternalStore} from 'react';

import {BaseComponent} from '../components/baseComponent';
import {FieldGroupRender} from './fieldGroupRender';
import {IDFormApi} from "../hooks/api";

interface IFieldsRenderProps {
    /** Tab name */
    tabName: string;

    /** form api instance */
    formApi: IDFormApi;
}

export const TabContentRender = ({tabName, formApi}: IFieldsRenderProps): React.JSX.Element => {
    useExternalRenderCall(formApi, tabName);

    const groupsProp = formApi.model.getGroupsProps(tabName);
    const formProps = formApi.getFormProps();

    return (
        <>
            {Object.keys(groupsProp).map((groupName) => {
                if (Object.keys(groupsProp[groupName]).length === 0) return null;

                if (Object.keys(groupsProp[groupName]).length > 1) {
                    return <FieldGroupRender key={groupName} formApi={formApi} tabName={tabName} groupName={groupName}/>;
                } else {
                    const fieldName = Object.keys(groupsProp[groupName])[0];
                    const fieldProps = formProps?.fieldsProps?.[fieldName]
                    if (!fieldProps) return null;
                    return <BaseComponent key={fieldName} formApi={formApi} fieldName={fieldName} fieldProps={fieldProps}/>;
                }
            })}
        </>
    );
};

const useExternalRenderCall = (formApi: IDFormApi, tabName: string) => {
    const subscribe = formApi.model.subscribeRenderTab(tabName);

    const getSnapshot = () => {
        const snaps = formApi.model.getTabRenderSnapshots();
        if (!snaps[tabName]) return undefined;
        return snaps[tabName];
    };

    return useSyncExternalStore(subscribe, getSnapshot);
};
