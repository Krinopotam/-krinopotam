const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-aRU0KM20.js","assets/default-highlight-Kf2sMSRd.js","assets/index-BEbJdilr.js"])))=>i.map(i=>d[i]);
import{j as e,r as d,_ as a,D as c}from"./index-BEbJdilr.js";import{D as p}from"./dForm-BUs8TQbJ.js";import{I as u}from"./inputField-CHnFv8h3.js";import{T as s}from"./treeSelectField-1yWgJPJB.js";import{P as h}from"./useApiGetGroupsOnly-B8IoRGb1.js";import"./modal-DZ70cJBI.js";import{m as f}from"./dFormModal-DVM0pNWI.js";import{P as F,C as P,d as S,c as T}from"./darcula-DUU8WC9V.js";import"./index-DJAh43lQ.js";import"./index-C0ukGqzI.js";import"./SearchOutlined-CqkiXlgD.js";import"./defaultButtonsProps-BuloFMuY.js";import"./useShowArrow-Co7GTLtH.js";import"./useIcons-go0WpEcA.js";import"./modal-CKnotMHS.js";const g=()=>{const t=I();return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Пример TreeSelect с асинхронной формой редактирования"}),e.jsx("p",{children:"Для данного примера операция завершится ошибкой с вероятностью 30%"}),e.jsx("div",{style:{maxWidth:500},children:e.jsx(p,{...t})})]})},n={},I=()=>{const t=j();return d.useMemo(()=>({formId:"Test form",confirmChanges:!0,fieldsProps:{departments:{component:s,apiRef:n,label:"Подразделения",confirmDelete:!0,dataSet:x,editFormProps:t,onDelete:()=>new Promise((i,r)=>{setTimeout(()=>{Math.random()<.3?r({message:"Тестовая ошибка удаления строк",code:400}):i({data:{result:"OK"}})},2e3)})}},buttons:null}),[t])},j=()=>d.useMemo(()=>({onFormInit:t=>{const i=t.model,r=i.getField("parent"),o=n.getDataSet();if(i.getFormMode()!=="update"){r.updateProps({dataSet:o});return}const m=i.getFormDataSet().id,l=f(o);h(m,l,{key:"id",children:"children"}),r.updateProps({dataSet:l})},formId:"EditForm",confirmChanges:!0,fieldsProps:{title:{component:u,label:"Подразделение"},parent:{component:s,label:"Родитель"}},onSubmit:(t,i)=>new Promise((r,o)=>{setTimeout(()=>{Math.random()<.3?o({message:"Тестовая ошибка сохранения",code:400}):r({data:i})},3e3)})}),[]),x=[{id:"01",title:"Департамент аналитики данных",children:[{id:"01-01",title:"Управление аналитики продаж",children:[{id:"01-01-01",title:"Отдел продаж север"},{id:"01-01-02",title:"Отдел продаж юг"},{id:"01-01-03",title:"Отдел продаж запад"}]},{id:"01-02",title:"Управление аналитики закупок",children:[{id:"01-02-01",title:"Отдел закупок север"},{id:"01-02-02",title:"Отдел закупок юг"},{id:"01-02-03",title:"Отдел закупок запад"}]},{id:"01-03",title:"Управление аналитики производства",children:[{id:"01-03-01",title:"Отдел производства север"},{id:"01-03-02",title:"Отдел производства юг"},{id:"01-03-03",title:"Отдел производства запад"}]}]},{id:"02",title:"Департамент инженерных работ",children:[{id:"02-01",title:"Управление строительства",children:[{id:"02-01-01",title:"Отдел строительства север"},{id:"02-01-02",title:"Отдел строительства юг"},{id:"02-01-03",title:"Отдел строительства запад"}]},{id:"02-02",title:"Управление демонтажа",children:[{id:"02-02-01",title:"Отдел демонтажа север"},{id:"02-02-02",title:"Отдел демонтажа юг"},{id:"02-02-03",title:"Отдел демонтажа запад"}]},{id:"02-03",title:"Управление реконструкции",children:[{id:"02-03-01",title:"Отдел реконструкции север"},{id:"02-03-02",title:"Отдел реконструкции юг"},{id:"02-03-03",title:"Отдел реконструкции запад"}]}]},{id:"03",title:"Департамент проектных работ",children:[{id:"03-01",title:"Управление проектирования",children:[{id:"03-01-01",title:"Отдел проектирования север"},{id:"03-01-02",title:"Отдел проектирования юг"},{id:"03-01-03",title:"Отдел проектирования запад"}]},{id:"03-02",title:"Управление согласования",children:[{id:"03-02-01",title:"Отдел согласования север"},{id:"03-02-02",title:"Отдел согласования юг"},{id:"03-02-03",title:"Отдел согласования запад"}]},{id:"03-03",title:"Управление анализа проектов",children:[{id:"03-03-01",title:"Отдел анализа север"},{id:"03-03-02",title:"Отдел анализа юг"},{id:"03-03-03",title:"Отдел анализа запад"}]}]}],D=d.lazy(()=>a(()=>import("./index-aRU0KM20.js").then(t=>t.ds),__vite__mapDeps([0,1,2])).then(t=>({default:t.Prism}))),H=t=>e.jsxs(F,{children:[e.jsx("div",{children:e.jsx(g,{})}),e.jsx(c,{}),e.jsx("div",{children:e.jsx(P,{items:[{key:1,label:"Show source",children:e.jsx(d.Suspense,{fallback:e.jsx("div",{children:"Loading source..."}),children:e.jsx(D,{language:"tsx",style:t.darkMode?S:T,showLineNumbers:!0,children:`
import React, {useMemo} from 'react';
import {DForm, IDFormProps} from @krinopotam/ui-kit/dForm';
import {IDFormModalProps} from @krinopotam/ui-kit/dFormModal';
import {IInputFieldProps, InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField';
import {ITreeSelectFieldProps, TreeSelectField} from @krinopotam/ui-kit/dForm/fields/treeSelect/treeSelectField';
import {CloneObject} from '@krinopotam/js-helpers';
import {removeFromTree} from @krinopotam/ui-kit/_shared/hooks/treeComponentApiMethods/serviceMethods/removeFromTree';
import {ITreeSelectApi} from @krinopotam/ui-kit/treeSelect';
export const TreeSelectWithFormAsync = (): React.JSX.Element => {
    const formProps = useFormProps();
    return (
        <>
            <div style={{maxWidth: 500}}>
                <DForm {...formProps} />
            </div>
        </>
    );
};
const departmentsApi = {} as ITreeSelectApi;
const useFormProps = () => {
    const treeEditFormProps = useTreeEditFormProps();
    return useMemo(
        (): IDFormProps => ({
            formId: 'Test form',
            confirmChanges: true,
            fieldsProps: {
                departments: {
                    component: TreeSelectField,
                    apiRef: departmentsApi,
                    label: 'Подразделения',
                    confirmDelete: true,
                    dataSet: dataSet,
                    editFormProps: treeEditFormProps,
                    onDelete: () => {
                        return new Promise((resolve, reject) => {
                            setTimeout(() => {
                                if (Math.random() < 0.3) reject({message: 'Тестовая ошибка удаления строк', code: 400});
                                else resolve({data: {result: 'OK'}});
                            }, 2000);
                        });
                    },
                } satisfies ITreeSelectFieldProps,
            },
            buttons: null,
        }),
        [treeEditFormProps]
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
            onSubmit: (_values, dataSet) => {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        if (Math.random() < 0.3) reject({message: 'Тестовая ошибка сохранения', code: 400});
                        else resolve({data: dataSet});
                    }, 3000);
                });
            },
        }),
        []
    );
};
const dataSet = [
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
`})})}]})})]});export{H as Page9e6a5894b2b941488068168af1285438,H as default};