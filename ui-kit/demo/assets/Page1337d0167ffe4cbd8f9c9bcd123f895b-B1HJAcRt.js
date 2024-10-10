const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-D988I8zH.js","assets/default-highlight-CW7-1fMQ.js","assets/index-BZKbt60r.js"])))=>i.map(i=>d[i]);
import{j as a,r,_ as t,D as s}from"./index-BZKbt60r.js";import{T as e}from"./tabulatorGrid-3cY8rgqo.js";import{T as l,d as u,b as i}from"./tabulatorData-IudciEXS.js";import{P as m,C as n,d,c}from"./darcula-BNSS4uSE.js";import"./modal-BFvfzGH2.js";import"./dForm-Cc85MzR5.js";import"./index-BYKAZVg4.js";import"./dFormModal-Br15X1Ve.js";import"./modal-DVeoQbYX.js";import"./defaultButtonsProps-rqR8zV0W.js";import"./index-Cz18NXdk.js";const p=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Simple example with grouped columns"}),a.jsx(e,{id:"TabulatorGridColumnsGroups",columnDefaults:l,columns:u,dataSet:i,height:500,layout:"fitColumns"})]}),b=r.lazy(()=>t(()=>import("./index-D988I8zH.js").then(o=>o.ds),__vite__mapDeps([0,1,2])).then(o=>({default:o.Prism}))),S=o=>a.jsxs(m,{children:[a.jsx("div",{children:a.jsx(p,{})}),a.jsx(s,{}),a.jsx("div",{children:a.jsx(n,{items:[{key:1,label:"Show source",children:a.jsx(r.Suspense,{fallback:a.jsx("div",{children:"Loading source..."}),children:a.jsx(b,{language:"tsx",style:o.darkMode?d:c,showLineNumbers:!0,children:`
import React from 'react';
import {TabulatorGrid} from @krinopotam/ui-kit/tabulatorGrid';
import {TabulatorBaseColumnsDef, TabulatorBaseGroupedColumns, TabulatorPlainData} from "../../data/tabulatorData";
export const ColumnsGroups = (): React.JSX.Element => {
    return (
        <>
            <TabulatorGrid
                id={'TabulatorGridColumnsGroups'}
                columnDefaults={TabulatorBaseColumnsDef}
                columns={TabulatorBaseGroupedColumns}
                dataSet={TabulatorPlainData}
                height={500}
                layout={'fitColumns'}
            />
        </>
    );
};
`})})}]})})]});export{S as Page1337d0167ffe4cbd8f9c9bcd123f895b,S as default};
