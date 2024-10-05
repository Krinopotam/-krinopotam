const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DdqqSCj0.js","assets/default-highlight-9uSTSbTs.js","assets/index-c6xXn22Z.js"])))=>i.map(i=>d[i]);
import{r as d,j as e,S as p,a,_ as u,D as h}from"./index-c6xXn22Z.js";import{I as f}from"./inputField-CPNFEZKC.js";import{T as S}from"./treeSelectField-CFXWdYJO.js";import{P as F}from"./useApiGetGroupsOnly-BSTTPQIo.js";import"./modal-CDnUOe4A.js";import{m as x}from"./dFormModal-C6Y0IuSi.js";import{T as P}from"./tree-DA86U2GZ.js";import{P as T,C as v,d as g,c as j}from"./darcula-DhxqnDMh.js";import"./dForm-CZw76wHB.js";import"./index-CzWkA8Ku.js";import"./index-Cbpa_xnq.js";import"./SearchOutlined-DGItvMC8.js";import"./defaultButtonsProps-B2tjDYAJ.js";import"./useShowArrow-BgspAse-.js";import"./useIcons-DgSa-zT7.js";import"./modal-CyZhQyS5.js";import"./index-OjxplGiv.js";import"./index-CQhiZmSX.js";const k=()=>{const t=y(),[i,r]=d.useState(!1),[o,c]=d.useState(!1),[n,s]=d.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Пример Extended Tree с формой редактирования"}),e.jsxs(p,{style:{paddingBottom:10},children:[e.jsxs("div",{children:["Multi select ",e.jsx(a,{onClick:l=>s(l)})]}),e.jsxs("div",{children:["Read only ",e.jsx(a,{onClick:l=>r(l)})]}),e.jsxs("div",{children:["Disabled ",e.jsx(a,{onClick:l=>c(l)})]})]}),e.jsx("div",{style:{maxWidth:500,maxHeight:500,height:"100%",overflow:"auto"},children:e.jsx(P,{...t,multiple:n,readOnly:i,disabled:o})})]})},m={},y=()=>{const t=I();return{apiRef:m,dataSet:b,defaultExpandAll:!0,confirmDelete:!0,selectNewNode:!0,buttonsIconsOnly:!0,editFormProps:t,onDelete:()=>{}}},I=()=>d.useMemo(()=>({onFormInit:t=>{const i=t.model,r=i.getField("parent"),o=m.getDataSet();if(i.getFormMode()!=="update"){r.updateProps({dataSet:o});return}const n=i.getFormDataSet().id,s=x(o);F(n,s,{key:"id",children:"children"}),r.updateProps({dataSet:s})},formId:"EditForm",confirmChanges:!0,fieldsProps:{title:{component:f,label:"Подразделение"},parent:{component:S,label:"Родитель"}}}),[]),b=[{id:"01",title:"Департамент аналитики данных",children:[{id:"01-01",title:"Управление аналитики продаж",children:[{id:"01-01-01",title:"Отдел продаж север"},{id:"01-01-02",title:"Отдел продаж юг"},{id:"01-01-03",title:"Отдел продаж запад"}]},{id:"01-02",title:"Управление аналитики закупок",children:[{id:"01-02-01",title:"Отдел закупок север"},{id:"01-02-02",title:"Отдел закупок юг"},{id:"01-02-03",title:"Отдел закупок запад"}]},{id:"01-03",title:"Управление аналитики производства",children:[{id:"01-03-01",title:"Отдел производства север"},{id:"01-03-02",title:"Отдел производства юг"},{id:"01-03-03",title:"Отдел производства запад"}]}]},{id:"02",title:"Департамент инженерных работ",children:[{id:"02-01",title:"Управление строительства",children:[{id:"02-01-01",title:"Отдел строительства север"},{id:"02-01-02",title:"Отдел строительства юг"},{id:"02-01-03",title:"Отдел строительства запад"}]},{id:"02-02",title:"Управление демонтажа",children:[{id:"02-02-01",title:"Отдел демонтажа север"},{id:"02-02-02",title:"Отдел демонтажа юг"},{id:"02-02-03",title:"Отдел демонтажа запад"}]},{id:"02-03",title:"Управление реконструкции",children:[{id:"02-03-01",title:"Отдел реконструкции север"},{id:"02-03-02",title:"Отдел реконструкции юг"},{id:"02-03-03",title:"Отдел реконструкции запад"}]}]},{id:"03",title:"Департамент проектных работ",children:[{id:"03-01",title:"Управление проектирования",children:[{id:"03-01-01",title:"Отдел проектирования север"},{id:"03-01-02",title:"Отдел проектирования юг"},{id:"03-01-03",title:"Отдел проектирования запад"}]},{id:"03-02",title:"Управление согласования",children:[{id:"03-02-01",title:"Отдел согласования север"},{id:"03-02-02",title:"Отдел согласования юг"},{id:"03-02-03",title:"Отдел согласования запад"}]},{id:"03-03",title:"Управление анализа проектов",children:[{id:"03-03-01",title:"Отдел анализа север"},{id:"03-03-02",title:"Отдел анализа юг"},{id:"03-03-03",title:"Отдел анализа запад"}]}]}],D=d.lazy(()=>u(()=>import("./index-DdqqSCj0.js").then(t=>t.ds),__vite__mapDeps([0,1,2])).then(t=>({default:t.Prism}))),G=t=>e.jsxs(T,{children:[e.jsx("div",{children:e.jsx(k,{})}),e.jsx(h,{}),e.jsx("div",{children:e.jsx(v,{items:[{key:1,label:"Show source",children:e.jsx(d.Suspense,{fallback:e.jsx("div",{children:"Loading source..."}),children:e.jsx(D,{language:"tsx",style:t.darkMode?g:j,showLineNumbers:!0,children:`
import React, {useMemo, useState} from 'react';
import {IDFormModalProps} from @krinopotam/ui-kit/dFormModal';
import {IInputFieldProps, InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField';
import {ITreeSelectFieldProps, TreeSelectField} from @krinopotam/ui-kit/dForm/fields/treeSelect/treeSelectField';
import {ITreeSelectApi, ITreeSelectNode} from @krinopotam/ui-kit/treeSelect';
import {removeFromTree} from @krinopotam/ui-kit/_shared/hooks/treeComponentApiMethods/serviceMethods/removeFromTree';
import {CloneObject} from '@krinopotam/js-helpers';
import {IExtTreeProps, Tree} from @krinopotam/ui-kit/tree';
import {Space, Switch} from 'antd';
export const TreeWithForm = (): React.JSX.Element => {
    const treeProps = useTreeProps();
    const [readOnly, setReadOnly] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [multiple, setMultiple] = useState(false);
    return (
        <>
            <Space style={{paddingBottom: 10}}>
                <div>
                    Multi select <Switch onClick={e => setMultiple(e)} />
                </div>
                <div>
                    Read only <Switch onClick={e => setReadOnly(e)} />
                </div>
                <div>
                    Disabled <Switch onClick={e => setDisabled(e)} />
                </div>
            </Space>
            <div style={{maxWidth: 500, maxHeight: 500, height: '100%', overflow: 'auto'}}>
                <Tree {...treeProps} multiple={multiple} readOnly={readOnly} disabled={disabled} />
            </div>
        </>
    );
};
const departmentsApi = {} as ITreeSelectApi;
const useTreeProps = () => {
    const editFormProps = useTreeEditFormProps();
    return {
        apiRef: departmentsApi,
        dataSet: dataSet,
        defaultExpandAll: true,
        confirmDelete: true,
        selectNewNode: true,
        buttonsIconsOnly: true,
        editFormProps: editFormProps,
        onDelete: () => {},
    } satisfies IExtTreeProps;
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
`})})}]})})]});export{G as Page3802e15e2c2b4aa18fb9962902276ada,G as default};
