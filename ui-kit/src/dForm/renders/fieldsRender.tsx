/**
 * @RenderFormBody
 * @version 0.0.28.80
 * @link omegatester@gmail.com
 * @author Maksim Zaytsev
 * @license MIT
 */

import React, {useSyncExternalStore} from 'react';
import {IBaseFieldAny} from '@src/dForm/fields/base/baseField';

/** Render form body */
export const FieldsRender = ({
    fields,
    subscribe,
    getSnapshot,
}: {
    fields: Record<string, IBaseFieldAny>;
    subscribe?: (listener: () => void) => () => void;
    getSnapshot?: () => Record<never, never>;
}): React.JSX.Element | null => {
    if (!subscribe) subscribe = () => () => void 0;
    if (!getSnapshot) getSnapshot = () => 0;

    useSyncExternalStore(subscribe, getSnapshot);
    return (
        <>
            {Object.keys(fields).map(fieldName => {
                const field = fields[fieldName];
                return (
                    <div key={'field_' + field.getName()} style={{width: '100%'}}>
                        {field.renderField()}{' '}
                    </div>
                );
            })}
        </>
    );
};
