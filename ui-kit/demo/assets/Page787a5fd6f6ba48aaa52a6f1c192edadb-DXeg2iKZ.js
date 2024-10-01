const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-Cz0v0Rp9.js","assets/default-highlight-CrA-MuiQ.js","assets/index-DKsnjJVp.js"])))=>i.map(i=>d[i]);
import{r as d,j as e,S as p,a,_ as u,D as f}from"./index-DKsnjJVp.js";import{D as h}from"./dForm-RzxzTjHO.js";import{I as F}from"./inputField-E9h4FWeh.js";import{T as m}from"./treeSelectField-GZfiUGts.js";import{G as S}from"./useApiIsNodeSelected-DVBYhN5o.js";import"./modal-s_O7aRct.js";import{m as P}from"./dFormModal-BxobeehR.js";import{P as x,C as D,d as I,c as b}from"./darcula-CbhncTMN.js";import"./index-CSyocx7G.js";import"./index-Cr9wBgfG.js";import"./SearchOutlined-K0l7o9jX.js";import"./defaultButtonsProps-Bo_d-5AQ.js";import"./useShowArrow-42klRCfV.js";import"./useIcons-CWHa1yEa.js";import"./modal-sKRn3jmz.js";const T=()=>{const t=g(),[i,o]=d.useState(!1),[l,s]=d.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Пример TreeSelect с формой редактирования"}),e.jsxs(p,{style:{paddingBottom:10},children:[e.jsxs("div",{children:["Read only",e.jsx(a,{onClick:r=>{o(r)}})]}),e.jsxs("div",{children:["Disabled",e.jsx(a,{onClick:r=>{s(r)}})]})]}),e.jsx("div",{style:{maxWidth:500},children:e.jsx(h,{...t,readOnly:i,disabled:l})})]})},c={},g=()=>{const t=j();return d.useMemo(()=>({formId:"Test form",confirmChanges:!0,fieldsProps:{departments:{component:m,apiRef:c,label:"Подразделения",editFormProps:t,confirmDelete:!0,dataSet:k}},buttons:null}),[t])},j=()=>d.useMemo(()=>({onFormInit:t=>{const i=t.model,o=i.getField("parent"),l=c.getDataSet();if(i.getFormMode()!=="update"){o.updateProps({dataSet:l});return}const r=i.getFormDataSet().id,n=P(l);S(r,n,{key:"id",children:"children"}),o.updateProps({dataSet:n})},formId:"EditForm",confirmChanges:!0,fieldsProps:{title:{component:F,label:"Подразделение"},parent:{component:m,label:"Родитель"}}}),[]),k=[{id:"01",title:"Департамент аналитики данных",children:[{id:"01-01",title:"Управление аналитики продаж",children:[{id:"01-01-01",title:"Отдел продаж север"},{id:"01-01-02",title:"Отдел продаж юг"},{id:"01-01-03",title:"Отдел продаж запад"}]},{id:"01-02",title:"Управление аналитики закупок",children:[{id:"01-02-01",title:"Отдел закупок север"},{id:"01-02-02",title:"Отдел закупок юг"},{id:"01-02-03",title:"Отдел закупок запад"}]},{id:"01-03",title:"Управление аналитики производства",children:[{id:"01-03-01",title:"Отдел производства север"},{id:"01-03-02",title:"Отдел производства юг"},{id:"01-03-03",title:"Отдел производства запад"}]}]},{id:"02",title:"Департамент инженерных работ",children:[{id:"02-01",title:"Управление строительства",children:[{id:"02-01-01",title:"Отдел строительства север"},{id:"02-01-02",title:"Отдел строительства юг"},{id:"02-01-03",title:"Отдел строительства запад"}]},{id:"02-02",title:"Управление демонтажа",children:[{id:"02-02-01",title:"Отдел демонтажа север"},{id:"02-02-02",title:"Отдел демонтажа юг"},{id:"02-02-03",title:"Отдел демонтажа запад"}]},{id:"02-03",title:"Управление реконструкции",children:[{id:"02-03-01",title:"Отдел реконструкции север"},{id:"02-03-02",title:"Отдел реконструкции юг"},{id:"02-03-03",title:"Отдел реконструкции запад"}]}]},{id:"03",title:"Департамент проектных работ",children:[{id:"03-01",title:"Управление проектирования",children:[{id:"03-01-01",title:"Отдел проектирования север"},{id:"03-01-02",title:"Отдел проектирования юг"},{id:"03-01-03",title:"Отдел проектирования запад"}]},{id:"03-02",title:"Управление согласования",children:[{id:"03-02-01",title:"Отдел согласования север"},{id:"03-02-02",title:"Отдел согласования юг"},{id:"03-02-03",title:"Отдел согласования запад"}]},{id:"03-03",title:"Управление анализа проектов",children:[{id:"03-03-01",title:"Отдел анализа север"},{id:"03-03-02",title:"Отдел анализа юг"},{id:"03-03-03",title:"Отдел анализа запад"}]}]}],y=d.lazy(()=>u(()=>import("./index-Cz0v0Rp9.js").then(t=>t.ds),__vite__mapDeps([0,1,2])).then(t=>({default:t.Prism}))),H=t=>e.jsxs(x,{children:[e.jsx("div",{children:e.jsx(T,{})}),e.jsx(f,{}),e.jsx("div",{children:e.jsx(D,{items:[{key:1,label:"Show source",children:e.jsx(d.Suspense,{fallback:e.jsx("div",{children:"Loading source..."}),children:e.jsx(y,{language:"tsx",style:t.darkMode?I:b,showLineNumbers:!0,children:`
import React, {useMemo, useState} from 'react';
import {DForm, IDFormProps} from @krinopotam/ui-kit/dForm';
import {IDFormModalProps} from @krinopotam/ui-kit/dFormModal';
import {IInputFieldProps, InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField';
import {ITreeSelectFieldProps, TreeSelectField} from @krinopotam/ui-kit/dForm/fields/treeSelect/treeSelectField';
import {ITreeSelectApi, ITreeSelectNode} from @krinopotam/ui-kit/treeSelect';
import {removeFromTree} from @krinopotam/ui-kit/_shared/hooks/treeComponentApiMethods/serviceMethods/removeFromTree';
import {CloneObject} from '@krinopotam/js-helpers';
import {Space, Switch} from 'antd';
export const TreeSelectWithForm = (): React.JSX.Element => {
    const formProps = useFormProps();
    const [readOnly, setReadOnly] = useState(false);
    const [disabled, setDisabled] = useState(false);
    return (
        <>
            <Space style={{paddingBottom:10}}>
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
            <div style={{maxWidth: 500}}>
                <DForm {...formProps} readOnly={readOnly} disabled={disabled} />
            </div>
        </>
    );
};
const departmentsApi = {} as ITreeSelectApi;
const useFormProps = () => {
    const editFormProps = useTreeEditFormProps();
    return useMemo(
        (): IDFormProps => ({
            formId: 'Test form',
            confirmChanges: true,
            fieldsProps: {
                departments: {
                    component: TreeSelectField,
                    apiRef: departmentsApi,
                    label: 'Подразделения',
                    editFormProps: editFormProps,
                    confirmDelete: true,
                    dataSet: dataSet,
                } satisfies ITreeSelectFieldProps,
            },
            buttons: null,
        }),
        [editFormProps]
    );
};
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
`})})}]})})]});export{H as Page787a5fd6f6ba48aaa52a6f1c192edadb,H as default};
