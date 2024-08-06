import{j as a,D as e}from"./index-Bl-1kopd.js";import{P as r,C as l,h as o,d as s,a as i}from"./docco-DI1KRtYq.js";import{T as u}from"./tabulatorGrid-BopOrzIc.js";import{b as m,T as n,a as c}from"./tabulatorData-_B0aRVvD.js";import"./index-Cz3A2iSd.js";import"./dFormModal-COFbO3rY.js";import"./EyeOutlined-VtVLuKtp.js";import"./DeleteOutlined-C4ZPs8sE.js";const d=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example of a simple TabulatorGrid with multi-line selection"}),a.jsx("p",{children:"To select multiple rows, hold down ctrl key"}),a.jsx(u,{id:"TabulatorGridSimple",columnDefaults:m,columns:n,dataSet:c,multiSelect:!0,height:500,layout:"fitColumns"})]}),S=t=>a.jsxs(r,{children:[a.jsx("div",{children:a.jsx(d,{})}),a.jsx(e,{}),a.jsx("div",{children:a.jsx(l,{items:[{key:1,label:"Show source",children:a.jsx(o,{language:"javascript",style:t.darkMode?s:i,showLineNumbers:!0,children:`
import React from 'react';
import {TabulatorGrid} from @krinopotam/ui-kit/tabulatorGrid';
import {TabulatorBaseColumns, TabulatorBaseColumnsDef, TabulatorPlainData} from "../../data/tabulatorData";
export const MultiSelect = (): React.JSX.Element => {
    return (
        <>
            <TabulatorGrid id={'TabulatorGridSimple'} columnDefaults={TabulatorBaseColumnsDef} columns={TabulatorBaseColumns} dataSet={TabulatorPlainData} multiSelect={true} height={500} layout={'fitColumns'}/>
        </>
    );
};
`})}]})})]});export{S as Page0e776a08122b43ec8379c6101c8c035c,S as default};
