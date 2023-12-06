import{j as a,D as e}from"./index-0409158c.js";import{P as o,C as s,S as l,d as i,a as u}from"./docco-fa9c9fcc.js";import{T as d}from"./tabulatorGrid-22da0f8d.js";import{T as m,a as n,e as c}from"./tabulatorData-fbb7c043.js";import"./index-da9b0dd9.js";import"./dFormModal-235aed86.js";import"./EyeOutlined-c44a8289.js";import"./DeleteOutlined-75656d28.js";const p={id:"TabulatorGridTree",columnDefaults:m,columns:n,dataSet:c,dataTree:!0,height:500,layout:"fitColumns"},T=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example of a hierarchical grid TabulatorGrid"}),a.jsx(d,{...p})]}),G=r=>{const t=`
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
`;return a.jsxs(o,{children:[a.jsx("div",{children:a.jsx(T,{})}),a.jsx(e,{}),a.jsx("div",{children:a.jsx(s,{items:[{key:1,label:"Show source",children:a.jsx(l,{language:"javascript",style:r.darkMode?i:u,showLineNumbers:!0,children:t})}]})})]})};export{G as Pageede3f03b221e4d2c8fd6a9abdef8150f,G as default};
