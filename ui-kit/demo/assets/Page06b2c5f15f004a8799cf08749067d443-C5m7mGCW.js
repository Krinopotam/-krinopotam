import{j as e,D as n}from"./index-DhMwsQtd.js";import{P as t,C as o,h as l,d as r,a as s}from"./docco-BR1GjPZn.js";import{D as p}from"./dForm-BvND7aMS.js";import"./messageBox-CQECnf8I.js";import{I as i}from"./inputField-C-ak15WA.js";import{T as a}from"./tabsField--4Cr-dat.js";import"./index-DNVFzPvX.js";import"./index-CYDA0FvV.js";import"./EyeOutlined-D8voB2bB.js";import"./SearchOutlined-klO5lwg7.js";const m={formId:"Test form",confirmChanges:!0,fieldsProps:{field1:{component:i,label:"Field1 (the field2 depends on it)"},field2:{component:i,label:"Field2 (the field3 depends on it)",inlineGroup:"row1",dependsOn:["field1"]},field3:{component:i,label:"Field3 (the tab1 fields depends on it)",inlineGroup:"row1",dependsOn:["field2"]},tabs:{component:a,tabs:{"Tab 1":{tab_1_field1:{component:i,label:"tab_1_field1",dependsOn:["field3"]},tab_1_field2:{component:i,label:"tab_1_field2",dependsOn:["field3"]},tab_1_field3:{component:i,label:"tab_1_field3",inlineGroup:"row2",dependsOn:["field3"]}},"Tab 2 (independent) ":{tab_2_field1:{component:i,label:"tab_2_field1 (independent )",showCount:!0},tab_2_field2:{component:i,label:"tab_2_field2 (independent )"}}}}},buttons:{ok:{position:"right"}}},f=()=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Example DForm with interdependent fields"}),e.jsx("div",{style:{maxWidth:600},children:e.jsx(p,{...m})})]}),w=d=>e.jsxs(t,{children:[e.jsx("div",{children:e.jsx(f,{})}),e.jsx(n,{}),e.jsx("div",{children:e.jsx(o,{items:[{key:1,label:"Show source",children:e.jsx(l,{language:"javascript",style:d.darkMode?r:s,showLineNumbers:!0,children:`
import React from 'react';
import {DForm, IDFormProps} from @krinopotam/ui-kit/dForm';
import {InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField';
import {TabsField} from @krinopotam/ui-kit/dForm/fields/tabs/tabsField";
const formProps: IDFormProps = {
    formId: 'Test form',
    confirmChanges: true,
    //disableDepended:true,
    fieldsProps: {
        field1: {component: InputField, label: 'Field1 (the field2 depends on it)'},
        field2: {component: InputField, label: 'Field2 (the field3 depends on it)', inlineGroup:'row1', dependsOn:['field1']},
        field3: {component: InputField, label: 'Field3 (the tab1 fields depends on it)', inlineGroup:'row1', dependsOn:['field2']},
        tabs: {
            component: TabsField,
            tabs: {
                'Tab 1': {
                    tab_1_field1: {component: InputField, label: 'tab_1_field1', dependsOn:['field3']},
                    tab_1_field2: {component: InputField, label: 'tab_1_field2', dependsOn:['field3']},
                    tab_1_field3: {component: InputField, label: 'tab_1_field3', inlineGroup:'row2', dependsOn:['field3']},
                },
                'Tab 2 (independent) ': {
                    tab_2_field1: {component: InputField, label: 'tab_2_field1 (independent )', showCount: true},
                    tab_2_field2: {component: InputField, label: 'tab_2_field2 (independent )'},
                },
            },
        },
    },
    buttons: {ok: {position: 'right'}},
};
export const DependedFields = (): React.JSX.Element => {
    return (
        <>
            <div style={{maxWidth: 600}}>
                <DForm {...formProps} />
            </div>
        </>
    );
};
`})}]})})]});export{w as Page06b2c5f15f004a8799cf08749067d443,w as default};