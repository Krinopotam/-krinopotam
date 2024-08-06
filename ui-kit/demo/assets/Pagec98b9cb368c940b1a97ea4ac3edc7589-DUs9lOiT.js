import{j as a,D as t}from"./index-CRRPgvdi.js";import{P as e,C as o,h as s,d as l,a as i}from"./docco-COLmzWzy.js";import{T as u}from"./tabulatorGrid-qvzlLlhb.js";import{b as m,T as c,f as d}from"./tabulatorData-_Zp1siT3.js";import"./index-CR3eF2D1.js";import"./dFormModal-Df9g-P_m.js";import"./EyeOutlined-DQsML7KC.js";import"./DeleteOutlined-CzvauNsJ.js";const n={id:"TabulatorGridTree",columnDefaults:m,columns:c,dataSet:d,dataTree:!0,height:500,layout:"fitColumns"},p=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example of a hierarchical grid TabulatorGrid"}),a.jsx(u,{...n})]}),G=r=>a.jsxs(e,{children:[a.jsx("div",{children:a.jsx(p,{})}),a.jsx(t,{}),a.jsx("div",{children:a.jsx(o,{items:[{key:1,label:"Show source",children:a.jsx(s,{language:"javascript",style:r.darkMode?l:i,showLineNumbers:!0,children:`
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
`})}]})})]});export{G as Pagec98b9cb368c940b1a97ea4ac3edc7589,G as default};
