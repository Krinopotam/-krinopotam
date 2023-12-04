import{j as a,D as o}from"./index-bd83bb7b.js";import{P as e,C as s,S as l,d as i,a as u}from"./docco-5da19923.js";import{T as m}from"./tabulatorGrid-c8d5ca90.js";import{T as d,a as n,e as c}from"./tabulatorData-cbbee66e.js";import"./index-70b17d15.js";import"./dFormModal-65650ab1.js";import"./EyeOutlined-9bf5471e.js";import"./DeleteOutlined-cdccffb7.js";const p={id:"TabulatorGridTree",columnDefaults:d,columns:n,dataSet:c,dataTree:!0,height:500,layout:"fitColumns"},T=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example of a hierarchical grid TabulatorGrid"}),a.jsx(m,{...p})]}),G=r=>{const t=`
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
`;return a.jsxs(e,{children:[a.jsx("div",{children:a.jsx(T,{})}),a.jsx(o,{}),a.jsx("div",{children:a.jsx(s,{items:[{key:1,label:"Show source",children:a.jsx(l,{language:"javascript",style:r.darkMode?i:u,showLineNumbers:!0,children:t})}]})})]})};export{G as Page73d188c0659a4693a2b2c86c7f38d009,G as default};
