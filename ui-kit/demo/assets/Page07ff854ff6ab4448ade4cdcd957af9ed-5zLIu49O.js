const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DdqqSCj0.js","assets/default-highlight-9uSTSbTs.js","assets/index-c6xXn22Z.js"])))=>i.map(i=>d[i]);
import{j as a,r as e,_ as n,D as i}from"./index-c6xXn22Z.js";import{T as l}from"./tabulatorGrid-COfwlYwE.js";import{a as m,T as u,b as d}from"./tabulatorData-CVKtEvPi.js";import{P as c,C as p,d as h,c as f}from"./darcula-DhxqnDMh.js";import"./modal-CDnUOe4A.js";import"./dForm-CZw76wHB.js";import"./index-CzWkA8Ku.js";import"./dFormModal-C6Y0IuSi.js";import"./modal-CyZhQyS5.js";import"./defaultButtonsProps-B2tjDYAJ.js";import"./index-OjxplGiv.js";const b=()=>{const o={columns:m,columnDefaults:u,height:500,layout:"fitColumns",onDataFetch:r=>(console.log("params",r),new Promise((t,s)=>{setTimeout(()=>{Math.random()<.5?s({message:"Loading error",code:400}):t({data:d})},2e3)}))};return a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Asynchronous loading of data into the TabulatorGrid"}),a.jsx("p",{style:{color:"red"},children:"To test boot resumption there is a 50/50 chance of error"}),a.jsx(l,{...o})]})},x=e.lazy(()=>n(()=>import("./index-DdqqSCj0.js").then(o=>o.ds),__vite__mapDeps([0,1,2])).then(o=>({default:o.Prism}))),k=o=>a.jsxs(c,{children:[a.jsx("div",{children:a.jsx(b,{})}),a.jsx(i,{}),a.jsx("div",{children:a.jsx(p,{items:[{key:1,label:"Show source",children:a.jsx(e.Suspense,{fallback:a.jsx("div",{children:"Loading source..."}),children:a.jsx(x,{language:"tsx",style:o.darkMode?h:f,showLineNumbers:!0,children:`
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
`})})}]})})]});export{k as Page07ff854ff6ab4448ade4cdcd957af9ed,k as default};
