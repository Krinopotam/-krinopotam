const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-9FGXM8eG.js","assets/default-highlight-_K3mzjfK.js","assets/index-CObHp3AH.js"])))=>i.map(i=>d[i]);
import{j as a,r as t,_ as n,D as i}from"./index-CObHp3AH.js";import{T as l}from"./tabulatorGrid-C-CHviK6.js";import{T as m,b as u,a as d}from"./tabulatorData-B7Pu9KOW.js";import{P as c,C as p,d as h,c as b}from"./darcula-D-n55oql.js";import"./modal-BBQwvlDP.js";import"./DownOutlined-BYejAm0U.js";import"./dForm-DjwSwKfj.js";import"./index-BubinFZA.js";import"./CheckOutlined-ka3l-INf.js";import"./dFormModal-BBSecmha.js";import"./modal-B2hVzaN7.js";import"./defaultButtonsProps-DSb7WT6w.js";import"./iconUtil-DejahXk-.js";import"./index-CVqHkW2e.js";const f=()=>{const o={columns:m,columnDefaults:u,height:500,layout:"fitColumns",onDataFetch:r=>(console.log("params",r),new Promise((e,s)=>{setTimeout(()=>{Math.random()<.5?s({message:"Loading error",code:400}):e({data:d})},2e3)}))};return a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Asynchronous loading of data into the TabulatorGrid"}),a.jsx("p",{style:{color:"red"},children:"To test boot resumption there is a 50/50 chance of error"}),a.jsx(l,{...o})]})},x=t.lazy(()=>n(()=>import("./index-9FGXM8eG.js").then(o=>o.ds),__vite__mapDeps([0,1,2])).then(o=>({default:o.Prism}))),A=o=>a.jsxs(c,{children:[a.jsx("div",{children:a.jsx(f,{})}),a.jsx(i,{}),a.jsx("div",{children:a.jsx(p,{items:[{key:1,label:"Show source",children:a.jsx(t.Suspense,{fallback:a.jsx("div",{children:"Loading source..."}),children:a.jsx(x,{language:"tsx",style:o.darkMode?h:b,showLineNumbers:!0,children:`
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
`})})}]})})]});export{A as Pagea05d9fe3403a4d8a936dcbd02b6cf4cb,A as default};
