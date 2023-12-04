import{j as a,D as s}from"./index-23555c5c.js";import{P as o,C as e,S as i,d as l,a as u}from"./docco-c24c9fde.js";import{T as n}from"./tabulatorGrid-1186b9ea.js";import{T as m,d,b as c}from"./tabulatorData-2c657cfc.js";import"./index-e5590f2c.js";import"./dFormModal-9d6a497b.js";import"./EyeOutlined-cf850273.js";import"./DeleteOutlined-6d7b808b.js";const p={id:"tabulator-grid-persistent",persistence:{columns:["width","visible"]},layout:"fitColumns",columnDefaults:m,columns:d,dataSet:c,height:500},b=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example of a persistent TabulatorGrid"}),a.jsx(n,{...p})]}),G=t=>{const r=`
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
`;return a.jsxs(o,{children:[a.jsx("div",{children:a.jsx(b,{})}),a.jsx(s,{}),a.jsx("div",{children:a.jsx(e,{items:[{key:1,label:"Show source",children:a.jsx(i,{language:"javascript",style:t.darkMode?l:u,showLineNumbers:!0,children:r})}]})})]})};export{G as Pageb7c73798ec9440c683936ef3dea64540,G as default};
