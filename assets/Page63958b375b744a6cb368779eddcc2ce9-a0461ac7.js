import{j as a,D as t}from"./index-23555c5c.js";import{P as s,C as e,S as l,d as u,a as i}from"./docco-c24c9fde.js";import{T as m}from"./tabulatorGrid-1186b9ea.js";import{T as n,d,b as c}from"./tabulatorData-2c657cfc.js";import"./index-e5590f2c.js";import"./dFormModal-9d6a497b.js";import"./EyeOutlined-cf850273.js";import"./DeleteOutlined-6d7b808b.js";const p=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Simple example with grouped columns"}),a.jsx(m,{id:"TabulatorGridColumnsGroups",columnDefaults:n,columns:d,dataSet:c,height:500,layout:"fitColumns"})]}),D=o=>{const r=`
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
`;return a.jsxs(s,{children:[a.jsx("div",{children:a.jsx(p,{})}),a.jsx(t,{}),a.jsx("div",{children:a.jsx(e,{items:[{key:1,label:"Show source",children:a.jsx(l,{language:"javascript",style:o.darkMode?u:i,showLineNumbers:!0,children:r})}]})})]})};export{D as Page63958b375b744a6cb368779eddcc2ce9,D as default};
