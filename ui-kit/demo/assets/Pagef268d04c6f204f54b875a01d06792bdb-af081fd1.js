import{j as a,D as t}from"./index-0409158c.js";import{P as s,C as e,S as l,d as i,a as u}from"./docco-fa9c9fcc.js";import{T as m}from"./tabulatorGrid-22da0f8d.js";import{T as n,a as d,b as p}from"./tabulatorData-fbb7c043.js";import"./index-da9b0dd9.js";import"./dFormModal-235aed86.js";import"./EyeOutlined-c44a8289.js";import"./DeleteOutlined-75656d28.js";const c={id:"TabulatorGridSimple",columnDefaults:n,columns:d,dataSet:p,height:500},b=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example of a simple TabulatorGrid"}),a.jsx(m,{...c})]}),G=r=>{const o=`
import React from 'react';
import {IGridProps, TabulatorGrid} from @krinopotam/ui-kit/tabulatorGrid';
import {TabulatorBaseColumns, TabulatorBaseColumnsDef, TabulatorPlainData} from '../../data/tabulatorData';
const props: IGridProps = {
    id: 'TabulatorGridSimple',
    columnDefaults: TabulatorBaseColumnsDef,
    columns: TabulatorBaseColumns,
    dataSet: TabulatorPlainData,
    height: 500,
};
export const Simple = (): React.JSX.Element => {
    return (
        <>
            <TabulatorGrid {...props} />
        </>
    );
};
`;return a.jsxs(s,{children:[a.jsx("div",{children:a.jsx(b,{})}),a.jsx(t,{}),a.jsx("div",{children:a.jsx(e,{items:[{key:1,label:"Show source",children:a.jsx(l,{language:"javascript",style:r.darkMode?i:u,showLineNumbers:!0,children:o})}]})})]})};export{G as Pagef268d04c6f204f54b875a01d06792bdb,G as default};
