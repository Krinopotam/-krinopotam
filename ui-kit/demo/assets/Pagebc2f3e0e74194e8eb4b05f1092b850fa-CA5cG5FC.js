const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DY4jbcst.js","assets/default-highlight-Dn6Zkl0a.js","assets/index-CtAjfk3U.js"])))=>i.map(i=>d[i]);
import{j as o,D as n,r as t,_ as i}from"./index-CtAjfk3U.js";import{T as l}from"./tabulatorGrid-Bes3Jt16.js";import{a as m,T as u,b as c}from"./tabulatorData-DSy7h6X7.js";import{P as d,C as p}from"./pageLayout-BYJr8qhp.js";import{d as h,c as f}from"./darcula-BqMdvqtY.js";import"./buttonsRow-DIWV9y5m.js";import"./isArray-Dq3mFmoY.js";import"./messageBox-BEJz6LZv.js";import"./index-CQ36vsgA.js";import"./dFormModal-DBrO8yV5.js";import"./modal-CqlI0vXJ.js";import"./defaultButtonsProps-BFWSm065.js";import"./PlusOutlined-CjmZvIFI.js";import"./index-C2aIs9ND.js";const b=()=>{const a={columns:u,columnDefaults:m,height:500,layout:"fitColumns",onDataFetch:r=>(console.log("params",r),new Promise((e,s)=>{setTimeout(()=>{Math.random()<.5?s({message:"Loading error",code:400}):e({data:c})},2e3)}))};return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Asynchronous loading of data into the TabulatorGrid"}),o.jsx("p",{style:{color:"red"},children:"To test boot resumption there is a 50/50 chance of error"}),o.jsx(l,{...a})]})},g=t.lazy(()=>i(()=>import("./index-DY4jbcst.js").then(a=>a.dw),__vite__mapDeps([0,1,2])).then(a=>({default:a.Prism}))),A=a=>o.jsxs(d,{children:[o.jsx(b,{}),o.jsx(n,{}),o.jsx("div",{children:o.jsx(p,{items:[{key:1,label:"Show source",children:o.jsx(t.Suspense,{fallback:o.jsx("div",{children:"Loading source..."}),children:o.jsx(g,{language:"tsx",style:a.darkMode?h:f,showLineNumbers:!0,children:`
import React from 'react';
import {IGridProps, TabulatorGrid} from @krinopotam/ui-kit/tabulatorGrid';
import {TabulatorBaseColumns, TabulatorBaseColumnsDef, TabulatorPlainData} from '../../../data/tabulatorData';
export const AsyncLoading = (): React.JSX.Element => {
    const props: IGridProps = {
        columns: TabulatorBaseColumns,
        columnDefaults: TabulatorBaseColumnsDef,
        height: 500,
        layout: 'fitColumns',
        onDataFetch: (params) => {
            console.log('params', params);
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const random = Math.random();
                    if (random < 0.5) reject({message: 'Loading error', code: 400});
                    else resolve({data: TabulatorPlainData});
                }, 2000);
            });
        },
    };
    return (
        <>
            <TabulatorGrid {...props} />
        </>
    );
};
`})})}]})})]});export{A as Pagebc2f3e0e74194e8eb4b05f1092b850fa,A as default};
