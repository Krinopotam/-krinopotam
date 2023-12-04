import{j as a,D as s}from"./index-c797af55.js";import{P as n,C as l,S as i,d as m,a as u}from"./docco-e40295f3.js";import{T as c}from"./tabulatorGrid-31aae25d.js";import{a as d,T as p,b as h}from"./tabulatorData-7c778850.js";import"./index-8c229de7.js";import"./dFormModal-cedb0440.js";import"./EyeOutlined-8bcb47e2.js";import"./DeleteOutlined-bba666a5.js";const b=()=>{const o={columns:d,columnDefaults:p,height:500,layout:"fitColumns",onDataFetch:r=>(console.log("params",r),new Promise((e,t)=>{setTimeout(()=>{Math.random()<.5?t({message:"Loading error",code:400}):e({data:h})},2e3)}))};return a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Asynchronous loading of data into the TabulatorGrid"}),a.jsx("p",{style:{color:"red"},children:"To test boot resumption there is a 50/50 chance of error"}),a.jsx(c,{...o})]})},G=o=>{const r=`
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
`;return a.jsxs(n,{children:[a.jsx("div",{children:a.jsx(b,{})}),a.jsx(s,{}),a.jsx("div",{children:a.jsx(l,{items:[{key:1,label:"Show source",children:a.jsx(i,{language:"javascript",style:o.darkMode?m:u,showLineNumbers:!0,children:r})}]})})]})};export{G as Page34b5684484724c58bf2692e08a3998ef,G as default};
