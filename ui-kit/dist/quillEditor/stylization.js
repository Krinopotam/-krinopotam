import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { theme } from 'antd';
const { useToken } = theme;
const QuillCss = createGlobalStyle `
  .quill {

    background-color: transparent;

    .ql-toolbar {
      background-color: ${(props) => props.colorFillQuaternary};
      color: ${(props) => props.colorText};
      border-top-right-radius: ${(props) => props.borderRadius}px;
      border-top-left-radius: ${(props) => props.borderRadius}px;
      border-bottom: 0;
      border-color: ${(props) => props.colorBorder};

      font-size: ${(props) => props.fontSize}px;
    }

    .ql-toolbar.ql-snow + .ql-container.ql-snow {
      background-color: ${(props) => props.colorBgContainer};
      color: ${(props) => props.colorText};
      font-size: ${(props) => props.fontSize}px;
      border: 1px solid ${(props) => props.colorBorder};
      border-bottom-right-radius: ${(props) => props.borderRadius}px;
      border-bottom-left-radius: ${(props) => props.borderRadius}px;

      .ql-editor {
        line-height:  ${(props) => props.lineHeight};
        padding: 4px ${(props) => props.controlPaddingHorizontal}px;
      }

      &:hover {
        border-color: ${(props) => props.colorPrimaryHover};
      }

      &:focus-within {
        border-color: ${(props) => props.colorPrimary};
        box-shadow: 0 0 0 2px ${(props) => props.controlOutline};
        border-inline-end-width: 1px;
        outline: 0;
      }

      /** placeholder */
      > .ql-editor.ql-blank::before {
        font-style: normal;
        font-size: ${(props) => props.fontSize}px;
        color: ${(props) => props.colorTextPlaceholder};
        left: ${(props) => props.controlPaddingHorizontal}px;
        right: ${(props) => props.controlPaddingHorizontal}px;
      }
    }

  }
`;
export const Stylization = () => {
    const { token } = useToken();
    return React.createElement(QuillCss, Object.assign({}, token));
};
//# sourceMappingURL=stylization.js.map