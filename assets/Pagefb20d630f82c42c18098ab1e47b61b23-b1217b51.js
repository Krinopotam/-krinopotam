import{j as a,D as e}from"./index-c797af55.js";import{P as o,C as s,S as l,d as i,a as u}from"./docco-e40295f3.js";import{T as m}from"./tabulatorGrid-31aae25d.js";import{T as n,a as d,e as c}from"./tabulatorData-7c778850.js";import"./index-8c229de7.js";import"./dFormModal-cedb0440.js";import"./EyeOutlined-8bcb47e2.js";import"./DeleteOutlined-bba666a5.js";const p={id:"TabulatorGridTree",columnDefaults:n,columns:d,dataSet:c,dataTree:!0,height:500,layout:"fitColumns"},T=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example of a hierarchical grid TabulatorGrid"}),a.jsx(m,{...p})]}),G=r=>{const t=`
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
`;return a.jsxs(o,{children:[a.jsx("div",{children:a.jsx(T,{})}),a.jsx(e,{}),a.jsx("div",{children:a.jsx(s,{items:[{key:1,label:"Show source",children:a.jsx(l,{language:"javascript",style:r.darkMode?i:u,showLineNumbers:!0,children:t})}]})})]})};export{G as Pagefb20d630f82c42c18098ab1e47b61b23,G as default};
