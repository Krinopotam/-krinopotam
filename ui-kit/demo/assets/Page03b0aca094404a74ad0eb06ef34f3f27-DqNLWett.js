const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-C2SUEjL0.js","assets/default-highlight-BDFjN1OP.js","assets/index-CgBeyb-e.js"])))=>i.map(i=>d[i]);
import{j as a,r as o,_ as r,D as e}from"./index-CgBeyb-e.js";import{T as l}from"./tabulatorGrid-DAyVcvcb.js";import{a as s,T as i,b as u}from"./tabulatorData-CNf7XRJ4.js";import{P as n,C as m,d,c}from"./darcula-Bm4NDPn1.js";import"./modal-hi51mlNB.js";import"./dForm-B-6Y2TlM.js";import"./index-Birbnh4n.js";import"./dFormModal-B-TtMmSz.js";import"./modal-D01YMXTL.js";import"./defaultButtonsProps-BjCvvsD6.js";import"./index-blBfG32B.js";const p=[...s],b=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example Tabulator Grid in selectionMode"}),a.jsx(l,{id:"TabulatorGridSimple",columnDefaults:i,columns:p,dataSet:u,height:500,selectionMode:!0,layout:"fitColumns"})]}),f=o.lazy(()=>r(()=>import("./index-C2SUEjL0.js").then(t=>t.ds),__vite__mapDeps([0,1,2])).then(t=>({default:t.Prism}))),B=t=>a.jsxs(n,{children:[a.jsx("div",{children:a.jsx(b,{})}),a.jsx(e,{}),a.jsx("div",{children:a.jsx(m,{items:[{key:1,label:"Show source",children:a.jsx(o.Suspense,{fallback:a.jsx("div",{children:"Loading source..."}),children:a.jsx(f,{language:"tsx",style:t.darkMode?d:c,showLineNumbers:!0,children:`
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
`})})}]})})]});export{B as Page03b0aca094404a74ad0eb06ef34f3f27,B as default};
