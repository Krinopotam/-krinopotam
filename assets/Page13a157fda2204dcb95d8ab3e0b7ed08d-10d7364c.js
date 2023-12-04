import{j as e,D as t}from"./index-7abbb94e.js";import{P as o,C as l,S as r,d as s,a}from"./docco-6bf51e55.js";import{D as p}from"./index-22f8d441.js";import{I as d}from"./inputField-0673e106.js";import{T as m}from"./tabsField-c7413254.js";import"./index-2daee1bb.js";import"./EyeOutlined-4b705a51.js";import"./SearchOutlined-7a7e5389.js";const f={formId:"Test form",confirmChanges:!0,fieldsProps:{field1:{component:d,label:"Field1 (the field2 depends on it)"},field2:{component:d,label:"Field2 (the field3 depends on it)",inlineGroup:"row1",dependsOn:["field1"]},field3:{component:d,label:"Field3 (the tab1 fields depends on it)",inlineGroup:"row1",dependsOn:["field2"]},tabs:{component:m,tabs:{"Tab 1":{tab_1_field1:{component:d,label:"tab_1_field1",dependsOn:["field3"]},tab_1_field2:{component:d,label:"tab_1_field2",dependsOn:["field3"]},tab_1_field3:{component:d,label:"tab_1_field3",inlineGroup:"row2",dependsOn:["field3"]}},"Tab 2 (independent) ":{tab_2_field1:{component:d,label:"tab_2_field1 (independent )",showCount:!0},tab_2_field2:{component:d,label:"tab_2_field2 (independent )"}}}}},buttons:{ok:{position:"right"}}},b=()=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Example DForm with interdependent fields"}),e.jsx("div",{style:{maxWidth:600},children:e.jsx(p,{...f})})]}),D=n=>{const i=`
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
`;return e.jsxs(o,{children:[e.jsx("div",{children:e.jsx(b,{})}),e.jsx(t,{}),e.jsx("div",{children:e.jsx(l,{items:[{key:1,label:"Show source",children:e.jsx(r,{language:"javascript",style:n.darkMode?s:a,showLineNumbers:!0,children:i})}]})})]})};export{D as Page13a157fda2204dcb95d8ab3e0b7ed08d,D as default};
