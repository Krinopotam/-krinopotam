import{j as e,D as t}from"./index-3024f328.js";import{P as o,C as l,S as r,d as s,a}from"./docco-8e796366.js";import{D as p}from"./index-901967cb.js";import{I as n}from"./inputField-a558b472.js";import{T as m}from"./tabsField-56f8f65e.js";import"./index-83c0c0ea.js";import"./EyeOutlined-ff2ae648.js";import"./SearchOutlined-8979e289.js";const f={formId:"Test form",confirmChanges:!0,fieldsProps:{field1:{component:n,label:"Field1 (the field2 depends on it)"},field2:{component:n,label:"Field2 (the field3 depends on it)",inlineGroup:"row1",dependsOn:["field1"]},field3:{component:n,label:"Field3 (the tab1 fields depends on it)",inlineGroup:"row1",dependsOn:["field2"]},tabs:{component:m,tabs:{"Tab 1":{tab_1_field1:{component:n,label:"tab_1_field1",dependsOn:["field3"]},tab_1_field2:{component:n,label:"tab_1_field2",dependsOn:["field3"]},tab_1_field3:{component:n,label:"tab_1_field3",inlineGroup:"row2",dependsOn:["field3"]}},"Tab 2 (independent) ":{tab_2_field1:{component:n,label:"tab_2_field1 (independent )",showCount:!0},tab_2_field2:{component:n,label:"tab_2_field2 (independent )"}}}}},buttons:{ok:{position:"right"}}},b=()=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Example DForm with interdependent fields"}),e.jsx("div",{style:{maxWidth:600},children:e.jsx(p,{...f})})]}),D=d=>{const i=`
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
`;return e.jsxs(o,{children:[e.jsx("div",{children:e.jsx(b,{})}),e.jsx(t,{}),e.jsx("div",{children:e.jsx(l,{items:[{key:1,label:"Show source",children:e.jsx(r,{language:"javascript",style:d.darkMode?s:a,showLineNumbers:!0,children:i})}]})})]})};export{D as Page02a6e9f5cbec4cbbb992ba4ae7d272e4,D as default};
