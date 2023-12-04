import{j as a,D as s}from"./index-491b5652.js";import{P as o,C as e,S as i,d as l,a as u}from"./docco-2ccfe26d.js";import{T as n}from"./tabulatorGrid-1fa6dc01.js";import{T as m,d,b as p}from"./tabulatorData-db3ba943.js";import"./index-bb222d24.js";import"./dFormModal-03c7f003.js";import"./EyeOutlined-ab0d6fcf.js";import"./DeleteOutlined-4ad9d1b1.js";const c={id:"tabulator-grid-persistent",persistence:{columns:["width","visible"]},layout:"fitColumns",columnDefaults:m,columns:d,dataSet:p,height:500},b=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example of a persistent TabulatorGrid"}),a.jsx(n,{...c})]}),G=t=>{const r=`
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
`;return a.jsxs(o,{children:[a.jsx("div",{children:a.jsx(b,{})}),a.jsx(s,{}),a.jsx("div",{children:a.jsx(e,{items:[{key:1,label:"Show source",children:a.jsx(i,{language:"javascript",style:t.darkMode?l:u,showLineNumbers:!0,children:r})}]})})]})};export{G as Page2d5755f547a5406d86c1a46e4ae16bb4,G as default};
