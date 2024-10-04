const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-0uqxO8u4.js","assets/default-highlight-AspSjZVb.js","assets/index-BvGUw9C6.js"])))=>i.map(i=>d[i]);
import{j as a,r,_ as t,D as s}from"./index-BvGUw9C6.js";import{T as e}from"./tabulatorGrid-YoC4snix.js";import{T as l,d as u,b as i}from"./tabulatorData-7wwdtTXj.js";import{P as m,C as n,d,c}from"./darcula-ztsHFdQx.js";import"./modal-DNjBPuEU.js";import"./dForm-CuoIYVbt.js";import"./index-D8Aqgh10.js";import"./dFormModal-DG3y0daw.js";import"./modal-CFEDQlJ_.js";import"./defaultButtonsProps-CC5Jyskk.js";import"./index-Bb6r_g7-.js";const p=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Simple example with grouped columns"}),a.jsx(e,{id:"TabulatorGridColumnsGroups",columnDefaults:l,columns:u,dataSet:i,height:500,layout:"fitColumns"})]}),b=r.lazy(()=>t(()=>import("./index-0uqxO8u4.js").then(o=>o.ds),__vite__mapDeps([0,1,2])).then(o=>({default:o.Prism}))),S=o=>a.jsxs(m,{children:[a.jsx("div",{children:a.jsx(p,{})}),a.jsx(s,{}),a.jsx("div",{children:a.jsx(n,{items:[{key:1,label:"Show source",children:a.jsx(r.Suspense,{fallback:a.jsx("div",{children:"Loading source..."}),children:a.jsx(b,{language:"tsx",style:o.darkMode?d:c,showLineNumbers:!0,children:`
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
`})})}]})})]});export{S as Page8f20af0718b744c9b7f48019b565408c,S as default};
