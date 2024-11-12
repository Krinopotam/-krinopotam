const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CyxzPzPK.js","assets/default-highlight-BA4pzhEA.js","assets/index-Cpuh8Ebd.js"])))=>i.map(i=>d[i]);
import{j as t,r,_ as e,D as o}from"./index-Cpuh8Ebd.js";import{T as l}from"./tabulatorGrid-Da6sMqw5.js";import{a as i,b as s,T as u}from"./tabulatorData-BJFebvAp.js";import{P as m,C as n,d,c}from"./darcula-hcLbMwDB.js";import"./buttonsRow-MpDC2SN8.js";import"./dForm-t1Ccos62.js";import"./modal-g5li7x1J.js";import"./index-DNdv76Wr.js";import"./dFormModal-iIvnEeWS.js";import"./modal-DJlUd0AK.js";import"./defaultButtonsProps-D12Yt--i.js";import"./PlusOutlined-BTCZ_JD0.js";import"./index-D9n8SM2Y.js";const p=()=>t.jsxs(t.Fragment,{children:[t.jsx("h1",{children:"Example of a simple TabulatorGrid with multi-line selection"}),t.jsx("p",{children:"To select multiple rows, hold down ctrl key"}),t.jsx(l,{id:"TabulatorGridSimple",columnDefaults:i,columns:s,dataSet:u,multiSelect:!0,height:500,layout:"fitColumns"})]}),b=r.lazy(()=>e(()=>import("./index-CyxzPzPK.js").then(a=>a.ds),__vite__mapDeps([0,1,2])).then(a=>({default:a.Prism}))),v=a=>t.jsxs(m,{children:[t.jsx("div",{children:t.jsx(p,{})}),t.jsx(o,{}),t.jsx("div",{children:t.jsx(n,{items:[{key:1,label:"Show source",children:t.jsx(r.Suspense,{fallback:t.jsx("div",{children:"Loading source..."}),children:t.jsx(b,{language:"tsx",style:a.darkMode?d:c,showLineNumbers:!0,children:`
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
`})})}]})})]});export{v as Page2848e9770bed411e9c5b1d2084db2471,v as default};
