import{j as a,D as o}from"./index-CEW5Pw51.js";import{P as t,C as s,h as e,d as l,a as i}from"./docco-BDmKSriJ.js";import{T as u}from"./tabulatorGrid-D_Dw4JJ8.js";import{b as m,T as n,a as d}from"./tabulatorData-CS8n7XKW.js";import"./index-XDwG7I6Z.js";import"./dFormModal-CQxmvlme.js";import"./EyeOutlined-CTrlI0WT.js";import"./DeleteOutlined-DC7B5UxI.js";const p={id:"TabulatorGridSimple",columnDefaults:m,columns:n,dataSet:d,height:500},c=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example of a simple TabulatorGrid"}),a.jsx(u,{...p})]}),C=r=>a.jsxs(t,{children:[a.jsx("div",{children:a.jsx(c,{})}),a.jsx(o,{}),a.jsx("div",{children:a.jsx(s,{items:[{key:1,label:"Show source",children:a.jsx(e,{language:"javascript",style:r.darkMode?l:i,showLineNumbers:!0,children:`
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
`})}]})})]});export{C as Pageff84802de18b46caa525396b78b5338d,C as default};
