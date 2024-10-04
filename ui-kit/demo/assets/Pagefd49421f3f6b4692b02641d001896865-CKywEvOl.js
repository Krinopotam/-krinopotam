const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-HHVvrn9L.js","assets/default-highlight-Bg-yw1Xy.js","assets/index-C4KfxKt0.js"])))=>i.map(i=>d[i]);
import{j as a,r as t,_ as n,D as i}from"./index-C4KfxKt0.js";import{T as l}from"./tabulatorGrid-CPBHSndK.js";import{a as m,T as u,b as d}from"./tabulatorData-DHVxAiby.js";import{P as c,C as p,d as h,c as f}from"./darcula-Dn2EXRAk.js";import"./modal-B9kdAnYE.js";import"./dForm-DkkmO2de.js";import"./index-kYmYzKiJ.js";import"./dFormModal-NILuEzR7.js";import"./modal-DhSU9O67.js";import"./defaultButtonsProps-DB_b1JyB.js";import"./index-BK8ljC1v.js";const b=()=>{const o={columns:m,columnDefaults:u,height:500,layout:"fitColumns",onDataFetch:r=>(console.log("params",r),new Promise((e,s)=>{setTimeout(()=>{Math.random()<.5?s({message:"Loading error",code:400}):e({data:d})},2e3)}))};return a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Asynchronous loading of data into the TabulatorGrid"}),a.jsx("p",{style:{color:"red"},children:"To test boot resumption there is a 50/50 chance of error"}),a.jsx(l,{...o})]})},x=t.lazy(()=>n(()=>import("./index-HHVvrn9L.js").then(o=>o.ds),__vite__mapDeps([0,1,2])).then(o=>({default:o.Prism}))),k=o=>a.jsxs(c,{children:[a.jsx("div",{children:a.jsx(b,{})}),a.jsx(i,{}),a.jsx("div",{children:a.jsx(p,{items:[{key:1,label:"Show source",children:a.jsx(t.Suspense,{fallback:a.jsx("div",{children:"Loading source..."}),children:a.jsx(x,{language:"tsx",style:o.darkMode?h:f,showLineNumbers:!0,children:`
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
`})})}]})})]});export{k as Pagefd49421f3f6b4692b02641d001896865,k as default};
