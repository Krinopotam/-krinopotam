import React, { CSSProperties } from 'react';
import { IBaseField } from '../../dForm/fields/base/baseField';
export declare const FieldsRender: ({ fields, subscribe, getSnapshot, containerStyle, }: {
    fields: Record<string, IBaseField>;
    subscribe?: ((listener: () => void) => () => void) | undefined;
    getSnapshot?: (() => Record<never, never>) | undefined;
    containerStyle?: React.CSSProperties | undefined;
}) => React.JSX.Element | null;
