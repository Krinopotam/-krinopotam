import{j as a,D as s}from"./index-C88KkuCB.js";import{P as n,C as i,h as l,d as m,a as u}from"./docco-ByJX3Scg.js";import{T as c}from"./tabulatorGrid-DKkDsMvF.js";import{T as d,b as p,a as h}from"./tabulatorData-CkYiJt45.js";import"./messageBox-DwID5iMj.js";import"./dForm-Dv7JeuEm.js";import"./index-BuXson94.js";import"./dFormModal-BPcYJqc1.js";import"./modal-mTGTPhaP.js";import"./EyeOutlined-RPGYlChj.js";import"./DeleteOutlined-D2DZven6.js";const b=()=>{const o={columns:d,columnDefaults:p,height:500,layout:"fitColumns",onDataFetch:r=>(console.log("params",r),new Promise((e,t)=>{setTimeout(()=>{Math.random()<.5?t({message:"Loading error",code:400}):e({data:h})},2e3)}))};return a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Asynchronous loading of data into the TabulatorGrid"}),a.jsx("p",{style:{color:"red"},children:"To test boot resumption there is a 50/50 chance of error"}),a.jsx(c,{...o})]})},L=o=>a.jsxs(n,{children:[a.jsx("div",{children:a.jsx(b,{})}),a.jsx(s,{}),a.jsx("div",{children:a.jsx(i,{items:[{key:1,label:"Show source",children:a.jsx(l,{language:"javascript",style:o.darkMode?m:u,showLineNumbers:!0,children:`
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
`})}]})})]});export{L as Paged02ab0faabe04aec9597396d49484ea6,L as default};
