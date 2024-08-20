import{j as a,D as t}from"./index-C88KkuCB.js";import{P as r,C as e,h as l,d as s,a as i}from"./docco-ByJX3Scg.js";import{T as u}from"./tabulatorGrid-DKkDsMvF.js";import{T as m,b as n,a as d}from"./tabulatorData-CkYiJt45.js";import"./messageBox-DwID5iMj.js";import"./dForm-Dv7JeuEm.js";import"./index-BuXson94.js";import"./dFormModal-BPcYJqc1.js";import"./modal-mTGTPhaP.js";import"./EyeOutlined-RPGYlChj.js";import"./DeleteOutlined-D2DZven6.js";const c=[...m],p=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example Tabulator Grid in selectionMode"}),a.jsx(u,{id:"TabulatorGridSimple",columnDefaults:n,columns:c,dataSet:d,height:500,selectionMode:!0,layout:"fitColumns"})]}),k=o=>a.jsxs(r,{children:[a.jsx("div",{children:a.jsx(p,{})}),a.jsx(t,{}),a.jsx("div",{children:a.jsx(e,{items:[{key:1,label:"Show source",children:a.jsx(l,{language:"javascript",style:o.darkMode?s:i,showLineNumbers:!0,children:`
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
`})}]})})]});export{k as Pagea372859d5d6e4427ae21865236a79941,k as default};
