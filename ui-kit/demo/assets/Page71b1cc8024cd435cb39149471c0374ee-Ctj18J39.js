const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-aRU0KM20.js","assets/default-highlight-Kf2sMSRd.js","assets/index-BEbJdilr.js"])))=>i.map(i=>d[i]);
import{j as e,r as a,_ as l,D as c}from"./index-BEbJdilr.js";import{D as n}from"./dForm-BUs8TQbJ.js";import{T as i}from"./treeSelectField-1yWgJPJB.js";import{P as p,C as m,d as S,c as u}from"./darcula-DUU8WC9V.js";import"./modal-DZ70cJBI.js";import"./index-DJAh43lQ.js";import"./dFormModal-DVM0pNWI.js";import"./modal-CKnotMHS.js";import"./defaultButtonsProps-BuloFMuY.js";import"./useApiGetGroupsOnly-B8IoRGb1.js";import"./useShowArrow-Co7GTLtH.js";import"./useIcons-go0WpEcA.js";import"./SearchOutlined-CqkiXlgD.js";const f=[{id:"1",title:"First"},{id:"2",title:"Second"},{id:"3",title:"Third"}],h=[{id:"1",title:"First type process 1"},{id:"2",title:"First type process 2"}],F=[{id:"3",title:"Second type process 1"},{id:"4",title:"Second type process 2"}],x=()=>{const t=P();return e.jsxs("div",{children:[e.jsx("h1",{children:"An example of a form with TreeSelect fields, the data set of one of which depends on the selection in the other"}),e.jsx("div",{style:{maxWidth:500},children:e.jsx(n,{...t})})]})},P=()=>({formId:"TestForm",confirmChanges:!0,fieldsProps:{tip:{component:i,label:"Process type",fetchMode:"onUse",dataSet:f,onValueChanged:(t,d,r)=>{const s=r.getValue();let o;if(s?s.id==="1"?o=h:s.id==="2"?o=F:o=[]:o=[],!o)return;r.getModel().getField("process").updateProps({dataSet:o})}},process:{component:i,label:"Process",fetchMode:"onUse",dataSet:[{}]}},buttons:{ok:{position:"right"}}}),y=a.lazy(()=>l(()=>import("./index-aRU0KM20.js").then(t=>t.ds),__vite__mapDeps([0,1,2])).then(t=>({default:t.Prism}))),R=t=>e.jsxs(p,{children:[e.jsx("div",{children:e.jsx(x,{})}),e.jsx(c,{}),e.jsx("div",{children:e.jsx(m,{items:[{key:1,label:"Show source",children:e.jsx(a.Suspense,{fallback:e.jsx("div",{children:"Loading source..."}),children:e.jsx(y,{language:"tsx",style:t.darkMode?S:u,showLineNumbers:!0,children:`
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
`})})}]})})]});export{R as Page71b1cc8024cd435cb39149471c0374ee,R as default};
