import{j as a,D as t}from"./index-HhzJ4ZAZ.js";import{P as r,C as e,h as l,d as s,a as i}from"./docco-DFBk-y2S.js";import{T as u}from"./tabulatorGrid-ClXLsEKq.js";import{T as m,b as n,a as c}from"./tabulatorData-BplLbar6.js";import"./messageBox-B4gQYQRN.js";import"./dForm-CEoJtw24.js";import"./index-B0AR281A.js";import"./dFormModal-CWIdSG_N.js";import"./modal-BNnPWca4.js";import"./EyeOutlined-iPePv-Sb.js";import"./DeleteOutlined-BU6ZfEzd.js";const d=[...m],b=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example Tabulator Grid in selectionMode"}),a.jsx(u,{id:"TabulatorGridSimple",columnDefaults:n,columns:d,dataSet:c,height:500,selectionMode:!0,layout:"fitColumns"})]}),k=o=>a.jsxs(r,{children:[a.jsx("div",{children:a.jsx(b,{})}),a.jsx(t,{}),a.jsx("div",{children:a.jsx(e,{items:[{key:1,label:"Show source",children:a.jsx(l,{language:"javascript",style:o.darkMode?s:i,showLineNumbers:!0,children:`
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
`})}]})})]});export{k as Pagef369cdbaaa09466eaa63e3f32ceb4d7a,k as default};
