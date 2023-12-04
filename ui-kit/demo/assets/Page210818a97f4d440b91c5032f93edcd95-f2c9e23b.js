import{j as a,D as e}from"./index-491b5652.js";import{P as l,C as o,S as s,d as i,a as u}from"./docco-2ccfe26d.js";import{T as m}from"./tabulatorGrid-1fa6dc01.js";import{T as n,a as c,b as d}from"./tabulatorData-db3ba943.js";import"./index-bb222d24.js";import"./dFormModal-03c7f003.js";import"./EyeOutlined-ab0d6fcf.js";import"./DeleteOutlined-4ad9d1b1.js";const p=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example of a simple TabulatorGrid with multi-line selection"}),a.jsx("p",{children:"To select multiple rows, hold down ctrl key"}),a.jsx(m,{id:"TabulatorGridSimple",columnDefaults:n,columns:c,dataSet:d,multiSelect:!0,height:500,layout:"fitColumns"})]}),C=t=>{const r=`
import React from 'react';
import {TabulatorGrid} from @krinopotam/ui-kit/tabulatorGrid';
import {TabulatorBaseColumns, TabulatorBaseColumnsDef, TabulatorPlainData} from "../../data/tabulatorData";
export const MultiSelect = (): React.JSX.Element => {
    return (
        <>
            <TabulatorGrid id={'TabulatorGridSimple'} columnDefaults={TabulatorBaseColumnsDef} columns={TabulatorBaseColumns} dataSet={TabulatorPlainData} multiSelect={true} height={500} layout={'fitColumns'}/>
        </>
    );
};
`;return a.jsxs(l,{children:[a.jsx("div",{children:a.jsx(p,{})}),a.jsx(e,{}),a.jsx("div",{children:a.jsx(o,{items:[{key:1,label:"Show source",children:a.jsx(s,{language:"javascript",style:t.darkMode?i:u,showLineNumbers:!0,children:r})}]})})]})};export{C as Page210818a97f4d440b91c5032f93edcd95,C as default};
