const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CaEZq3o6.js","assets/default-highlight-Co1BbaV1.js","assets/index-CzYOWtY3.js"])))=>i.map(i=>d[i]);
import{j as t,r,_ as e,D as o}from"./index-CzYOWtY3.js";import{T as l}from"./tabulatorGrid-CHQlxMIO.js";import{a as i,b as s,T as u}from"./tabulatorData-A6MdMGe-.js";import{P as m,C as n,d,c}from"./darcula-fwW_2Y8a.js";import"./buttonsRow-NOziNv-G.js";import"./dForm-oEAd0w94.js";import"./modal-BG6C0-ZR.js";import"./index-DX1MZAsy.js";import"./dFormModal-6yYFB7nU.js";import"./modal-Bv76__XP.js";import"./defaultButtonsProps-DlxVY7Az.js";import"./PlusOutlined-BAR0uPLn.js";import"./index-CCx_ORm0.js";const p=()=>t.jsxs(t.Fragment,{children:[t.jsx("h1",{children:"Example of a simple TabulatorGrid with multi-line selection"}),t.jsx("p",{children:"To select multiple rows, hold down ctrl key"}),t.jsx(l,{id:"TabulatorGridSimple",columnDefaults:i,columns:s,dataSet:u,multiSelect:!0,height:500,layout:"fitColumns"})]}),b=r.lazy(()=>e(()=>import("./index-CaEZq3o6.js").then(a=>a.ds),__vite__mapDeps([0,1,2])).then(a=>({default:a.Prism}))),v=a=>t.jsxs(m,{children:[t.jsx("div",{children:t.jsx(p,{})}),t.jsx(o,{}),t.jsx("div",{children:t.jsx(n,{items:[{key:1,label:"Show source",children:t.jsx(r.Suspense,{fallback:t.jsx("div",{children:"Loading source..."}),children:t.jsx(b,{language:"tsx",style:a.darkMode?d:c,showLineNumbers:!0,children:`
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
`})})}]})})]});export{v as Page8db0f74bb9d5444b8c97d1ad6042ee3e,v as default};
