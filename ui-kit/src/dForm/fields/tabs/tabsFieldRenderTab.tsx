/**
 * @RenderFields
 * @version 0.0.30.65
 * @link omegatester@gmail.com
 * @author Maksim Zaytsev
 * @license MIT
 */

import React, {useSyncExternalStore} from 'react';

import {DModel} from "@src/dForm";

interface IFieldsRenderProps {
    /** Tab name */
    tabName: string;
}

export const TabsFieldRenderTab = ({tabName, model}: {tabName:string, model:DModel}): React.JSX.Element => {
    useExternalRenderCall(model, tabName);

    const groupsProp = model.getGroupsProps(tabName);

    return (
        <>
            {Object.keys(groupsProp).map((groupName) => {
                if (Object.keys(groupsProp[groupName]).length === 0) return null;

                if (Object.keys(groupsProp[groupName]).length > 1) {
                    return <FieldGroupRender key={groupName} formProps={formProps} formApi={formApi} tabName={tabName} groupName={groupName}/>;
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

const useExternalRenderCall = (model: DModel, tabName: string) => {
    const subscribe = model.subscribeRenderTab(tabName);

    const getSnapshot = () => {
        const snaps = model.getTabRenderSnapshots();
        if (!snaps[tabName]) return undefined;
        return snaps[tabName];
    };

    return useSyncExternalStore(subscribe, getSnapshot);
};
