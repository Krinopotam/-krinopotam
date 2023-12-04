import{j as a,D as s}from"./index-7abbb94e.js";import{P as o,C as e,S as i,d as l,a as u}from"./docco-6bf51e55.js";import{T as n}from"./tabulatorGrid-7e279c75.js";import{T as m,d,b as p}from"./tabulatorData-c70d6b23.js";import"./index-22f8d441.js";import"./dFormModal-d77fb2bf.js";import"./EyeOutlined-4b705a51.js";import"./DeleteOutlined-038f7985.js";const c={id:"tabulator-grid-persistent",persistence:{columns:["width","visible"]},layout:"fitColumns",columnDefaults:m,columns:d,dataSet:p,height:500},b=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example of a persistent TabulatorGrid"}),a.jsx(n,{...c})]}),G=t=>{const r=`
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
`;return a.jsxs(o,{children:[a.jsx("div",{children:a.jsx(b,{})}),a.jsx(s,{}),a.jsx("div",{children:a.jsx(e,{items:[{key:1,label:"Show source",children:a.jsx(i,{language:"javascript",style:t.darkMode?l:u,showLineNumbers:!0,children:r})}]})})]})};export{G as Page7203299f66ab4a0a89727fd0211b63ed,G as default};
