import{j as a,D as s}from"./index-DhMwsQtd.js";import{P as n,C as i,h as l,d as m,a as u}from"./docco-BR1GjPZn.js";import{T as c}from"./tabulatorGrid-CVRHT1bL.js";import{T as d,b as p,a as h}from"./tabulatorData-rIJmlee8.js";import"./messageBox-CQECnf8I.js";import"./dForm-BvND7aMS.js";import"./index-DNVFzPvX.js";import"./dFormModal-B9s_VGMc.js";import"./modal-eXRNn5Q9.js";import"./EyeOutlined-D8voB2bB.js";import"./DeleteOutlined-BqcAHwXU.js";const f=()=>{const o={columns:d,columnDefaults:p,height:500,layout:"fitColumns",onDataFetch:r=>(console.log("params",r),new Promise((t,e)=>{setTimeout(()=>{Math.random()<.5?e({message:"Loading error",code:400}):t({data:h})},2e3)}))};return a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Asynchronous loading of data into the TabulatorGrid"}),a.jsx("p",{style:{color:"red"},children:"To test boot resumption there is a 50/50 chance of error"}),a.jsx(c,{...o})]})},L=o=>a.jsxs(n,{children:[a.jsx("div",{children:a.jsx(f,{})}),a.jsx(s,{}),a.jsx("div",{children:a.jsx(i,{items:[{key:1,label:"Show source",children:a.jsx(l,{language:"javascript",style:o.darkMode?m:u,showLineNumbers:!0,children:`
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
`})}]})})]});export{L as Pagec93f050c65c84490a45e7d82654718a0,L as default};