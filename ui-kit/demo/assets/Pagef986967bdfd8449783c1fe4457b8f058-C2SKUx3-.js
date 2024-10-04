const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DwVYDlRJ.js","assets/default-highlight-B_-WNUR5.js","assets/index-DQhjKTAX.js"])))=>i.map(i=>d[i]);
import{j as t,r,_ as s,D as o}from"./index-DQhjKTAX.js";import{T as e}from"./tabulatorGrid-Dx7eIu4n.js";import{T as i,d as l,b as u}from"./tabulatorData-CQpWr8_L.js";import{P as n,C as d,d as m,c}from"./darcula-CRC2cY0A.js";import"./modal-CoK2ultv.js";import"./dForm-CrwAE8Nv.js";import"./index-BoiGZk6f.js";import"./dFormModal-DVkDXjc5.js";import"./modal-DUXxSXRd.js";import"./defaultButtonsProps-C3Ko1m4X.js";import"./index-DuCGSJa9.js";const p={id:"tabulator-grid-persistent",persistence:{columns:["width","visible"]},layout:"fitColumns",columnDefaults:i,columns:l,dataSet:u,height:500},b=()=>t.jsxs(t.Fragment,{children:[t.jsx("h1",{children:"Example of a persistent TabulatorGrid"}),t.jsx(e,{...p})]}),f=r.lazy(()=>s(()=>import("./index-DwVYDlRJ.js").then(a=>a.ds),__vite__mapDeps([0,1,2])).then(a=>({default:a.Prism}))),B=a=>t.jsxs(n,{children:[t.jsx("div",{children:t.jsx(b,{})}),t.jsx(o,{}),t.jsx("div",{children:t.jsx(d,{items:[{key:1,label:"Show source",children:t.jsx(r.Suspense,{fallback:t.jsx("div",{children:"Loading source..."}),children:t.jsx(f,{language:"tsx",style:a.darkMode?m:c,showLineNumbers:!0,children:`
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
`})})}]})})]});export{B as Pagef986967bdfd8449783c1fe4457b8f058,B as default};
