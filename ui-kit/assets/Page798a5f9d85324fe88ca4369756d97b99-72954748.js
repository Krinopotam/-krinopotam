import{j as a,D as r}from"./index-9944374f.js";import{P as e,C as l,S as s,d as i,a as u}from"./docco-d767795b.js";import{T as n}from"./tabulatorGrid-7651107b.js";import{a as m,T as d,b as c}from"./tabulatorData-eaf688e2.js";import"./index-df6b3fec.js";import"./dFormModal-d04b30b3.js";import"./EyeOutlined-4433dc0b.js";import"./DeleteOutlined-31742ae8.js";const b=[...m],p=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example Tabulator Grid in selectionMode"}),a.jsx(n,{id:"TabulatorGridSimple",columnDefaults:d,columns:b,dataSet:c,height:500,selectionMode:!0,layout:"fitColumns"})]}),g=o=>{const t=`
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
`;return a.jsxs(e,{children:[a.jsx("div",{children:a.jsx(p,{})}),a.jsx(r,{}),a.jsx("div",{children:a.jsx(l,{items:[{key:1,label:"Show source",children:a.jsx(s,{language:"javascript",style:o.darkMode?i:u,showLineNumbers:!0,children:t})}]})})]})};export{g as Page798a5f9d85324fe88ca4369756d97b99,g as default};
