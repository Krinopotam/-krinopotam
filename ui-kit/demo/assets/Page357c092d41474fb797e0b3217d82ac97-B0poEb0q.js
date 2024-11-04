const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CaEZq3o6.js","assets/default-highlight-Co1BbaV1.js","assets/index-CzYOWtY3.js"])))=>i.map(i=>d[i]);
import{j as t,r,_ as o,D as s}from"./index-CzYOWtY3.js";import{T as e}from"./tabulatorGrid-CHQlxMIO.js";import{a as i,d as l,T as u}from"./tabulatorData-A6MdMGe-.js";import{P as n,C as m,d,c as p}from"./darcula-fwW_2Y8a.js";import"./buttonsRow-NOziNv-G.js";import"./dForm-oEAd0w94.js";import"./modal-BG6C0-ZR.js";import"./index-DX1MZAsy.js";import"./dFormModal-6yYFB7nU.js";import"./modal-Bv76__XP.js";import"./defaultButtonsProps-DlxVY7Az.js";import"./PlusOutlined-BAR0uPLn.js";import"./index-CCx_ORm0.js";const c={id:"tabulator-grid-persistent",persistence:{columns:["width","visible"]},layout:"fitColumns",columnDefaults:i,columns:l,dataSet:u,height:500},b=()=>t.jsxs(t.Fragment,{children:[t.jsx("h1",{children:"Example of a persistent TabulatorGrid"}),t.jsx(e,{...c})]}),h=r.lazy(()=>o(()=>import("./index-CaEZq3o6.js").then(a=>a.ds),__vite__mapDeps([0,1,2])).then(a=>({default:a.Prism}))),S=a=>t.jsxs(n,{children:[t.jsx("div",{children:t.jsx(b,{})}),t.jsx(s,{}),t.jsx("div",{children:t.jsx(m,{items:[{key:1,label:"Show source",children:t.jsx(r.Suspense,{fallback:t.jsx("div",{children:"Loading source..."}),children:t.jsx(h,{language:"tsx",style:a.darkMode?d:p,showLineNumbers:!0,children:`
import React from 'react';
import {IGridProps, TabulatorGrid} from @krinopotam/ui-kit/tabulatorGrid';
import {TabulatorBaseColumnsDef, TabulatorBaseGroupedColumns, TabulatorPlainData} from '../../data/tabulatorData';
const props: IGridProps = {
    id: 'tabulator-grid-persistent',
    persistence: {columns: ['width', 'visible']},
    layout:'fitColumns',
    columnDefaults: TabulatorBaseColumnsDef,
    columns: TabulatorBaseGroupedColumns,
    dataSet: TabulatorPlainData,
    height: 500,
};
export const Persistence = (): React.JSX.Element => {
    return (
        <>
            <TabulatorGrid {...props} />
        </>
    );
};
`})})}]})})]});export{S as Page357c092d41474fb797e0b3217d82ac97,S as default};
