const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CGS66BNA.js","assets/default-highlight-CcEIfVOS.js","assets/index-D5qwc_YF.js"])))=>i.map(i=>d[i]);
import{j as a,r as o,_ as t,D as e}from"./index-D5qwc_YF.js";import{T as s}from"./tabulatorGrid-xmrOiwzB.js";import{T as l,a as i,b as u}from"./tabulatorData-A50l7rHb.js";import{P as m,C as n,d,c as p}from"./darcula-DCElNxcl.js";import"./modal-Ba-Ua4rS.js";import"./dForm-D9Yj5CGv.js";import"./index-DfWwWpfW.js";import"./dFormModal-CeNnxCAb.js";import"./modal-BT6G55W2.js";import"./defaultButtonsProps-BAcIqfvm.js";import"./index-DVORizd9.js";const c={id:"TabulatorGridSimple",columnDefaults:l,columns:i,groupBy:"col",dataSet:u,height:500},b=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:'Example of the TabulatorGrid, grouped by "col" field'}),a.jsx(s,{...c})]}),h=o.lazy(()=>t(()=>import("./index-CGS66BNA.js").then(r=>r.ds),__vite__mapDeps([0,1,2])).then(r=>({default:r.Prism}))),_=r=>a.jsxs(m,{children:[a.jsx("div",{children:a.jsx(b,{})}),a.jsx(e,{}),a.jsx("div",{children:a.jsx(n,{items:[{key:1,label:"Show source",children:a.jsx(o.Suspense,{fallback:a.jsx("div",{children:"Loading source..."}),children:a.jsx(h,{language:"tsx",style:r.darkMode?d:p,showLineNumbers:!0,children:`
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
`})})}]})})]});export{_ as Paged0a5049362e24b969198841a52a8f822,_ as default};
