/**
 * @RenderFormBody
 * @version 0.0.28.80
 * @link omegatester@gmail.com
 * @author Maksim Zaytsev
 * @license MIT
 */

import React, {useSyncExternalStore} from 'react';
import {FieldsGroupRender} from '@src/dForm/renders/fieldsGroupRender';
import {DModel} from '@src/dForm';

/** Render form body */
export const FieldsRender = ({
    model,
    groupsMap,
    subscribe,
    getSnapshot,
}: {
    model: DModel;
    groupsMap: DModel['_groupsMap'];
    subscribe?: (listener: () => void) => () => void;
    getSnapshot?: () => Record<never, never>;
}): React.JSX.Element | null => {
    if (!subscribe) subscribe = () => () => void 0;
    if (!getSnapshot) getSnapshot = () => 0;

    useSyncExternalStore(subscribe, getSnapshot);
    return (
        <>
            {Object.keys(groupsMap).map(groupName => {
                const group = groupsMap[groupName];
                if (!group || Object.keys(group).length === 0) return null;

                if (Object.keys(group).length > 1) {
                    return <FieldsGroupRender key={groupName} groupName={groupName} fields={group} model={model} />;
                } else {
                    const firstField = Object.keys(group)[0];
                    const field = group[firstField];
                    return field.renderField();
                }
            })}
        </>
    );
};
