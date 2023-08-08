var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Input } from 'antd';
import { HelpersObjects } from "@krinopotam/js-helpers";
import styled from 'styled-components';
const { TextArea } = Input;
const SizerDiv = styled.div `
  position: absolute;
  top: 0;
  left: 0;
  visibility: hidden;
  //border-style: solid;
  //border-color: aqua;
  white-space: pre;

  &:after {
    content: ' ';
  }
`;
export const AutoSizedTextArea = React.forwardRef((_a, ref) => {
    var { textStyleRef, style, value, onChange, multiline, extraHeight, extraWidth, placeholder } = _a, props = __rest(_a, ["textStyleRef", "style", "value", "onChange", "multiline", "extraHeight", "extraWidth", "placeholder"]);
    const sizerRef = useRef(null);
    const placeholderSizerRef = useRef(null);
    const inputBoundsStyle = useGetInputBoundsStyle(ref);
    useCopyTextAreaStyles(sizerRef, placeholderSizerRef, ref, textStyleRef);
    const [inputHeight, inputWidth] = useCalculateSize(sizerRef, placeholderSizerRef, value, inputBoundsStyle, extraHeight, extraWidth);
    const _style = usePrepareInputStyles(style, inputHeight, inputWidth);
    const _onChange = (e) => {
        if (typeof multiline === 'boolean' && !multiline)
            e.target.value = e.target.value.replace(/[\n\r]/g, '');
        if (onChange)
            onChange(e);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(TextArea, Object.assign({}, props, { placeholder: placeholder, ref: ref, style: _style, onChange: _onChange, value: value })),
        React.createElement(SizerDiv, { ref: sizerRef }, value),
        placeholder && React.createElement(SizerDiv, { ref: placeholderSizerRef }, placeholder)));
});
AutoSizedTextArea.displayName = 'AutoSizedTextArea2';
const useGetInputBoundsStyle = (textAreaRef) => {
    const [inputStyle, setInputStyle] = useState({
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
    });
    useEffect(() => {
        if (!textAreaRef.current || !textAreaRef.current.resizableTextArea)
            return;
        const calculatedStyles = window.getComputedStyle(textAreaRef.current.resizableTextArea.textArea, null);
        setInputStyle({
            paddingTop: parseInt(calculatedStyles.paddingTop, 10),
            paddingBottom: parseInt(calculatedStyles.paddingBottom, 10),
            paddingLeft: parseInt(calculatedStyles.paddingLeft, 10),
            paddingRight: parseInt(calculatedStyles.paddingRight, 10),
            borderTopWidth: parseInt(calculatedStyles.borderTopWidth, 10),
            borderBottomWidth: parseInt(calculatedStyles.borderBottomWidth, 10),
            borderLeftWidth: parseInt(calculatedStyles.borderLeftWidth, 10),
            borderRightWidth: parseInt(calculatedStyles.borderRightWidth, 10),
        });
    }, [textAreaRef, setInputStyle]);
    return inputStyle;
};
const useCopyTextAreaStyles = (sizerRef, placeholderSizerRef, textAreaRef, textStyleRef) => {
    useEffect(() => {
        if (!sizerRef.current || !textAreaRef || !textAreaRef.current || !textAreaRef.current.resizableTextArea || !textStyleRef || !textStyleRef.current)
            return;
        copyStyles(textStyleRef.current, textAreaRef.current.resizableTextArea.textArea.style);
        copyStyles(textStyleRef.current, sizerRef.current.style);
        if (placeholderSizerRef.current)
            copyStyles(textStyleRef.current, placeholderSizerRef.current.style);
    }, [textAreaRef, textStyleRef, sizerRef, placeholderSizerRef]);
};
const useCalculateSize = (sizerRef, placeholderSizerRef, value, inputBoundsStyle, extraHeight, extraWidth) => {
    const [inputWidth, setInputWidth] = useState(0);
    const [inputHeight, setInputHeight] = useState(0);
    useEffect(() => {
        if (!sizerRef.current)
            return;
        const paddingHeight = inputBoundsStyle.paddingTop +
            inputBoundsStyle.paddingBottom +
            inputBoundsStyle.borderTopWidth +
            inputBoundsStyle.borderBottomWidth +
            (extraHeight || 0);
        const paddingWidth = inputBoundsStyle.paddingLeft +
            inputBoundsStyle.paddingRight +
            inputBoundsStyle.borderLeftWidth +
            inputBoundsStyle.borderRightWidth +
            (extraWidth || 0);
        const sizerStyles = window.getComputedStyle(sizerRef.current, null);
        const sizerHeight = parseInt(sizerStyles.height, 10);
        const sizerWidth = parseInt(sizerStyles.width, 10);
        let placeholderSizerHeight = 0;
        let placeholderSizerWidth = 0;
        if (placeholderSizerRef.current) {
            const placeholderSizerStyles = window.getComputedStyle(placeholderSizerRef.current, null);
            placeholderSizerHeight = parseInt(placeholderSizerStyles.height, 10);
            placeholderSizerWidth = parseInt(placeholderSizerStyles.width, 10);
        }
        setInputHeight(Math.max(sizerHeight, placeholderSizerHeight) + paddingHeight);
        setInputWidth(Math.max(sizerWidth, placeholderSizerWidth) + paddingWidth);
    }, [sizerRef, placeholderSizerRef, value, inputBoundsStyle, extraHeight, extraWidth]);
    return [inputHeight, inputWidth];
};
const usePrepareInputStyles = (style, inputHeight, inputWidth) => {
    return useMemo(() => {
        return HelpersObjects.mergeObjects(style || {}, {
            height: inputHeight,
            width: inputWidth,
            transition: 'none',
            overflow: 'hidden',
            resize: 'none'
        });
    }, [style, inputWidth, inputHeight]);
};
const copyStyles = (sourceStyles, destinationStyles) => {
    destinationStyles.fontSize = sourceStyles.fontSize;
    destinationStyles.fontFamily = sourceStyles.fontFamily;
    destinationStyles.fontWeight = sourceStyles.fontWeight;
    destinationStyles.fontStyle = sourceStyles.fontStyle;
    destinationStyles.letterSpacing = sourceStyles.letterSpacing;
    destinationStyles.textTransform = sourceStyles.textTransform;
    destinationStyles.lineHeight = sourceStyles.lineHeight;
};
