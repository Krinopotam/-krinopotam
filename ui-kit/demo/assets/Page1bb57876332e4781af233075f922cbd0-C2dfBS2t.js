const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DJhjoKXt.js","assets/default-highlight-1wZDEzJ6.js","assets/index-B5poLpDm.js"])))=>i.map(i=>d[i]);
import{j as t,D as e,r,_ as o}from"./index-B5poLpDm.js";import{T as l}from"./tabulatorGrid-igE2XdiX.js";import{b as i,T as s,a as u}from"./tabulatorData-BmpfO34x.js";import{P as m,C as n,d,c}from"./darcula-DszBWugp.js";import"./buttonsRow-aX3TQ5bu.js";import"./dForm-vrGhQ6Lh.js";import"./messageBox-1o2XjDyt.js";import"./index-AMqWlYeY.js";import"./dFormModal-C_QqbNS_.js";import"./modal-tHBgt86o.js";import"./defaultButtonsProps-DtqWhfDr.js";import"./PlusOutlined-Bg-hNKo-.js";import"./index--2ky6TFp.js";const p=()=>t.jsxs(t.Fragment,{children:[t.jsx("h1",{children:"Example of a simple TabulatorGrid with multi-line selection"}),t.jsx("p",{children:"To select multiple rows, hold down ctrl key"}),t.jsx(l,{id:"TabulatorGridSimple",columnDefaults:u,columns:s,dataSet:i,multiSelect:!0,height:500,layout:"fitColumns"})]}),b=r.lazy(()=>o(()=>import("./index-DJhjoKXt.js").then(a=>a.dw),__vite__mapDeps([0,1,2])).then(a=>({default:a.Prism}))),w=a=>t.jsxs(m,{children:[t.jsx("div",{children:t.jsx(p,{})}),t.jsx(e,{}),t.jsx("div",{children:t.jsx(n,{items:[{key:1,label:"Show source",children:t.jsx(r.Suspense,{fallback:t.jsx("div",{children:"Loading source..."}),children:t.jsx(b,{language:"tsx",style:a.darkMode?d:c,showLineNumbers:!0,children:`
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
`})})}]})})]});export{w as Page1bb57876332e4781af233075f922cbd0,w as default};
