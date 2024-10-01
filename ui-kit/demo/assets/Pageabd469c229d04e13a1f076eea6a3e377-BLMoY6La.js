const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-Co9PZaPl.js","assets/default-highlight-DvtBkdhg.js","assets/index-Dv3qFdjW.js"])))=>i.map(i=>d[i]);
import{j as a,r as e,_ as r,D as o}from"./index-Dv3qFdjW.js";import{T as l}from"./tabulatorGrid-COGwSkTc.js";import{T as s,a as i,b as u}from"./tabulatorData-LW4kGiGF.js";import{P as m,C as n,d,c}from"./darcula-MphVyLu8.js";import"./modal-Bp_ASPGm.js";import"./dForm-QxcKLYQQ.js";import"./index-8gx4Y1o-.js";import"./dFormModal-BUbiUSeF.js";import"./modal-DoluWT5v.js";import"./defaultButtonsProps-DchoBAIh.js";import"./index-CWJIcpxl.js";const p=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example of a simple TabulatorGrid with multi-line selection"}),a.jsx("p",{children:"To select multiple rows, hold down ctrl key"}),a.jsx(l,{id:"TabulatorGridSimple",columnDefaults:s,columns:i,dataSet:u,multiSelect:!0,height:500,layout:"fitColumns"})]}),h=e.lazy(()=>r(()=>import("./index-Co9PZaPl.js").then(t=>t.ds),__vite__mapDeps([0,1,2])).then(t=>({default:t.Prism}))),G=t=>a.jsxs(m,{children:[a.jsx("div",{children:a.jsx(p,{})}),a.jsx(o,{}),a.jsx("div",{children:a.jsx(n,{items:[{key:1,label:"Show source",children:a.jsx(e.Suspense,{fallback:a.jsx("div",{children:"Loading source..."}),children:a.jsx(h,{language:"tsx",style:t.darkMode?d:c,showLineNumbers:!0,children:`
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
`})})}]})})]});export{G as Pageabd469c229d04e13a1f076eea6a3e377,G as default};
