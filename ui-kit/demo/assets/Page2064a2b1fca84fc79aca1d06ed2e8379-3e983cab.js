import{j as a,D as t}from"./index-239f7c99.js";import{P as s,C as e,S as l,d as i,a as u}from"./docco-df193236.js";import{T as m}from"./tabulatorGrid-76a09af9.js";import{T as n,a as d,b as p}from"./tabulatorData-6512b762.js";import"./index-e86df101.js";import"./dFormModal-2ecf2b9b.js";import"./EyeOutlined-6214a1a0.js";import"./DeleteOutlined-01bac62e.js";const c={id:"TabulatorGridSimple",columnDefaults:n,columns:d,dataSet:p,height:500},b=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example of a simple TabulatorGrid"}),a.jsx(m,{...c})]}),G=r=>{const o=`
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
`;return a.jsxs(s,{children:[a.jsx("div",{children:a.jsx(b,{})}),a.jsx(t,{}),a.jsx("div",{children:a.jsx(e,{items:[{key:1,label:"Show source",children:a.jsx(l,{language:"javascript",style:r.darkMode?i:u,showLineNumbers:!0,children:o})}]})})]})};export{G as Page2064a2b1fca84fc79aca1d06ed2e8379,G as default};
