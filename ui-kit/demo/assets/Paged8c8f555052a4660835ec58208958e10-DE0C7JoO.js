const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DdqqSCj0.js","assets/default-highlight-9uSTSbTs.js","assets/index-c6xXn22Z.js"])))=>i.map(i=>d[i]);
import{j as a,r as t,_ as e,D as o}from"./index-c6xXn22Z.js";import{T as s}from"./tabulatorGrid-COfwlYwE.js";import{T as i,a as l,f as u}from"./tabulatorData-CVKtEvPi.js";import{P as m,C as n,d,c}from"./darcula-DhxqnDMh.js";import"./modal-CDnUOe4A.js";import"./dForm-CZw76wHB.js";import"./index-CzWkA8Ku.js";import"./dFormModal-C6Y0IuSi.js";import"./modal-CyZhQyS5.js";import"./defaultButtonsProps-B2tjDYAJ.js";import"./index-OjxplGiv.js";const p={id:"TabulatorGridTree",columnDefaults:i,columns:l,dataSet:u,dataTree:!0,height:500,layout:"fitColumns"},T=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example of a hierarchical grid TabulatorGrid"}),a.jsx(s,{...p})]}),h=t.lazy(()=>e(()=>import("./index-DdqqSCj0.js").then(r=>r.ds),__vite__mapDeps([0,1,2])).then(r=>({default:r.Prism}))),B=r=>a.jsxs(m,{children:[a.jsx("div",{children:a.jsx(T,{})}),a.jsx(o,{}),a.jsx("div",{children:a.jsx(n,{items:[{key:1,label:"Show source",children:a.jsx(t.Suspense,{fallback:a.jsx("div",{children:"Loading source..."}),children:a.jsx(h,{language:"tsx",style:r.darkMode?d:c,showLineNumbers:!0,children:`
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
`})})}]})})]});export{B as Paged8c8f555052a4660835ec58208958e10,B as default};
