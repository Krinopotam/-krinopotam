import 'react-quill/dist/quill.snow.css';
import { Stylization } from './stylization';
import React from 'react';
import ReactQuill from 'react-quill';
const defaultColorList = [
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
const defaultFormats = ['header', 'font', 'size', 'script', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block', 'list', 'bullet', 'indent', 'link', 'color', 'align', 'background', 'image', 'video'];
const defaultToolbar = [
    [{ header: [1, 2, false] }],
    [{ align: ['', 'center', 'right', 'justify'] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ color: defaultColorList }, { background: defaultColorList }],
    [{ script: 'super' }, { script: 'sub' }],
    ['blockquote', 'code-block'],
    [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
    ['link', 'image', 'video'],
    ['clean'],
];
export const QuillEditor = React.forwardRef((props, ref) => {
    var _a, _b, _c;
    const formats = (_a = props.formats) !== null && _a !== void 0 ? _a : defaultFormats;
    const toolbar = (_b = props.toolbar) !== null && _b !== void 0 ? _b : defaultToolbar;
    const modules = {
        toolbar: toolbar,
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Stylization, null),
        React.createElement(ReactQuill, { ref: ref, theme: (_c = props.theme) !== null && _c !== void 0 ? _c : "snow", id: props.id, bounds: props.bounds, className: props.className, defaultValue: props.defaultValue, value: props.value, formats: formats, modules: modules, placeholder: props.placeholder, preserveWhitespace: props.preserveWhitespace, readOnly: props.readOnly || props.disabled, scrollingContainer: props.scrollingContainer, style: props.style, tabIndex: props.tabIndex, onChange: props.onChange, onBlur: props.onBlur, onChangeSelection: props.onChangeSelection, onFocus: props.onFocus, onKeyDown: props.onKeyUp, onKeyPress: props.onKeyPress, onKeyUp: props.onKeyUp })));
});
QuillEditor.displayName = 'QuillEditor';
//# sourceMappingURL=quillEditor.js.map