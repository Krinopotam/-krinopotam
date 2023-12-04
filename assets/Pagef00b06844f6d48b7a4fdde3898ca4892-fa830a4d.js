import{j as a,D as t}from"./index-7abbb94e.js";import{P as s,C as e,S as l,d as u,a as i}from"./docco-6bf51e55.js";import{T as m}from"./tabulatorGrid-7e279c75.js";import{T as n,d,b as p}from"./tabulatorData-c70d6b23.js";import"./index-22f8d441.js";import"./dFormModal-d77fb2bf.js";import"./EyeOutlined-4b705a51.js";import"./DeleteOutlined-038f7985.js";const c=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Simple example with grouped columns"}),a.jsx(m,{id:"TabulatorGridColumnsGroups",columnDefaults:n,columns:d,dataSet:p,height:500,layout:"fitColumns"})]}),D=o=>{const r=`
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
`;return a.jsxs(s,{children:[a.jsx("div",{children:a.jsx(c,{})}),a.jsx(t,{}),a.jsx("div",{children:a.jsx(e,{items:[{key:1,label:"Show source",children:a.jsx(l,{language:"javascript",style:o.darkMode?u:i,showLineNumbers:!0,children:r})}]})})]})};export{D as Pagef00b06844f6d48b7a4fdde3898ca4892,D as default};
