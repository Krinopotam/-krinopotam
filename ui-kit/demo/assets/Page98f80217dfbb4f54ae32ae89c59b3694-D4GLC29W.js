import{j as a,D as o}from"./index-HhzJ4ZAZ.js";import{P as t,C as s,h as e,d as i,a as l}from"./docco-DFBk-y2S.js";import{T as m}from"./tabulatorGrid-ClXLsEKq.js";import{b as u,T as n,a as p}from"./tabulatorData-BplLbar6.js";import"./messageBox-B4gQYQRN.js";import"./dForm-CEoJtw24.js";import"./index-B0AR281A.js";import"./dFormModal-CWIdSG_N.js";import"./modal-BNnPWca4.js";import"./EyeOutlined-iPePv-Sb.js";import"./DeleteOutlined-BU6ZfEzd.js";const d={id:"TabulatorGridSimple",columnDefaults:u,columns:n,dataSet:p,height:500},c=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example of a simple TabulatorGrid"}),a.jsx(m,{...d})]}),B=r=>a.jsxs(t,{children:[a.jsx("div",{children:a.jsx(c,{})}),a.jsx(o,{}),a.jsx("div",{children:a.jsx(s,{items:[{key:1,label:"Show source",children:a.jsx(e,{language:"javascript",style:r.darkMode?i:l,showLineNumbers:!0,children:`
import React from 'react';
import {IGridProps, TabulatorGrid} from @krinopotam/ui-kit/tabulatorGrid';
import {TabulatorBaseColumns, TabulatorBaseColumnsDef, TabulatorPlainData} from '../../data/tabulatorData';
const props: IGridProps = {
    id: 'TabulatorGridSimple',
    columnDefaults: TabulatorBaseColumnsDef,
    columns: TabulatorBaseColumns,
    dataSet: TabulatorPlainData,
    height: 500,
};
export const Simple = (): React.JSX.Element => {
    return (
        <>
            <TabulatorGrid {...props} />
        </>
    );
};
`})}]})})]});export{B as Page98f80217dfbb4f54ae32ae89c59b3694,B as default};
