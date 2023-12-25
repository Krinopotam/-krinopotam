import{j as a,D as e}from"./index-3024f328.js";import{P as o,C as s,S as l,d as i,a as u}from"./docco-8e796366.js";import{T as m}from"./tabulatorGrid-a1a2b210.js";import{b as n,T as d,e as c}from"./tabulatorData-f1a03775.js";import"./index-901967cb.js";import"./dFormModal-09fd0649.js";import"./EyeOutlined-ff2ae648.js";import"./DeleteOutlined-73630e69.js";const p={id:"TabulatorGridTree",columnDefaults:n,columns:d,dataSet:c,dataTree:!0,height:500,layout:"fitColumns"},T=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example of a hierarchical grid TabulatorGrid"}),a.jsx(m,{...p})]}),G=r=>{const t=`
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
`;return a.jsxs(o,{children:[a.jsx("div",{children:a.jsx(T,{})}),a.jsx(e,{}),a.jsx("div",{children:a.jsx(s,{items:[{key:1,label:"Show source",children:a.jsx(l,{language:"javascript",style:r.darkMode?i:u,showLineNumbers:!0,children:t})}]})})]})};export{G as Pageb8cca09944054e65b4065ff7f3364284,G as default};
