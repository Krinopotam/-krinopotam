import React from 'react';
import {createGlobalStyle} from 'styled-components';
import {GlobalToken, theme} from 'antd';

const {useToken} = theme;

const QuillCss = createGlobalStyle`
  .quill {

    background-color: transparent;

    .ql-toolbar {
      background-color: ${(props: GlobalToken) => props.colorFillQuaternary};
      color: ${(props: GlobalToken) => props.colorText};
      border-top-right-radius: ${(props: GlobalToken) => props.borderRadius}px;
      border-top-left-radius: ${(props: GlobalToken) => props.borderRadius}px;
      border-bottom: 0;
      border-color: ${(props: GlobalToken) => props.colorBorder};

      font-size: ${(props: GlobalToken) => props.fontSize}px;
    }

    .ql-toolbar.ql-snow + .ql-container.ql-snow {
      background-color: ${(props: GlobalToken) => props.colorBgContainer};
      color: ${(props: GlobalToken) => props.colorText};
      font-size: ${(props: GlobalToken) => props.fontSize}px;
      border: 1px solid ${(props: GlobalToken) => props.colorBorder};
      border-bottom-right-radius: ${(props: GlobalToken) => props.borderRadius}px;
      border-bottom-left-radius: ${(props: GlobalToken) => props.borderRadius}px;

      .ql-editor {
        line-height:  ${(props: GlobalToken) => props.lineHeight};
        padding: 4px ${(props: GlobalToken) => props.controlPaddingHorizontal}px;
      }

      &:hover {
        border-color: ${(props: GlobalToken) => props.colorPrimaryHover};
      }

      &:focus-within {
        border-color: ${(props: GlobalToken) => props.colorPrimary};
        box-shadow: 0 0 0 2px ${(props: GlobalToken) => props.controlOutline};
        border-inline-end-width: 1px;
        outline: 0;
      }

      /** placeholder */
      > .ql-editor.ql-blank::before {
        font-style: normal;
        font-size: ${(props: GlobalToken) => props.fontSize}px;
        color: ${(props: GlobalToken) => props.colorTextPlaceholder};
        left: ${(props: GlobalToken) => props.controlPaddingHorizontal}px;
        right: ${(props: GlobalToken) => props.controlPaddingHorizontal}px;
      }
    }

  }
`;

export const Stylization = (): React.JSX.Element => {
    const {token} = useToken();
    return <QuillCss {...token} />;
};
