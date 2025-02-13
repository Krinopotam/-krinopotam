const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DY4jbcst.js","assets/default-highlight-Dn6Zkl0a.js","assets/index-CtAjfk3U.js"])))=>i.map(i=>d[i]);
import{j as a,D as t,r as o,_ as e}from"./index-CtAjfk3U.js";import{T as s}from"./tabulatorGrid-Bes3Jt16.js";import{b as l,T as i,a as u}from"./tabulatorData-DSy7h6X7.js";import{P as m,C as n}from"./pageLayout-BYJr8qhp.js";import{d as p,c as d}from"./darcula-BqMdvqtY.js";import"./buttonsRow-DIWV9y5m.js";import"./isArray-Dq3mFmoY.js";import"./messageBox-BEJz6LZv.js";import"./index-CQ36vsgA.js";import"./dFormModal-DBrO8yV5.js";import"./modal-CqlI0vXJ.js";import"./defaultButtonsProps-BFWSm065.js";import"./PlusOutlined-CjmZvIFI.js";import"./index-C2aIs9ND.js";const c={id:"TabulatorGridSimple",columnDefaults:u,columns:i,groupBy:"col",dataSet:l,height:500},b=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:'Example of the TabulatorGrid, grouped by "col" field'}),a.jsx(s,{...c})]}),h=o.lazy(()=>e(()=>import("./index-DY4jbcst.js").then(r=>r.dw),__vite__mapDeps([0,1,2])).then(r=>({default:r.Prism}))),v=r=>a.jsxs(m,{children:[a.jsx(b,{}),a.jsx(t,{}),a.jsx("div",{children:a.jsx(n,{items:[{key:1,label:"Show source",children:a.jsx(o.Suspense,{fallback:a.jsx("div",{children:"Loading source..."}),children:a.jsx(h,{language:"tsx",style:r.darkMode?p:d,showLineNumbers:!0,children:`
import React from 'react';
import {IGridProps, TabulatorGrid} from @krinopotam/ui-kit/tabulatorGrid';
import {TabulatorBaseColumns, TabulatorBaseColumnsDef, TabulatorPlainData} from '../../data/tabulatorData';
const props: IGridProps = {
    id: 'TabulatorGridSimple',
    columnDefaults: TabulatorBaseColumnsDef,
    columns: TabulatorBaseColumns,
    groupBy: 'col',
    dataSet: TabulatorPlainData,
    height: 500,
};
export const Simple = (): React.JSX.Element => {
    return (
        <>
            <TabulatorGrid {...props} />
        </>
    );
};
`})})}]})})]});export{v as Pagea939475256b8457291ef0ad2385958e3,v as default};
