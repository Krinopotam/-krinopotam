import{j as a,D as t}from"./index-DpZR-xIT.js";import{P as s,C as o,h as e,d as i,a as l}from"./docco-D-QQhIhf.js";import{T as u}from"./tabulatorGrid-BKCAj5bC.js";import{b as n,d as m,a as d}from"./tabulatorData-ursBOjs5.js";import"./dForm-BuCntjeb.js";import"./dFormModal-CQWCZgYu.js";import"./EyeOutlined-B5uh8JXW.js";import"./DeleteOutlined-ht5ukLlu.js";const c={id:"tabulator-grid-persistent",persistence:{columns:["width","visible"]},layout:"fitColumns",columnDefaults:n,columns:m,dataSet:d,height:500},p=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example of a persistent TabulatorGrid"}),a.jsx(u,{...c})]}),G=r=>a.jsxs(s,{children:[a.jsx("div",{children:a.jsx(p,{})}),a.jsx(t,{}),a.jsx("div",{children:a.jsx(o,{items:[{key:1,label:"Show source",children:a.jsx(e,{language:"javascript",style:r.darkMode?i:l,showLineNumbers:!0,children:`
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
`})}]})})]});export{G as Pageea42b3b2c2e8467ea1fe78c7299fb582,G as default};
