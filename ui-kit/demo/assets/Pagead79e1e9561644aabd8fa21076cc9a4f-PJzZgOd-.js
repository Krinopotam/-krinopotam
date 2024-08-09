import{j as a,D as e}from"./index-DpZR-xIT.js";import{P as r,C as l,h as o,d as s,a as i}from"./docco-D-QQhIhf.js";import{T as u}from"./tabulatorGrid-BKCAj5bC.js";import{b as m,T as n,a as c}from"./tabulatorData-ursBOjs5.js";import"./dForm-BuCntjeb.js";import"./dFormModal-CQWCZgYu.js";import"./EyeOutlined-B5uh8JXW.js";import"./DeleteOutlined-ht5ukLlu.js";const d=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example of a simple TabulatorGrid with multi-line selection"}),a.jsx("p",{children:"To select multiple rows, hold down ctrl key"}),a.jsx(u,{id:"TabulatorGridSimple",columnDefaults:m,columns:n,dataSet:c,multiSelect:!0,height:500,layout:"fitColumns"})]}),S=t=>a.jsxs(r,{children:[a.jsx("div",{children:a.jsx(d,{})}),a.jsx(e,{}),a.jsx("div",{children:a.jsx(l,{items:[{key:1,label:"Show source",children:a.jsx(o,{language:"javascript",style:t.darkMode?s:i,showLineNumbers:!0,children:`
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
`})}]})})]});export{S as Pagead79e1e9561644aabd8fa21076cc9a4f,S as default};
