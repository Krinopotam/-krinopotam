import{j as a,D as o}from"./index-DhMwsQtd.js";import{P as t,C as s,h as e,d as i,a as l}from"./docco-BR1GjPZn.js";import{T as m}from"./tabulatorGrid-CVRHT1bL.js";import{b as u,T as n,a as p}from"./tabulatorData-rIJmlee8.js";import"./messageBox-CQECnf8I.js";import"./dForm-BvND7aMS.js";import"./index-DNVFzPvX.js";import"./dFormModal-B9s_VGMc.js";import"./modal-eXRNn5Q9.js";import"./EyeOutlined-D8voB2bB.js";import"./DeleteOutlined-BqcAHwXU.js";const d={id:"TabulatorGridSimple",columnDefaults:u,columns:n,dataSet:p,height:500},c=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example of a simple TabulatorGrid"}),a.jsx(m,{...d})]}),B=r=>a.jsxs(t,{children:[a.jsx("div",{children:a.jsx(c,{})}),a.jsx(o,{}),a.jsx("div",{children:a.jsx(s,{items:[{key:1,label:"Show source",children:a.jsx(e,{language:"javascript",style:r.darkMode?i:l,showLineNumbers:!0,children:`
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
`})}]})})]});export{B as Pageb06e5974cf78406ebd527d6a89e8d4ab,B as default};
