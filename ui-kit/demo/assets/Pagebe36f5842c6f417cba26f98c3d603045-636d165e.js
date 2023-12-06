import{j as a,D as r}from"./index-0409158c.js";import{P as e,C as l,S as s,d as i,a as u}from"./docco-fa9c9fcc.js";import{T as n}from"./tabulatorGrid-22da0f8d.js";import{a as m,T as c,b as d}from"./tabulatorData-fbb7c043.js";import"./index-da9b0dd9.js";import"./dFormModal-235aed86.js";import"./EyeOutlined-c44a8289.js";import"./DeleteOutlined-75656d28.js";const b=[...m],p=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example Tabulator Grid in selectionMode"}),a.jsx(n,{id:"TabulatorGridSimple",columnDefaults:c,columns:b,dataSet:d,height:500,selectionMode:!0,layout:"fitColumns"})]}),g=o=>{const t=`
import React from 'react';
import {TabulatorGrid} from @krinopotam/ui-kit/tabulatorGrid';
import {TabulatorBaseColumns, TabulatorBaseColumnsDef, TabulatorPlainData} from '../../data/tabulatorData';
import {ITabulatorColumn} from @krinopotam/ui-kit/tabulatorBase';
const columns: ITabulatorColumn[] = [...TabulatorBaseColumns];
export const SelectionMode = (): React.JSX.Element => {
    return (
        <>
            <TabulatorGrid
                id={'TabulatorGridSimple'}
                columnDefaults={TabulatorBaseColumnsDef}
                columns={columns}
                dataSet={TabulatorPlainData}
                height={500}
                selectionMode={true}
                layout={'fitColumns'}
            />
        </>
    );
};
`;return a.jsxs(e,{children:[a.jsx("div",{children:a.jsx(p,{})}),a.jsx(r,{}),a.jsx("div",{children:a.jsx(l,{items:[{key:1,label:"Show source",children:a.jsx(s,{language:"javascript",style:o.darkMode?i:u,showLineNumbers:!0,children:t})}]})})]})};export{g as Pagebe36f5842c6f417cba26f98c3d603045,g as default};
