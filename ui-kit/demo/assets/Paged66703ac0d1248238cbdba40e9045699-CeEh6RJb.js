const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-0uqxO8u4.js","assets/default-highlight-AspSjZVb.js","assets/index-BvGUw9C6.js"])))=>i.map(i=>d[i]);
import{j as a,r as o,_ as t,D as e}from"./index-BvGUw9C6.js";import{T as s}from"./tabulatorGrid-YoC4snix.js";import{T as l,a as i,b as u}from"./tabulatorData-7wwdtTXj.js";import{P as m,C as n,d,c as p}from"./darcula-ztsHFdQx.js";import"./modal-DNjBPuEU.js";import"./dForm-CuoIYVbt.js";import"./index-D8Aqgh10.js";import"./dFormModal-DG3y0daw.js";import"./modal-CFEDQlJ_.js";import"./defaultButtonsProps-CC5Jyskk.js";import"./index-Bb6r_g7-.js";const c={id:"TabulatorGridSimple",columnDefaults:l,columns:i,groupBy:"col",dataSet:u,height:500},b=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:'Example of the TabulatorGrid, grouped by "col" field'}),a.jsx(s,{...c})]}),h=o.lazy(()=>t(()=>import("./index-0uqxO8u4.js").then(r=>r.ds),__vite__mapDeps([0,1,2])).then(r=>({default:r.Prism}))),_=r=>a.jsxs(m,{children:[a.jsx("div",{children:a.jsx(b,{})}),a.jsx(e,{}),a.jsx("div",{children:a.jsx(n,{items:[{key:1,label:"Show source",children:a.jsx(o.Suspense,{fallback:a.jsx("div",{children:"Loading source..."}),children:a.jsx(h,{language:"tsx",style:r.darkMode?d:p,showLineNumbers:!0,children:`
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
`})})}]})})]});export{_ as Paged66703ac0d1248238cbdba40e9045699,_ as default};
