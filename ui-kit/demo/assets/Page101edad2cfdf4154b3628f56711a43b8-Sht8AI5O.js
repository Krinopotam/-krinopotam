import{j as a,D as t}from"./index-BRcPwwbH.js";import{P as r,C as e,h as l,d as s,a as i}from"./docco-8ZfxCt3s.js";import{T as u}from"./tabulatorGrid-BC2Pjm80.js";import{T as m,b as n,a as d}from"./tabulatorData-B34ZnO01.js";import"./messageBox-Dgk4xpFW.js";import"./dForm-CIlSW0lt.js";import"./index-Bcoz37Cc.js";import"./dFormModal-TbW2WofU.js";import"./modal-BltPdufQ.js";import"./EyeOutlined-CTsTM-Dg.js";import"./DeleteOutlined-CKLDhuks.js";const c=[...m],b=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example Tabulator Grid in selectionMode"}),a.jsx(u,{id:"TabulatorGridSimple",columnDefaults:n,columns:c,dataSet:d,height:500,selectionMode:!0,layout:"fitColumns"})]}),k=o=>a.jsxs(r,{children:[a.jsx("div",{children:a.jsx(b,{})}),a.jsx(t,{}),a.jsx("div",{children:a.jsx(e,{items:[{key:1,label:"Show source",children:a.jsx(l,{language:"javascript",style:o.darkMode?s:i,showLineNumbers:!0,children:`
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
`})}]})})]});export{k as Page101edad2cfdf4154b3628f56711a43b8,k as default};
