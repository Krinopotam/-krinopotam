const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-D988I8zH.js","assets/default-highlight-CW7-1fMQ.js","assets/index-BZKbt60r.js"])))=>i.map(i=>d[i]);
import{j as a,r as t,_ as e,D as o}from"./index-BZKbt60r.js";import{T as s}from"./tabulatorGrid-3cY8rgqo.js";import{T as i,a as l,f as u}from"./tabulatorData-IudciEXS.js";import{P as m,C as n,d,c}from"./darcula-BNSS4uSE.js";import"./modal-BFvfzGH2.js";import"./dForm-Cc85MzR5.js";import"./index-BYKAZVg4.js";import"./dFormModal-Br15X1Ve.js";import"./modal-DVeoQbYX.js";import"./defaultButtonsProps-rqR8zV0W.js";import"./index-Cz18NXdk.js";const p={id:"TabulatorGridTree",columnDefaults:i,columns:l,dataSet:u,dataTree:!0,height:500,layout:"fitColumns"},T=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example of a hierarchical grid TabulatorGrid"}),a.jsx(s,{...p})]}),h=t.lazy(()=>e(()=>import("./index-D988I8zH.js").then(r=>r.ds),__vite__mapDeps([0,1,2])).then(r=>({default:r.Prism}))),B=r=>a.jsxs(m,{children:[a.jsx("div",{children:a.jsx(T,{})}),a.jsx(o,{}),a.jsx("div",{children:a.jsx(n,{items:[{key:1,label:"Show source",children:a.jsx(t.Suspense,{fallback:a.jsx("div",{children:"Loading source..."}),children:a.jsx(h,{language:"tsx",style:r.darkMode?d:c,showLineNumbers:!0,children:`
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
`})})}]})})]});export{B as Page47e2c85f59964d949a3f671a8278880a,B as default};
