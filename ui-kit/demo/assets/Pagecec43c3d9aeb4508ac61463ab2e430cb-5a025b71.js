import{j as a,D as t}from"./index-3024f328.js";import{P as s,C as e,S as l,d as i,a as u}from"./docco-8e796366.js";import{T as m}from"./tabulatorGrid-a1a2b210.js";import{b as n,T as c,a as d}from"./tabulatorData-f1a03775.js";import"./index-901967cb.js";import"./dFormModal-09fd0649.js";import"./EyeOutlined-ff2ae648.js";import"./DeleteOutlined-73630e69.js";const p={id:"TabulatorGridSimple",columnDefaults:n,columns:c,dataSet:d,height:500},b=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example of a simple TabulatorGrid"}),a.jsx(m,{...p})]}),G=r=>{const o=`
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
`;return a.jsxs(s,{children:[a.jsx("div",{children:a.jsx(b,{})}),a.jsx(t,{}),a.jsx("div",{children:a.jsx(e,{items:[{key:1,label:"Show source",children:a.jsx(l,{language:"javascript",style:r.darkMode?i:u,showLineNumbers:!0,children:o})}]})})]})};export{G as Pagecec43c3d9aeb4508ac61463ab2e430cb,G as default};
