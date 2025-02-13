const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DY4jbcst.js","assets/default-highlight-Dn6Zkl0a.js","assets/index-CtAjfk3U.js"])))=>i.map(i=>d[i]);
import{j as t,D as l,r as a,_ as m}from"./index-CtAjfk3U.js";import{T as n}from"./tabulatorGrid-Bes3Jt16.js";import{T as u}from"./tabulatorGridField-BMb3oB4p.js";import{a as i,b as s,T as d}from"./tabulatorData-DSy7h6X7.js";import{F as p}from"./buttonsProps-TJQ2MYKB.js";import{P as c,C as b}from"./pageLayout-BYJr8qhp.js";import{d as h,c as f}from"./darcula-BqMdvqtY.js";import"./buttonsRow-DIWV9y5m.js";import"./isArray-Dq3mFmoY.js";import"./messageBox-BEJz6LZv.js";import"./index-CQ36vsgA.js";import"./dFormModal-DBrO8yV5.js";import"./modal-CqlI0vXJ.js";import"./defaultButtonsProps-BFWSm065.js";import"./PlusOutlined-CjmZvIFI.js";import"./index-C2aIs9ND.js";import"./baseField-CLOOMrMa.js";const e={},F={apiRef:e,confirmChanges:!0,height:400,width:600,fieldsProps:{inputs:{component:u,columnDefaults:i,columns:[{title:"Name",field:"name",headerFilter:!0}],headerFilterHidden:!0,autoHeightResize:!0,height:"100%",layout:"fitColumns",onDataFetch:()=>new Promise((o,r)=>{setTimeout(()=>{Math.random()<.5?r({message:"Loading error",code:400}):o({data:s})},2e3)})}},buttons:p(e)},T={columnDefaults:i,columns:d,dataSet:s,layout:"fitColumns",movableColumns:!0,buttonsSize:"middle",editFormProps:F,height:"100%",buttons:{title:{type:"element",title:t.jsx("b",{style:{fontSize:18},children:"Системы"}),position:"left"}}},P=()=>t.jsxs(t.Fragment,{children:[t.jsx("h1",{children:"An example of an editable TabulatorGrid, on the editing form of which there is another asynchronous TabulatorGrid"}),t.jsx(n,{...T}),";"]}),G=a.lazy(()=>m(()=>import("./index-DY4jbcst.js").then(o=>o.dw),__vite__mapDeps([0,1,2])).then(o=>({default:o.Prism}))),E=o=>t.jsxs(c,{children:[t.jsx(P,{}),t.jsx(l,{}),t.jsx("div",{children:t.jsx(b,{items:[{key:1,label:"Show source",children:t.jsx(a.Suspense,{fallback:t.jsx("div",{children:"Loading source..."}),children:t.jsx(G,{language:"tsx",style:o.darkMode?h:f,showLineNumbers:!0,children:`
import React from 'react';
import {TabulatorGrid} from @krinopotam/ui-kit/tabulatorGrid/tabulatorGrid';
import {IGridProps} from @krinopotam/ui-kit/tabulatorGrid/types/tabulatorGridTypes';
import {IDFormModalApi, IDFormModalProps} from @krinopotam/ui-kit/dFormModal/types/dFormModalTypes';
import {ITabulatorGridFieldProps, TabulatorGridField} from @krinopotam/ui-kit/dForm/fields/tabulatorGrid/tabulatorGridField';
import {TabulatorBaseColumns, TabulatorBaseColumnsDef, TabulatorPlainData} from '../../../data/tabulatorData';
import {FormLayoutSwitch} from '../../../common/buttonsProps';
const editFormApi = {} as IDFormModalApi;
const editFormProps: IDFormModalProps = {
    apiRef: editFormApi,
    confirmChanges: true,
    height: 400,
    width: 600,
    fieldsProps: {
        inputs: {
            component: TabulatorGridField,
            columnDefaults: TabulatorBaseColumnsDef,
            columns: [{title: 'Name', field: 'name', headerFilter: true}],
            headerFilterHidden: true,
            autoHeightResize: true,
            height: '100%',
            layout: 'fitColumns',
            onDataFetch: () => {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        const random = Math.random();
                        if (random < 0.5) reject({message: 'Loading error', code: 400});
                        else resolve({data: TabulatorPlainData});
                    }, 2000);
                });
            },
        } satisfies ITabulatorGridFieldProps,
    },
    buttons: FormLayoutSwitch(editFormApi),
};
const mainGridProps: IGridProps = {
    columnDefaults: TabulatorBaseColumnsDef,
    columns: TabulatorBaseColumns,
    dataSet: TabulatorPlainData,
    layout: 'fitColumns',
    movableColumns: true,
    buttonsSize: 'middle',
    editFormProps: editFormProps,
    height: '100%',
    buttons: {title: {type: 'element', title: <b style={{fontSize: 18}}>Системы</b>, position: 'left'}},
};
export const EditableGridWithAsyncTabulatorGrid = (): React.JSX.Element => {
    return (
        <>
            <TabulatorGrid {...mainGridProps} />;
        </>
    );
};
`})})}]})})]});export{E as Pageb75fee88e15b486e9e6b53bce0f798c9,E as default};
