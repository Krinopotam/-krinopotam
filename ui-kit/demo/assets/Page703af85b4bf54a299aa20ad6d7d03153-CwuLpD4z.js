const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-aRU0KM20.js","assets/default-highlight-Kf2sMSRd.js","assets/index-BEbJdilr.js"])))=>i.map(i=>d[i]);
import{j as a,r as o,_ as t,D as e}from"./index-BEbJdilr.js";import{T as s}from"./tabulatorGrid-CJPVjLWW.js";import{T as l,a as i,b as u}from"./tabulatorData-BPeH5Pnm.js";import{P as m,C as n,d,c as p}from"./darcula-DUU8WC9V.js";import"./modal-DZ70cJBI.js";import"./dForm-BUs8TQbJ.js";import"./index-DJAh43lQ.js";import"./dFormModal-DVM0pNWI.js";import"./modal-CKnotMHS.js";import"./defaultButtonsProps-BuloFMuY.js";import"./index-BnCadmn7.js";const c={id:"TabulatorGridSimple",columnDefaults:l,columns:i,groupBy:"col",dataSet:u,height:500},b=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:'Example of the TabulatorGrid, grouped by "col" field'}),a.jsx(s,{...c})]}),h=o.lazy(()=>t(()=>import("./index-aRU0KM20.js").then(r=>r.ds),__vite__mapDeps([0,1,2])).then(r=>({default:r.Prism}))),_=r=>a.jsxs(m,{children:[a.jsx("div",{children:a.jsx(b,{})}),a.jsx(e,{}),a.jsx("div",{children:a.jsx(n,{items:[{key:1,label:"Show source",children:a.jsx(o.Suspense,{fallback:a.jsx("div",{children:"Loading source..."}),children:a.jsx(h,{language:"tsx",style:r.darkMode?d:p,showLineNumbers:!0,children:`
import React from 'react';
import {IGridProps, TabulatorGrid} from @krinopotam/ui-kit/tabulatorGrid';
import {TabulatorBaseColumns, TabulatorBaseColumnsDef, TabulatorPlainData} from '../../data/tabulatorData';
const props: IGridProps = {
    id: 'TabulatorGridSimple',
    columnDefaults: TabulatorBaseColumnsDef,
    columns: TabulatorBaseColumns,
    groupBy: 'col',
    dataSet: TabulatorPlainData,
    height: 500,
};
export const Simple = (): React.JSX.Element => {
    return (
        <>
            <TabulatorGrid {...props} />
        </>
    );
};
`})})}]})})]});export{_ as Page703af85b4bf54a299aa20ad6d7d03153,_ as default};