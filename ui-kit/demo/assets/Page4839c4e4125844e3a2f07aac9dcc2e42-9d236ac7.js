import{j as a,D as t}from"./index-0409158c.js";import{P as s,C as e,S as l,d as u,a as i}from"./docco-fa9c9fcc.js";import{T as m}from"./tabulatorGrid-22da0f8d.js";import{T as n,d,b as c}from"./tabulatorData-fbb7c043.js";import"./index-da9b0dd9.js";import"./dFormModal-235aed86.js";import"./EyeOutlined-c44a8289.js";import"./DeleteOutlined-75656d28.js";const p=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Simple example with grouped columns"}),a.jsx(m,{id:"TabulatorGridColumnsGroups",columnDefaults:n,columns:d,dataSet:c,height:500,layout:"fitColumns"})]}),D=o=>{const r=`
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
`;return a.jsxs(s,{children:[a.jsx("div",{children:a.jsx(p,{})}),a.jsx(t,{}),a.jsx("div",{children:a.jsx(e,{items:[{key:1,label:"Show source",children:a.jsx(l,{language:"javascript",style:o.darkMode?u:i,showLineNumbers:!0,children:r})}]})})]})};export{D as Page4839c4e4125844e3a2f07aac9dcc2e42,D as default};
