/**
 * @RenderFormBody
 * @version 0.0.28.80
 * @link omegatester@gmail.com
 * @author Maksim Zaytsev
 * @license MIT
 */

import React, {CSSProperties, useSyncExternalStore} from 'react';
import {IBaseField} from '@src/dForm/fields/base/baseField';
import {IDFormProps} from "@src/dForm";

/** Render form body */
export const FieldsRender = ({
    fields,
    formProps,
    subscribe,
    getSnapshot,
    containerStyle,
}: {
    fields: Record<string, IBaseField>;
    formProps:IDFormProps;
    subscribe?: (listener: () => void) => () => void;
    getSnapshot?: () => Record<never, never>;
    containerStyle?: CSSProperties;
}): React.JSX.Element | null => {
    if (!subscribe) subscribe = () => () => void 0;
    if (!getSnapshot) getSnapshot = () => 0;

    const style: React.CSSProperties = {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        ...containerStyle,
    };

    const layoutClass = formProps.layout==='horizontal' ? ' layout-horizontal' : ' layout-vertical'
    useSyncExternalStore(subscribe, getSnapshot);
    return (
        <div className={'dform-fields-container'} style={style}>
            {Object.keys(fields).map(fieldName => {
                const field = fields[fieldName];

                const fieldStyle: React.CSSProperties = {};
                const fieldProps = field.getProps();
                const autoHeightClass= fieldProps.autoHeightResize ? ' auto-height' : '';

                return (
                    <div key={'field_' + field.getName()} className={'dform-field-container' + autoHeightClass + layoutClass} style={fieldStyle}>
                        {field.renderField()}{' '}
                    </div>
                );
            })}
        </div>
    );
};
