const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CGS66BNA.js","assets/default-highlight-CcEIfVOS.js","assets/index-D5qwc_YF.js"])))=>i.map(i=>d[i]);
import{r as l,j as t,_ as d,D as p}from"./index-D5qwc_YF.js";import{B as c}from"./modal-Ba-Ua4rS.js";import{D as u}from"./dFormModal-CeNnxCAb.js";import{T as f}from"./tabulatorGridField-bEFM9dcc.js";import{I as r}from"./inputField-CQ70iDwA.js";import{F as s}from"./buttonsProps-BySAuIC5.js";import{T as F,G as a}from"./tabulatorData-A50l7rHb.js";import{P as h,C as g,d as b,c as D}from"./darcula-DCElNxcl.js";import"./dForm-D9Yj5CGv.js";import"./index-DfWwWpfW.js";import"./modal-BT6G55W2.js";import"./tabulatorGrid-xmrOiwzB.js";import"./defaultButtonsProps-BAcIqfvm.js";import"./index-DVORizd9.js";import"./index-C64nsPO3.js";import"./SearchOutlined-C5suFlPC.js";const C=[{title:"Column 1",field:"col1"},{title:"Column 2",field:"col2"},{title:"Column 3",field:"col3"}],e={},n={},S={apiRef:n,formId:"formWithGrid",fieldsProps:{col1:{component:r,label:"Column 1"},col2:{component:r,label:"Column 2"},col3:{component:r,label:"Column 3"}},confirmChanges:!0,buttons:s(n)},m={},k={formId:"Test form",apiRef:e,confirmChanges:!0,height:500,width:"50%",fieldsProps:{grid:{component:f,apiRef:m,label:"Пользователи",columnDefaults:F,columns:C,layout:"fitColumns",autoHeightResize:!0,editFormProps:S,confirmDelete:!0}},buttons:{...s(e),updateDataSet:{type:"button",title:"Update DataSet",position:"center",onClick:()=>{e.model.getField("grid").setValue(a(1e3,"Set field Value "))}},asyncUpdateDataSet:{type:"button",title:"Async update DataSet",position:"center",onClick:()=>{m.fetchData(()=>new Promise((o,i)=>{setTimeout(()=>{Math.random()<.1?i({message:"Ошибка загрузки данных",code:400}):o({data:a(1e3,"async ")})},1e3)}))}},clearDataSet:{type:"button",title:"Clear DataSet",position:"center",onClick:()=>{e.model.getField("grid").setValue([])}}}},y=()=>{const o=l.useCallback(()=>{e.open("update",{dataSet:{grid:a(1e3,"Initial ")}})},[]);return t.jsxs(t.Fragment,{children:[t.jsx("h1",{children:"Example of a modal form with a TabulatorGrid field"}),t.jsxs("div",{style:{maxWidth:500},children:[t.jsx(c,{onClick:o,children:"Open form"}),t.jsx(u,{...k})]})]})},P=l.lazy(()=>d(()=>import("./index-CGS66BNA.js").then(o=>o.ds),__vite__mapDeps([0,1,2])).then(o=>({default:o.Prism}))),U=o=>t.jsxs(h,{children:[t.jsx("div",{children:t.jsx(y,{})}),t.jsx(p,{}),t.jsx("div",{children:t.jsx(g,{items:[{key:1,label:"Show source",children:t.jsx(l.Suspense,{fallback:t.jsx("div",{children:"Loading source..."}),children:t.jsx(P,{language:"tsx",style:o.darkMode?b:D,showLineNumbers:!0,children:`
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
`})})}]})})]});export{U as Paged73f15a3f6c545f2b2ce2759192122b3,U as default};
