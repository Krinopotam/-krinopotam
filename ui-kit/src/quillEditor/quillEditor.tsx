/**
 * @QuillEditor
 * @version 0.0.29.92
 * @link omegatester@gmail.com
 * @author Maksim Zaytsev
 * @license MIT
 */

import 'react-quill-new/dist/quill.snow.css';
import {Stylization} from './stylization';

import React from 'react';

import ReactQuill, {DeltaStatic} from 'react-quill-new';
import Quill from 'quill';

import Range = ReactQuill.Range;
import Value = ReactQuill.Value;
import UnprivilegedEditor = ReactQuill.UnprivilegedEditor;

type Sources = 'api' | 'user' | 'silent';

export interface IQuillEditorProps {
    id?: string;

    /** DOM Element or a CSS selector for a DOM Element, within which the editor’s ui elements (i.e. tooltips, etc.) should be confined. Currently, it only considers left and right boundaries **/
    bounds?: string | HTMLElement;

    /** CSS class name */
    className?: string;

    /** Default value */
    defaultValue?: Value;

    /** Value */
    value?: Value;

    /** Allowed formats. This is separate from adding a control in the Toolbar. For example, you can configure Quill to allow bolded content to be pasted into an editor that has no bold button in the toolbar */
    formats?: (
        | 'background'
        | 'bold'
        | 'color'
        | 'font'
        | 'code'
        | 'italic'
        | 'link'
        | 'size'
        | 'strike'
        | 'script'
        | 'underline'
        | 'blockquote'
        | 'header'
        | 'indent'
        | 'list'
        | 'bullet'
        | 'align'
        | 'direction'
        | 'code-block'
        | 'formula'
        | 'image'
        | 'video'
    )[];

    /** Toolbars buttons config */
    toolbar?: IQuilToolbar;

    /** Placeholder text to show when editor is empty. **/
    placeholder?: string;

    preserveWhitespace?: boolean;

    /** Whether to instantiate the editor to read-only mode */
    readOnly?: boolean;

    /** Whether to instantiate the editor to disabled mode */
    disabled?: boolean;

    style?: React.CSSProperties;

    tabIndex?: number;

    /** Name of theme to use. The builtin options are “bubble” or “snow”. */
    theme?: string;

    /** ------ Callbacks --------*/
    onChange?: (value: string, delta: DeltaStatic, source: Sources, editor: UnprivilegedEditor) => void;
    onChangeSelection?: (selection: Range, source: Sources, editor: UnprivilegedEditor) => void;
    onFocus?: (selection: Range, source: Sources, editor: UnprivilegedEditor) => void;
    onBlur?: (previousSelection: Range, source: Sources, editor: UnprivilegedEditor) => void;
    onKeyDown?: React.KeyboardEventHandler<HTMLElement>;
    onKeyPress?: React.KeyboardEventHandler<HTMLElement>;
    onKeyUp?: React.KeyboardEventHandler<HTMLElement>;
}

type IToolbarHeader = {header: 1 | 2 | 3 | 4 | 5 | 6} | {header: (1 | 2 | 3 | 4 | 5 | 6 | boolean)[]};
type IToolbarList = {list: 'ordered' | 'bullet'};
type IToolbarScript = {script: 'sub' | 'super'};
type IToolbarColor = {color: `#${string}`[]};
type IToolbarBackground = {background: `#${string}`[]};
type IToolbarIndent = {indent: '-1' | '+1'};
type IToolbarDirection = {direction: 'rtl' | 'ltr'};
type IToolbarSize = {size: ('small' | false | 'large' | 'huge')[]};
type IToolbarFont = {font: string[]};
type IToolbarAlign = {align: '' | 'center' | 'right' | 'justify'} | {align: ('' | 'center' | 'left' | 'right' | 'justify')[]};
type IQuilToolbarControls = (
    | IToolbarHeader
    | IToolbarList
    | IToolbarScript
    | IToolbarColor
    | IToolbarBackground
    | IToolbarIndent
    | IToolbarDirection
    | IToolbarSize
    | IToolbarFont
    | IToolbarAlign
    | 'bold'
    | 'italic'
    | 'underline'
    | 'strike'
    | 'blockquote'
    | 'code-block'
    | 'link'
    | 'clean'
    | 'image'
    | 'video'
    | 'formula'
)[];
type IQuilToolbarAdvanced = {
    /** Selector for toolbar container */
    container?: string;

    /** Toolbar items handlers */
    handlers?: Record<string, (this: Quill, value: string) => void>;
};

export type IQuilToolbar = IQuilToolbarControls | IQuilToolbarControls[] | IQuilToolbarAdvanced | string;

const defaultColorList: IToolbarColor['color'] = [
    '#000000',
    '#e60000',
    '#ff9900',
    '#ffff00',
    '#008a00',
    '#0066cc',
    '#9933ff',
    '#ffffff',
    '#facccc',
    '#ffebcc',
    '#ffffcc',
    '#cce8cc',
    '#cce0f5',
    '#ebd6ff',
    '#bbbbbb',
    '#f06666',
    '#ffc266',
    '#ffff66',
    '#66b966',
    '#66a3e0',
    '#c285ff',
    '#888888',
    '#a10000',
    '#b26b00',
    '#b2b200',
    '#006100',
    '#0047b2',
    '#6b24b2',
    '#444444',
    '#5c0000',
    '#663d00',
    '#666600',
    '#003700',
    '#002966',
    '#3d1466',
];

const defaultFormats: IQuillEditorProps['formats'] = [
    'header',
    'font',
    'size',
    'script',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'code-block',
    'list',
    'bullet',
    'indent',
    'link',
    'color',
    'align',
    'background',
    'image',
    'video',
];

const defaultToolbar: IQuilToolbar = [
    [{header: [1, 2, false]}],
    [{align: ['', 'center', 'right', 'justify']}],
    ['bold', 'italic', 'underline', 'strike'],
    [{color: defaultColorList}, {background: defaultColorList}],
    [{script: 'super'}, {script: 'sub'}],
    ['blockquote', 'code-block'],
    [{list: 'ordered'}, {list: 'bullet'}, {indent: '-1'}, {indent: '+1'}],
    ['link', 'image', 'video'],
    ['clean'],
];

export const QuillEditor = React.forwardRef((props: IQuillEditorProps, ref: React.ForwardedRef<ReactQuill>): React.JSX.Element => {
    const formats = props.formats ?? defaultFormats;
    const toolbar = props.toolbar ?? defaultToolbar;

    const modules = {
        toolbar: toolbar,
    };

    return (
        <>
            <Stylization />
            <ReactQuill
                ref={ref}
                theme={props.theme ?? 'snow'}
                id={props.id}
                bounds={props.bounds}
                className={props.className}
                defaultValue={props.defaultValue}
                value={props.value}
                formats={formats}
                modules={modules}
                placeholder={props.placeholder}
                preserveWhitespace={props.preserveWhitespace}
                //TODO improve disabled mode
                readOnly={props.readOnly || props.disabled}
                //scrollingContainer={props.scrollingContainer}
                style={props.style}
                tabIndex={props.tabIndex}
                /** ------ Callbacks --------*/
                onChange={props.onChange}
                onBlur={props.onBlur}
                onChangeSelection={props.onChangeSelection}
                onFocus={props.onFocus}
                onKeyDown={props.onKeyDown}
                onKeyPress={props.onKeyPress}
                onKeyUp={props.onKeyUp}
            />
        </>
    );
});

QuillEditor.displayName = 'QuillEditor';
