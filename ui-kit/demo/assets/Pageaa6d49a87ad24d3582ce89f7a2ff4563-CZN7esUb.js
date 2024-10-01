const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-Co9PZaPl.js","assets/default-highlight-DvtBkdhg.js","assets/index-Dv3qFdjW.js"])))=>i.map(i=>d[i]);
import{j as a,r,_ as s,D as o}from"./index-Dv3qFdjW.js";import{T as e}from"./tabulatorGrid-COGwSkTc.js";import{T as i,d as l,b as u}from"./tabulatorData-LW4kGiGF.js";import{P as n,C as d,d as m,c}from"./darcula-MphVyLu8.js";import"./modal-Bp_ASPGm.js";import"./dForm-QxcKLYQQ.js";import"./index-8gx4Y1o-.js";import"./dFormModal-BUbiUSeF.js";import"./modal-DoluWT5v.js";import"./defaultButtonsProps-DchoBAIh.js";import"./index-CWJIcpxl.js";const p={id:"tabulator-grid-persistent",persistence:{columns:["width","visible"]},layout:"fitColumns",columnDefaults:i,columns:l,dataSet:u,height:500},b=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example of a persistent TabulatorGrid"}),a.jsx(e,{...p})]}),h=r.lazy(()=>s(()=>import("./index-Co9PZaPl.js").then(t=>t.ds),__vite__mapDeps([0,1,2])).then(t=>({default:t.Prism}))),B=t=>a.jsxs(n,{children:[a.jsx("div",{children:a.jsx(b,{})}),a.jsx(o,{}),a.jsx("div",{children:a.jsx(d,{items:[{key:1,label:"Show source",children:a.jsx(r.Suspense,{fallback:a.jsx("div",{children:"Loading source..."}),children:a.jsx(h,{language:"tsx",style:t.darkMode?m:c,showLineNumbers:!0,children:`
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
`})})}]})})]});export{B as Pageaa6d49a87ad24d3582ce89f7a2ff4563,B as default};
