const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CyxzPzPK.js","assets/default-highlight-BA4pzhEA.js","assets/index-Cpuh8Ebd.js"])))=>i.map(i=>d[i]);
import{j as r,r as t,_ as e,D as o}from"./index-Cpuh8Ebd.js";import{T as s}from"./tabulatorGrid-Da6sMqw5.js";import{a as i,b as l,f as u}from"./tabulatorData-BJFebvAp.js";import{P as m,C as d,d as n,c}from"./darcula-hcLbMwDB.js";import"./buttonsRow-MpDC2SN8.js";import"./dForm-t1Ccos62.js";import"./modal-g5li7x1J.js";import"./index-DNdv76Wr.js";import"./dFormModal-iIvnEeWS.js";import"./modal-DJlUd0AK.js";import"./defaultButtonsProps-D12Yt--i.js";import"./PlusOutlined-BTCZ_JD0.js";import"./index-D9n8SM2Y.js";const p={id:"TabulatorGridTree",columnDefaults:i,columns:l,dataSet:u,dataTree:!0,height:500,layout:"fitColumns"},T=()=>r.jsxs(r.Fragment,{children:[r.jsx("h1",{children:"Example of a hierarchical grid TabulatorGrid"}),r.jsx(s,{...p})]}),b=t.lazy(()=>e(()=>import("./index-CyxzPzPK.js").then(a=>a.ds),__vite__mapDeps([0,1,2])).then(a=>({default:a.Prism}))),S=a=>r.jsxs(m,{children:[r.jsx("div",{children:r.jsx(T,{})}),r.jsx(o,{}),r.jsx("div",{children:r.jsx(d,{items:[{key:1,label:"Show source",children:r.jsx(t.Suspense,{fallback:r.jsx("div",{children:"Loading source..."}),children:r.jsx(b,{language:"tsx",style:a.darkMode?n:c,showLineNumbers:!0,children:`
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
`})})}]})})]});export{S as Page0b229dc8cb9342df8e4d20ec32954e0a,S as default};
