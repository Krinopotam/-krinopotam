const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-Cs1HhVBL.js","assets/default-highlight-PwdVU7L6.js","assets/index-CNGiMTrA.js"])))=>i.map(i=>d[i]);
import{r as d,j as e,S as p,a as n,_ as u,D as h}from"./index-CNGiMTrA.js";import{I as f}from"./inputField-B4IJanij.js";import{T as S}from"./treeSelectField-9q9pUOKS.js";import{G as F}from"./useApiIsNodeSelected-Bqe8ESB8.js";import"./modal-DVHWH6Qh.js";import{m as x}from"./dFormModal-Clfa5FkM.js";import{T as P}from"./tree-BTOov6LG.js";import{P as T,C as v,d as g,c as j}from"./darcula-BjE4oQkF.js";import"./dForm-DmRsT3BS.js";import"./index-u-jxti1R.js";import"./index-B9vEfmTq.js";import"./SearchOutlined-DGkPMlC6.js";import"./defaultButtonsProps-YE4_7d0V.js";import"./useShowArrow-D-EuJM8o.js";import"./useIcons-B7FuD7ir.js";import"./modal-BKWxOyv5.js";import"./index-UyGeAaCN.js";import"./index-BYrcsQQ_.js";const k=()=>{const t=y(),[i,l]=d.useState(!1),[o,c]=d.useState(!1),[a,s]=d.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Пример Extended Tree с формой редактирования"}),e.jsxs(p,{style:{paddingBottom:10},children:[e.jsxs("div",{children:["Multi select",e.jsx(n,{onClick:r=>{s(r)}})]}),e.jsxs("div",{children:["Read only",e.jsx(n,{onClick:r=>{l(r)}})]}),e.jsxs("div",{children:["Disabled",e.jsx(n,{onClick:r=>{c(r)}})]})]}),e.jsx("div",{style:{maxWidth:500,maxHeight:500,height:"100%",overflow:"auto"},children:e.jsx(P,{...t,multiple:a,readOnly:i,disabled:o})})]})},m={},y=()=>{const t=I();return{apiRef:m,dataSet:D,defaultExpandAll:!0,confirmDelete:!0,editFormProps:t,selectNewNode:!0}},I=()=>d.useMemo(()=>({onFormInit:t=>{const i=t.model,l=i.getField("parent"),o=m.getDataSet();if(i.getFormMode()!=="update"){l.updateProps({dataSet:o});return}const a=i.getFormDataSet().id,s=x(o);F(a,s,{key:"id",children:"children"}),l.updateProps({dataSet:s})},formId:"EditForm",confirmChanges:!0,fieldsProps:{title:{component:f,label:"Подразделение"},parent:{component:S,label:"Родитель"}}}),[]),D=[{id:"01",title:"Департамент аналитики данных",children:[{id:"01-01",title:"Управление аналитики продаж",children:[{id:"01-01-01",title:"Отдел продаж север"},{id:"01-01-02",title:"Отдел продаж юг"},{id:"01-01-03",title:"Отдел продаж запад"}]},{id:"01-02",title:"Управление аналитики закупок",children:[{id:"01-02-01",title:"Отдел закупок север"},{id:"01-02-02",title:"Отдел закупок юг"},{id:"01-02-03",title:"Отдел закупок запад"}]},{id:"01-03",title:"Управление аналитики производства",children:[{id:"01-03-01",title:"Отдел производства север"},{id:"01-03-02",title:"Отдел производства юг"},{id:"01-03-03",title:"Отдел производства запад"}]}]},{id:"02",title:"Департамент инженерных работ",children:[{id:"02-01",title:"Управление строительства",children:[{id:"02-01-01",title:"Отдел строительства север"},{id:"02-01-02",title:"Отдел строительства юг"},{id:"02-01-03",title:"Отдел строительства запад"}]},{id:"02-02",title:"Управление демонтажа",children:[{id:"02-02-01",title:"Отдел демонтажа север"},{id:"02-02-02",title:"Отдел демонтажа юг"},{id:"02-02-03",title:"Отдел демонтажа запад"}]},{id:"02-03",title:"Управление реконструкции",children:[{id:"02-03-01",title:"Отдел реконструкции север"},{id:"02-03-02",title:"Отдел реконструкции юг"},{id:"02-03-03",title:"Отдел реконструкции запад"}]}]},{id:"03",title:"Департамент проектных работ",children:[{id:"03-01",title:"Управление проектирования",children:[{id:"03-01-01",title:"Отдел проектирования север"},{id:"03-01-02",title:"Отдел проектирования юг"},{id:"03-01-03",title:"Отдел проектирования запад"}]},{id:"03-02",title:"Управление согласования",children:[{id:"03-02-01",title:"Отдел согласования север"},{id:"03-02-02",title:"Отдел согласования юг"},{id:"03-02-03",title:"Отдел согласования запад"}]},{id:"03-03",title:"Управление анализа проектов",children:[{id:"03-03-01",title:"Отдел анализа север"},{id:"03-03-02",title:"Отдел анализа юг"},{id:"03-03-03",title:"Отдел анализа запад"}]}]}],M=d.lazy(()=>u(()=>import("./index-Cs1HhVBL.js").then(t=>t.ds),__vite__mapDeps([0,1,2])).then(t=>({default:t.Prism}))),q=t=>e.jsxs(T,{children:[e.jsx("div",{children:e.jsx(k,{})}),e.jsx(h,{}),e.jsx("div",{children:e.jsx(v,{items:[{key:1,label:"Show source",children:e.jsx(d.Suspense,{fallback:e.jsx("div",{children:"Loading source..."}),children:e.jsx(M,{language:"tsx",style:t.darkMode?g:j,showLineNumbers:!0,children:`
import React, {useMemo, useState} from 'react';
import {IDFormModalProps} from @krinopotam/ui-kit/dFormModal';
import {IInputFieldProps, InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField';
import {ITreeSelectFieldProps, TreeSelectField} from @krinopotam/ui-kit/dForm/fields/treeSelect/treeSelectField';
import {ITreeSelectApi, ITreeSelectNode} from @krinopotam/ui-kit/treeSelect';
import {removeFromTree} from @krinopotam/ui-kit/_shared/hooks/treeComponentApiMethods/serviceMethods/removeFromTree';
import {CloneObject} from '@krinopotam/js-helpers';
import {IExtTreeProps, Tree} from @krinopotam/ui-kit/tree';
import {Space, Switch} from "antd";
export const TreeWithForm = (): React.JSX.Element => {
    const treeProps = useTreeProps();
    const [readOnly, setReadOnly] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const [multiple, setMultiple] = useState(false)
    return (
        <>
            <Space style={{paddingBottom: 10}}>
                <div>
                    Multi select
                    <Switch
                        onClick={e => {
                            setMultiple(e);
                        }}
                    />
                </div>
                <div>
                    Read only
                    <Switch
                        onClick={e => {
                            setReadOnly(e);
                        }}
                    />
                </div>
                <div>
                    Disabled
                    <Switch
                        onClick={e => {
                            setDisabled(e);
                        }}
                    />
                </div>
            </Space>
            <div style={{maxWidth: 500, maxHeight: 500, height: '100%', overflow: 'auto'}}>
                <Tree {...treeProps} multiple={multiple} readOnly={readOnly} disabled={disabled} />
            </div>
        </>
    );
};
const departmentsApi = {} as ITreeSelectApi;
const useTreeProps=() =>{
    const editFormProps = useTreeEditFormProps();
    return {
        apiRef: departmentsApi,
        dataSet: dataSet,
        defaultExpandAll: true,
        confirmDelete: true,
        editFormProps: editFormProps,
        selectNewNode:true,
    } satisfies IExtTreeProps
}
const useTreeEditFormProps = () => {
    return useMemo(
        (): IDFormModalProps => ({
            onFormInit: formApi => {
                const model = formApi.model;
                const field = model.getField('parent');
                const data = departmentsApi.getDataSet();
                const formMode = model.getFormMode();
                if (formMode !== 'update') {
                    field.updateProps({dataSet: data});
                    return;
                }
                /** modify dataset for update to avoid the possibility of a parent node choosing itself or its own child node */
                const id = model.getFormDataSet()['id'];
                const clonedData = CloneObject(data);
                removeFromTree(id, clonedData, {key: 'id', children: 'children'});
                field.updateProps({dataSet: clonedData});
            },
            formId: 'EditForm',
            confirmChanges: true,
            fieldsProps: {
                title: {component: InputField, label: 'Подразделение'} satisfies IInputFieldProps,
                parent: {
                    component: TreeSelectField,
                    label: 'Родитель',
                } satisfies ITreeSelectFieldProps,
            },
        }),
        []
    );
};
const dataSet: ITreeSelectNode[] = [
    {
        id: '01',
        title: 'Департамент аналитики данных',
        children: [
            {
                id: '01-01',
                title: 'Управление аналитики продаж',
                children: [
                    {id: '01-01-01', title: 'Отдел продаж север'},
                    {id: '01-01-02', title: 'Отдел продаж юг'},
                    {id: '01-01-03', title: 'Отдел продаж запад'},
                ],
            },
            {
                id: '01-02',
                title: 'Управление аналитики закупок',
                children: [
                    {id: '01-02-01', title: 'Отдел закупок север'},
                    {id: '01-02-02', title: 'Отдел закупок юг'},
                    {id: '01-02-03', title: 'Отдел закупок запад'},
                ],
            },
            {
                id: '01-03',
                title: 'Управление аналитики производства',
                children: [
                    {id: '01-03-01', title: 'Отдел производства север'},
                    {id: '01-03-02', title: 'Отдел производства юг'},
                    {id: '01-03-03', title: 'Отдел производства запад'},
                ],
            },
        ],
    },
    {
        id: '02',
        title: 'Департамент инженерных работ',
        children: [
            {
                id: '02-01',
                title: 'Управление строительства',
                children: [
                    {id: '02-01-01', title: 'Отдел строительства север'},
                    {id: '02-01-02', title: 'Отдел строительства юг'},
                    {id: '02-01-03', title: 'Отдел строительства запад'},
                ],
            },
            {
                id: '02-02',
                title: 'Управление демонтажа',
                children: [
                    {id: '02-02-01', title: 'Отдел демонтажа север'},
                    {id: '02-02-02', title: 'Отдел демонтажа юг'},
                    {id: '02-02-03', title: 'Отдел демонтажа запад'},
                ],
            },
            {
                id: '02-03',
                title: 'Управление реконструкции',
                children: [
                    {id: '02-03-01', title: 'Отдел реконструкции север'},
                    {id: '02-03-02', title: 'Отдел реконструкции юг'},
                    {id: '02-03-03', title: 'Отдел реконструкции запад'},
                ],
            },
        ],
    },
    {
        id: '03',
        title: 'Департамент проектных работ',
        children: [
            {
                id: '03-01',
                title: 'Управление проектирования',
                children: [
                    {id: '03-01-01', title: 'Отдел проектирования север'},
                    {id: '03-01-02', title: 'Отдел проектирования юг'},
                    {id: '03-01-03', title: 'Отдел проектирования запад'},
                ],
            },
            {
                id: '03-02',
                title: 'Управление согласования',
                children: [
                    {id: '03-02-01', title: 'Отдел согласования север'},
                    {id: '03-02-02', title: 'Отдел согласования юг'},
                    {id: '03-02-03', title: 'Отдел согласования запад'},
                ],
            },
            {
                id: '03-03',
                title: 'Управление анализа проектов',
                children: [
                    {id: '03-03-01', title: 'Отдел анализа север'},
                    {id: '03-03-02', title: 'Отдел анализа юг'},
                    {id: '03-03-03', title: 'Отдел анализа запад'},
                ],
            },
        ],
    },
];
`})})}]})})]});export{q as Page06c8e731d09648fe88114c9860c9a063,q as default};
