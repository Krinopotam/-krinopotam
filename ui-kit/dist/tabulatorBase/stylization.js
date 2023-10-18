import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { theme } from 'antd';
const { useToken } = theme;
const TabulatorCss = createGlobalStyle `
  .tabulator {
    color: ${(props) => props.colorText};
    background-color: ${(props) => props.colorBgContainer};
    border-color: ${(props) => props.colorBorder};
    border-style: solid;
    border-width: thin;
    border-radius: ${(props) => props.borderRadius}px;

    .tabulator-header {
      //background-color: transparent;
      background-color: ${(props) => props.colorBgLayout};
      border-bottom-color: ${(props) => props.colorBorder};

      /** left frozen column header border */

      .tabulator-calcs-holder {
        border: 0;
        border-top: 1px solid ${(props) => props.colorBorder};
        background-color: ${(props) => props.colorBgLayout} !important;

        .tabulator-calcs-top {
          color: ${(props) => props.colorText};
          background-color: ${(props) => props.colorBgLayout} !important;
          border: 0;

          .tabulator-cell {
            border-right: 1px solid ${(props) => props.colorBorder};
          }
        }

        .tabulator-frozen.tabulator-frozen-left {
          border-right: 2px solid ${(props) => props.colorBorder};
        }

        .tabulator-frozen.tabulator-frozen-right {
          border-left: 2px solid ${(props) => props.colorBorder};
        }
      }

      .tabulator-col-resize-handle {
        transition: background-color 0.5s ease;

        &:hover {
          background-color: ${(props) => props.colorPrimaryHover};
        }
      }

      .tabulator-col {
        background-color: ${(props) => props.colorBgLayout};
        border-right-color: ${(props) => props.colorBorder};

        &.tabulator-frozen.tabulator-frozen-left {
          border-right: 2px solid ${(props) => props.colorBorder};
        }

        &.tabulator-frozen.tabulator-frozen-right {
          border-left: 2px solid ${(props) => props.colorBorder};
        }

        &.tabulator-sortable {
          &.tabulator-col-sorter-element:hover {
            background-color: ${(props) => props.colorFillQuaternary};
          }
        }

        .tabulator-col-title {
          color: ${(props) => props.colorText};
          font-size: ${(props) => props.fontSize}px;
        }

        .tabulator-col-sorter {
          color: ${(props) => props.colorText};
        }

        &.tabulator-col-group .tabulator-col-group-cols {
          border-top: 1px solid ${(props) => props.colorBorder};
        }

        .tabulator-header-filter input {
          color: ${(props) => props.colorText};
          font-size: ${(props) => props.fontSize}px;
          border-color: ${(props) => props.colorBorder};
          border-radius: ${(props) => props.borderRadius}px;
          background-color: ${(props) => props.colorBgContainer};
          padding-left: 11px !important;
          padding-right: 11px !important;
          border-style: solid;
          border-width: 1px;

          &:focus {
            border-color: ${(props) => props.colorPrimaryHover};
            box-shadow: 0 0 0 2px ${(props) => props.controlOutline};
            border-inline-end-width: 1px;
            outline: 0;
          }

          &:hover {
            border-color: ${(props) => props.colorPrimaryHover};
          }
        }
      }
    }

    .tabulator-tableholder {
      .tabulator-table {
        background-color: transparent;
        color: ${(props) => props.colorText};
        font-size: ${(props) => props.fontSize}px;

        .tabulator-row {
          background-color: transparent;
          border-bottom-color: ${(props) => props.colorBorderSecondary};

          &.tabulator-selectable:hover {
            background-color: ${(props) => props.colorFillQuaternary};
          }

          &:hover {
              //background-color: ${(props) => props.colorPrimaryBgHover};
          }

          &.tabulator-selected .tabulator-cell {
            background-color: ${(props) => props.colorPrimaryBg};
          }

          &.tabulator-selected.tabulator-row-even .tabulator-cell {
            background-color: ${(props) => props.colorPrimaryBg};
          }

          &.tabulator-selected:hover .tabulator-cell {
              //background-color: ${(props) => props.colorPrimaryBgHover};
          }

          &.tabulator-active .tabulator-cell {
            background-color: ${(props) => props.colorPrimaryBgHover};
          }

          &.tabulator-active.tabulator-row-even .tabulator-cell {
            background-color: ${(props) => props.colorPrimaryBgHover};
          }

          &.tabulator-row-odd .tabulator-cell {
            //background-color: transparent;
          }


          &.tabulator-row-even .tabulator-cell {
            background-color: ${(props) => {
    return props.striped ? props.colorBgLayout : "transparent";
}};
          }

          /** Highlight row resize handler  */

          .tabulator-row-resize-handle {
            transition: background-color 0.5s ease;

            &:hover {
              background-color: ${(props) => props.colorPrimaryHover};
            }
          }

          .tabulator-cell {
            background-color: ${(props) => props.colorBgContainer};
            border-right-color: ${(props) => props.colorBorderSecondary};

            &.tabulator-frozen.tabulator-frozen-left {
              border-right: 2px solid ${(props) => props.colorBorder};
            }

            &.tabulator-frozen.tabulator-frozen-right {
              border-left: 2px solid ${(props) => props.colorBorder};
            }
          }
        }
      }
    }

    .tabulator-footer {
      color: ${(props) => props.colorText};
      font-size: ${(props) => props.fontSize}px;
      background-color: ${(props) => props.colorBgLayout};
      border-top-color: ${(props) => props.colorBorder};

      .tabulator-calcs-holder {
        background-color: ${(props) => props.colorBgLayout} !important;
        border: 0;
        border-bottom: ${(props) => props.colorBorder};
        border-bottom-style: solid;
        border-bottom-width: thin;

        .tabulator-calcs-bottom {
          border: 0;
          background-color: ${(props) => props.colorBgLayout} !important;

          .tabulator-cell {
            border-color: ${(props) => props.colorBorder};
          }

          .tabulator-frozen.tabulator-frozen-left {
            border-right: 2px solid ${(props) => props.colorBorder};
          }

          .tabulator-frozen.tabulator-frozen-right {
            border-left: 2px solid ${(props) => props.colorBorder};
          }
        }
      }

      .tabulator-paginator {
        color: ${(props) => props.colorText};

        button.tabulator-page {
          color: ${(props) => props.colorText};
          transition: all 0.2s;
          border-radius: ${(props) => props.borderRadius}px;
          padding: 0;
          min-width: 32px;
          height: 32px;
          margin-inline-end: 8px;
          text-align: center;
          vertical-align: middle;
          cursor: pointer;
          user-select: none;
          line-height: 30px;

          &.active:not(:disabled) {
            color: ${(props) => props.colorText};
            border: 1px solid ${(props) => props.colorPrimary};
            font-weight: 600;
          }

          &:not(:disabled) {
            background-color: ${(props) => props.colorBgLayout};
            border-style: hidden;

            &:hover {
              background-color: ${(props) => props.colorBgTextHover};
            }
          }

          &:disabled {
            border-style: hidden;
            background-color: transparent;
            color: ${(props) => props.colorTextQuaternary};
            opacity: 1;
            cursor: not-allowed;
          }
        }
        
        select.tabulator-page-size {
          min-width: 32px;
          height: 32px;
          border-radius: ${(props) => props.borderRadius}px;
          border-color: ${(props) => props.colorBorder};
          color: ${(props) => props.colorText};
          background-color: ${(props) => props.colorBgContainer};
          border-style: solid;
          border-width: 1px;

          &:focus {
            border-color: ${(props) => props.colorPrimaryHover};
            box-shadow: 0 0 0 2px ${(props) => props.controlOutline};
            border-inline-end-width: 1px;
            outline: 0;
          }
          
          
          &:hover {
            border: 1px solid ${(props) => props.colorPrimaryHover};
          }
        }
      }
    }

    /** Collapse/expand button style */

    .tree-row-button {
      width: 17px;
      height: 17px;
      padding: 0;
      margin-right: 5px;
      font-size: ${(props) => props.fontSize}px;
      text-decoration: none;
      outline: none;
      cursor: pointer;
      transition: all .3s;
      box-sizing: border-box;
      color: ${(props) => props.colorText};
      background-color: ${(props) => props.colorBgContainer};
      border-color: ${(props) => props.colorBorder};
      border-radius: ${(props) => props.borderRadius}px;
      border-style: solid;
      border-width: 1px;
      transform: scale(.9411764705882353);
      user-select: none;
      display: inline-flex;
      align-items: center;
      justify-content: center;

      &:hover {
        color: ${(props) => props.colorPrimaryHover};
        border-color: ${(props) => props.colorPrimaryHover};
      }
    }

    .collapse-button button {
    }

    .expand-button button {
    }
  }
`;
export const Stylization = ({ striped }) => {
    const { token } = useToken();
    return React.createElement(TabulatorCss, Object.assign({ striped: striped }, token));
};
