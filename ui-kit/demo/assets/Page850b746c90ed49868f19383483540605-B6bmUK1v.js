const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CaEZq3o6.js","assets/default-highlight-Co1BbaV1.js","assets/index-CzYOWtY3.js"])))=>i.map(i=>d[i]);
import{j as r,r as t,_ as e,D as o}from"./index-CzYOWtY3.js";import{T as s}from"./tabulatorGrid-CHQlxMIO.js";import{a as i,b as l,f as u}from"./tabulatorData-A6MdMGe-.js";import{P as m,C as n,d,c}from"./darcula-fwW_2Y8a.js";import"./buttonsRow-NOziNv-G.js";import"./dForm-oEAd0w94.js";import"./modal-BG6C0-ZR.js";import"./index-DX1MZAsy.js";import"./dFormModal-6yYFB7nU.js";import"./modal-Bv76__XP.js";import"./defaultButtonsProps-DlxVY7Az.js";import"./PlusOutlined-BAR0uPLn.js";import"./index-CCx_ORm0.js";const p={id:"TabulatorGridTree",columnDefaults:i,columns:l,dataSet:u,dataTree:!0,height:500,layout:"fitColumns"},T=()=>r.jsxs(r.Fragment,{children:[r.jsx("h1",{children:"Example of a hierarchical grid TabulatorGrid"}),r.jsx(s,{...p})]}),b=t.lazy(()=>e(()=>import("./index-CaEZq3o6.js").then(a=>a.ds),__vite__mapDeps([0,1,2])).then(a=>({default:a.Prism}))),S=a=>r.jsxs(m,{children:[r.jsx("div",{children:r.jsx(T,{})}),r.jsx(o,{}),r.jsx("div",{children:r.jsx(n,{items:[{key:1,label:"Show source",children:r.jsx(t.Suspense,{fallback:r.jsx("div",{children:"Loading source..."}),children:r.jsx(b,{language:"tsx",style:a.darkMode?d:c,showLineNumbers:!0,children:`
import React from 'react';
import {IGridProps, TabulatorGrid} from @krinopotam/ui-kit/tabulatorGrid';
import {TabulatorBaseColumns, TabulatorBaseColumnsDef, TabulatorTreeData} from '../../data/tabulatorData';
const props: IGridProps = {
    id: 'TabulatorGridTree',
    columnDefaults: TabulatorBaseColumnsDef,
    columns: TabulatorBaseColumns,
    dataSet: TabulatorTreeData,
    dataTree: true,
    height: 500,
    layout: 'fitColumns',
};
export const Tree = (): React.JSX.Element => {
    return (
        <>
            <TabulatorGrid {...props} />
        </>
    );
};
`})})}]})})]});export{S as Page850b746c90ed49868f19383483540605,S as default};
