const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DY4jbcst.js","assets/default-highlight-Dn6Zkl0a.js","assets/index-CtAjfk3U.js"])))=>i.map(i=>d[i]);
import{j as r,D as o,r as t,_ as e}from"./index-CtAjfk3U.js";import{T as s}from"./tabulatorGrid-Bes3Jt16.js";import{f as i,T as l,a as u}from"./tabulatorData-DSy7h6X7.js";import{P as m,C as n}from"./pageLayout-BYJr8qhp.js";import{d,c}from"./darcula-BqMdvqtY.js";import"./buttonsRow-DIWV9y5m.js";import"./isArray-Dq3mFmoY.js";import"./messageBox-BEJz6LZv.js";import"./index-CQ36vsgA.js";import"./dFormModal-DBrO8yV5.js";import"./modal-CqlI0vXJ.js";import"./defaultButtonsProps-BFWSm065.js";import"./PlusOutlined-CjmZvIFI.js";import"./index-C2aIs9ND.js";const p={id:"TabulatorGridTree",columnDefaults:u,columns:l,dataSet:i,dataTree:!0,height:500,layout:"fitColumns"},T=()=>r.jsxs(r.Fragment,{children:[r.jsx("h1",{children:"Example of a hierarchical grid TabulatorGrid"}),r.jsx(s,{...p})]}),f=t.lazy(()=>e(()=>import("./index-DY4jbcst.js").then(a=>a.dw),__vite__mapDeps([0,1,2])).then(a=>({default:a.Prism}))),v=a=>r.jsxs(m,{children:[r.jsx(T,{}),r.jsx(o,{}),r.jsx("div",{children:r.jsx(n,{items:[{key:1,label:"Show source",children:r.jsx(t.Suspense,{fallback:r.jsx("div",{children:"Loading source..."}),children:r.jsx(f,{language:"tsx",style:a.darkMode?d:c,showLineNumbers:!0,children:`
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
`})})}]})})]});export{v as Page5a68753e8b2c40f7a863271722f0dc35,v as default};
