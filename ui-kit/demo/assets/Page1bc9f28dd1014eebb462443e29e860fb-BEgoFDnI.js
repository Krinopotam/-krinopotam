const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-PpfmoLrq.js","assets/default-highlight-CWL5sYcU.js","assets/index-DLyGJszd.js"])))=>i.map(i=>d[i]);
import{j as t,r,_ as e,D as s}from"./index-DLyGJszd.js";import{T as o}from"./tabulatorGrid-rDkNf4Ba.js";import{b as i,d as l,a as u}from"./tabulatorData-8UvrI1Ir.js";import{P as n,C as d,d as m,c as p}from"./darcula-BfEmJZ6D.js";import"./mergeButtons-OmCcH4N9.js";import"./dForm-8o49JMOI.js";import"./modal-CjmvIDqE.js";import"./index-CGhTEYKp.js";import"./dFormModal-L6NStncr.js";import"./modal-BEhuKh3S.js";import"./defaultButtonsProps-D0FGE1rH.js";import"./index-BGgfnEtT.js";const c={id:"tabulator-grid-persistent",persistence:{columns:["width","visible"]},layout:"fitColumns",columnDefaults:i,columns:l,dataSet:u,height:500},b=()=>t.jsxs(t.Fragment,{children:[t.jsx("h1",{children:"Example of a persistent TabulatorGrid"}),t.jsx(o,{...c})]}),h=r.lazy(()=>e(()=>import("./index-PpfmoLrq.js").then(a=>a.ds),__vite__mapDeps([0,1,2])).then(a=>({default:a.Prism}))),E=a=>t.jsxs(n,{children:[t.jsx("div",{children:t.jsx(b,{})}),t.jsx(s,{}),t.jsx("div",{children:t.jsx(d,{items:[{key:1,label:"Show source",children:t.jsx(r.Suspense,{fallback:t.jsx("div",{children:"Loading source..."}),children:t.jsx(h,{language:"tsx",style:a.darkMode?m:p,showLineNumbers:!0,children:`
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
`})})}]})})]});export{E as Page1bc9f28dd1014eebb462443e29e860fb,E as default};
