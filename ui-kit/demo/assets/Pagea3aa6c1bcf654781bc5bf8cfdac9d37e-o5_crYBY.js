import{j as a,D as t}from"./index-B_ePoftH.js";import{P as r,C as e,h as l,d as s,a as i}from"./docco-BMPGIKWL.js";import{T as u}from"./tabulatorGrid-BoxMDKyU.js";import{T as m,b as n,a as c}from"./tabulatorData-DSn3rW_I.js";import"./messageBox-BvRGMm6l.js";import"./dForm-CcoZZ7WD.js";import"./index-CFabrBDT.js";import"./dFormModal-M3vltEal.js";import"./modal-CKEVbAO9.js";import"./EyeOutlined-MiG0h1ef.js";import"./DeleteOutlined-RKHBD1Gm.js";const d=[...m],b=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example Tabulator Grid in selectionMode"}),a.jsx(u,{id:"TabulatorGridSimple",columnDefaults:n,columns:d,dataSet:c,height:500,selectionMode:!0,layout:"fitColumns"})]}),k=o=>a.jsxs(r,{children:[a.jsx("div",{children:a.jsx(b,{})}),a.jsx(t,{}),a.jsx("div",{children:a.jsx(e,{items:[{key:1,label:"Show source",children:a.jsx(l,{language:"javascript",style:o.darkMode?s:i,showLineNumbers:!0,children:`
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
`})}]})})]});export{k as Pagea3aa6c1bcf654781bc5bf8cfdac9d37e,k as default};
