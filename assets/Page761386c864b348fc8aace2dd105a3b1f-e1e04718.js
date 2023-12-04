import{j as a,D as t}from"./index-c797af55.js";import{P as s,C as e,S as l,d as i,a as u}from"./docco-e40295f3.js";import{T as m}from"./tabulatorGrid-31aae25d.js";import{T as n,a as d,b as p}from"./tabulatorData-7c778850.js";import"./index-8c229de7.js";import"./dFormModal-cedb0440.js";import"./EyeOutlined-8bcb47e2.js";import"./DeleteOutlined-bba666a5.js";const c={id:"TabulatorGridSimple",columnDefaults:n,columns:d,dataSet:p,height:500},b=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example of a simple TabulatorGrid"}),a.jsx(m,{...c})]}),G=r=>{const o=`
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
`;return a.jsxs(s,{children:[a.jsx("div",{children:a.jsx(b,{})}),a.jsx(t,{}),a.jsx("div",{children:a.jsx(e,{items:[{key:1,label:"Show source",children:a.jsx(l,{language:"javascript",style:r.darkMode?i:u,showLineNumbers:!0,children:o})}]})})]})};export{G as Page761386c864b348fc8aace2dd105a3b1f,G as default};
