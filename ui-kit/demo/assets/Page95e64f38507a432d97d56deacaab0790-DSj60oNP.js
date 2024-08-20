import{j as a,D as t}from"./index-DhMwsQtd.js";import{P as o,C as s,h as e,d as i,a as l}from"./docco-BR1GjPZn.js";import{T as u}from"./tabulatorGrid-CVRHT1bL.js";import{b as n,d as m,a as d}from"./tabulatorData-rIJmlee8.js";import"./messageBox-CQECnf8I.js";import"./dForm-BvND7aMS.js";import"./index-DNVFzPvX.js";import"./dFormModal-B9s_VGMc.js";import"./modal-eXRNn5Q9.js";import"./EyeOutlined-D8voB2bB.js";import"./DeleteOutlined-BqcAHwXU.js";const p={id:"tabulator-grid-persistent",persistence:{columns:["width","visible"]},layout:"fitColumns",columnDefaults:n,columns:m,dataSet:d,height:500},c=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example of a persistent TabulatorGrid"}),a.jsx(u,{...p})]}),B=r=>a.jsxs(o,{children:[a.jsx("div",{children:a.jsx(c,{})}),a.jsx(t,{}),a.jsx("div",{children:a.jsx(s,{items:[{key:1,label:"Show source",children:a.jsx(e,{language:"javascript",style:r.darkMode?i:l,showLineNumbers:!0,children:`
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
`})}]})})]});export{B as Page95e64f38507a432d97d56deacaab0790,B as default};
