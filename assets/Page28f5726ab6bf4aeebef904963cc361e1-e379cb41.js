import{j as a,D as r}from"./index-7abbb94e.js";import{P as l,C as o,S as s,d as i,a as u}from"./docco-6bf51e55.js";import{T as m}from"./tabulatorGrid-7e279c75.js";import{T as n,a as c,b as d}from"./tabulatorData-c70d6b23.js";import"./index-22f8d441.js";import"./dFormModal-d77fb2bf.js";import"./EyeOutlined-4b705a51.js";import"./DeleteOutlined-038f7985.js";const b=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example of a simple TabulatorGrid with multi-line selection"}),a.jsx("p",{children:"To select multiple rows, hold down ctrl key"}),a.jsx(m,{id:"TabulatorGridSimple",columnDefaults:n,columns:c,dataSet:d,multiSelect:!0,height:500,layout:"fitColumns"})]}),C=t=>{const e=`
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
`;return a.jsxs(l,{children:[a.jsx("div",{children:a.jsx(b,{})}),a.jsx(r,{}),a.jsx("div",{children:a.jsx(o,{items:[{key:1,label:"Show source",children:a.jsx(s,{language:"javascript",style:t.darkMode?i:u,showLineNumbers:!0,children:e})}]})})]})};export{C as Page28f5726ab6bf4aeebef904963cc361e1,C as default};
