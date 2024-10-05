const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-aRU0KM20.js","assets/default-highlight-Kf2sMSRd.js","assets/index-BEbJdilr.js"])))=>i.map(i=>d[i]);
import{j as a,r as t,_ as e,D as o}from"./index-BEbJdilr.js";import{T as s}from"./tabulatorGrid-CJPVjLWW.js";import{T as i,a as l,f as u}from"./tabulatorData-BPeH5Pnm.js";import{P as m,C as n,d,c}from"./darcula-DUU8WC9V.js";import"./modal-DZ70cJBI.js";import"./dForm-BUs8TQbJ.js";import"./index-DJAh43lQ.js";import"./dFormModal-DVM0pNWI.js";import"./modal-CKnotMHS.js";import"./defaultButtonsProps-BuloFMuY.js";import"./index-BnCadmn7.js";const p={id:"TabulatorGridTree",columnDefaults:i,columns:l,dataSet:u,dataTree:!0,height:500,layout:"fitColumns"},T=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example of a hierarchical grid TabulatorGrid"}),a.jsx(s,{...p})]}),b=t.lazy(()=>e(()=>import("./index-aRU0KM20.js").then(r=>r.ds),__vite__mapDeps([0,1,2])).then(r=>({default:r.Prism}))),B=r=>a.jsxs(m,{children:[a.jsx("div",{children:a.jsx(T,{})}),a.jsx(o,{}),a.jsx("div",{children:a.jsx(n,{items:[{key:1,label:"Show source",children:a.jsx(t.Suspense,{fallback:a.jsx("div",{children:"Loading source..."}),children:a.jsx(b,{language:"tsx",style:r.darkMode?d:c,showLineNumbers:!0,children:`
import React from 'react';
import {IGridProps, TabulatorGrid} from @krinopotam/ui-kit/tabulatorGrid';
import {TabulatorBaseColumns, TabulatorBaseColumnsDef, TabulatorTreeData} from '../../data/tabulatorData';
const props: IGridProps = {
    id: 'TabulatorGridTree',
    columnDefaults: TabulatorBaseColumnsDef,
    columns: TabulatorBaseColumns,
    dataSet: TabulatorTreeData,
    dataTree: true,
    height: 500,
    layout: 'fitColumns',
};
export const Tree = (): React.JSX.Element => {
    return (
        <>
            <TabulatorGrid {...props} />
        </>
    );
};
`})})}]})})]});export{B as Page8b94b772f4f149adb90622fe77ba1393,B as default};
