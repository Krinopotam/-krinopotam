import{j as e,D as l}from"./index-239f7c99.js";import{P as d,C as n,S as c,d as p,a as m}from"./docco-df193236.js";import{D as S}from"./index-e86df101.js";import{T as s}from"./treeSelectField-82e39a0c.js";import"./dFormModal-2ecf2b9b.js";import"./useShowArrow-66e16bae.js";import"./DeleteOutlined-01bac62e.js";import"./SearchOutlined-cde65a1f.js";const u=[{id:"1",title:"Первый"},{id:"2",title:"Второй"},{id:"3",title:"Третий"}],f=[{id:"1",title:"Первый процесс"},{id:"2",title:"Второй процесс"}],h=[{id:"3",title:"Третий процесс"},{id:"4",title:"Четвертый процесс"}],F={formId:"TestForm",confirmChanges:!0,fieldsProps:{tip:{component:s,label:"Тип процесса",fetchMode:"onUse",dataSet:u,onValueChanged:(i,a,r)=>{const o=r.getValue();let t;if(o?o.id==="1"?t=f:o.id==="2"?t=h:t=[]:t=[],!t)return;r.getModel().getField("process").updateProps({dataSet:t})}},process:{component:s,label:"Процессы",fetchMode:"onUse",dataSet:[{}]}},buttons:{ok:{position:"right"}}},g=()=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Пример формы c полями, набор данных которых зависит друг от друга"}),e.jsx("div",{style:{maxWidth:500},children:e.jsx(S,{...F})})]}),k=i=>{const a=`
import {DForm, IDFormProps} from @krinopotam/ui-kit/dForm';
import React from 'react';
import {ITreeSelectFieldProps, TreeSelectField} from @krinopotam/ui-kit/dForm/fields/treeSelect/treeSelectField";
const dataSet1 = [
    {
        id: '1',
        title: 'Первый',
    },
    {
        id: '2',
        title: 'Второй',
    },
    {
        id: '3',
        title: 'Третий',
    },
];
const dataSet2_1 = [
    {
        id: '1',
        title: 'Первый процесс',
    },
    {
        id: '2',
        title: 'Второй процесс',
    },
];
const dataSet2_2 = [
    {
        id: '3',
        title: 'Третий процесс',
    },
    {
        id: '4',
        title: 'Четвертый процесс',
    },
];
const formProps: IDFormProps = {
    formId:'TestForm',
    confirmChanges: true,
    fieldsProps: {
        tip: {component: TreeSelectField, label: 'Тип процесса', fetchMode: 'onUse', dataSet: dataSet1, onValueChanged:(value, prevValue, field)=>{
                const tipValue = field.getValue() as Record<'id', unknown>;
                let newDataSet: ITreeSelectFieldProps['dataSet'];
                if (!tipValue) newDataSet = [];
                else if (tipValue.id === '1') newDataSet = dataSet2_1;
                else if (tipValue.id === '2') newDataSet = dataSet2_2;
                else newDataSet = [];
                if (!newDataSet) return;
                const process = field.getModel().getField('process')
                process.updateProps({dataSet: newDataSet})
            }}  as ITreeSelectFieldProps,
        process: {component: TreeSelectField, label: 'Процессы', fetchMode: 'onUse', dataSet: [{}]}
    },
    buttons: {ok: {position: 'right'}}
}
export const FormBetweenFields = (): React.JSX.Element => {
    return (
        <>
            <div style={{maxWidth: 500}}>
                <DForm {...formProps} />
            </div>
        </>
    );
};
`;return e.jsxs(d,{children:[e.jsx("div",{children:e.jsx(g,{})}),e.jsx(l,{}),e.jsx("div",{children:e.jsx(n,{items:[{key:1,label:"Show source",children:e.jsx(c,{language:"javascript",style:i.darkMode?p:m,showLineNumbers:!0,children:a})}]})})]})};export{k as Page5a56c807ee3e42e28df3b404bbe32221,k as default};