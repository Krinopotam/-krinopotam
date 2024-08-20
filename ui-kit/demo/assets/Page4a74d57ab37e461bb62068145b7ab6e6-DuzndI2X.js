import{j as a,D as r}from"./index-C88KkuCB.js";import{P as o,C as e,h as l,d as i,a as s}from"./docco-ByJX3Scg.js";import{T as u}from"./tabulatorGrid-DKkDsMvF.js";import{b as m,T as n,a as c}from"./tabulatorData-CkYiJt45.js";import"./messageBox-DwID5iMj.js";import"./dForm-Dv7JeuEm.js";import"./index-BuXson94.js";import"./dFormModal-BPcYJqc1.js";import"./modal-mTGTPhaP.js";import"./EyeOutlined-RPGYlChj.js";import"./DeleteOutlined-D2DZven6.js";const d=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example of a simple TabulatorGrid with multi-line selection"}),a.jsx("p",{children:"To select multiple rows, hold down ctrl key"}),a.jsx(u,{id:"TabulatorGridSimple",columnDefaults:m,columns:n,dataSet:c,multiSelect:!0,height:500,layout:"fitColumns"})]}),y=t=>a.jsxs(o,{children:[a.jsx("div",{children:a.jsx(d,{})}),a.jsx(r,{}),a.jsx("div",{children:a.jsx(e,{items:[{key:1,label:"Show source",children:a.jsx(l,{language:"javascript",style:t.darkMode?i:s,showLineNumbers:!0,children:`
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
`})}]})})]});export{y as Page4a74d57ab37e461bb62068145b7ab6e6,y as default};
