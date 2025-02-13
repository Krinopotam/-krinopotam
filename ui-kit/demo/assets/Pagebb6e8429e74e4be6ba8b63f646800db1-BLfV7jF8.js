const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DY4jbcst.js","assets/default-highlight-Dn6Zkl0a.js","assets/index-CtAjfk3U.js"])))=>i.map(i=>d[i]);
import{j as e,D as l,r as a,_ as p}from"./index-CtAjfk3U.js";import{D as n}from"./isArray-Dq3mFmoY.js";import{T as i}from"./treeSelectField-n2q6sRnM.js";import{P as c,C as m}from"./pageLayout-BYJr8qhp.js";import{d as S,c as u}from"./darcula-BqMdvqtY.js";import"./buttonsRow-DIWV9y5m.js";import"./messageBox-BEJz6LZv.js";import"./index-CQ36vsgA.js";import"./baseField-CLOOMrMa.js";import"./dFormModal-DBrO8yV5.js";import"./modal-CqlI0vXJ.js";import"./defaultButtonsProps-BFWSm065.js";import"./PlusOutlined-CjmZvIFI.js";import"./useApiGetGroupsOnly-Bxa2nsTp.js";import"./index-BypK2dcJ.js";import"./useShowArrow-aGotVQ22.js";import"./useIcons-BRnDxCLJ.js";import"./SearchOutlined-BPRhDdUX.js";const f=[{id:"1",title:"First"},{id:"2",title:"Second"},{id:"3",title:"Third"}],h=[{id:"1",title:"First type process 1"},{id:"2",title:"First type process 2"}],F=[{id:"3",title:"Second type process 1"},{id:"4",title:"Second type process 2"}],P=()=>{const t=x();return e.jsxs("div",{children:[e.jsx("h1",{children:"An example of a form with TreeSelect fields, the data set of one of which depends on the selection in the other"}),e.jsx("div",{style:{maxWidth:500},children:e.jsx(n,{...t})})]})},x=()=>({formId:"TestForm",confirmChanges:!0,fieldsProps:{tip:{component:i,label:"Process type",fetchMode:"onUse",dataSet:f,onValueChanged:(t,d,s)=>{const r=s.getValue();let o;if(r?r.id==="1"?o=h:r.id==="2"?o=F:o=[]:o=[],!o)return;s.getModel().getField("process").updateProps({dataSet:o})}},process:{component:i,label:"Process",fetchMode:"onUse",dataSet:[{}]}},buttons:{ok:{position:"right"}}}),y=a.lazy(()=>p(()=>import("./index-DY4jbcst.js").then(t=>t.dw),__vite__mapDeps([0,1,2])).then(t=>({default:t.Prism}))),z=t=>e.jsxs(c,{children:[e.jsx(P,{}),e.jsx(l,{}),e.jsx("div",{children:e.jsx(m,{items:[{key:1,label:"Show source",children:e.jsx(a.Suspense,{fallback:e.jsx("div",{children:"Loading source..."}),children:e.jsx(y,{language:"tsx",style:t.darkMode?S:u,showLineNumbers:!0,children:`
import {DForm, IDFormProps} from @krinopotam/ui-kit/dForm';
import React from 'react';
import {ITreeSelectFieldProps, TreeSelectField} from @krinopotam/ui-kit/dForm/fields/treeSelect/treeSelectField';
import {Space, Switch} from 'antd';
import {AnyType} from '@krinopotam/service-types';
const dataSet1 = [
    {
        id: '1',
        title: 'First',
    },
    {
        id: '2',
        title: 'Second',
    },
    {
        id: '3',
        title: 'Third',
    },
];
const dataSet2_1 = [
    {
        id: '1',
        title: 'First type process 1',
    },
    {
        id: '2',
        title: 'First type process 2',
    },
];
const dataSet2_2 = [
    {
        id: '3',
        title: 'Second type process 1',
    },
    {
        id: '4',
        title: 'Second type process 2',
    },
];
export const Example = (): React.JSX.Element => {
    const formProps = useFormProps();
    return (
        <div>
            <div style={{maxWidth: 500}}>
                <DForm {...formProps} />
            </div>
        </div>
    );
};
const useFormProps = () => {
    return {
        formId: 'TestForm',
        confirmChanges: true,
        fieldsProps: {
            tip: {
                component: TreeSelectField,
                label: 'Process type',
                fetchMode: 'onUse',
                dataSet: dataSet1,
                onValueChanged: (value, prevValue, field) => {
                    const tipValue = field.getValue() as Record<string, AnyType>;
                    let newDataSet: ITreeSelectFieldProps['dataSet'];
                    if (!tipValue) newDataSet = [];
                    else if (tipValue.id === '1') newDataSet = dataSet2_1;
                    else if (tipValue.id === '2') newDataSet = dataSet2_2;
                    else newDataSet = [];
                    if (!newDataSet) return;
                    const process = field.getModel().getField('process');
                    process.updateProps({dataSet: newDataSet});
                },
            } as ITreeSelectFieldProps,
            process: {component: TreeSelectField, label: 'Process', fetchMode: 'onUse', dataSet: [{}]},
        },
        buttons: {ok: {position: 'right'}},
    } satisfies IDFormProps;
};
`})})}]})})]});export{z as Pagebb6e8429e74e4be6ba8b63f646800db1,z as default};
