import{j as a,D as t}from"./index-HhzJ4ZAZ.js";import{P as o,C as e,h as s,d as i,a as l}from"./docco-DFBk-y2S.js";import{T as u}from"./tabulatorGrid-ClXLsEKq.js";import{b as m,T as d,f as n}from"./tabulatorData-BplLbar6.js";import"./messageBox-B4gQYQRN.js";import"./dForm-CEoJtw24.js";import"./index-B0AR281A.js";import"./dFormModal-CWIdSG_N.js";import"./modal-BNnPWca4.js";import"./EyeOutlined-iPePv-Sb.js";import"./DeleteOutlined-BU6ZfEzd.js";const c={id:"TabulatorGridTree",columnDefaults:m,columns:d,dataSet:n,dataTree:!0,height:500,layout:"fitColumns"},p=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example of a hierarchical grid TabulatorGrid"}),a.jsx(u,{...c})]}),P=r=>a.jsxs(o,{children:[a.jsx("div",{children:a.jsx(p,{})}),a.jsx(t,{}),a.jsx("div",{children:a.jsx(e,{items:[{key:1,label:"Show source",children:a.jsx(s,{language:"javascript",style:r.darkMode?i:l,showLineNumbers:!0,children:`
import React from 'react';
import {IGridProps, TabulatorGrid} from @krinopotam/ui-kit/tabulatorGrid';
import {TabulatorBaseColumns, TabulatorBaseColumnsDef, TabulatorTreeData} from '../../data/tabulatorData';
const props: IGridProps = {
    id: 'TabulatorGridTree',
    columnDefaults: TabulatorBaseColumnsDef,
    columns: TabulatorBaseColumns,
    dataSet: TabulatorTreeData,
    dataTree: true,
    height: 500,
    layout: 'fitColumns',
};
export const Tree = (): React.JSX.Element => {
    return (
        <>
            <TabulatorGrid {...props} />
        </>
    );
};
`})}]})})]});export{P as Page3ba4bc02447d4ad8a80ee6ba17844390,P as default};
