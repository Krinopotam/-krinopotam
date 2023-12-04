import{j as a,D as r}from"./index-23555c5c.js";import{P as e,C as l,S as s,d as i,a as u}from"./docco-c24c9fde.js";import{T as n}from"./tabulatorGrid-1186b9ea.js";import{a as m,T as c,b as d}from"./tabulatorData-2c657cfc.js";import"./index-e5590f2c.js";import"./dFormModal-9d6a497b.js";import"./EyeOutlined-cf850273.js";import"./DeleteOutlined-6d7b808b.js";const b=[...m],p=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example Tabulator Grid in selectionMode"}),a.jsx(n,{id:"TabulatorGridSimple",columnDefaults:c,columns:b,dataSet:d,height:500,selectionMode:!0,layout:"fitColumns"})]}),g=o=>{const t=`
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
`;return a.jsxs(e,{children:[a.jsx("div",{children:a.jsx(p,{})}),a.jsx(r,{}),a.jsx("div",{children:a.jsx(l,{items:[{key:1,label:"Show source",children:a.jsx(s,{language:"javascript",style:o.darkMode?i:u,showLineNumbers:!0,children:t})}]})})]})};export{g as Page48ffacebbf514dcebbc139af5b694a4a,g as default};
