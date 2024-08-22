import{j as a,D as r}from"./index-C6ePYZvf.js";import{P as t,C as s,h as e,d as l,a as u}from"./docco-YXdAdB7y.js";import{T as i}from"./tabulatorGrid-Dv5XHxcX.js";import{b as m,d as n,a as d}from"./tabulatorData-CzWWk_nF.js";import"./messageBox-BC7Lwadz.js";import"./dForm-8-NeoUsj.js";import"./index-C3U__1M9.js";import"./dFormModal-uxLmPJzu.js";import"./modal-tvTnxo6z.js";import"./EyeOutlined-Dqyyi7nw.js";import"./DeleteOutlined-CKIGzCKu.js";const p=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Simple example with grouped columns"}),a.jsx(i,{id:"TabulatorGridColumnsGroups",columnDefaults:m,columns:n,dataSet:d,height:500,layout:"fitColumns"})]}),P=o=>a.jsxs(t,{children:[a.jsx("div",{children:a.jsx(p,{})}),a.jsx(r,{}),a.jsx("div",{children:a.jsx(s,{items:[{key:1,label:"Show source",children:a.jsx(e,{language:"javascript",style:o.darkMode?l:u,showLineNumbers:!0,children:`
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
`})}]})})]});export{P as Page77a49a6eaea6410a8abcdaece6be7875,P as default};
