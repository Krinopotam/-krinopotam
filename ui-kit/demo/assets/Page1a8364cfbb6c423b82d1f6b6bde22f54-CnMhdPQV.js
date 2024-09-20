const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-9FGXM8eG.js","assets/default-highlight-_K3mzjfK.js","assets/index-CObHp3AH.js"])))=>i.map(i=>d[i]);
import{j as l,r as n,_ as d,D as r}from"./index-CObHp3AH.js";import{D as a}from"./dForm-DjwSwKfj.js";import{I as e}from"./inputField-CMzynz8s.js";import{T as t}from"./tabsField-CLxRtrIU.js";import{P as s,C as p,d as m,c as b}from"./darcula-D-n55oql.js";import"./modal-BBQwvlDP.js";import"./DownOutlined-BYejAm0U.js";import"./index-BubinFZA.js";import"./CheckOutlined-ka3l-INf.js";import"./index-Bcx3LFQ2.js";import"./SearchOutlined-DZTAjpNT.js";import"./index-ByCva3dC.js";const i={},F={apiRef:i,formId:"Test form",layout:"horizontal",confirmChanges:!0,fieldsProps:{field1:{component:e,label:"Field1",rules:[{type:"string",rule:"not-empty",message:"Поле не должно быть пустым"}]},field1a:{component:e,label:"Field1a",dependsOn:["field1"]},field1b:{component:e,label:"Field1b",dependsOn:["field1a"]},field2:{component:t,label:"Field2",tabs:{"Tab 1":{field2_1_1:{component:e,label:"Field3",inlineGroup:"row1",showCount:!0},field2_1_2:{component:e,label:"Field4",inlineGroup:"row1"}},"Tab 2":{field2_2_1:{component:e,label:"Field5",showCount:!0},field2_2_2:{component:t,label:"Field6",tabs:{"Tab 2_1":{field2_2_1_1:{component:e,label:"Field3",showCount:!0},field2_2_1_2:{component:e,label:"Field4"}},"Tab 2_2":{field2_2_2_1:{component:e,label:"Field5",showCount:!0},field2_2_2_2:{component:e,label:"Field6"}}}}},"Tab 3":{field3_2_1:{component:e,label:"Field5",showCount:!0},field3_2_2:{component:t,label:"Field6",tabs:{"Tab 3_1":{field3_2_1_1:{component:e,label:"Field3",showCount:!0},field3_2_1_2:{component:e,label:"Field4"}},"Tab 3_2":{field3_2_2_1:{component:e,label:"Field5",showCount:!0},field3_2_2_2:{component:e,label:"Field6"}}}}}}}},buttons:{ok:{position:"right"},rerenderTab1:{position:"left",onClick:()=>{i.model.getField("field2").emitTabRender("Tab 1")}},rerenderTabField:{position:"left",onClick:()=>{i.model.getField("field2").emitRender()}},rerenderForm:{position:"left",onClick:()=>{i.model.emitFormRender()}}}},_=()=>l.jsxs(l.Fragment,{children:[l.jsx("h1",{children:"Пример простой формы с вертикальным расположением подписей полей1"}),l.jsx("div",{style:{maxWidth:500},children:l.jsx(a,{...F})})]}),c=n.lazy(()=>d(()=>import("./index-9FGXM8eG.js").then(o=>o.ds),__vite__mapDeps([0,1,2])).then(o=>({default:o.Prism}))),R=o=>l.jsxs(s,{children:[l.jsx("div",{children:l.jsx(_,{})}),l.jsx(r,{}),l.jsx("div",{children:l.jsx(p,{items:[{key:1,label:"Show source",children:l.jsx(n.Suspense,{fallback:l.jsx("div",{children:"Loading source..."}),children:l.jsx(c,{language:"tsx",style:o.darkMode?m:b,showLineNumbers:!0,children:`
import React from 'react';
import {DForm, IDFormApi, IDFormProps} from @krinopotam/ui-kit/dForm';
import {InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField';
import {TabsField} from @krinopotam/ui-kit/dForm/fields/tabs/tabsField';
const api = {} as IDFormApi;
const formProps: IDFormProps = {
    apiRef: api,
    formId: 'Test form',
    layout: 'horizontal',
    confirmChanges: true,
    fieldsProps: {
        field1: {component: InputField, label: 'Field1', rules: [{type: 'string', rule: 'not-empty', message: 'Поле не должно быть пустым'}]},
        field1a: {component: InputField, label: 'Field1a', dependsOn: ['field1']},
        field1b: {component: InputField, label: 'Field1b', dependsOn: ['field1a']},
        field2: {
            component: TabsField,
            label: 'Field2',
            tabs: {
                'Tab 1': {
                    field2_1_1: {component: InputField, label: 'Field3', inlineGroup: 'row1', showCount: true},
                    field2_1_2: {component: InputField, label: 'Field4', inlineGroup: 'row1'},
                },
                'Tab 2': {
                    field2_2_1: {component: InputField, label: 'Field5', showCount: true},
                    field2_2_2: {
                        component: TabsField,
                        label: 'Field6',
                        tabs: {
                            'Tab 2_1': {
                                field2_2_1_1: {component: InputField, label: 'Field3', showCount: true},
                                field2_2_1_2: {component: InputField, label: 'Field4'},
                            },
                            'Tab 2_2': {
                                field2_2_2_1: {component: InputField, label: 'Field5', showCount: true},
                                field2_2_2_2: {component: InputField, label: 'Field6'},
                            },
                        },
                    },
                    //field2_2_3: {component: InputField, label: 'Field4'},
                },
                'Tab 3': {
                    field3_2_1: {component: InputField, label: 'Field5', showCount: true},
                    field3_2_2: {
                        component: TabsField,
                        label: 'Field6',
                        tabs: {
                            'Tab 3_1': {
                                field3_2_1_1: {component: InputField, label: 'Field3', showCount: true},
                                field3_2_1_2: {component: InputField, label: 'Field4'},
                            },
                            'Tab 3_2': {
                                field3_2_2_1: {component: InputField, label: 'Field5', showCount: true},
                                field3_2_2_2: {component: InputField, label: 'Field6'},
                            },
                        },
                    },
                    //field2_2_3: {component: InputField, label: 'Field4'},
                },
            },
        },
    },
    buttons: {
        ok: {position: 'right'},
        rerenderTab1: {
            position: 'left',
            onClick: () => {
                const tabField = api.model.getField('field2') as TabsField;
                tabField.emitTabRender('Tab 1');
            },
        },
        rerenderTabField: {
            position: 'left',
            onClick: () => {
                const tabField = api.model.getField('field2') as TabsField;
                tabField.emitRender();
            },
        },
        rerenderForm: {
            position: 'left',
            onClick: () => {
                api.model.emitFormRender();
            },
        },
    },
};
export const NewFormWithTabs = (): React.JSX.Element => {
    return (
        <>
            <div style={{maxWidth: 500}}>
                <DForm {...formProps} />
            </div>
        </>
    );
};
`})})}]})})]});export{R as Page1a8364cfbb6c423b82d1f6b6bde22f54,R as default};
