import{j as a,D as s}from"./index-9944374f.js";import{P as o,C as e,S as i,d as l,a as u}from"./docco-d767795b.js";import{T as n}from"./tabulatorGrid-7651107b.js";import{T as d,d as m,b as p}from"./tabulatorData-eaf688e2.js";import"./index-df6b3fec.js";import"./dFormModal-d04b30b3.js";import"./EyeOutlined-4433dc0b.js";import"./DeleteOutlined-31742ae8.js";const c={id:"tabulator-grid-persistent",persistence:{columns:["width","visible"]},layout:"fitColumns",columnDefaults:d,columns:m,dataSet:p,height:500},b=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example of a persistent TabulatorGrid"}),a.jsx(n,{...c})]}),G=t=>{const r=`
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
`;return a.jsxs(o,{children:[a.jsx("div",{children:a.jsx(b,{})}),a.jsx(s,{}),a.jsx("div",{children:a.jsx(e,{items:[{key:1,label:"Show source",children:a.jsx(i,{language:"javascript",style:t.darkMode?l:u,showLineNumbers:!0,children:r})}]})})]})};export{G as Paged8829fd3a9de4647af194758f5eb6a9f,G as default};
