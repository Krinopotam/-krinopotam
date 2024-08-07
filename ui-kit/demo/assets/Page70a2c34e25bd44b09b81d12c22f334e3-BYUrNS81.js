import{j as a,D as e}from"./index-CEW5Pw51.js";import{P as r,C as l,h as o,d as s,a as i}from"./docco-BDmKSriJ.js";import{T as u}from"./tabulatorGrid-D_Dw4JJ8.js";import{b as m,T as n,a as c}from"./tabulatorData-CS8n7XKW.js";import"./index-XDwG7I6Z.js";import"./dFormModal-CQxmvlme.js";import"./EyeOutlined-CTrlI0WT.js";import"./DeleteOutlined-DC7B5UxI.js";const d=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example of a simple TabulatorGrid with multi-line selection"}),a.jsx("p",{children:"To select multiple rows, hold down ctrl key"}),a.jsx(u,{id:"TabulatorGridSimple",columnDefaults:m,columns:n,dataSet:c,multiSelect:!0,height:500,layout:"fitColumns"})]}),S=t=>a.jsxs(r,{children:[a.jsx("div",{children:a.jsx(d,{})}),a.jsx(e,{}),a.jsx("div",{children:a.jsx(l,{items:[{key:1,label:"Show source",children:a.jsx(o,{language:"javascript",style:t.darkMode?s:i,showLineNumbers:!0,children:`
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
`})}]})})]});export{S as Page70a2c34e25bd44b09b81d12c22f334e3,S as default};
