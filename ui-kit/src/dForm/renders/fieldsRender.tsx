/**
 * @RenderFormBody
 * @version 0.0.28.80
 * @link omegatester@gmail.com
 * @author Maksim Zaytsev
 * @license MIT
 */

import React, {CSSProperties, useSyncExternalStore} from 'react';
import {IBaseField} from '@src/dForm/fields/base/baseField';

/** Render form body */
export const FieldsRender = ({
    fields,
    subscribe,
    getSnapshot,
    containerStyle,
}: {
    fields: Record<string, IBaseField>;
    subscribe?: (listener: () => void) => () => void;
    getSnapshot?: () => Record<never, never>;
    containerStyle?: CSSProperties;
}): React.JSX.Element | null => {
    if (!subscribe) subscribe = () => () => void 0;
    if (!getSnapshot) getSnapshot = () => 0;

    useSyncExternalStore(subscribe, getSnapshot);
    return (
        <div style={containerStyle}>
            {Object.keys(fields).map(fieldName => {
                const field = fields[fieldName];
                return <div key={'field_' + field.getName()}>{field.renderField()} </div>;
            })}
        </div>
    );
};
