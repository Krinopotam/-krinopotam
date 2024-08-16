import{j as e,D as d}from"./index-HhzJ4ZAZ.js";import{P as l,C as n,h as c,d as p,a as m}from"./docco-DFBk-y2S.js";import{D as u}from"./dForm-CEoJtw24.js";import"./messageBox-B4gQYQRN.js";import{T as a}from"./treeSelectField-NMpDJ8jg.js";import"./index-B0AR281A.js";import"./dFormModal-CWIdSG_N.js";import"./modal-BNnPWca4.js";import"./useShowArrow-rDZmitIh.js";import"./DeleteOutlined-BU6ZfEzd.js";import"./useIcons-D-iTvTG-.js";import"./SearchOutlined-BTqMUkSq.js";const S=[{id:"1",title:"Первый"},{id:"2",title:"Второй"},{id:"3",title:"Третий"}],f=[{id:"1",title:"Первый процесс"},{id:"2",title:"Второй процесс"}],h=[{id:"3",title:"Третий процесс"},{id:"4",title:"Четвертый процесс"}],F={formId:"TestForm",confirmChanges:!0,fieldsProps:{tip:{component:a,label:"Тип процесса",fetchMode:"onUse",dataSet:S,onValueChanged:(i,s,r)=>{const o=r.getValue();let t;if(o?o.id==="1"?t=f:o.id==="2"?t=h:t=[]:t=[],!t)return;r.getModel().getField("process").updateProps({dataSet:t})}},process:{component:a,label:"Процессы",fetchMode:"onUse",dataSet:[{}]}},buttons:{ok:{position:"right"}}},g=()=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Пример формы c полями, набор данных которых зависит друг от друга"}),e.jsx("div",{style:{maxWidth:500},children:e.jsx(u,{...F})})]}),_=i=>e.jsxs(l,{children:[e.jsx("div",{children:e.jsx(g,{})}),e.jsx(d,{}),e.jsx("div",{children:e.jsx(n,{items:[{key:1,label:"Show source",children:e.jsx(c,{language:"javascript",style:i.darkMode?p:m,showLineNumbers:!0,children:`
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
`})}]})})]});export{_ as Page754fdcd9c73c4ade83dc4853f092677b,_ as default};
