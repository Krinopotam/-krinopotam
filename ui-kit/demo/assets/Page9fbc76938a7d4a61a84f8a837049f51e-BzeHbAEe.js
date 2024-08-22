import{j as a,D as r}from"./index-DDBz1-0O.js";import{P as o,C as e,h as l,d as i,a as s}from"./docco-C1crFo0W.js";import{T as u}from"./tabulatorGrid-DacXqSyX.js";import{b as m,T as n,a as c}from"./tabulatorData-DjWGs0rZ.js";import"./messageBox-DliIkF0r.js";import"./dForm-BA1kBRHr.js";import"./index-DF9EXunC.js";import"./dFormModal-nAwu1QC2.js";import"./modal-DePWROKc.js";import"./EyeOutlined-Dh1NUrDq.js";import"./DeleteOutlined-fRhgWf_l.js";const d=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example of a simple TabulatorGrid with multi-line selection"}),a.jsx("p",{children:"To select multiple rows, hold down ctrl key"}),a.jsx(u,{id:"TabulatorGridSimple",columnDefaults:m,columns:n,dataSet:c,multiSelect:!0,height:500,layout:"fitColumns"})]}),y=t=>a.jsxs(o,{children:[a.jsx("div",{children:a.jsx(d,{})}),a.jsx(r,{}),a.jsx("div",{children:a.jsx(e,{items:[{key:1,label:"Show source",children:a.jsx(l,{language:"javascript",style:t.darkMode?i:s,showLineNumbers:!0,children:`
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
`})}]})})]});export{y as Page9fbc76938a7d4a61a84f8a837049f51e,y as default};
