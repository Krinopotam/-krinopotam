const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-UHTfNfHP.js","assets/default-highlight-BW2eIfdj.js","assets/index-fLDE7RV8.js"])))=>i.map(i=>d[i]);
import{j as a,r,_ as s,D as o}from"./index-fLDE7RV8.js";import{T as e}from"./tabulatorGrid-BJwlOlPS.js";import{b as i,d as l,a as u}from"./tabulatorData-DJNiiClm.js";import{P as n,C as d,d as m,c}from"./darcula-BAaai0cd.js";import"./mergeButtons-5jDhs16v.js";import"./dForm-DcZj9aOC.js";import"./modal-CJqMGIFI.js";import"./index-Dm8OxE-t.js";import"./dFormModal-BONKQnKH.js";import"./modal-DKiW44iu.js";import"./defaultButtonsProps-BRD3xjmK.js";import"./index-CTvaTwjg.js";const p={id:"tabulator-grid-persistent",persistence:{columns:["width","visible"]},layout:"fitColumns",columnDefaults:i,columns:l,dataSet:u,height:500},b=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example of a persistent TabulatorGrid"}),a.jsx(e,{...p})]}),h=r.lazy(()=>s(()=>import("./index-UHTfNfHP.js").then(t=>t.ds),__vite__mapDeps([0,1,2])).then(t=>({default:t.Prism}))),E=t=>a.jsxs(n,{children:[a.jsx("div",{children:a.jsx(b,{})}),a.jsx(o,{}),a.jsx("div",{children:a.jsx(d,{items:[{key:1,label:"Show source",children:a.jsx(r.Suspense,{fallback:a.jsx("div",{children:"Loading source..."}),children:a.jsx(h,{language:"tsx",style:t.darkMode?m:c,showLineNumbers:!0,children:`
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
`})})}]})})]});export{E as Pageeab89a48144041dcadcb5fc6d2ac63f8,E as default};
