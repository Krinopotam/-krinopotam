import{j as a,D as r}from"./index-DhMwsQtd.js";import{P as o,C as e,h as l,d as i,a as s}from"./docco-BR1GjPZn.js";import{T as u}from"./tabulatorGrid-CVRHT1bL.js";import{b as m,T as n,a as c}from"./tabulatorData-rIJmlee8.js";import"./messageBox-CQECnf8I.js";import"./dForm-BvND7aMS.js";import"./index-DNVFzPvX.js";import"./dFormModal-B9s_VGMc.js";import"./modal-eXRNn5Q9.js";import"./EyeOutlined-D8voB2bB.js";import"./DeleteOutlined-BqcAHwXU.js";const d=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example of a simple TabulatorGrid with multi-line selection"}),a.jsx("p",{children:"To select multiple rows, hold down ctrl key"}),a.jsx(u,{id:"TabulatorGridSimple",columnDefaults:m,columns:n,dataSet:c,multiSelect:!0,height:500,layout:"fitColumns"})]}),y=t=>a.jsxs(o,{children:[a.jsx("div",{children:a.jsx(d,{})}),a.jsx(r,{}),a.jsx("div",{children:a.jsx(e,{items:[{key:1,label:"Show source",children:a.jsx(l,{language:"javascript",style:t.darkMode?i:s,showLineNumbers:!0,children:`
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
`})}]})})]});export{y as Page674fe894546f483dae753348b3a39814,y as default};
