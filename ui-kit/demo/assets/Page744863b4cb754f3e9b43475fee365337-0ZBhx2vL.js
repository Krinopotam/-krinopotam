const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DdqqSCj0.js","assets/default-highlight-9uSTSbTs.js","assets/index-c6xXn22Z.js"])))=>i.map(i=>d[i]);
import{j as a,r,_ as t,D as s}from"./index-c6xXn22Z.js";import{T as e}from"./tabulatorGrid-COfwlYwE.js";import{T as l,d as u,b as i}from"./tabulatorData-CVKtEvPi.js";import{P as m,C as n,d,c}from"./darcula-DhxqnDMh.js";import"./modal-CDnUOe4A.js";import"./dForm-CZw76wHB.js";import"./index-CzWkA8Ku.js";import"./dFormModal-C6Y0IuSi.js";import"./modal-CyZhQyS5.js";import"./defaultButtonsProps-B2tjDYAJ.js";import"./index-OjxplGiv.js";const p=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Simple example with grouped columns"}),a.jsx(e,{id:"TabulatorGridColumnsGroups",columnDefaults:l,columns:u,dataSet:i,height:500,layout:"fitColumns"})]}),b=r.lazy(()=>t(()=>import("./index-DdqqSCj0.js").then(o=>o.ds),__vite__mapDeps([0,1,2])).then(o=>({default:o.Prism}))),S=o=>a.jsxs(m,{children:[a.jsx("div",{children:a.jsx(p,{})}),a.jsx(s,{}),a.jsx("div",{children:a.jsx(n,{items:[{key:1,label:"Show source",children:a.jsx(r.Suspense,{fallback:a.jsx("div",{children:"Loading source..."}),children:a.jsx(b,{language:"tsx",style:o.darkMode?d:c,showLineNumbers:!0,children:`
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
`})})}]})})]});export{S as Page744863b4cb754f3e9b43475fee365337,S as default};
