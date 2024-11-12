const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CyxzPzPK.js","assets/default-highlight-BA4pzhEA.js","assets/index-Cpuh8Ebd.js"])))=>i.map(i=>d[i]);
import{j as a,r as e,_ as n,D as i}from"./index-Cpuh8Ebd.js";import{T as l}from"./tabulatorGrid-Da6sMqw5.js";import{b as m,a as u,T as d}from"./tabulatorData-BJFebvAp.js";import{P as c,C as p,d as h,c as b}from"./darcula-hcLbMwDB.js";import"./buttonsRow-MpDC2SN8.js";import"./dForm-t1Ccos62.js";import"./modal-g5li7x1J.js";import"./index-DNdv76Wr.js";import"./dFormModal-iIvnEeWS.js";import"./modal-DJlUd0AK.js";import"./defaultButtonsProps-D12Yt--i.js";import"./PlusOutlined-BTCZ_JD0.js";import"./index-D9n8SM2Y.js";const f=()=>{const o={columns:m,columnDefaults:u,height:500,layout:"fitColumns",onDataFetch:r=>(console.log("params",r),new Promise((t,s)=>{setTimeout(()=>{Math.random()<.5?s({message:"Loading error",code:400}):t({data:d})},2e3)}))};return a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Asynchronous loading of data into the TabulatorGrid"}),a.jsx("p",{style:{color:"red"},children:"To test boot resumption there is a 50/50 chance of error"}),a.jsx(l,{...o})]})},x=e.lazy(()=>n(()=>import("./index-CyxzPzPK.js").then(o=>o.ds),__vite__mapDeps([0,1,2])).then(o=>({default:o.Prism}))),w=o=>a.jsxs(c,{children:[a.jsx("div",{children:a.jsx(f,{})}),a.jsx(i,{}),a.jsx("div",{children:a.jsx(p,{items:[{key:1,label:"Show source",children:a.jsx(e.Suspense,{fallback:a.jsx("div",{children:"Loading source..."}),children:a.jsx(x,{language:"tsx",style:o.darkMode?h:b,showLineNumbers:!0,children:`
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
`})})}]})})]});export{w as Page00bdf19ed28f4eb0a56cd836aeab4a8c,w as default};
