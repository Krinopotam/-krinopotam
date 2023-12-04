import{j as a,D as t}from"./index-bd83bb7b.js";import{P as s,C as e,S as l,d as u,a as i}from"./docco-5da19923.js";import{T as m}from"./tabulatorGrid-c8d5ca90.js";import{T as n,d,b as c}from"./tabulatorData-cbbee66e.js";import"./index-70b17d15.js";import"./dFormModal-65650ab1.js";import"./EyeOutlined-9bf5471e.js";import"./DeleteOutlined-cdccffb7.js";const p=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Simple example with grouped columns"}),a.jsx(m,{id:"TabulatorGridColumnsGroups",columnDefaults:n,columns:d,dataSet:c,height:500,layout:"fitColumns"})]}),D=o=>{const r=`
import React from 'react';
import {TabulatorGrid} from @krinopotam/ui-kit/tabulatorGrid';
import {TabulatorBaseColumnsDef, TabulatorBaseGroupedColumns, TabulatorPlainData} from "../../data/tabulatorData";
export const ColumnsGroups = (): React.JSX.Element => {
    return (
        <>
            <TabulatorGrid
                id={'TabulatorGridColumnsGroups'}
                columnDefaults={TabulatorBaseColumnsDef}
                columns={TabulatorBaseGroupedColumns}
                dataSet={TabulatorPlainData}
                height={500}
                layout={'fitColumns'}
            />
        </>
    );
};
`;return a.jsxs(s,{children:[a.jsx("div",{children:a.jsx(p,{})}),a.jsx(t,{}),a.jsx("div",{children:a.jsx(e,{items:[{key:1,label:"Show source",children:a.jsx(l,{language:"javascript",style:o.darkMode?u:i,showLineNumbers:!0,children:r})}]})})]})};export{D as Pageae220aacbf5146f587c874b28952a2b0,D as default};
