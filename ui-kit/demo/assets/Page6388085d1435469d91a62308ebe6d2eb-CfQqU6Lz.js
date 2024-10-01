const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-Co9PZaPl.js","assets/default-highlight-DvtBkdhg.js","assets/index-Dv3qFdjW.js"])))=>i.map(i=>d[i]);
import{j as a,r as o,_ as r,D as e}from"./index-Dv3qFdjW.js";import{T as l}from"./tabulatorGrid-COGwSkTc.js";import{a as s,T as i,b as u}from"./tabulatorData-LW4kGiGF.js";import{P as n,C as m,d,c}from"./darcula-MphVyLu8.js";import"./modal-Bp_ASPGm.js";import"./dForm-QxcKLYQQ.js";import"./index-8gx4Y1o-.js";import"./dFormModal-BUbiUSeF.js";import"./modal-DoluWT5v.js";import"./defaultButtonsProps-DchoBAIh.js";import"./index-CWJIcpxl.js";const p=[...s],b=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example Tabulator Grid in selectionMode"}),a.jsx(l,{id:"TabulatorGridSimple",columnDefaults:i,columns:p,dataSet:u,height:500,selectionMode:!0,layout:"fitColumns"})]}),h=o.lazy(()=>r(()=>import("./index-Co9PZaPl.js").then(t=>t.ds),__vite__mapDeps([0,1,2])).then(t=>({default:t.Prism}))),B=t=>a.jsxs(n,{children:[a.jsx("div",{children:a.jsx(b,{})}),a.jsx(e,{}),a.jsx("div",{children:a.jsx(m,{items:[{key:1,label:"Show source",children:a.jsx(o.Suspense,{fallback:a.jsx("div",{children:"Loading source..."}),children:a.jsx(h,{language:"tsx",style:t.darkMode?d:c,showLineNumbers:!0,children:`
import React from 'react';
import {TabulatorGrid} from @krinopotam/ui-kit/tabulatorGrid';
import {TabulatorBaseColumns, TabulatorBaseColumnsDef, TabulatorPlainData} from '../../data/tabulatorData';
import {ITabulatorColumn} from @krinopotam/ui-kit/tabulatorBase';
const columns: ITabulatorColumn[] = [...TabulatorBaseColumns];
export const SelectionMode = (): React.JSX.Element => {
    return (
        <>
            <TabulatorGrid
                id={'TabulatorGridSimple'}
                columnDefaults={TabulatorBaseColumnsDef}
                columns={columns}
                dataSet={TabulatorPlainData}
                height={500}
                selectionMode={true}
                layout={'fitColumns'}
            />
        </>
    );
};
`})})}]})})]});export{B as Page6388085d1435469d91a62308ebe6d2eb,B as default};
