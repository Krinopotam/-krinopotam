const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DdqqSCj0.js","assets/default-highlight-9uSTSbTs.js","assets/index-c6xXn22Z.js"])))=>i.map(i=>d[i]);
import{j as a,r as e,_ as r,D as o}from"./index-c6xXn22Z.js";import{T as l}from"./tabulatorGrid-COfwlYwE.js";import{T as s,a as i,b as u}from"./tabulatorData-CVKtEvPi.js";import{P as m,C as n,d,c}from"./darcula-DhxqnDMh.js";import"./modal-CDnUOe4A.js";import"./dForm-CZw76wHB.js";import"./index-CzWkA8Ku.js";import"./dFormModal-C6Y0IuSi.js";import"./modal-CyZhQyS5.js";import"./defaultButtonsProps-B2tjDYAJ.js";import"./index-OjxplGiv.js";const p=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example of a simple TabulatorGrid with multi-line selection"}),a.jsx("p",{children:"To select multiple rows, hold down ctrl key"}),a.jsx(l,{id:"TabulatorGridSimple",columnDefaults:s,columns:i,dataSet:u,multiSelect:!0,height:500,layout:"fitColumns"})]}),b=e.lazy(()=>r(()=>import("./index-DdqqSCj0.js").then(t=>t.ds),__vite__mapDeps([0,1,2])).then(t=>({default:t.Prism}))),G=t=>a.jsxs(m,{children:[a.jsx("div",{children:a.jsx(p,{})}),a.jsx(o,{}),a.jsx("div",{children:a.jsx(n,{items:[{key:1,label:"Show source",children:a.jsx(e.Suspense,{fallback:a.jsx("div",{children:"Loading source..."}),children:a.jsx(b,{language:"tsx",style:t.darkMode?d:c,showLineNumbers:!0,children:`
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
`})})}]})})]});export{G as Page8673e2f7026f434d81db0fdbe62b8231,G as default};
