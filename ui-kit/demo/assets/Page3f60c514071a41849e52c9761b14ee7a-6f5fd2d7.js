import{j as a,D as r}from"./index-3024f328.js";import{P as l,C as o,S as s,d as i,a as u}from"./docco-8e796366.js";import{T as m}from"./tabulatorGrid-a1a2b210.js";import{b as n,T as c,a as d}from"./tabulatorData-f1a03775.js";import"./index-901967cb.js";import"./dFormModal-09fd0649.js";import"./EyeOutlined-ff2ae648.js";import"./DeleteOutlined-73630e69.js";const p=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example of a simple TabulatorGrid with multi-line selection"}),a.jsx("p",{children:"To select multiple rows, hold down ctrl key"}),a.jsx(m,{id:"TabulatorGridSimple",columnDefaults:n,columns:c,dataSet:d,multiSelect:!0,height:500,layout:"fitColumns"})]}),C=t=>{const e=`
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
`;return a.jsxs(l,{children:[a.jsx("div",{children:a.jsx(p,{})}),a.jsx(r,{}),a.jsx("div",{children:a.jsx(o,{items:[{key:1,label:"Show source",children:a.jsx(s,{language:"javascript",style:t.darkMode?i:u,showLineNumbers:!0,children:e})}]})})]})};export{C as Page3f60c514071a41849e52c9761b14ee7a,C as default};
