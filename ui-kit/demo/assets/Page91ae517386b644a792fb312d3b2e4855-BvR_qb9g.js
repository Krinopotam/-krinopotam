const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-9FGXM8eG.js","assets/default-highlight-_K3mzjfK.js","assets/index-CObHp3AH.js"])))=>i.map(i=>d[i]);
import{j as r,r as t,_ as e,D as o}from"./index-CObHp3AH.js";import{T as s}from"./tabulatorGrid-C-CHviK6.js";import{b as i,T as l,f as u}from"./tabulatorData-B7Pu9KOW.js";import{P as m,C as n,d,c}from"./darcula-D-n55oql.js";import"./modal-BBQwvlDP.js";import"./DownOutlined-BYejAm0U.js";import"./dForm-DjwSwKfj.js";import"./index-BubinFZA.js";import"./CheckOutlined-ka3l-INf.js";import"./dFormModal-BBSecmha.js";import"./modal-B2hVzaN7.js";import"./defaultButtonsProps-DSb7WT6w.js";import"./iconUtil-DejahXk-.js";import"./index-CVqHkW2e.js";const p={id:"TabulatorGridTree",columnDefaults:i,columns:l,dataSet:u,dataTree:!0,height:500,layout:"fitColumns"},T=()=>r.jsxs(r.Fragment,{children:[r.jsx("h1",{children:"Example of a hierarchical grid TabulatorGrid"}),r.jsx(s,{...p})]}),b=t.lazy(()=>e(()=>import("./index-9FGXM8eG.js").then(a=>a.ds),__vite__mapDeps([0,1,2])).then(a=>({default:a.Prism}))),k=a=>r.jsxs(m,{children:[r.jsx("div",{children:r.jsx(T,{})}),r.jsx(o,{}),r.jsx("div",{children:r.jsx(n,{items:[{key:1,label:"Show source",children:r.jsx(t.Suspense,{fallback:r.jsx("div",{children:"Loading source..."}),children:r.jsx(b,{language:"tsx",style:a.darkMode?d:c,showLineNumbers:!0,children:`
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
`})})}]})})]});export{k as Page91ae517386b644a792fb312d3b2e4855,k as default};
