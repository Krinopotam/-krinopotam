import{j as a,D as r}from"./index-CEW5Pw51.js";import{P as t,C as s,h as e,d as l,a as u}from"./docco-BDmKSriJ.js";import{T as i}from"./tabulatorGrid-D_Dw4JJ8.js";import{b as m,d as n,a as d}from"./tabulatorData-CS8n7XKW.js";import"./index-XDwG7I6Z.js";import"./dFormModal-CQxmvlme.js";import"./EyeOutlined-CTrlI0WT.js";import"./DeleteOutlined-DC7B5UxI.js";const p=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Simple example with grouped columns"}),a.jsx(i,{id:"TabulatorGridColumnsGroups",columnDefaults:m,columns:n,dataSet:d,height:500,layout:"fitColumns"})]}),D=o=>a.jsxs(t,{children:[a.jsx("div",{children:a.jsx(p,{})}),a.jsx(r,{}),a.jsx("div",{children:a.jsx(s,{items:[{key:1,label:"Show source",children:a.jsx(e,{language:"javascript",style:o.darkMode?l:u,showLineNumbers:!0,children:`
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
`})}]})})]});export{D as Page6566fd5fb59943089113fe43f6efaa79,D as default};
