import{j as e,D as n}from"./index-jRq8dFl9.js";import{P as t,C as o,h as l,d as r,a as s}from"./docco-DVswO1UK.js";import{D as p}from"./dForm-CmpnCynY.js";import"./messageBox-A1wgNO27.js";import{I as i}from"./inputField-DjpktlwZ.js";import{T as a}from"./tabsField-cI-OOpP-.js";import"./index-h_fYsjXx.js";import"./index-CBQ57er9.js";import"./EyeOutlined-B_mcHe4i.js";import"./SearchOutlined-y0oc_54U.js";const m={formId:"Test form",confirmChanges:!0,fieldsProps:{field1:{component:i,label:"Field1 (the field2 depends on it)"},field2:{component:i,label:"Field2 (the field3 depends on it)",inlineGroup:"row1",dependsOn:["field1"]},field3:{component:i,label:"Field3 (the tab1 fields depends on it)",inlineGroup:"row1",dependsOn:["field2"]},tabs:{component:a,tabs:{"Tab 1":{tab_1_field1:{component:i,label:"tab_1_field1",dependsOn:["field3"]},tab_1_field2:{component:i,label:"tab_1_field2",dependsOn:["field3"]},tab_1_field3:{component:i,label:"tab_1_field3",inlineGroup:"row2",dependsOn:["field3"]}},"Tab 2 (independent) ":{tab_2_field1:{component:i,label:"tab_2_field1 (independent )",showCount:!0},tab_2_field2:{component:i,label:"tab_2_field2 (independent )"}}}}},buttons:{ok:{position:"right"}}},f=()=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Example DForm with interdependent fields"}),e.jsx("div",{style:{maxWidth:600},children:e.jsx(p,{...m})})]}),w=d=>e.jsxs(t,{children:[e.jsx("div",{children:e.jsx(f,{})}),e.jsx(n,{}),e.jsx("div",{children:e.jsx(o,{items:[{key:1,label:"Show source",children:e.jsx(l,{language:"javascript",style:d.darkMode?r:s,showLineNumbers:!0,children:`
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
`})}]})})]});export{w as Pagea0a729ca0b16455b8e3dfde7b458806e,w as default};
