import{j as a,D as t}from"./index-zp8t8nBI.js";import{P as s,C as o,h as e,d as i,a as l}from"./docco-qM7CaTt5.js";import{T as u}from"./tabulatorGrid-LGmx6kUr.js";import{b as n,d,a as m}from"./tabulatorData-BJ5jlgxT.js";import"./dForm-CtyM7E66.js";import"./dFormModal-DQXWVkWJ.js";import"./EyeOutlined-B9jVFvSG.js";import"./DeleteOutlined-oAPYnq6c.js";const c={id:"tabulator-grid-persistent",persistence:{columns:["width","visible"]},layout:"fitColumns",columnDefaults:n,columns:d,dataSet:m,height:500},p=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example of a persistent TabulatorGrid"}),a.jsx(u,{...c})]}),G=r=>a.jsxs(s,{children:[a.jsx("div",{children:a.jsx(p,{})}),a.jsx(t,{}),a.jsx("div",{children:a.jsx(o,{items:[{key:1,label:"Show source",children:a.jsx(e,{language:"javascript",style:r.darkMode?i:l,showLineNumbers:!0,children:`
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
`})}]})})]});export{G as Page8d103f715f5e41fab829d5f14d1c9dec,G as default};
