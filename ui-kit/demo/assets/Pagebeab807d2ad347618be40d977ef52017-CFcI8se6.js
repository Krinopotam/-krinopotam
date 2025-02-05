const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DJhjoKXt.js","assets/default-highlight-1wZDEzJ6.js","assets/index-B5poLpDm.js"])))=>i.map(i=>d[i]);
import{j as e,D as l,r as a,_ as n}from"./index-B5poLpDm.js";import{D as p}from"./dForm-vrGhQ6Lh.js";import{T as i}from"./treeSelectField-B_h9TBfM.js";import{P as c,C as m,d as u,c as S}from"./darcula-DszBWugp.js";import"./buttonsRow-aX3TQ5bu.js";import"./messageBox-1o2XjDyt.js";import"./index-AMqWlYeY.js";import"./dFormModal-C_QqbNS_.js";import"./modal-tHBgt86o.js";import"./defaultButtonsProps-DtqWhfDr.js";import"./PlusOutlined-Bg-hNKo-.js";import"./useApiGetGroupsOnly-5VEr3Syr.js";import"./index-BVhKSSo6.js";import"./useShowArrow-Dw-Bhs1H.js";import"./useIcons-BKmiU9RQ.js";import"./SearchOutlined-D8SaSDI5.js";const f=[{id:"1",title:"First"},{id:"2",title:"Second"},{id:"3",title:"Third"}],h=[{id:"1",title:"First type process 1"},{id:"2",title:"First type process 2"}],F=[{id:"3",title:"Second type process 1"},{id:"4",title:"Second type process 2"}],x=()=>{const t=P();return e.jsxs("div",{children:[e.jsx("h1",{children:"An example of a form with TreeSelect fields, the data set of one of which depends on the selection in the other"}),e.jsx("div",{style:{maxWidth:500},children:e.jsx(p,{...t})})]})},P=()=>({formId:"TestForm",confirmChanges:!0,fieldsProps:{tip:{component:i,label:"Process type",fetchMode:"onUse",dataSet:f,onValueChanged:(t,d,s)=>{const r=s.getValue();let o;if(r?r.id==="1"?o=h:r.id==="2"?o=F:o=[]:o=[],!o)return;s.getModel().getField("process").updateProps({dataSet:o})}},process:{component:i,label:"Process",fetchMode:"onUse",dataSet:[{}]}},buttons:{ok:{position:"right"}}}),y=a.lazy(()=>n(()=>import("./index-DJhjoKXt.js").then(t=>t.dw),__vite__mapDeps([0,1,2])).then(t=>({default:t.Prism}))),U=t=>e.jsxs(c,{children:[e.jsx("div",{children:e.jsx(x,{})}),e.jsx(l,{}),e.jsx("div",{children:e.jsx(m,{items:[{key:1,label:"Show source",children:e.jsx(a.Suspense,{fallback:e.jsx("div",{children:"Loading source..."}),children:e.jsx(y,{language:"tsx",style:t.darkMode?u:S,showLineNumbers:!0,children:`
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
`})})}]})})]});export{U as Pagebeab807d2ad347618be40d977ef52017,U as default};
