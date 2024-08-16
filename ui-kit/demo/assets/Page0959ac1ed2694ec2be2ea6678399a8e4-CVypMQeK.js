import{j as a,D as t}from"./index-jRq8dFl9.js";import{P as e,C as o,h as s,d as i,a as l}from"./docco-DVswO1UK.js";import{T as u}from"./tabulatorGrid-Dp7y1jLu.js";import{b as m,T as d,f as n}from"./tabulatorData-D9ENxapK.js";import"./messageBox-A1wgNO27.js";import"./dForm-CmpnCynY.js";import"./index-h_fYsjXx.js";import"./dFormModal-DuFw94ex.js";import"./modal-Bq0KGAYX.js";import"./EyeOutlined-B_mcHe4i.js";import"./DeleteOutlined-KSC0BHZd.js";const c={id:"TabulatorGridTree",columnDefaults:m,columns:d,dataSet:n,dataTree:!0,height:500,layout:"fitColumns"},p=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example of a hierarchical grid TabulatorGrid"}),a.jsx(u,{...c})]}),P=r=>a.jsxs(e,{children:[a.jsx("div",{children:a.jsx(p,{})}),a.jsx(t,{}),a.jsx("div",{children:a.jsx(o,{items:[{key:1,label:"Show source",children:a.jsx(s,{language:"javascript",style:r.darkMode?i:l,showLineNumbers:!0,children:`
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
`})}]})})]});export{P as Page0959ac1ed2694ec2be2ea6678399a8e4,P as default};
