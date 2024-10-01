const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-Cz0v0Rp9.js","assets/default-highlight-CrA-MuiQ.js","assets/index-DKsnjJVp.js"])))=>i.map(i=>d[i]);
import{j as a,r as e,_ as n,D as i}from"./index-DKsnjJVp.js";import{T as l}from"./tabulatorGrid-DCOzFUIF.js";import{a as m,T as u,b as c}from"./tabulatorData-Dp7qYVQO.js";import{P as d,C as p,d as h,c as b}from"./darcula-CbhncTMN.js";import"./modal-s_O7aRct.js";import"./dForm-RzxzTjHO.js";import"./index-CSyocx7G.js";import"./dFormModal-BxobeehR.js";import"./modal-sKRn3jmz.js";import"./defaultButtonsProps-Bo_d-5AQ.js";import"./index-CxCukQln.js";const f=()=>{const o={columns:m,columnDefaults:u,height:500,layout:"fitColumns",onDataFetch:r=>(console.log("params",r),new Promise((t,s)=>{setTimeout(()=>{Math.random()<.5?s({message:"Loading error",code:400}):t({data:c})},2e3)}))};return a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Asynchronous loading of data into the TabulatorGrid"}),a.jsx("p",{style:{color:"red"},children:"To test boot resumption there is a 50/50 chance of error"}),a.jsx(l,{...o})]})},x=e.lazy(()=>n(()=>import("./index-Cz0v0Rp9.js").then(o=>o.ds),__vite__mapDeps([0,1,2])).then(o=>({default:o.Prism}))),k=o=>a.jsxs(d,{children:[a.jsx("div",{children:a.jsx(f,{})}),a.jsx(i,{}),a.jsx("div",{children:a.jsx(p,{items:[{key:1,label:"Show source",children:a.jsx(e.Suspense,{fallback:a.jsx("div",{children:"Loading source..."}),children:a.jsx(x,{language:"tsx",style:o.darkMode?h:b,showLineNumbers:!0,children:`
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
`})})}]})})]});export{k as Page1cfe78152d63489384149a267aeebb3b,k as default};
