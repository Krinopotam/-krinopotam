import{j as l,D as d}from"./index-bd83bb7b.js";import{P as a,C as r,S as s,d as p,a as m}from"./docco-5da19923.js";import{D as F}from"./index-70b17d15.js";import{I as e}from"./inputField-0d7c82a2.js";import{T as t}from"./tabsField-a5b14314.js";import"./index-45228462.js";import"./EyeOutlined-9bf5471e.js";import"./SearchOutlined-5813b664.js";const o={},b={apiRef:o,formId:"Test form",layout:"horizontal",confirmChanges:!0,fieldsProps:{field1:{component:e,label:"Field1",rules:[{type:"string",rule:"not-empty",message:"Поле не должно быть пустым"}]},field1a:{component:e,label:"Field1a",dependsOn:["field1"]},field1b:{component:e,label:"Field1b",dependsOn:["field1a"]},field2:{component:t,label:"Field2",tabs:{"Tab 1":{field2_1_1:{component:e,label:"Field3",inlineGroup:"row1",showCount:!0},field2_1_2:{component:e,label:"Field4",inlineGroup:"row1"}},"Tab 2":{field2_2_1:{component:e,label:"Field5",showCount:!0},field2_2_2:{component:t,label:"Field6",tabs:{"Tab 2_1":{field2_2_1_1:{component:e,label:"Field3",showCount:!0},field2_2_1_2:{component:e,label:"Field4"}},"Tab 2_2":{field2_2_2_1:{component:e,label:"Field5",showCount:!0},field2_2_2_2:{component:e,label:"Field6"}}}}},"Tab 3":{field3_2_1:{component:e,label:"Field5",showCount:!0},field3_2_2:{component:t,label:"Field6",tabs:{"Tab 3_1":{field3_2_1_1:{component:e,label:"Field3",showCount:!0},field3_2_1_2:{component:e,label:"Field4"}},"Tab 3_2":{field3_2_2_1:{component:e,label:"Field5",showCount:!0},field3_2_2_2:{component:e,label:"Field6"}}}}}}}},buttons:{ok:{position:"right"},rerenderTab1:{position:"left",onClick:()=>{o.model.getField("field2").emitTabRender("Tab 1")}},rerenderTabField:{position:"left",onClick:()=>{o.model.getField("field2").emitRender()}},rerenderForm:{position:"left",onClick:()=>{o.model.emitFormRender()}}}},_=()=>l.jsxs(l.Fragment,{children:[l.jsx("h1",{children:"Пример простой формы с вертикальным расположением подписей полей1"}),l.jsx("div",{style:{maxWidth:500},children:l.jsx(F,{...b})})]}),g=i=>{const n=`
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
`;return l.jsxs(a,{children:[l.jsx("div",{children:l.jsx(_,{})}),l.jsx(d,{}),l.jsx("div",{children:l.jsx(r,{items:[{key:1,label:"Show source",children:l.jsx(s,{language:"javascript",style:i.darkMode?p:m,showLineNumbers:!0,children:n})}]})})]})};export{g as Page51b54dad79dc43678ff3baff7c84c1fb,g as default};
