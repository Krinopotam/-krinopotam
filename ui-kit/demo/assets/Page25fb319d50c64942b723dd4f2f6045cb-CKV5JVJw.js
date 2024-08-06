import{j as a,D as o}from"./index-Bl-1kopd.js";import{P as t,C as s,h as e,d as l,a as i}from"./docco-DI1KRtYq.js";import{T as u}from"./tabulatorGrid-BopOrzIc.js";import{b as m,T as n,a as d}from"./tabulatorData-_B0aRVvD.js";import"./index-Cz3A2iSd.js";import"./dFormModal-COFbO3rY.js";import"./EyeOutlined-VtVLuKtp.js";import"./DeleteOutlined-C4ZPs8sE.js";const p={id:"TabulatorGridSimple",columnDefaults:m,columns:n,dataSet:d,height:500},c=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example of a simple TabulatorGrid"}),a.jsx(u,{...p})]}),C=r=>a.jsxs(t,{children:[a.jsx("div",{children:a.jsx(c,{})}),a.jsx(o,{}),a.jsx("div",{children:a.jsx(s,{items:[{key:1,label:"Show source",children:a.jsx(e,{language:"javascript",style:r.darkMode?l:i,showLineNumbers:!0,children:`
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
`})}]})})]});export{C as Page25fb319d50c64942b723dd4f2f6045cb,C as default};
