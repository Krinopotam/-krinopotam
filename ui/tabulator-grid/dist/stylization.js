import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { theme } from 'antd';
const { useToken } = theme;
const TabulatorCss = createGlobalStyle `
  .tabulator {
    background-color:  ${(props) => props.colorBgContainer};
    
    .tabulator-header {
      background-color: transparent;
      border-top-right-radius: ${(props) => props.borderRadius}px;
      border-top-left-radius: ${(props) => props.borderRadius}px;
      border-bottom-color: ${(props) => props.colorBorderSecondary};

      .tabulator-col {
        background-color: ${(props) => props.colorFillQuaternary};
        border-right-color: ${(props) => props.colorBorderSecondary};
        
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

        /* Workaround to hide/show headerFilter */
        .tabulator-header-filter {
          display: none;
        }
        /* ------- */
        
        .tabulator-header-filter input {
          color: ${(props) => props.colorText};
          font-size: ${(props) => props.fontSize}px;
          border-color: ${(props) => props.colorBorder};
          border-radius: ${(props) => props.borderRadius}px;
          background-color: ${(props) => props.colorBgContainer};
          padding-left: 11px!important;
          padding-right: 11px!important;
          border-style: solid;
          border-width: 1px;
          &:focus {
            border-color: ${(props) => props.colorPrimaryHover};
            box-shadow:  ${(props) => props.colorPrimaryBg};
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
          
          &.tabulator-selected {
            background-color: ${(props) => props.colorPrimaryBg};
          }
          
          &.tabulator-selected:hover {
              //background-color: ${(props) => props.colorPrimaryBgHover};
          }
          
          &.tabulator-active {
            background-color: ${(props) => props.colorPrimaryBgHover};
          }

          &.tabulator-row-odd {
            //background-color: transparent;
          }

          &.tabulator-row-even{
            //background-color: transparent;
          }
          
          .tabulator-cell {
            border-right-color: ${(props) => props.colorBorderSecondary};
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
export const Stylization = () => {
    const { token } = useToken();
    return React.createElement(TabulatorCss, Object.assign({}, token));
};
