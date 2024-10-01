const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-Co9PZaPl.js","assets/default-highlight-DvtBkdhg.js","assets/index-Dv3qFdjW.js"])))=>i.map(i=>d[i]);
import{j as t,r as d,_ as c,D as h}from"./index-Dv3qFdjW.js";import{D as p}from"./dForm-QxcKLYQQ.js";import{I as a}from"./inputField-C4gwpQCw.js";import{T as n}from"./treeSelectField-BUD0w8Bo.js";import{G as u}from"./useApiIsNodeSelected-CouYiEi1.js";import"./modal-Bp_ASPGm.js";import{m as f}from"./dFormModal-BUbiUSeF.js";import{P as F,C as S,d as P,c as T}from"./darcula-MphVyLu8.js";import"./index-8gx4Y1o-.js";import"./index-qOGxHuln.js";import"./SearchOutlined-DCaoIkCx.js";import"./defaultButtonsProps-DchoBAIh.js";import"./useShowArrow-CHTHTBiw.js";import"./useIcons-CEssDIMU.js";import"./modal-DoluWT5v.js";const I=()=>{const e=D();return t.jsxs(t.Fragment,{children:[t.jsx("h1",{children:"Пример TreeSelect с формой редактирования"}),t.jsx("div",{style:{maxWidth:500},children:t.jsx(p,{...e})})]})},x=e=>t.jsxs(t.Fragment,{children:[e.title,t.jsx("br",{}),t.jsx("small",{style:{color:"#808080"},children:e.head?"("+e.head+")":""})]}),g=e=>t.jsxs(t.Fragment,{children:[e.title," ",t.jsx("small",{style:{color:"#808080"},children:e.head?"("+e.head+")":""})]}),j=(e,i)=>(i.title+" ("+i.head+")").toLowerCase().indexOf(e.toLowerCase())>=0,s={},D=()=>{const e=k();return d.useMemo(()=>({formId:"Test form",confirmChanges:!0,fieldsProps:{departments:{component:n,apiRef:s,label:"Подразделения",editFormProps:e,confirmDelete:!0,titleRender:x,selectedRender:g,filterTreeNode:j,dataSet:R}},buttons:null}),[e])},k=()=>d.useMemo(()=>({onFormInit:e=>{const i=e.model,r=i.getField("parent"),o=s.getDataSet();if(i.getFormMode()!=="update"){r.updateProps({dataSet:o});return}const m=i.getFormDataSet().id,l=f(o);u(m,l,{key:"id",children:"children"}),r.updateProps({dataSet:l})},formId:"EditForm",confirmChanges:!0,fieldsProps:{title:{component:a,label:"Подразделение"},head:{component:a,label:"Руководитель"},parent:{component:n,label:"Родитель"}}}),[]),R=[{id:"01",title:"Департамент аналитики данных",head:"Иванов Иван Иванович",children:[{id:"01-01",title:"Управление аналитики продаж",children:[{id:"01-01-01",title:"Отдел продаж север",head:"Петров Петр Петрович"},{id:"01-01-02",title:"Отдел продаж юг",head:"Сидоров Сидр Сидорович"},{id:"01-01-03",title:"Отдел продаж запад",head:"Дмитриев Дмитрий Дмитриевич"}]},{id:"01-02",title:"Управление аналитики закупок",head:"Семенов Семен Семенович",children:[{id:"01-02-01",title:"Отдел закупок север",head:"Максимов Максим Максимович"},{id:"01-02-02",title:"Отдел закупок юг",head:"Русланов Руслан Русланович"},{id:"01-02-03",title:"Отдел закупок запад",head:"Сметанин Сметан Сметанович"}]},{id:"01-03",title:"Управление аналитики производства",head:"Саратов Сарат Саратович",children:[{id:"01-03-01",title:"Отдел производства север",head:"Трибратов Трибрат Трибратович"},{id:"01-03-02",title:"Отдел производства юг",head:"Уваров Увар Уварович"},{id:"01-03-03",title:"Отдел производства запад",head:"Каямов Каям Каямович"}]}]},{id:"02",title:"Департамент инженерных работ",head:"Примеров Пример Примерович",children:[{id:"02-01",title:"Управление строительства",children:[{id:"02-01-01",title:"Отдел строительства север",head:"Неверов Невер Неверович"},{id:"02-01-02",title:"Отдел строительства юг",head:"Занудов Зануд Занудович"},{id:"02-01-03",title:"Отдел строительства запад",head:"Сигизмундов Сигизмунд Сигизмундович"}]},{id:"02-02",title:"Управление демонтажа",head:"Картонов Картон Картонович",children:[{id:"02-02-01",title:"Отдел демонтажа север",head:"Помидоров Помидор Помидорович"},{id:"02-02-02",title:"Отдел демонтажа юг",head:"Бананов Банан Бананович"},{id:"02-02-03",title:"Отдел демонтажа запад",head:"Огурцов Огурец Огурцович"}]},{id:"02-03",title:"Управление реконструкции",head:"Ремонтов Ремонт Ремонтович",children:[{id:"02-03-01",title:"Отдел реконструкции север",head:"Лимонов Лимон Лимонович"},{id:"02-03-02",title:"Отдел реконструкции юг",head:"Маркелов Маркел Маркелович"},{id:"02-03-03",title:"Отдел реконструкции запад",head:"Карпелов Карпел Карпелович"}]}]},{id:"03",title:"Департамент проектных работ",head:"Терпелов Терпел Терпелович",children:[{id:"03-01",title:"Управление проектирования",children:[{id:"03-01-01",title:"Отдел проектирования север",head:"Березин Берез Березович"},{id:"03-01-02",title:"Отдел проектирования юг",head:"Битов Бит Битович"},{id:"03-01-03",title:"Отдел проектирования запад",head:"Литеров Литер Литерович"}]},{id:"03-02",title:"Управление согласования",children:[{id:"03-02-01",title:"Отдел согласования север",head:"Рамов Рама Рамович"},{id:"03-02-02",title:"Отдел согласования юг",head:"Груздев Грузд Груздевич"},{id:"03-02-03",title:"Отдел согласования запад",head:"Блинов Блин Блинович"}]},{id:"03-03",title:"Управление анализа проектов",children:[{id:"03-03-01",title:"Отдел анализа север",head:"Котов Кот Котович"},{id:"03-03-02",title:"Отдел анализа юг",head:"Самолетов Самолет Самолетович"},{id:"03-03-03",title:"Отдел анализа запад",head:"Кораллов Коралл Кораллович"}]}]}],b=d.lazy(()=>c(()=>import("./index-Co9PZaPl.js").then(e=>e.ds),__vite__mapDeps([0,1,2])).then(e=>({default:e.Prism}))),J=e=>t.jsxs(F,{children:[t.jsx("div",{children:t.jsx(I,{})}),t.jsx(h,{}),t.jsx("div",{children:t.jsx(S,{items:[{key:1,label:"Show source",children:t.jsx(d.Suspense,{fallback:t.jsx("div",{children:"Loading source..."}),children:t.jsx(b,{language:"tsx",style:e.darkMode?P:T,showLineNumbers:!0,children:`
import React, {useMemo} from 'react';
import {DForm, IDFormProps} from @krinopotam/ui-kit/dForm';
import {IDFormModalProps} from @krinopotam/ui-kit/dFormModal';
import {IInputFieldProps, InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField';
import {ITreeSelectFieldProps, TreeSelectField} from @krinopotam/ui-kit/dForm/fields/treeSelect/treeSelectField';
import {ITreeSelectApi, ITreeSelectNode} from @krinopotam/ui-kit/treeSelect';
import {removeFromTree} from @krinopotam/ui-kit/_shared/hooks/treeComponentApiMethods/serviceMethods/removeFromTree';
import {CloneObject} from '@krinopotam/js-helpers';
export const TreeSelectWithFormAndNodeRenderers = (): React.JSX.Element => {
    const formProps = useFormProps();
    return (
        <>
            <div style={{maxWidth: 500}}>
                <DForm {...formProps} />
            </div>
        </>
    );
};
const titleRender: ITreeSelectFieldProps['titleRender'] = (treeNode: ITreeSelectNode) => {
    return (
        <>
            {treeNode.title}
            <br />
            <small style={{color: '#808080'}}>{treeNode.head ? '(' + treeNode.head + ')' : ''}</small>
        </>
    );
};
const selectRender: ITreeSelectFieldProps['selectedRender'] = (treeNode: ITreeSelectNode) => {
    return (
        <>
            {treeNode.title} <small style={{color: '#808080'}}>{treeNode.head ? '(' + treeNode.head + ')' : ''}</small>
        </>
    );
};
const filterTreeNode: ITreeSelectFieldProps['filterTreeNode'] = (inputValue: string, treeNode: ITreeSelectNode) => {
    const nodeString = (treeNode.title + ' (' + treeNode.head + ')').toLowerCase();
    return nodeString.indexOf(inputValue.toLowerCase()) >= 0;
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
                    titleRender: titleRender,
                    selectedRender: selectRender,
                    filterTreeNode: filterTreeNode,
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
                head: {component: InputField, label: 'Руководитель'} satisfies IInputFieldProps,
                parent: {
                    component: TreeSelectField,
                    label: 'Родитель',
                } satisfies ITreeSelectFieldProps,
            },
        }),
        []
    );
};
const dataSet: ITreeSelectFieldProps['dataSet'] = [
    {
        id: '01',
        title: 'Департамент аналитики данных',
        head: 'Иванов Иван Иванович',
        children: [
            {
                id: '01-01',
                title: 'Управление аналитики продаж',
                children: [
                    {id: '01-01-01', title: 'Отдел продаж север', head: 'Петров Петр Петрович'},
                    {id: '01-01-02', title: 'Отдел продаж юг', head: 'Сидоров Сидр Сидорович'},
                    {id: '01-01-03', title: 'Отдел продаж запад', head: 'Дмитриев Дмитрий Дмитриевич'},
                ],
            },
            {
                id: '01-02',
                title: 'Управление аналитики закупок',
                head: 'Семенов Семен Семенович',
                children: [
                    {id: '01-02-01', title: 'Отдел закупок север', head: 'Максимов Максим Максимович'},
                    {id: '01-02-02', title: 'Отдел закупок юг', head: 'Русланов Руслан Русланович'},
                    {id: '01-02-03', title: 'Отдел закупок запад', head: 'Сметанин Сметан Сметанович'},
                ],
            },
            {
                id: '01-03',
                title: 'Управление аналитики производства',
                head: 'Саратов Сарат Саратович',
                children: [
                    {id: '01-03-01', title: 'Отдел производства север', head: 'Трибратов Трибрат Трибратович'},
                    {id: '01-03-02', title: 'Отдел производства юг', head: 'Уваров Увар Уварович'},
                    {id: '01-03-03', title: 'Отдел производства запад', head: 'Каямов Каям Каямович'},
                ],
            },
        ],
    },
    {
        id: '02',
        title: 'Департамент инженерных работ',
        head: 'Примеров Пример Примерович',
        children: [
            {
                id: '02-01',
                title: 'Управление строительства',
                children: [
                    {id: '02-01-01', title: 'Отдел строительства север', head: 'Неверов Невер Неверович'},
                    {id: '02-01-02', title: 'Отдел строительства юг', head: 'Занудов Зануд Занудович'},
                    {id: '02-01-03', title: 'Отдел строительства запад', head: 'Сигизмундов Сигизмунд Сигизмундович'},
                ],
            },
            {
                id: '02-02',
                title: 'Управление демонтажа',
                head: 'Картонов Картон Картонович',
                children: [
                    {id: '02-02-01', title: 'Отдел демонтажа север', head: 'Помидоров Помидор Помидорович'},
                    {id: '02-02-02', title: 'Отдел демонтажа юг', head: 'Бананов Банан Бананович'},
                    {id: '02-02-03', title: 'Отдел демонтажа запад', head: 'Огурцов Огурец Огурцович'},
                ],
            },
            {
                id: '02-03',
                title: 'Управление реконструкции',
                head: 'Ремонтов Ремонт Ремонтович',
                children: [
                    {id: '02-03-01', title: 'Отдел реконструкции север', head: 'Лимонов Лимон Лимонович'},
                    {id: '02-03-02', title: 'Отдел реконструкции юг', head: 'Маркелов Маркел Маркелович'},
                    {id: '02-03-03', title: 'Отдел реконструкции запад', head: 'Карпелов Карпел Карпелович'},
                ],
            },
        ],
    },
    {
        id: '03',
        title: 'Департамент проектных работ',
        head: 'Терпелов Терпел Терпелович',
        children: [
            {
                id: '03-01',
                title: 'Управление проектирования',
                children: [
                    {id: '03-01-01', title: 'Отдел проектирования север', head: 'Березин Берез Березович'},
                    {id: '03-01-02', title: 'Отдел проектирования юг', head: 'Битов Бит Битович'},
                    {id: '03-01-03', title: 'Отдел проектирования запад', head: 'Литеров Литер Литерович'},
                ],
            },
            {
                id: '03-02',
                title: 'Управление согласования',
                children: [
                    {id: '03-02-01', title: 'Отдел согласования север', head: 'Рамов Рама Рамович'},
                    {id: '03-02-02', title: 'Отдел согласования юг', head: 'Груздев Грузд Груздевич'},
                    {id: '03-02-03', title: 'Отдел согласования запад', head: 'Блинов Блин Блинович'},
                ],
            },
            {
                id: '03-03',
                title: 'Управление анализа проектов',
                children: [
                    {id: '03-03-01', title: 'Отдел анализа север', head: 'Котов Кот Котович'},
                    {id: '03-03-02', title: 'Отдел анализа юг', head: 'Самолетов Самолет Самолетович'},
                    {id: '03-03-03', title: 'Отдел анализа запад', head: 'Кораллов Коралл Кораллович'},
                ],
            },
        ],
    },
];
`})})}]})})]});export{J as Page516f795e9d57487eaf44382716ef674c,J as default};
