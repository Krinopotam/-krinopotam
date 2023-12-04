import{j as a,D as r}from"./index-7abbb94e.js";import{P as e,C as l,S as s,d as i,a as u}from"./docco-6bf51e55.js";import{T as n}from"./tabulatorGrid-7e279c75.js";import{a as m,T as d,b as c}from"./tabulatorData-c70d6b23.js";import"./index-22f8d441.js";import"./dFormModal-d77fb2bf.js";import"./EyeOutlined-4b705a51.js";import"./DeleteOutlined-038f7985.js";const b=[...m],p=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example Tabulator Grid in selectionMode"}),a.jsx(n,{id:"TabulatorGridSimple",columnDefaults:d,columns:b,dataSet:c,height:500,selectionMode:!0,layout:"fitColumns"})]}),g=o=>{const t=`
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
`;return a.jsxs(e,{children:[a.jsx("div",{children:a.jsx(p,{})}),a.jsx(r,{}),a.jsx("div",{children:a.jsx(l,{items:[{key:1,label:"Show source",children:a.jsx(s,{language:"javascript",style:o.darkMode?i:u,showLineNumbers:!0,children:t})}]})})]})};export{g as Pageaab519d931e94a838796d0be3c604388,g as default};
