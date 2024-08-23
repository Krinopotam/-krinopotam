import{j as a,D as t}from"./index-B_ePoftH.js";import{P as o,C as s,h as e,d as i,a as l}from"./docco-BMPGIKWL.js";import{T as u}from"./tabulatorGrid-BoxMDKyU.js";import{b as n,d as m,a as d}from"./tabulatorData-DSn3rW_I.js";import"./messageBox-BvRGMm6l.js";import"./dForm-CcoZZ7WD.js";import"./index-CFabrBDT.js";import"./dFormModal-M3vltEal.js";import"./modal-CKEVbAO9.js";import"./EyeOutlined-MiG0h1ef.js";import"./DeleteOutlined-RKHBD1Gm.js";const p={id:"tabulator-grid-persistent",persistence:{columns:["width","visible"]},layout:"fitColumns",columnDefaults:n,columns:m,dataSet:d,height:500},c=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example of a persistent TabulatorGrid"}),a.jsx(u,{...p})]}),B=r=>a.jsxs(o,{children:[a.jsx("div",{children:a.jsx(c,{})}),a.jsx(t,{}),a.jsx("div",{children:a.jsx(s,{items:[{key:1,label:"Show source",children:a.jsx(e,{language:"javascript",style:r.darkMode?i:l,showLineNumbers:!0,children:`
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
`})}]})})]});export{B as Page8ac4d05e40e94491ad875b6489b35863,B as default};
