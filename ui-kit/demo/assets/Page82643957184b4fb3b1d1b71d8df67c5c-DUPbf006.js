import{j as a,D as t}from"./index-C6ePYZvf.js";import{P as r,C as e,h as l,d as s,a as i}from"./docco-YXdAdB7y.js";import{T as u}from"./tabulatorGrid-Dv5XHxcX.js";import{T as m,b as n,a as c}from"./tabulatorData-CzWWk_nF.js";import"./messageBox-BC7Lwadz.js";import"./dForm-8-NeoUsj.js";import"./index-C3U__1M9.js";import"./dFormModal-uxLmPJzu.js";import"./modal-tvTnxo6z.js";import"./EyeOutlined-Dqyyi7nw.js";import"./DeleteOutlined-CKIGzCKu.js";const d=[...m],b=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example Tabulator Grid in selectionMode"}),a.jsx(u,{id:"TabulatorGridSimple",columnDefaults:n,columns:d,dataSet:c,height:500,selectionMode:!0,layout:"fitColumns"})]}),k=o=>a.jsxs(r,{children:[a.jsx("div",{children:a.jsx(b,{})}),a.jsx(t,{}),a.jsx("div",{children:a.jsx(e,{items:[{key:1,label:"Show source",children:a.jsx(l,{language:"javascript",style:o.darkMode?s:i,showLineNumbers:!0,children:`
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
`})}]})})]});export{k as Page82643957184b4fb3b1d1b71d8df67c5c,k as default};
