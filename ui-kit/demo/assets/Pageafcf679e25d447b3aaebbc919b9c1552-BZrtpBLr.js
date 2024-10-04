const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-0uqxO8u4.js","assets/default-highlight-AspSjZVb.js","assets/index-BvGUw9C6.js"])))=>i.map(i=>d[i]);
import{j as a,r,_ as s,D as e}from"./index-BvGUw9C6.js";import{T as o}from"./tabulatorGrid-YoC4snix.js";import{T as i,d as l,b as u}from"./tabulatorData-7wwdtTXj.js";import{P as n,C as d,d as m,c}from"./darcula-ztsHFdQx.js";import"./modal-DNjBPuEU.js";import"./dForm-CuoIYVbt.js";import"./index-D8Aqgh10.js";import"./dFormModal-DG3y0daw.js";import"./modal-CFEDQlJ_.js";import"./defaultButtonsProps-CC5Jyskk.js";import"./index-Bb6r_g7-.js";const p={id:"tabulator-grid-persistent",persistence:{columns:["width","visible"]},layout:"fitColumns",columnDefaults:i,columns:l,dataSet:u,height:500},b=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example of a persistent TabulatorGrid"}),a.jsx(o,{...p})]}),h=r.lazy(()=>s(()=>import("./index-0uqxO8u4.js").then(t=>t.ds),__vite__mapDeps([0,1,2])).then(t=>({default:t.Prism}))),B=t=>a.jsxs(n,{children:[a.jsx("div",{children:a.jsx(b,{})}),a.jsx(e,{}),a.jsx("div",{children:a.jsx(d,{items:[{key:1,label:"Show source",children:a.jsx(r.Suspense,{fallback:a.jsx("div",{children:"Loading source..."}),children:a.jsx(h,{language:"tsx",style:t.darkMode?m:c,showLineNumbers:!0,children:`
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
`})})}]})})]});export{B as Pageafcf679e25d447b3aaebbc919b9c1552,B as default};
