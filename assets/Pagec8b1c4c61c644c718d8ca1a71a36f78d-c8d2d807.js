import{j as a,D as s}from"./index-c797af55.js";import{P as o,C as e,S as i,d as l,a as u}from"./docco-e40295f3.js";import{T as n}from"./tabulatorGrid-31aae25d.js";import{T as m,d as c,b as d}from"./tabulatorData-7c778850.js";import"./index-8c229de7.js";import"./dFormModal-cedb0440.js";import"./EyeOutlined-8bcb47e2.js";import"./DeleteOutlined-bba666a5.js";const p={id:"tabulator-grid-persistent",persistence:{columns:["width","visible"]},layout:"fitColumns",columnDefaults:m,columns:c,dataSet:d,height:500},b=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example of a persistent TabulatorGrid"}),a.jsx(n,{...p})]}),G=t=>{const r=`
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
`;return a.jsxs(o,{children:[a.jsx("div",{children:a.jsx(b,{})}),a.jsx(s,{}),a.jsx("div",{children:a.jsx(e,{items:[{key:1,label:"Show source",children:a.jsx(i,{language:"javascript",style:t.darkMode?l:u,showLineNumbers:!0,children:r})}]})})]})};export{G as Pagec8b1c4c61c644c718d8ca1a71a36f78d,G as default};
