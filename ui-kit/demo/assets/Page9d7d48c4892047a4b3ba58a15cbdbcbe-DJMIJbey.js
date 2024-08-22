import{j as a,D as t}from"./index-C6ePYZvf.js";import{P as o,C as s,h as e,d as i,a as l}from"./docco-YXdAdB7y.js";import{T as u}from"./tabulatorGrid-Dv5XHxcX.js";import{b as n,d as m,a as d}from"./tabulatorData-CzWWk_nF.js";import"./messageBox-BC7Lwadz.js";import"./dForm-8-NeoUsj.js";import"./index-C3U__1M9.js";import"./dFormModal-uxLmPJzu.js";import"./modal-tvTnxo6z.js";import"./EyeOutlined-Dqyyi7nw.js";import"./DeleteOutlined-CKIGzCKu.js";const p={id:"tabulator-grid-persistent",persistence:{columns:["width","visible"]},layout:"fitColumns",columnDefaults:n,columns:m,dataSet:d,height:500},c=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example of a persistent TabulatorGrid"}),a.jsx(u,{...p})]}),B=r=>a.jsxs(o,{children:[a.jsx("div",{children:a.jsx(c,{})}),a.jsx(t,{}),a.jsx("div",{children:a.jsx(s,{items:[{key:1,label:"Show source",children:a.jsx(e,{language:"javascript",style:r.darkMode?i:l,showLineNumbers:!0,children:`
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
`})}]})})]});export{B as Page9d7d48c4892047a4b3ba58a15cbdbcbe,B as default};
