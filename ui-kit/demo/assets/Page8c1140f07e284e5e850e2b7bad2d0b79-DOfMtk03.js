const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-l9Wg9Pc0.js","assets/default-highlight-B7lEcFzY.js","assets/index-DM4KduW8.js"])))=>i.map(i=>d[i]);
import{r as l,j as t,_ as d,D as p}from"./index-DM4KduW8.js";import{B as c}from"./modal-CrAyaDCA.js";import{D as u}from"./dFormModal-mDojMLr5.js";import{T as f}from"./tabulatorGridField-BlW-XeFS.js";import{I as r}from"./inputField-CNhjASo3.js";import{F as s}from"./buttonsProps-ChSvUGWm.js";import{T as F,G as a}from"./tabulatorData-Ci2NRdl6.js";import{P as h,C as g,d as b,c as D}from"./darcula-B-kkYBo3.js";import"./dForm-DnIX3jkH.js";import"./index-B_-TuVyw.js";import"./modal-DPQg-moX.js";import"./tabulatorGrid-hXEGaPy3.js";import"./defaultButtonsProps-CTSmhZ4z.js";import"./index-GaKvfcA3.js";import"./index-7b3wGf9w.js";import"./SearchOutlined-CrE_nQO8.js";const C=[{title:"Column 1",field:"col1"},{title:"Column 2",field:"col2"},{title:"Column 3",field:"col3"}],e={},n={},S={apiRef:n,formId:"formWithGrid",fieldsProps:{col1:{component:r,label:"Column 1"},col2:{component:r,label:"Column 2"},col3:{component:r,label:"Column 3"}},confirmChanges:!0,buttons:s(n)},m={},k={formId:"Test form",apiRef:e,confirmChanges:!0,height:500,width:"50%",fieldsProps:{grid:{component:f,apiRef:m,label:"Пользователи",columnDefaults:F,columns:C,layout:"fitColumns",autoHeightResize:!0,editFormProps:S,confirmDelete:!0}},buttons:{...s(e),updateDataSet:{type:"button",title:"Update DataSet",position:"center",onClick:()=>{e.model.getField("grid").setValue(a(1e3,"Set field Value "))}},asyncUpdateDataSet:{type:"button",title:"Async update DataSet",position:"center",onClick:()=>{m.fetchData(()=>new Promise((o,i)=>{setTimeout(()=>{Math.random()<.1?i({message:"Ошибка загрузки данных",code:400}):o({data:a(1e3,"async ")})},1e3)}))}},clearDataSet:{type:"button",title:"Clear DataSet",position:"center",onClick:()=>{e.model.getField("grid").setValue([])}}}},y=()=>{const o=l.useCallback(()=>{e.open("update",{dataSet:{grid:a(1e3,"Initial ")}})},[]);return t.jsxs(t.Fragment,{children:[t.jsx("h1",{children:"Example of a modal form with a TabulatorGrid field"}),t.jsxs("div",{style:{maxWidth:500},children:[t.jsx(c,{onClick:o,children:"Open form"}),t.jsx(u,{...k})]})]})},P=l.lazy(()=>d(()=>import("./index-l9Wg9Pc0.js").then(o=>o.ds),__vite__mapDeps([0,1,2])).then(o=>({default:o.Prism}))),U=o=>t.jsxs(h,{children:[t.jsx("div",{children:t.jsx(y,{})}),t.jsx(p,{}),t.jsx("div",{children:t.jsx(g,{items:[{key:1,label:"Show source",children:t.jsx(l.Suspense,{fallback:t.jsx("div",{children:"Loading source..."}),children:t.jsx(P,{language:"tsx",style:o.darkMode?b:D,showLineNumbers:!0,children:`
import React, {useCallback} from 'react';
import {Button} from @krinopotam/ui-kit/button';
import {DFormModal, IDFormModalApi, IDFormModalProps} from @krinopotam/ui-kit/dFormModal';
import {TabulatorGridField} from @krinopotam/ui-kit/dForm/fields/tabulatorGrid';
import {InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField';
import {FormLayoutSwitch} from '../../common/buttonsProps';
import {GenerateDataSet, TabulatorBaseColumnsDef} from '../../data/tabulatorData';
import {ITabulatorProps} from @krinopotam/ui-kit/tabulatorBase';
import {IGridApi} from @krinopotam/ui-kit/tabulatorGrid";
const columns: ITabulatorProps['columns'] = [
    {title: 'Column 1', field: 'col1'},
    {title: 'Column 2', field: 'col2'},
    {title: 'Column 3', field: 'col3'},
];
const formApi = {} as IDFormModalApi;
const editFormApi = {} as IDFormModalApi;
/** Tabulator edit form props */
const editFormProps: IDFormModalProps = {
    apiRef: editFormApi,
    formId: 'formWithGrid',
    fieldsProps: {
        col1: {component: InputField, label: 'Column 1'},
        col2: {component: InputField, label: 'Column 2'},
        col3: {component: InputField, label: 'Column 3'},
    },
    confirmChanges: true,
    buttons: FormLayoutSwitch(editFormApi),
};
const gridApi = {} as IGridApi
/** main modal form props */
const formProps: IDFormModalProps = {
    formId: 'Test form',
    apiRef: formApi,
    confirmChanges: true,
    height: 500,
    width: '50%',
    fieldsProps: {
        grid: {
            component: TabulatorGridField,
            apiRef:gridApi,
            label: 'Пользователи',
            columnDefaults: TabulatorBaseColumnsDef,
            columns: columns,
            layout: 'fitColumns',
            autoHeightResize: true,
            editFormProps: editFormProps,
            confirmDelete: true,
        },
    },
    buttons: {
        ...FormLayoutSwitch(formApi),
        updateDataSet: {
            type: 'button',
            title: 'Update DataSet',
            position: 'center',
            onClick: () => {
                const model = formApi.model;
                const gridField = model.getField('grid');
                gridField.setValue(GenerateDataSet(1000, 'Set field Value '));
            },
        },
        asyncUpdateDataSet: {
            type: 'button',
            title: 'Async update DataSet',
            position: 'center',
            onClick: () => {
                gridApi.fetchData(() => {
                    return new Promise((resolve, reject) => {
                        setTimeout(() => {
                            if (Math.random() < 0.1) reject({message: 'Ошибка загрузки данных', code: 400});
                            else resolve({data: GenerateDataSet(1000, 'async ')});
                        }, 1000);
                    });
                })
            },
        },
        clearDataSet: {
            type: 'button',
            title: 'Clear DataSet',
            position: 'center',
            onClick: () => {
                const model = formApi.model;
                const gridField = model.getField('grid');
                gridField.setValue([]);
            },
        },
    },
};
export const FormWithGridChangeDataSet = (): React.JSX.Element => {
    const onClick = useCallback(() => {
        formApi.open('update', {dataSet: {grid: GenerateDataSet(1000, 'Initial ')}});
    }, []);
    return (
        <>
            <div style={{maxWidth: 500}}>
                <Button onClick={onClick}>Open form</Button>
                <DFormModal {...formProps} />
            </div>
        </>
    );
};
`})})}]})})]});export{U as Page8c1140f07e284e5e850e2b7bad2d0b79,U as default};