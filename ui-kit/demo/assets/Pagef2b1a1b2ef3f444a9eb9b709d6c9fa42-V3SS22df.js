const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-C2SUEjL0.js","assets/default-highlight-BDFjN1OP.js","assets/index-CgBeyb-e.js"])))=>i.map(i=>d[i]);
import{r as l,j as e,S as f,a as u,bo as g,_ as x,D as S}from"./index-CgBeyb-e.js";import{I as F}from"./inputField-CHbICkKZ.js";import{T as G}from"./treeSelectField-BDs--LXV.js";import{T as P}from"./tree-DtARyCmX.js";import{P as y,C as b,d as v,c as I}from"./darcula-Bm4NDPn1.js";import"./dForm-B-6Y2TlM.js";import"./modal-hi51mlNB.js";import"./index-Birbnh4n.js";import"./index-BmHUbDh_.js";import"./SearchOutlined-DsYktL9I.js";import"./dFormModal-B-TtMmSz.js";import"./modal-D01YMXTL.js";import"./defaultButtonsProps-BjCvvsD6.js";import"./useShowArrow-DhNUwsya.js";import"./useIcons-tPNZCeWw.js";import"./useApiGetGroupsOnly-BzYeVIfm.js";import"./index-blBfG32B.js";import"./index-bT1kimW8.js";const j=()=>{const t=R(),[r,s]=l.useState(!1),[o,d]=l.useState(!1),[n,p]=l.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Example of Extended Tree in group mode with edit form"}),e.jsxs(f,{style:{paddingBottom:10},children:[e.jsxs("div",{children:["Multi select ",e.jsx(u,{onClick:i=>p(i)})]}),e.jsxs("div",{children:["Read only ",e.jsx(u,{onClick:i=>s(i)})]}),e.jsxs("div",{children:["Disabled ",e.jsx(u,{onClick:i=>d(i)})]})]}),e.jsx("div",{style:{maxWidth:500,maxHeight:500,height:"100%",overflow:"auto"},children:e.jsx(P,{...t,multiple:n,readOnly:r,disabled:o})})]})},a={},R=()=>{const t=m(!1,a),r=m(!0,a);return{apiRef:a,dataSet:T,defaultExpandAll:!0,confirmDelete:!0,confirmMove:!0,editFormProps:t,editGroupFormProps:r,selectNewNode:!0,sortOnChange:!0,titleRender:c,buttonsIconsOnly:!0,groupsMode:!0}},c=t=>t.isGroup?e.jsxs(e.Fragment,{children:[e.jsx(g,{})," ",t.title]}):t.title,m=(t,r)=>{const s=t?"Group":"Department";return{confirmChanges:!0,fieldsProps:{title:{component:F,label:s,rules:[{type:"string",rule:"not-empty",message:s+" is required"}],autoFocus:!0},parent:{component:G,label:"Group",placeholder:"Choose parent group",groupsMode:!0,titleRender:c,selectedRender:c}},onFormInit:o=>{const d=o.model,n=d.getField("parent"),p=d.getFormMode(),i=d.getFormDataSet().id,h=r.getGroupsOnly(p!=="update"?void 0:i);n.updateProps({dataSet:h})},onSubmit:o=>({data:{...o,isGroup:t}})}},T=[{id:"01",title:"Департамент аналитики данных",isGroup:!0,children:[{id:"01-01",title:"Управление аналитики продаж",isGroup:!0,children:[{id:"01-01-01",title:"Отдел продаж север"},{id:"01-01-02",title:"Отдел продаж юг"},{id:"01-01-03",title:"Отдел продаж запад"}]},{id:"01-02",title:"Управление аналитики закупок",isGroup:!0,children:[{id:"01-02-01",title:"Отдел закупок север"},{id:"01-02-02",title:"Отдел закупок юг"},{id:"01-02-03",title:"Отдел закупок запад"}]},{id:"01-03",title:"Управление аналитики производства",isGroup:!0,children:[{id:"01-03-01",title:"Отдел производства север"},{id:"01-03-02",title:"Отдел производства юг"},{id:"01-03-03",title:"Отдел производства запад"}]}]},{id:"02",title:"Департамент инженерных работ",isGroup:!0,children:[{id:"02-01",title:"Управление строительства",isGroup:!0,children:[{id:"02-01-01",title:"Отдел строительства север"},{id:"02-01-02",title:"Отдел строительства юг"},{id:"02-01-03",title:"Отдел строительства запад"}]},{id:"02-02",title:"Управление демонтажа",isGroup:!0,children:[{id:"02-02-01",title:"Отдел демонтажа север"},{id:"02-02-02",title:"Отдел демонтажа юг"},{id:"02-02-03",title:"Отдел демонтажа запад"}]},{id:"02-03",title:"Управление реконструкции",isGroup:!0,children:[{id:"02-03-01",title:"Отдел реконструкции север"},{id:"02-03-02",title:"Отдел реконструкции юг"},{id:"02-03-03",title:"Отдел реконструкции запад"}]}]},{id:"03",title:"Департамент проектных работ",isGroup:!0,children:[{id:"03-01",title:"Управление проектирования",isGroup:!0,children:[{id:"03-01-01",title:"Отдел проектирования север"},{id:"03-01-02",title:"Отдел проектирования юг"},{id:"03-01-03",title:"Отдел проектирования запад"}]},{id:"03-02",title:"Управление согласования",isGroup:!0,children:[{id:"03-02-01",title:"Отдел согласования север"},{id:"03-02-02",title:"Отдел согласования юг"},{id:"03-02-03",title:"Отдел согласования запад"}]},{id:"03-03",title:"Управление анализа проектов",isGroup:!0,children:[{id:"03-03-01",title:"Отдел анализа север"},{id:"03-03-02",title:"Отдел анализа юг"},{id:"03-03-03",title:"Отдел анализа запад"}]}]}],k=l.lazy(()=>x(()=>import("./index-C2SUEjL0.js").then(t=>t.ds),__vite__mapDeps([0,1,2])).then(t=>({default:t.Prism}))),K=t=>e.jsxs(y,{children:[e.jsx("div",{children:e.jsx(j,{})}),e.jsx(S,{}),e.jsx("div",{children:e.jsx(b,{items:[{key:1,label:"Show source",children:e.jsx(l.Suspense,{fallback:e.jsx("div",{children:"Loading source..."}),children:e.jsx(k,{language:"tsx",style:t.darkMode?v:I,showLineNumbers:!0,children:`
import React, {useState} from 'react';
import {IDFormModalProps} from @krinopotam/ui-kit/dFormModal';
import {IInputFieldProps, InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField';
import {ITreeSelectFieldProps, TreeSelectField} from @krinopotam/ui-kit/dForm/fields/treeSelect/treeSelectField';
import {ITreeSelectNode} from @krinopotam/ui-kit/treeSelect';
import {IExtTreeApi, IExtTreeProps, Tree} from @krinopotam/ui-kit/tree';
import {Space, Switch} from 'antd';
import {FolderOutlined} from '@ant-design/icons';
import {AnyType} from '@krinopotam/service-types';
export const Example = (): React.JSX.Element => {
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
const departmentsApi = {} as IExtTreeApi;
const useTreeProps = () => {
    const editFormProps = useGetEditFormProps(false, departmentsApi);
    const editGroupFormProps = useGetEditFormProps(true, departmentsApi);
    return {
        apiRef: departmentsApi,
        dataSet: dataSet,
        defaultExpandAll: true,
        confirmDelete: true,
        confirmMove: true,
        editFormProps: editFormProps,
        editGroupFormProps: editGroupFormProps,
        selectNewNode: true,
        sortOnChange: true,
        titleRender: groupNodeRender,
        buttonsIconsOnly: true,
        groupsMode: true,
    } satisfies IExtTreeProps;
};
export const groupNodeRender = (node: Record<string, AnyType>) => {
    if (node.isGroup)
        return (
            <>
                <FolderOutlined /> {node.title}
            </>
        );
    return node.title;
};
const useGetEditFormProps = (isGroup: boolean, treeApi: IExtTreeApi): IDFormModalProps => {
    const name = isGroup ? 'Group' : 'Department';
    return {
        confirmChanges: true,
        fieldsProps: {
            title: {
                component: InputField,
                label: name,
                rules: [{type: 'string', rule: 'not-empty', message: name + ' is required'}],
                autoFocus: true,
            } satisfies IInputFieldProps,
            parent: {
                component: TreeSelectField,
                label: 'Group',
                placeholder: 'Choose parent group',
                groupsMode: true,
                titleRender: groupNodeRender,
                selectedRender: groupNodeRender,
            } as ITreeSelectFieldProps,
        },
        onFormInit: formApi => {
            const model = formApi.model;
            const field = model.getField('parent');
            const formMode = model.getFormMode();
            const id = model.getFormDataSet()['id'];
            /** modify dataset for update to avoid the possibility of a parent node choosing itself or its own child node */
            const dataSet = treeApi.getGroupsOnly(formMode !== 'update' ? undefined : id);
            field.updateProps({dataSet: dataSet});
        },
        onSubmit: values => {
            return {data: {...values, isGroup: isGroup}};
        },
    };
};
const dataSet: ITreeSelectNode[] = [
    {
        id: '01',
        title: 'Департамент аналитики данных',
        isGroup: true,
        children: [
            {
                id: '01-01',
                title: 'Управление аналитики продаж',
                isGroup: true,
                children: [
                    {id: '01-01-01', title: 'Отдел продаж север'},
                    {id: '01-01-02', title: 'Отдел продаж юг'},
                    {id: '01-01-03', title: 'Отдел продаж запад'},
                ],
            },
            {
                id: '01-02',
                title: 'Управление аналитики закупок',
                isGroup: true,
                children: [
                    {id: '01-02-01', title: 'Отдел закупок север'},
                    {id: '01-02-02', title: 'Отдел закупок юг'},
                    {id: '01-02-03', title: 'Отдел закупок запад'},
                ],
            },
            {
                id: '01-03',
                title: 'Управление аналитики производства',
                isGroup: true,
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
        isGroup: true,
        children: [
            {
                id: '02-01',
                title: 'Управление строительства',
                isGroup: true,
                children: [
                    {id: '02-01-01', title: 'Отдел строительства север'},
                    {id: '02-01-02', title: 'Отдел строительства юг'},
                    {id: '02-01-03', title: 'Отдел строительства запад'},
                ],
            },
            {
                id: '02-02',
                title: 'Управление демонтажа',
                isGroup: true,
                children: [
                    {id: '02-02-01', title: 'Отдел демонтажа север'},
                    {id: '02-02-02', title: 'Отдел демонтажа юг'},
                    {id: '02-02-03', title: 'Отдел демонтажа запад'},
                ],
            },
            {
                id: '02-03',
                title: 'Управление реконструкции',
                isGroup: true,
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
        isGroup: true,
        children: [
            {
                id: '03-01',
                title: 'Управление проектирования',
                isGroup: true,
                children: [
                    {id: '03-01-01', title: 'Отдел проектирования север'},
                    {id: '03-01-02', title: 'Отдел проектирования юг'},
                    {id: '03-01-03', title: 'Отдел проектирования запад'},
                ],
            },
            {
                id: '03-02',
                title: 'Управление согласования',
                isGroup: true,
                children: [
                    {id: '03-02-01', title: 'Отдел согласования север'},
                    {id: '03-02-02', title: 'Отдел согласования юг'},
                    {id: '03-02-03', title: 'Отдел согласования запад'},
                ],
            },
            {
                id: '03-03',
                title: 'Управление анализа проектов',
                isGroup: true,
                children: [
                    {id: '03-03-01', title: 'Отдел анализа север'},
                    {id: '03-03-02', title: 'Отдел анализа юг'},
                    {id: '03-03-03', title: 'Отдел анализа запад'},
                ],
            },
        ],
    },
];
`})})}]})})]});export{K as Pagef2b1a1b2ef3f444a9eb9b709d6c9fa42,K as default};
