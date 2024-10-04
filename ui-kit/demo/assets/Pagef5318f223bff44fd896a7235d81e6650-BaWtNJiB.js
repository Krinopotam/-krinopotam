const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-BCkY1BI4.js","assets/default-highlight-BkRzspxv.js","assets/index-D4bHa_3o.js"])))=>i.map(i=>d[i]);
import{j as a,r,_ as e,D as o}from"./index-D4bHa_3o.js";import{T as l}from"./tabulatorGrid-DeNUCISi.js";import{T as s,a as i,b as u}from"./tabulatorData-rU-MgCHl.js";import{P as m,C as n,d,c}from"./darcula-DdlBXz-Q.js";import"./modal-Cje67qL2.js";import"./dForm-3m-O6pho.js";import"./index-BrKQ3NvS.js";import"./dFormModal-BCjjhs8Y.js";import"./modal-B1kKEzi9.js";import"./defaultButtonsProps-D413j251.js";import"./index-BVoWYqDG.js";const p=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example of a simple TabulatorGrid with multi-line selection"}),a.jsx("p",{children:"To select multiple rows, hold down ctrl key"}),a.jsx(l,{id:"TabulatorGridSimple",columnDefaults:s,columns:i,dataSet:u,multiSelect:!0,height:500,layout:"fitColumns"})]}),f=r.lazy(()=>e(()=>import("./index-BCkY1BI4.js").then(t=>t.ds),__vite__mapDeps([0,1,2])).then(t=>({default:t.Prism}))),G=t=>a.jsxs(m,{children:[a.jsx("div",{children:a.jsx(p,{})}),a.jsx(o,{}),a.jsx("div",{children:a.jsx(n,{items:[{key:1,label:"Show source",children:a.jsx(r.Suspense,{fallback:a.jsx("div",{children:"Loading source..."}),children:a.jsx(f,{language:"tsx",style:t.darkMode?d:c,showLineNumbers:!0,children:`
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
`})})}]})})]});export{G as Pagef5318f223bff44fd896a7235d81e6650,G as default};
