import{j as a,D as r}from"./index-jRq8dFl9.js";import{P as o,C as e,h as l,d as i,a as s}from"./docco-DVswO1UK.js";import{T as u}from"./tabulatorGrid-Dp7y1jLu.js";import{b as m,T as n,a as c}from"./tabulatorData-D9ENxapK.js";import"./messageBox-A1wgNO27.js";import"./dForm-CmpnCynY.js";import"./index-h_fYsjXx.js";import"./dFormModal-DuFw94ex.js";import"./modal-Bq0KGAYX.js";import"./EyeOutlined-B_mcHe4i.js";import"./DeleteOutlined-KSC0BHZd.js";const d=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example of a simple TabulatorGrid with multi-line selection"}),a.jsx("p",{children:"To select multiple rows, hold down ctrl key"}),a.jsx(u,{id:"TabulatorGridSimple",columnDefaults:m,columns:n,dataSet:c,multiSelect:!0,height:500,layout:"fitColumns"})]}),y=t=>a.jsxs(o,{children:[a.jsx("div",{children:a.jsx(d,{})}),a.jsx(r,{}),a.jsx("div",{children:a.jsx(e,{items:[{key:1,label:"Show source",children:a.jsx(l,{language:"javascript",style:t.darkMode?i:s,showLineNumbers:!0,children:`
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
`})}]})})]});export{y as Pageacf69742d175481992179f34b0124caa,y as default};
