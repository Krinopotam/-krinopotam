import{j as a,D as t}from"./index-3024f328.js";import{P as s,C as e,S as l,d as u,a as i}from"./docco-8e796366.js";import{T as m}from"./tabulatorGrid-a1a2b210.js";import{b as n,d,a as p}from"./tabulatorData-f1a03775.js";import"./index-901967cb.js";import"./dFormModal-09fd0649.js";import"./EyeOutlined-ff2ae648.js";import"./DeleteOutlined-73630e69.js";const c=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Simple example with grouped columns"}),a.jsx(m,{id:"TabulatorGridColumnsGroups",columnDefaults:n,columns:d,dataSet:p,height:500,layout:"fitColumns"})]}),D=o=>{const r=`
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
`;return a.jsxs(s,{children:[a.jsx("div",{children:a.jsx(c,{})}),a.jsx(t,{}),a.jsx("div",{children:a.jsx(e,{items:[{key:1,label:"Show source",children:a.jsx(l,{language:"javascript",style:o.darkMode?u:i,showLineNumbers:!0,children:r})}]})})]})};export{D as Page01263549704740a8b101655fce98f064,D as default};
