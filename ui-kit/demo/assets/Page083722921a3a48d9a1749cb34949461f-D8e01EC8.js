import{j as a,D as t}from"./index-Bl-1kopd.js";import{P as o,C as e,h as s,d as l,a as i}from"./docco-DI1KRtYq.js";import{T as u}from"./tabulatorGrid-BopOrzIc.js";import{b as m,T as d,f as n}from"./tabulatorData-_B0aRVvD.js";import"./index-Cz3A2iSd.js";import"./dFormModal-COFbO3rY.js";import"./EyeOutlined-VtVLuKtp.js";import"./DeleteOutlined-C4ZPs8sE.js";const c={id:"TabulatorGridTree",columnDefaults:m,columns:d,dataSet:n,dataTree:!0,height:500,layout:"fitColumns"},p=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example of a hierarchical grid TabulatorGrid"}),a.jsx(u,{...c})]}),G=r=>a.jsxs(o,{children:[a.jsx("div",{children:a.jsx(p,{})}),a.jsx(t,{}),a.jsx("div",{children:a.jsx(e,{items:[{key:1,label:"Show source",children:a.jsx(s,{language:"javascript",style:r.darkMode?l:i,showLineNumbers:!0,children:`
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
`})}]})})]});export{G as Page083722921a3a48d9a1749cb34949461f,G as default};
