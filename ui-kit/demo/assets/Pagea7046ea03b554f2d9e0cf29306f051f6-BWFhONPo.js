const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-C2SUEjL0.js","assets/default-highlight-BDFjN1OP.js","assets/index-CgBeyb-e.js"])))=>i.map(i=>d[i]);
import{j as a,r,_ as t,D as s}from"./index-CgBeyb-e.js";import{T as e}from"./tabulatorGrid-DAyVcvcb.js";import{T as l,d as u,b as i}from"./tabulatorData-CNf7XRJ4.js";import{P as m,C as n,d,c}from"./darcula-Bm4NDPn1.js";import"./modal-hi51mlNB.js";import"./dForm-B-6Y2TlM.js";import"./index-Birbnh4n.js";import"./dFormModal-B-TtMmSz.js";import"./modal-D01YMXTL.js";import"./defaultButtonsProps-BjCvvsD6.js";import"./index-blBfG32B.js";const p=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Simple example with grouped columns"}),a.jsx(e,{id:"TabulatorGridColumnsGroups",columnDefaults:l,columns:u,dataSet:i,height:500,layout:"fitColumns"})]}),b=r.lazy(()=>t(()=>import("./index-C2SUEjL0.js").then(o=>o.ds),__vite__mapDeps([0,1,2])).then(o=>({default:o.Prism}))),S=o=>a.jsxs(m,{children:[a.jsx("div",{children:a.jsx(p,{})}),a.jsx(s,{}),a.jsx("div",{children:a.jsx(n,{items:[{key:1,label:"Show source",children:a.jsx(r.Suspense,{fallback:a.jsx("div",{children:"Loading source..."}),children:a.jsx(b,{language:"tsx",style:o.darkMode?d:c,showLineNumbers:!0,children:`
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
`})})}]})})]});export{S as Pagea7046ea03b554f2d9e0cf29306f051f6,S as default};
