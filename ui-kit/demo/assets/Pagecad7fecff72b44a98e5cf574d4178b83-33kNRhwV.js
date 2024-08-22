import{j as a,D as r}from"./index-BRcPwwbH.js";import{P as o,C as e,h as l,d as i,a as s}from"./docco-8ZfxCt3s.js";import{T as u}from"./tabulatorGrid-BC2Pjm80.js";import{b as m,T as n,a as c}from"./tabulatorData-B34ZnO01.js";import"./messageBox-Dgk4xpFW.js";import"./dForm-CIlSW0lt.js";import"./index-Bcoz37Cc.js";import"./dFormModal-TbW2WofU.js";import"./modal-BltPdufQ.js";import"./EyeOutlined-CTsTM-Dg.js";import"./DeleteOutlined-CKLDhuks.js";const d=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example of a simple TabulatorGrid with multi-line selection"}),a.jsx("p",{children:"To select multiple rows, hold down ctrl key"}),a.jsx(u,{id:"TabulatorGridSimple",columnDefaults:m,columns:n,dataSet:c,multiSelect:!0,height:500,layout:"fitColumns"})]}),y=t=>a.jsxs(o,{children:[a.jsx("div",{children:a.jsx(d,{})}),a.jsx(r,{}),a.jsx("div",{children:a.jsx(e,{items:[{key:1,label:"Show source",children:a.jsx(l,{language:"javascript",style:t.darkMode?i:s,showLineNumbers:!0,children:`
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
`})}]})})]});export{y as Pagecad7fecff72b44a98e5cf574d4178b83,y as default};
