import{j as a,D as t}from"./index-Bl-1kopd.js";import{P as r,C as e,h as l,d as s,a as i}from"./docco-DI1KRtYq.js";import{T as u}from"./tabulatorGrid-BopOrzIc.js";import{T as n,b as m,a as c}from"./tabulatorData-_B0aRVvD.js";import"./index-Cz3A2iSd.js";import"./dFormModal-COFbO3rY.js";import"./EyeOutlined-VtVLuKtp.js";import"./DeleteOutlined-C4ZPs8sE.js";const d=[...n],b=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example Tabulator Grid in selectionMode"}),a.jsx(u,{id:"TabulatorGridSimple",columnDefaults:m,columns:d,dataSet:c,height:500,selectionMode:!0,layout:"fitColumns"})]}),S=o=>a.jsxs(r,{children:[a.jsx("div",{children:a.jsx(b,{})}),a.jsx(t,{}),a.jsx("div",{children:a.jsx(e,{items:[{key:1,label:"Show source",children:a.jsx(l,{language:"javascript",style:o.darkMode?s:i,showLineNumbers:!0,children:`
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
`})}]})})]});export{S as Page7ef4696cc4aa434cbe243a9453ff596b,S as default};
