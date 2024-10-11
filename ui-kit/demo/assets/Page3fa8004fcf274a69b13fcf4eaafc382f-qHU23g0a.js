const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CGS66BNA.js","assets/default-highlight-CcEIfVOS.js","assets/index-D5qwc_YF.js"])))=>i.map(i=>d[i]);
import{j as a,r,_ as e,D as o}from"./index-D5qwc_YF.js";import{T as l}from"./tabulatorGrid-xmrOiwzB.js";import{T as s,a as i,b as u}from"./tabulatorData-A50l7rHb.js";import{P as m,C as n,d as c,c as d}from"./darcula-DCElNxcl.js";import"./modal-Ba-Ua4rS.js";import"./dForm-D9Yj5CGv.js";import"./index-DfWwWpfW.js";import"./dFormModal-CeNnxCAb.js";import"./modal-BT6G55W2.js";import"./defaultButtonsProps-BAcIqfvm.js";import"./index-DVORizd9.js";const p=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example of a simple TabulatorGrid with multi-line selection"}),a.jsx("p",{children:"To select multiple rows, hold down ctrl key"}),a.jsx(l,{id:"TabulatorGridSimple",columnDefaults:s,columns:i,dataSet:u,multiSelect:!0,height:500,layout:"fitColumns"})]}),f=r.lazy(()=>e(()=>import("./index-CGS66BNA.js").then(t=>t.ds),__vite__mapDeps([0,1,2])).then(t=>({default:t.Prism}))),G=t=>a.jsxs(m,{children:[a.jsx("div",{children:a.jsx(p,{})}),a.jsx(o,{}),a.jsx("div",{children:a.jsx(n,{items:[{key:1,label:"Show source",children:a.jsx(r.Suspense,{fallback:a.jsx("div",{children:"Loading source..."}),children:a.jsx(f,{language:"tsx",style:t.darkMode?c:d,showLineNumbers:!0,children:`
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
`})})}]})})]});export{G as Page3fa8004fcf274a69b13fcf4eaafc382f,G as default};
