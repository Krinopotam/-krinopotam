import 'react-quill/dist/quill.snow.css';
import React from 'react';
import ReactQuill, { Range, UnprivilegedEditor, Value } from 'react-quill';
import Quill, { DeltaOperation, Sources, StringMap } from "quill";
import { AnyType } from "@krinopotam/service-types";
export interface IQuillEditorProps {
    id?: string;
    bounds?: string | HTMLElement;
    className?: string;
    defaultValue?: Value;
    value?: Value;
    formats?: ('background' | 'bold' | 'color' | 'font' | 'code' | 'italic' | 'link' | 'size' | 'strike' | 'script' | 'underline' | 'blockquote' | 'header' | 'indent' | 'list' | 'bullet' | 'align' | 'direction' | 'code-block' | 'formula' | 'image' | 'video')[];
    toolbar?: IQuilToolbar;
    placeholder?: string;
    preserveWhitespace?: boolean;
    readOnly?: boolean;
    disabled?: boolean;
    scrollingContainer?: string | HTMLElement;
    style?: React.CSSProperties;
    tabIndex?: number;
    theme?: string;
    onChange?: (value: string, delta: DeltaStatic, source: Sources, editor: UnprivilegedEditor) => void;
    onChangeSelection?: (selection: Range, source: Sources, editor: UnprivilegedEditor) => void;
    onFocus?: (selection: Range, source: Sources, editor: UnprivilegedEditor) => void;
    onBlur?: (previousSelection: Range, source: Sources, editor: UnprivilegedEditor) => void;
    onKeyDown?: React.KeyboardEventHandler<HTMLElement>;
    onKeyPress?: React.KeyboardEventHandler<HTMLElement>;
    onKeyUp?: React.KeyboardEventHandler<HTMLElement>;
}
export interface DeltaStatic {
    ops?: DeltaOperation[];
    retain(length: number, attributes?: StringMap): DeltaStatic;
    delete(length: number): DeltaStatic;
    filter(predicate: (op: DeltaOperation) => boolean): DeltaOperation[];
    forEach(predicate: (op: DeltaOperation) => void): void;
    insert(text: AnyType, attributes?: StringMap): DeltaStatic;
    map<T>(predicate: (op: DeltaOperation) => T): T[];
    partition(predicate: (op: DeltaOperation) => boolean): [DeltaOperation[], DeltaOperation[]];
    reduce<T>(predicate: (acc: T, curr: DeltaOperation, idx: number, arr: DeltaOperation[]) => T, initial: T): T;
    chop(): DeltaStatic;
    length(): number;
    slice(start?: number, end?: number): DeltaStatic;
    compose(other: DeltaStatic): DeltaStatic;
    concat(other: DeltaStatic): DeltaStatic;
    diff(other: DeltaStatic, index?: number): DeltaStatic;
    eachLine(predicate: (line: DeltaStatic, attributes: StringMap, idx: number) => AnyType, newline?: string): DeltaStatic;
    transform(index: number, priority?: boolean): number;
    transform(other: DeltaStatic, priority: boolean): DeltaStatic;
    transformPosition(index: number, priority?: boolean): number;
}
type IToolbarHeader = {
    header: 1 | 2 | 3 | 4 | 5 | 6;
} | {
    header: (1 | 2 | 3 | 4 | 5 | 6 | boolean)[];
};
type IToolbarList = {
    list: 'ordered' | 'bullet';
};
type IToolbarScript = {
    script: 'sub' | 'super';
};
type IToolbarColor = {
    color: `#${string}`[];
};
type IToolbarBackground = {
    background: `#${string}`[];
};
type IToolbarIndent = {
    'indent': '-1' | '+1';
};
type IToolbarDirection = {
    'direction': 'rtl' | 'ltr';
};
type IToolbarSize = {
    'size': ('small' | false | 'large' | 'huge')[];
};
type IToolbarFont = {
    'font': string[];
};
type IToolbarAlign = {
    align: '' | 'center' | 'right' | 'justify';
} | {
    align: ('' | 'center' | 'left' | 'right' | 'justify')[];
};
type IQuilToolbarControls = (IToolbarHeader | IToolbarList | IToolbarScript | IToolbarColor | IToolbarBackground | IToolbarIndent | IToolbarDirection | IToolbarSize | IToolbarFont | IToolbarAlign | 'bold' | 'italic' | 'underline' | 'strike' | 'blockquote' | 'code-block' | 'link' | 'clean' | 'image' | 'video' | 'formula')[];
type IQuilToolbarAdvanced = {
    container?: string;
    handlers?: Record<string, (this: Quill, value: string) => void>;
};
export type IQuilToolbar = IQuilToolbarControls | IQuilToolbarControls[] | IQuilToolbarAdvanced | string;
export declare const QuillEditor: React.ForwardRefExoticComponent<IQuillEditorProps & React.RefAttributes<ReactQuill>>;
export {};