import React, { CSSProperties } from 'react';
import { IBaseField } from '../../dForm/fields/base/baseField';
import { IDFormProps } from "../../dForm";
export declare const FieldsRender: ({ fields, subscribe, getSnapshot, containerStyle, }: {
    fields: Record<string, IBaseField>;
    formProps: IDFormProps;
    subscribe?: ((listener: () => void) => () => void) | undefined;
    getSnapshot?: (() => Record<never, never>) | undefined;
    containerStyle?: React.CSSProperties | undefined;
}) => React.JSX.Element | null;
