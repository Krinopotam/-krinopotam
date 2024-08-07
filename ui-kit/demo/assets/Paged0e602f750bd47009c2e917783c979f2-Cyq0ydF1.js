import{j as l,D as n}from"./index-CEW5Pw51.js";import{P as d,C as a,h as r,d as s,a as p}from"./docco-BDmKSriJ.js";import{D as m}from"./index-XDwG7I6Z.js";import{I as e}from"./inputField-BWxo0HQm.js";import{T as t}from"./tabsField-B4ZuVTs-.js";import"./index-Csn6HTCS.js";import"./EyeOutlined-CTrlI0WT.js";import"./SearchOutlined-3RvbUWh0.js";const o={},F={apiRef:o,formId:"Test form",layout:"horizontal",confirmChanges:!0,fieldsProps:{field1:{component:e,label:"Field1",rules:[{type:"string",rule:"not-empty",message:"Поле не должно быть пустым"}]},field1a:{component:e,label:"Field1a",dependsOn:["field1"]},field1b:{component:e,label:"Field1b",dependsOn:["field1a"]},field2:{component:t,label:"Field2",tabs:{"Tab 1":{field2_1_1:{component:e,label:"Field3",inlineGroup:"row1",showCount:!0},field2_1_2:{component:e,label:"Field4",inlineGroup:"row1"}},"Tab 2":{field2_2_1:{component:e,label:"Field5",showCount:!0},field2_2_2:{component:t,label:"Field6",tabs:{"Tab 2_1":{field2_2_1_1:{component:e,label:"Field3",showCount:!0},field2_2_1_2:{component:e,label:"Field4"}},"Tab 2_2":{field2_2_2_1:{component:e,label:"Field5",showCount:!0},field2_2_2_2:{component:e,label:"Field6"}}}}},"Tab 3":{field3_2_1:{component:e,label:"Field5",showCount:!0},field3_2_2:{component:t,label:"Field6",tabs:{"Tab 3_1":{field3_2_1_1:{component:e,label:"Field3",showCount:!0},field3_2_1_2:{component:e,label:"Field4"}},"Tab 3_2":{field3_2_2_1:{component:e,label:"Field5",showCount:!0},field3_2_2_2:{component:e,label:"Field6"}}}}}}}},buttons:{ok:{position:"right"},rerenderTab1:{position:"left",onClick:()=>{o.model.getField("field2").emitTabRender("Tab 1")}},rerenderTabField:{position:"left",onClick:()=>{o.model.getField("field2").emitRender()}},rerenderForm:{position:"left",onClick:()=>{o.model.emitFormRender()}}}},b=()=>l.jsxs(l.Fragment,{children:[l.jsx("h1",{children:"Пример простой формы с вертикальным расположением подписей полей1"}),l.jsx("div",{style:{maxWidth:500},children:l.jsx(m,{...F})})]}),g=i=>l.jsxs(d,{children:[l.jsx("div",{children:l.jsx(b,{})}),l.jsx(n,{}),l.jsx("div",{children:l.jsx(a,{items:[{key:1,label:"Show source",children:l.jsx(r,{language:"javascript",style:i.darkMode?s:p,showLineNumbers:!0,children:`
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
`})}]})})]});export{g as Paged0e602f750bd47009c2e917783c979f2,g as default};
