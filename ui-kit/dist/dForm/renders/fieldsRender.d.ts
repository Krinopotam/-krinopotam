import React from 'react';
import { IBaseField } from '../../dForm/fields/base/baseField';
export declare const FieldsRender: ({ fields, subscribe, getSnapshot, }: {
    fields: Record<string, IBaseField>;
    subscribe?: ((listener: () => void) => () => void) | undefined;
    getSnapshot?: (() => Record<never, never>) | undefined;
}) => React.JSX.Element | null;
