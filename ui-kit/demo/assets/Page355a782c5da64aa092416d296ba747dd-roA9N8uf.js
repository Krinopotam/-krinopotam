import{j as a,D as t}from"./index-zp8t8nBI.js";import{P as r,C as e,h as l,d as s,a as i}from"./docco-qM7CaTt5.js";import{T as u}from"./tabulatorGrid-LGmx6kUr.js";import{T as n,b as m,a as d}from"./tabulatorData-BJ5jlgxT.js";import"./dForm-CtyM7E66.js";import"./dFormModal-DQXWVkWJ.js";import"./EyeOutlined-B9jVFvSG.js";import"./DeleteOutlined-oAPYnq6c.js";const c=[...n],b=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example Tabulator Grid in selectionMode"}),a.jsx(u,{id:"TabulatorGridSimple",columnDefaults:m,columns:c,dataSet:d,height:500,selectionMode:!0,layout:"fitColumns"})]}),S=o=>a.jsxs(r,{children:[a.jsx("div",{children:a.jsx(b,{})}),a.jsx(t,{}),a.jsx("div",{children:a.jsx(e,{items:[{key:1,label:"Show source",children:a.jsx(l,{language:"javascript",style:o.darkMode?s:i,showLineNumbers:!0,children:`
import React from 'react';
import {TabulatorGrid} from @krinopotam/ui-kit/tabulatorGrid';
import {TabulatorBaseColumns, TabulatorBaseColumnsDef, TabulatorPlainData} from '../../data/tabulatorData';
import {ITabulatorColumn} from @krinopotam/ui-kit/tabulatorBase';
const columns: ITabulatorColumn[] = [...TabulatorBaseColumns];
export const SelectionMode = (): React.JSX.Element => {
    return (
        <>
            <TabulatorGrid
                id={'TabulatorGridSimple'}
                columnDefaults={TabulatorBaseColumnsDef}
                columns={columns}
                dataSet={TabulatorPlainData}
                height={500}
                selectionMode={true}
                layout={'fitColumns'}
            />
        </>
    );
};
`})}]})})]});export{S as Page355a782c5da64aa092416d296ba747dd,S as default};
