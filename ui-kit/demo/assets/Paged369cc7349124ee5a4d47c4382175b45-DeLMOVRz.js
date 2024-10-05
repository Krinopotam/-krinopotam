const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DdqqSCj0.js","assets/default-highlight-9uSTSbTs.js","assets/index-c6xXn22Z.js"])))=>i.map(i=>d[i]);
import{j as a,r as o,_ as t,D as e}from"./index-c6xXn22Z.js";import{T as s}from"./tabulatorGrid-COfwlYwE.js";import{T as l,a as i,b as u}from"./tabulatorData-CVKtEvPi.js";import{P as m,C as n,d,c}from"./darcula-DhxqnDMh.js";import"./modal-CDnUOe4A.js";import"./dForm-CZw76wHB.js";import"./index-CzWkA8Ku.js";import"./dFormModal-C6Y0IuSi.js";import"./modal-CyZhQyS5.js";import"./defaultButtonsProps-B2tjDYAJ.js";import"./index-OjxplGiv.js";const p={id:"TabulatorGridSimple",columnDefaults:l,columns:i,groupBy:"col",dataSet:u,height:500},b=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:'Example of the TabulatorGrid, grouped by "col" field'}),a.jsx(s,{...p})]}),h=o.lazy(()=>t(()=>import("./index-DdqqSCj0.js").then(r=>r.ds),__vite__mapDeps([0,1,2])).then(r=>({default:r.Prism}))),_=r=>a.jsxs(m,{children:[a.jsx("div",{children:a.jsx(b,{})}),a.jsx(e,{}),a.jsx("div",{children:a.jsx(n,{items:[{key:1,label:"Show source",children:a.jsx(o.Suspense,{fallback:a.jsx("div",{children:"Loading source..."}),children:a.jsx(h,{language:"tsx",style:r.darkMode?d:c,showLineNumbers:!0,children:`
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
`})})}]})})]});export{_ as Paged369cc7349124ee5a4d47c4382175b45,_ as default};
