import{j as a,D as t}from"./index-DhMwsQtd.js";import{P as o,C as e,h as s,d as i,a as l}from"./docco-BR1GjPZn.js";import{T as u}from"./tabulatorGrid-CVRHT1bL.js";import{b as m,T as n,f as d}from"./tabulatorData-rIJmlee8.js";import"./messageBox-CQECnf8I.js";import"./dForm-BvND7aMS.js";import"./index-DNVFzPvX.js";import"./dFormModal-B9s_VGMc.js";import"./modal-eXRNn5Q9.js";import"./EyeOutlined-D8voB2bB.js";import"./DeleteOutlined-BqcAHwXU.js";const c={id:"TabulatorGridTree",columnDefaults:m,columns:n,dataSet:d,dataTree:!0,height:500,layout:"fitColumns"},p=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example of a hierarchical grid TabulatorGrid"}),a.jsx(u,{...c})]}),P=r=>a.jsxs(o,{children:[a.jsx("div",{children:a.jsx(p,{})}),a.jsx(t,{}),a.jsx("div",{children:a.jsx(e,{items:[{key:1,label:"Show source",children:a.jsx(s,{language:"javascript",style:r.darkMode?i:l,showLineNumbers:!0,children:`
import React from 'react';
import {IGridProps, TabulatorGrid} from @krinopotam/ui-kit/tabulatorGrid';
import {TabulatorBaseColumns, TabulatorBaseColumnsDef, TabulatorTreeData} from '../../data/tabulatorData';
const props: IGridProps = {
    id: 'TabulatorGridTree',
    columnDefaults: TabulatorBaseColumnsDef,
    columns: TabulatorBaseColumns,
    dataSet: TabulatorTreeData,
    dataTree: true,
    height: 500,
    layout: 'fitColumns',
};
export const Tree = (): React.JSX.Element => {
    return (
        <>
            <TabulatorGrid {...props} />
        </>
    );
};
`})}]})})]});export{P as Page70a142f548164361bc947bb655c7527a,P as default};
