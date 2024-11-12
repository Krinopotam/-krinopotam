const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CyxzPzPK.js","assets/default-highlight-BA4pzhEA.js","assets/index-Cpuh8Ebd.js"])))=>i.map(i=>d[i]);
import{j as a,r,_ as o,D as s}from"./index-Cpuh8Ebd.js";import{T as e}from"./tabulatorGrid-Da6sMqw5.js";import{a as i,d as l,T as u}from"./tabulatorData-BJFebvAp.js";import{P as n,C as m,d,c}from"./darcula-hcLbMwDB.js";import"./buttonsRow-MpDC2SN8.js";import"./dForm-t1Ccos62.js";import"./modal-g5li7x1J.js";import"./index-DNdv76Wr.js";import"./dFormModal-iIvnEeWS.js";import"./modal-DJlUd0AK.js";import"./defaultButtonsProps-D12Yt--i.js";import"./PlusOutlined-BTCZ_JD0.js";import"./index-D9n8SM2Y.js";const p={id:"tabulator-grid-persistent",persistence:{columns:["width","visible"]},layout:"fitColumns",columnDefaults:i,columns:l,dataSet:u,height:500},b=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example of a persistent TabulatorGrid"}),a.jsx(e,{...p})]}),h=r.lazy(()=>o(()=>import("./index-CyxzPzPK.js").then(t=>t.ds),__vite__mapDeps([0,1,2])).then(t=>({default:t.Prism}))),S=t=>a.jsxs(n,{children:[a.jsx("div",{children:a.jsx(b,{})}),a.jsx(s,{}),a.jsx("div",{children:a.jsx(m,{items:[{key:1,label:"Show source",children:a.jsx(r.Suspense,{fallback:a.jsx("div",{children:"Loading source..."}),children:a.jsx(h,{language:"tsx",style:t.darkMode?d:c,showLineNumbers:!0,children:`
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
`})})}]})})]});export{S as Page7d243aac108d46e5a51c5b1a26bb09c2,S as default};
