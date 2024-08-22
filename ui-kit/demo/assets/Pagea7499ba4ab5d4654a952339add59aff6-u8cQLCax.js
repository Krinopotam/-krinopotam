import{j as a,D as t}from"./index-DDBz1-0O.js";import{P as o,C as s,h as e,d as i,a as l}from"./docco-C1crFo0W.js";import{T as u}from"./tabulatorGrid-DacXqSyX.js";import{b as n,d as m,a as d}from"./tabulatorData-DjWGs0rZ.js";import"./messageBox-DliIkF0r.js";import"./dForm-BA1kBRHr.js";import"./index-DF9EXunC.js";import"./dFormModal-nAwu1QC2.js";import"./modal-DePWROKc.js";import"./EyeOutlined-Dh1NUrDq.js";import"./DeleteOutlined-fRhgWf_l.js";const p={id:"tabulator-grid-persistent",persistence:{columns:["width","visible"]},layout:"fitColumns",columnDefaults:n,columns:m,dataSet:d,height:500},c=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example of a persistent TabulatorGrid"}),a.jsx(u,{...p})]}),B=r=>a.jsxs(o,{children:[a.jsx("div",{children:a.jsx(c,{})}),a.jsx(t,{}),a.jsx("div",{children:a.jsx(s,{items:[{key:1,label:"Show source",children:a.jsx(e,{language:"javascript",style:r.darkMode?i:l,showLineNumbers:!0,children:`
import React from 'react';
import {IGridProps, TabulatorGrid} from @krinopotam/ui-kit/tabulatorGrid';
import {TabulatorBaseColumnsDef, TabulatorBaseGroupedColumns, TabulatorPlainData} from '../../data/tabulatorData';
const props: IGridProps = {
    id: 'tabulator-grid-persistent',
    persistence: {columns: ['width', 'visible']},
    layout:'fitColumns',
    columnDefaults: TabulatorBaseColumnsDef,
    columns: TabulatorBaseGroupedColumns,
    dataSet: TabulatorPlainData,
    height: 500,
};
export const Persistence = (): React.JSX.Element => {
    return (
        <>
            <TabulatorGrid {...props} />
        </>
    );
};
`})}]})})]});export{B as Pagea7499ba4ab5d4654a952339add59aff6,B as default};
