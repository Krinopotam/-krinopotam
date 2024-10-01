const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-Cz0v0Rp9.js","assets/default-highlight-CrA-MuiQ.js","assets/index-DKsnjJVp.js"])))=>i.map(i=>d[i]);
import{j as t,r as a,_ as l,D as n}from"./index-DKsnjJVp.js";import{T as m}from"./tabulatorGrid-DCOzFUIF.js";import{T as u}from"./tabulatorGridField-DgvrGhs8.js";import{T as i,a as d,b as s}from"./tabulatorData-Dp7qYVQO.js";import{F as p}from"./buttonsProps-CvcbfanL.js";import{P as c,C as h,d as b,c as f}from"./darcula-CbhncTMN.js";import"./modal-s_O7aRct.js";import"./dForm-RzxzTjHO.js";import"./index-CSyocx7G.js";import"./dFormModal-BxobeehR.js";import"./modal-sKRn3jmz.js";import"./defaultButtonsProps-Bo_d-5AQ.js";import"./index-CxCukQln.js";const r={},F={apiRef:r,confirmChanges:!0,height:400,width:600,fieldsProps:{inputs:{component:u,columnDefaults:i,columns:[{title:"Name",field:"name",headerFilter:!0}],headerFilterHidden:!0,autoHeightResize:!0,height:"100%",resizeHeightWithForm:!0,layout:"fitColumns",onDataFetch:()=>new Promise((o,e)=>{setTimeout(()=>{Math.random()<.5?e({message:"Loading error",code:400}):o({data:s})},2e3)})}},buttons:p(r)},T={columnDefaults:i,columns:d,dataSet:s,layout:"fitColumns",movableColumns:!0,buttonsSize:"middle",editFormProps:F,height:"100%",buttons:{title:{type:"element",title:t.jsx("b",{style:{fontSize:18},children:"Системы"}),position:"left"}}},P=()=>t.jsxs(t.Fragment,{children:[t.jsx("h1",{children:"An example of an editable TabulatorGrid, on the editing form of which there is another asynchronous TabulatorGrid"}),t.jsx(m,{...T}),";"]}),g=a.lazy(()=>l(()=>import("./index-Cz0v0Rp9.js").then(o=>o.ds),__vite__mapDeps([0,1,2])).then(o=>({default:o.Prism}))),M=o=>t.jsxs(c,{children:[t.jsx("div",{children:t.jsx(P,{})}),t.jsx(n,{}),t.jsx("div",{children:t.jsx(h,{items:[{key:1,label:"Show source",children:t.jsx(a.Suspense,{fallback:t.jsx("div",{children:"Loading source..."}),children:t.jsx(g,{language:"tsx",style:o.darkMode?b:f,showLineNumbers:!0,children:`
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
            resizeHeightWithForm: true,
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
`})})}]})})]});export{M as Pagec946c2500e134e36b1ec49fa1e886f8f,M as default};
