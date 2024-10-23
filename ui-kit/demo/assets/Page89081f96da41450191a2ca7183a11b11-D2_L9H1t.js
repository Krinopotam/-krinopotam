const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-PpfmoLrq.js","assets/default-highlight-CWL5sYcU.js","assets/index-DLyGJszd.js"])))=>i.map(i=>d[i]);
import{j as a,r as t,_ as n,D as i}from"./index-DLyGJszd.js";import{T as l}from"./tabulatorGrid-rDkNf4Ba.js";import{T as m,b as u,a as c}from"./tabulatorData-8UvrI1Ir.js";import{P as d,C as p,d as h,c as f}from"./darcula-BfEmJZ6D.js";import"./mergeButtons-OmCcH4N9.js";import"./dForm-8o49JMOI.js";import"./modal-CjmvIDqE.js";import"./index-CGhTEYKp.js";import"./dFormModal-L6NStncr.js";import"./modal-BEhuKh3S.js";import"./defaultButtonsProps-D0FGE1rH.js";import"./index-BGgfnEtT.js";const b=()=>{const o={columns:m,columnDefaults:u,height:500,layout:"fitColumns",onDataFetch:r=>(console.log("params",r),new Promise((e,s)=>{setTimeout(()=>{Math.random()<.5?s({message:"Loading error",code:400}):e({data:c})},2e3)}))};return a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Asynchronous loading of data into the TabulatorGrid"}),a.jsx("p",{style:{color:"red"},children:"To test boot resumption there is a 50/50 chance of error"}),a.jsx(l,{...o})]})},x=t.lazy(()=>n(()=>import("./index-PpfmoLrq.js").then(o=>o.ds),__vite__mapDeps([0,1,2])).then(o=>({default:o.Prism}))),E=o=>a.jsxs(d,{children:[a.jsx("div",{children:a.jsx(b,{})}),a.jsx(i,{}),a.jsx("div",{children:a.jsx(p,{items:[{key:1,label:"Show source",children:a.jsx(t.Suspense,{fallback:a.jsx("div",{children:"Loading source..."}),children:a.jsx(x,{language:"tsx",style:o.darkMode?h:f,showLineNumbers:!0,children:`
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
`})})}]})})]});export{E as Page89081f96da41450191a2ca7183a11b11,E as default};
