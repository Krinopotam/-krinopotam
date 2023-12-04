import{j as a,D as r}from"./index-61817db7.js";import{P as l,C as o,S as s,d as i,a as u}from"./docco-c83115a4.js";import{T as m}from"./tabulatorGrid-8e080252.js";import{T as n,a as c,b as d}from"./tabulatorData-3d641260.js";import"./index-654a7afc.js";import"./dFormModal-d5516ffc.js";import"./EyeOutlined-314614a5.js";import"./DeleteOutlined-2fad5b7c.js";const p=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example of a simple TabulatorGrid with multi-line selection"}),a.jsx("p",{children:"To select multiple rows, hold down ctrl key"}),a.jsx(m,{id:"TabulatorGridSimple",columnDefaults:n,columns:c,dataSet:d,multiSelect:!0,height:500,layout:"fitColumns"})]}),C=t=>{const e=`
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
`;return a.jsxs(l,{children:[a.jsx("div",{children:a.jsx(p,{})}),a.jsx(r,{}),a.jsx("div",{children:a.jsx(o,{items:[{key:1,label:"Show source",children:a.jsx(s,{language:"javascript",style:t.darkMode?i:u,showLineNumbers:!0,children:e})}]})})]})};export{C as Page1575e179a53e4ba18f7aa2fdec00fe8b,C as default};
