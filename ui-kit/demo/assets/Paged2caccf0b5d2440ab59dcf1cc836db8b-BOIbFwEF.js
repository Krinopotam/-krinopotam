const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DJhjoKXt.js","assets/default-highlight-1wZDEzJ6.js","assets/index-B5poLpDm.js"])))=>i.map(i=>d[i]);
import{j as a,D as t,r as o,_ as e}from"./index-B5poLpDm.js";import{T as s}from"./tabulatorGrid-igE2XdiX.js";import{b as l,T as i,a as u}from"./tabulatorData-BmpfO34x.js";import{P as m,C as n,d,c}from"./darcula-DszBWugp.js";import"./buttonsRow-aX3TQ5bu.js";import"./dForm-vrGhQ6Lh.js";import"./messageBox-1o2XjDyt.js";import"./index-AMqWlYeY.js";import"./dFormModal-C_QqbNS_.js";import"./modal-tHBgt86o.js";import"./defaultButtonsProps-DtqWhfDr.js";import"./PlusOutlined-Bg-hNKo-.js";import"./index--2ky6TFp.js";const p={id:"TabulatorGridSimple",columnDefaults:u,columns:i,groupBy:"col",dataSet:l,height:500},b=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:'Example of the TabulatorGrid, grouped by "col" field'}),a.jsx(s,{...p})]}),h=o.lazy(()=>e(()=>import("./index-DJhjoKXt.js").then(r=>r.dw),__vite__mapDeps([0,1,2])).then(r=>({default:r.Prism}))),k=r=>a.jsxs(m,{children:[a.jsx("div",{children:a.jsx(b,{})}),a.jsx(t,{}),a.jsx("div",{children:a.jsx(n,{items:[{key:1,label:"Show source",children:a.jsx(o.Suspense,{fallback:a.jsx("div",{children:"Loading source..."}),children:a.jsx(h,{language:"tsx",style:r.darkMode?d:c,showLineNumbers:!0,children:`
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
`})})}]})})]});export{k as Paged2caccf0b5d2440ab59dcf1cc836db8b,k as default};
