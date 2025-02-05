const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DJhjoKXt.js","assets/default-highlight-1wZDEzJ6.js","assets/index-B5poLpDm.js"])))=>i.map(i=>d[i]);
import{j as t,D as l,r as a,_ as n}from"./index-B5poLpDm.js";import{T as m}from"./tabulatorGrid-igE2XdiX.js";import{T as d}from"./tabulatorGridField-CReHSRkk.js";import{a as i,b as s,T as u}from"./tabulatorData-BmpfO34x.js";import{F as p}from"./buttonsProps-AMpdU5hQ.js";import{P as c,C as h,d as b,c as f}from"./darcula-DszBWugp.js";import"./buttonsRow-aX3TQ5bu.js";import"./dForm-vrGhQ6Lh.js";import"./messageBox-1o2XjDyt.js";import"./index-AMqWlYeY.js";import"./dFormModal-C_QqbNS_.js";import"./modal-tHBgt86o.js";import"./defaultButtonsProps-DtqWhfDr.js";import"./PlusOutlined-Bg-hNKo-.js";import"./index--2ky6TFp.js";const e={},F={apiRef:e,confirmChanges:!0,height:400,width:600,fieldsProps:{inputs:{component:d,columnDefaults:i,columns:[{title:"Name",field:"name",headerFilter:!0}],headerFilterHidden:!0,autoHeightResize:!0,height:"100%",layout:"fitColumns",onDataFetch:()=>new Promise((o,r)=>{setTimeout(()=>{Math.random()<.5?r({message:"Loading error",code:400}):o({data:s})},2e3)})}},buttons:p(e)},T={columnDefaults:i,columns:u,dataSet:s,layout:"fitColumns",movableColumns:!0,buttonsSize:"middle",editFormProps:F,height:"100%",buttons:{title:{type:"element",title:t.jsx("b",{style:{fontSize:18},children:"Системы"}),position:"left"}}},P=()=>t.jsxs(t.Fragment,{children:[t.jsx("h1",{children:"An example of an editable TabulatorGrid, on the editing form of which there is another asynchronous TabulatorGrid"}),t.jsx(m,{...T}),";"]}),G=a.lazy(()=>n(()=>import("./index-DJhjoKXt.js").then(o=>o.dw),__vite__mapDeps([0,1,2])).then(o=>({default:o.Prism}))),z=o=>t.jsxs(c,{children:[t.jsx("div",{children:t.jsx(P,{})}),t.jsx(l,{}),t.jsx("div",{children:t.jsx(h,{items:[{key:1,label:"Show source",children:t.jsx(a.Suspense,{fallback:t.jsx("div",{children:"Loading source..."}),children:t.jsx(G,{language:"tsx",style:o.darkMode?b:f,showLineNumbers:!0,children:`
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
`})})}]})})]});export{z as Pagea6bf574dc6694fc1867bf34607e50459,z as default};
