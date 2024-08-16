import{j as a,D as o}from"./index-jRq8dFl9.js";import{P as t,C as s,h as e,d as i,a as l}from"./docco-DVswO1UK.js";import{T as m}from"./tabulatorGrid-Dp7y1jLu.js";import{b as u,T as n,a as p}from"./tabulatorData-D9ENxapK.js";import"./messageBox-A1wgNO27.js";import"./dForm-CmpnCynY.js";import"./index-h_fYsjXx.js";import"./dFormModal-DuFw94ex.js";import"./modal-Bq0KGAYX.js";import"./EyeOutlined-B_mcHe4i.js";import"./DeleteOutlined-KSC0BHZd.js";const d={id:"TabulatorGridSimple",columnDefaults:u,columns:n,dataSet:p,height:500},c=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example of a simple TabulatorGrid"}),a.jsx(m,{...d})]}),B=r=>a.jsxs(t,{children:[a.jsx("div",{children:a.jsx(c,{})}),a.jsx(o,{}),a.jsx("div",{children:a.jsx(s,{items:[{key:1,label:"Show source",children:a.jsx(e,{language:"javascript",style:r.darkMode?i:l,showLineNumbers:!0,children:`
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
`})}]})})]});export{B as Page60297d8039314c25b61ea68d177f92b9,B as default};
