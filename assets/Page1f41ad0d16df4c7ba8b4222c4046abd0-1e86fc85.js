import{j as a,D as s}from"./index-bd83bb7b.js";import{P as n,C as l,S as i,d as m,a as u}from"./docco-5da19923.js";import{T as d}from"./tabulatorGrid-c8d5ca90.js";import{a as c,T as p,b as h}from"./tabulatorData-cbbee66e.js";import"./index-70b17d15.js";import"./dFormModal-65650ab1.js";import"./EyeOutlined-9bf5471e.js";import"./DeleteOutlined-cdccffb7.js";const b=()=>{const o={columns:c,columnDefaults:p,height:500,layout:"fitColumns",onDataFetch:r=>(console.log("params",r),new Promise((t,e)=>{setTimeout(()=>{Math.random()<.5?e({message:"Loading error",code:400}):t({data:h})},2e3)}))};return a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Asynchronous loading of data into the TabulatorGrid"}),a.jsx("p",{style:{color:"red"},children:"To test boot resumption there is a 50/50 chance of error"}),a.jsx(d,{...o})]})},G=o=>{const r=`
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
`;return a.jsxs(n,{children:[a.jsx("div",{children:a.jsx(b,{})}),a.jsx(s,{}),a.jsx("div",{children:a.jsx(l,{items:[{key:1,label:"Show source",children:a.jsx(i,{language:"javascript",style:o.darkMode?m:u,showLineNumbers:!0,children:r})}]})})]})};export{G as Page1f41ad0d16df4c7ba8b4222c4046abd0,G as default};
