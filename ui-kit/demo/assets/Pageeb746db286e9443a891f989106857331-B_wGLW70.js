const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-HHVvrn9L.js","assets/default-highlight-Bg-yw1Xy.js","assets/index-C4KfxKt0.js"])))=>i.map(i=>d[i]);
import{j as a,r,_ as t,D as s}from"./index-C4KfxKt0.js";import{T as e}from"./tabulatorGrid-CPBHSndK.js";import{T as l,d as u,b as i}from"./tabulatorData-DHVxAiby.js";import{P as m,C as n,d,c as p}from"./darcula-Dn2EXRAk.js";import"./modal-B9kdAnYE.js";import"./dForm-DkkmO2de.js";import"./index-kYmYzKiJ.js";import"./dFormModal-NILuEzR7.js";import"./modal-DhSU9O67.js";import"./defaultButtonsProps-DB_b1JyB.js";import"./index-BK8ljC1v.js";const c=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Simple example with grouped columns"}),a.jsx(e,{id:"TabulatorGridColumnsGroups",columnDefaults:l,columns:u,dataSet:i,height:500,layout:"fitColumns"})]}),b=r.lazy(()=>t(()=>import("./index-HHVvrn9L.js").then(o=>o.ds),__vite__mapDeps([0,1,2])).then(o=>({default:o.Prism}))),S=o=>a.jsxs(m,{children:[a.jsx("div",{children:a.jsx(c,{})}),a.jsx(s,{}),a.jsx("div",{children:a.jsx(n,{items:[{key:1,label:"Show source",children:a.jsx(r.Suspense,{fallback:a.jsx("div",{children:"Loading source..."}),children:a.jsx(b,{language:"tsx",style:o.darkMode?d:p,showLineNumbers:!0,children:`
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
`})})}]})})]});export{S as Pageeb746db286e9443a891f989106857331,S as default};
