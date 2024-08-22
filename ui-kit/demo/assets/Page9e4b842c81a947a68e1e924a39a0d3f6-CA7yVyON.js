import{j as a,D as o}from"./index-OT-fUFlw.js";import{P as t,C as s,h as e,d as i,a as l}from"./docco-Dp5WB1My.js";import{T as m}from"./tabulatorGrid-BdayD2VY.js";import{b as u,T as n,a as p}from"./tabulatorData-Bua633a3.js";import"./messageBox-deXCqDea.js";import"./dForm-CXdkNth1.js";import"./index-BzsQSyIK.js";import"./dFormModal-Brw-56ya.js";import"./modal-Cu7Nzp09.js";import"./EyeOutlined-BLUlGsNj.js";import"./DeleteOutlined-BFYA2MP_.js";const d={id:"TabulatorGridSimple",columnDefaults:u,columns:n,dataSet:p,height:500},c=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example of a simple TabulatorGrid"}),a.jsx(m,{...d})]}),B=r=>a.jsxs(t,{children:[a.jsx("div",{children:a.jsx(c,{})}),a.jsx(o,{}),a.jsx("div",{children:a.jsx(s,{items:[{key:1,label:"Show source",children:a.jsx(e,{language:"javascript",style:r.darkMode?i:l,showLineNumbers:!0,children:`
import React from 'react';
import {IGridProps, TabulatorGrid} from @krinopotam/ui-kit/tabulatorGrid';
import {TabulatorBaseColumns, TabulatorBaseColumnsDef, TabulatorPlainData} from '../../data/tabulatorData';
const props: IGridProps = {
    id: 'TabulatorGridSimple',
    columnDefaults: TabulatorBaseColumnsDef,
    columns: TabulatorBaseColumns,
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
`})}]})})]});export{B as Page9e4b842c81a947a68e1e924a39a0d3f6,B as default};
