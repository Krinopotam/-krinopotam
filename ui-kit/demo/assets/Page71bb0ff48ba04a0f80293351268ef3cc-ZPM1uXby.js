import{j as a,D as o}from"./index-BRcPwwbH.js";import{P as t,C as s,h as e,d as i,a as l}from"./docco-8ZfxCt3s.js";import{T as m}from"./tabulatorGrid-BC2Pjm80.js";import{b as u,T as n,a as p}from"./tabulatorData-B34ZnO01.js";import"./messageBox-Dgk4xpFW.js";import"./dForm-CIlSW0lt.js";import"./index-Bcoz37Cc.js";import"./dFormModal-TbW2WofU.js";import"./modal-BltPdufQ.js";import"./EyeOutlined-CTsTM-Dg.js";import"./DeleteOutlined-CKLDhuks.js";const d={id:"TabulatorGridSimple",columnDefaults:u,columns:n,dataSet:p,height:500},c=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example of a simple TabulatorGrid"}),a.jsx(m,{...d})]}),B=r=>a.jsxs(t,{children:[a.jsx("div",{children:a.jsx(c,{})}),a.jsx(o,{}),a.jsx("div",{children:a.jsx(s,{items:[{key:1,label:"Show source",children:a.jsx(e,{language:"javascript",style:r.darkMode?i:l,showLineNumbers:!0,children:`
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
`})}]})})]});export{B as Page71bb0ff48ba04a0f80293351268ef3cc,B as default};
