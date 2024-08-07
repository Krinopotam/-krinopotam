import{j as a,D as t}from"./index-CEW5Pw51.js";import{P as s,C as e,h as o,d as i,a as l}from"./docco-BDmKSriJ.js";import{T as u}from"./tabulatorGrid-D_Dw4JJ8.js";import{b as n,d as m,a as d}from"./tabulatorData-CS8n7XKW.js";import"./index-XDwG7I6Z.js";import"./dFormModal-CQxmvlme.js";import"./EyeOutlined-CTrlI0WT.js";import"./DeleteOutlined-DC7B5UxI.js";const c={id:"tabulator-grid-persistent",persistence:{columns:["width","visible"]},layout:"fitColumns",columnDefaults:n,columns:m,dataSet:d,height:500},p=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example of a persistent TabulatorGrid"}),a.jsx(u,{...c})]}),G=r=>a.jsxs(s,{children:[a.jsx("div",{children:a.jsx(p,{})}),a.jsx(t,{}),a.jsx("div",{children:a.jsx(e,{items:[{key:1,label:"Show source",children:a.jsx(o,{language:"javascript",style:r.darkMode?i:l,showLineNumbers:!0,children:`
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
`})}]})})]});export{G as Page5bd633e9c87e4b87a1feae295dafe9f2,G as default};
