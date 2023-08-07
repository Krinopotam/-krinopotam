import React, { CSSProperties, ChangeEvent } from 'react';
import { TextAreaProps, TextAreaRef } from 'antd/es/input/TextArea';
interface IAutoSizedProps {
    value: string;
    textStyleRef: React.RefObject<CSSStyleDeclaration>;
    style?: CSSProperties;
    children?: React.ReactNode;
    onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    multiline?: boolean;
    extraHeight?: number;
    extraWidth?: number;
    placeholder?: string;
}
export type IAutoSizedTextAreaProps = IAutoSizedProps & Omit<TextAreaProps, 'autoSize, showCount'>;
export declare const AutoSizedTextArea: React.ForwardRefExoticComponent<IAutoSizedProps & Omit<TextAreaProps, "autoSize, showCount"> & React.RefAttributes<TextAreaRef>>;
export declare const copyStyles: (sourceStyles: CSSStyleDeclaration, destinationStyles: CSSStyleDeclaration) => void;
export {};
