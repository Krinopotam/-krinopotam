const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-Cs1HhVBL.js","assets/default-highlight-PwdVU7L6.js","assets/index-CNGiMTrA.js"])))=>i.map(i=>d[i]);
import{j as a,r as o,_ as r,D as e}from"./index-CNGiMTrA.js";import{T as l}from"./tabulatorGrid-C2BdhVJ6.js";import{a as s,T as i,b as u}from"./tabulatorData-BgTLNkAe.js";import{P as n,C as m,d,c}from"./darcula-BjE4oQkF.js";import"./modal-DVHWH6Qh.js";import"./dForm-DmRsT3BS.js";import"./index-u-jxti1R.js";import"./dFormModal-Clfa5FkM.js";import"./modal-BKWxOyv5.js";import"./defaultButtonsProps-YE4_7d0V.js";import"./index-UyGeAaCN.js";const p=[...s],b=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example Tabulator Grid in selectionMode"}),a.jsx(l,{id:"TabulatorGridSimple",columnDefaults:i,columns:p,dataSet:u,height:500,selectionMode:!0,layout:"fitColumns"})]}),h=o.lazy(()=>r(()=>import("./index-Cs1HhVBL.js").then(t=>t.ds),__vite__mapDeps([0,1,2])).then(t=>({default:t.Prism}))),B=t=>a.jsxs(n,{children:[a.jsx("div",{children:a.jsx(b,{})}),a.jsx(e,{}),a.jsx("div",{children:a.jsx(m,{items:[{key:1,label:"Show source",children:a.jsx(o.Suspense,{fallback:a.jsx("div",{children:"Loading source..."}),children:a.jsx(h,{language:"tsx",style:t.darkMode?d:c,showLineNumbers:!0,children:`
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
`})})}]})})]});export{B as Pagee08c397a53e64734af35662a25db97e8,B as default};
