const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-Cz0v0Rp9.js","assets/default-highlight-CrA-MuiQ.js","assets/index-DKsnjJVp.js"])))=>i.map(i=>d[i]);
import{j as a,r as t,_ as e,D as o}from"./index-DKsnjJVp.js";import{T as s}from"./tabulatorGrid-DCOzFUIF.js";import{T as i,a as l,f as u}from"./tabulatorData-Dp7qYVQO.js";import{P as d,C as m,d as n,c}from"./darcula-CbhncTMN.js";import"./modal-s_O7aRct.js";import"./dForm-RzxzTjHO.js";import"./index-CSyocx7G.js";import"./dFormModal-BxobeehR.js";import"./modal-sKRn3jmz.js";import"./defaultButtonsProps-Bo_d-5AQ.js";import"./index-CxCukQln.js";const p={id:"TabulatorGridTree",columnDefaults:i,columns:l,dataSet:u,dataTree:!0,height:500,layout:"fitColumns"},T=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example of a hierarchical grid TabulatorGrid"}),a.jsx(s,{...p})]}),b=t.lazy(()=>e(()=>import("./index-Cz0v0Rp9.js").then(r=>r.ds),__vite__mapDeps([0,1,2])).then(r=>({default:r.Prism}))),B=r=>a.jsxs(d,{children:[a.jsx("div",{children:a.jsx(T,{})}),a.jsx(o,{}),a.jsx("div",{children:a.jsx(m,{items:[{key:1,label:"Show source",children:a.jsx(t.Suspense,{fallback:a.jsx("div",{children:"Loading source..."}),children:a.jsx(b,{language:"tsx",style:r.darkMode?n:c,showLineNumbers:!0,children:`
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
`})})}]})})]});export{B as Page7cec8b19ec9f4a1a8b6903d5d072db58,B as default};
