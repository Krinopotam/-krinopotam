import{j as a,D as r}from"./index-zp8t8nBI.js";import{P as t,C as s,h as e,d as l,a as u}from"./docco-qM7CaTt5.js";import{T as i}from"./tabulatorGrid-LGmx6kUr.js";import{b as m,d as n,a as d}from"./tabulatorData-BJ5jlgxT.js";import"./dForm-CtyM7E66.js";import"./dFormModal-DQXWVkWJ.js";import"./EyeOutlined-B9jVFvSG.js";import"./DeleteOutlined-oAPYnq6c.js";const c=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Simple example with grouped columns"}),a.jsx(i,{id:"TabulatorGridColumnsGroups",columnDefaults:m,columns:n,dataSet:d,height:500,layout:"fitColumns"})]}),D=o=>a.jsxs(t,{children:[a.jsx("div",{children:a.jsx(c,{})}),a.jsx(r,{}),a.jsx("div",{children:a.jsx(s,{items:[{key:1,label:"Show source",children:a.jsx(e,{language:"javascript",style:o.darkMode?l:u,showLineNumbers:!0,children:`
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
`})}]})})]});export{D as Pagec67d8f90d29444e6b753b52155c036e7,D as default};
