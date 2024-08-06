import{j as a,D as t}from"./index-CRRPgvdi.js";import{P as s,C as o,h as e,d as i,a as l}from"./docco-COLmzWzy.js";import{T as u}from"./tabulatorGrid-qvzlLlhb.js";import{b as n,d as c,a as d}from"./tabulatorData-_Zp1siT3.js";import"./index-CR3eF2D1.js";import"./dFormModal-Df9g-P_m.js";import"./EyeOutlined-DQsML7KC.js";import"./DeleteOutlined-CzvauNsJ.js";const m={id:"tabulator-grid-persistent",persistence:{columns:["width","visible"]},layout:"fitColumns",columnDefaults:n,columns:c,dataSet:d,height:500},p=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example of a persistent TabulatorGrid"}),a.jsx(u,{...m})]}),G=r=>a.jsxs(s,{children:[a.jsx("div",{children:a.jsx(p,{})}),a.jsx(t,{}),a.jsx("div",{children:a.jsx(o,{items:[{key:1,label:"Show source",children:a.jsx(e,{language:"javascript",style:r.darkMode?i:l,showLineNumbers:!0,children:`
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
`})}]})})]});export{G as Page7aec53163d694dc98cd5ac45a39cecb5,G as default};
