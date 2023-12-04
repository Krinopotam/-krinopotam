import{j as a,D as r}from"./index-491b5652.js";import{P as e,C as l,S as s,d as i,a as u}from"./docco-2ccfe26d.js";import{T as n}from"./tabulatorGrid-1fa6dc01.js";import{a as m,T as d,b as c}from"./tabulatorData-db3ba943.js";import"./index-bb222d24.js";import"./dFormModal-03c7f003.js";import"./EyeOutlined-ab0d6fcf.js";import"./DeleteOutlined-4ad9d1b1.js";const b=[...m],p=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example Tabulator Grid in selectionMode"}),a.jsx(n,{id:"TabulatorGridSimple",columnDefaults:d,columns:b,dataSet:c,height:500,selectionMode:!0,layout:"fitColumns"})]}),g=o=>{const t=`
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
`;return a.jsxs(e,{children:[a.jsx("div",{children:a.jsx(p,{})}),a.jsx(r,{}),a.jsx("div",{children:a.jsx(l,{items:[{key:1,label:"Show source",children:a.jsx(s,{language:"javascript",style:o.darkMode?i:u,showLineNumbers:!0,children:t})}]})})]})};export{g as Page1df12e1d70814ee0a7fdd2abf17adb7c,g as default};
