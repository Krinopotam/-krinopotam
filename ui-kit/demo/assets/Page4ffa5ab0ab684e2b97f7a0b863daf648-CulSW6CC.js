import{j as a,D as o}from"./index-zp8t8nBI.js";import{P as t,C as s,h as e,d as l,a as i}from"./docco-qM7CaTt5.js";import{T as u}from"./tabulatorGrid-LGmx6kUr.js";import{b as m,T as n,a as d}from"./tabulatorData-BJ5jlgxT.js";import"./dForm-CtyM7E66.js";import"./dFormModal-DQXWVkWJ.js";import"./EyeOutlined-B9jVFvSG.js";import"./DeleteOutlined-oAPYnq6c.js";const p={id:"TabulatorGridSimple",columnDefaults:m,columns:n,dataSet:d,height:500},c=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example of a simple TabulatorGrid"}),a.jsx(u,{...p})]}),C=r=>a.jsxs(t,{children:[a.jsx("div",{children:a.jsx(c,{})}),a.jsx(o,{}),a.jsx("div",{children:a.jsx(s,{items:[{key:1,label:"Show source",children:a.jsx(e,{language:"javascript",style:r.darkMode?l:i,showLineNumbers:!0,children:`
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
`})}]})})]});export{C as Page4ffa5ab0ab684e2b97f7a0b863daf648,C as default};
