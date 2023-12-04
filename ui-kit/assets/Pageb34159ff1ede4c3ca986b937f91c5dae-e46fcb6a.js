import{j as a,D as r}from"./index-9944374f.js";import{P as l,C as o,S as s,d as i,a as u}from"./docco-d767795b.js";import{T as m}from"./tabulatorGrid-7651107b.js";import{T as n,a as c,b as d}from"./tabulatorData-eaf688e2.js";import"./index-df6b3fec.js";import"./dFormModal-d04b30b3.js";import"./EyeOutlined-4433dc0b.js";import"./DeleteOutlined-31742ae8.js";const p=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example of a simple TabulatorGrid with multi-line selection"}),a.jsx("p",{children:"To select multiple rows, hold down ctrl key"}),a.jsx(m,{id:"TabulatorGridSimple",columnDefaults:n,columns:c,dataSet:d,multiSelect:!0,height:500,layout:"fitColumns"})]}),C=t=>{const e=`
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
`;return a.jsxs(l,{children:[a.jsx("div",{children:a.jsx(p,{})}),a.jsx(r,{}),a.jsx("div",{children:a.jsx(o,{items:[{key:1,label:"Show source",children:a.jsx(s,{language:"javascript",style:t.darkMode?i:u,showLineNumbers:!0,children:e})}]})})]})};export{C as Pageb34159ff1ede4c3ca986b937f91c5dae,C as default};
