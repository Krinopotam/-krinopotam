import{j as e,D as l}from"./index-9944374f.js";import{P as t,C as n,S as m,d as s,a as d}from"./docco-d767795b.js";import{D as p}from"./index-df6b3fec.js";import{D as a}from"./dateTimeField-4b20b16e.js";import{I as o}from"./inputField-d7a6ced8.js";import"./index-1ed5fd40.js";import"./EyeOutlined-4433dc0b.js";import"./SearchOutlined-58270f91.js";const u={formId:"Test form",confirmChanges:!0,fieldsProps:{field1:{component:a,label:"Field1",inlineGroup:"row1",rules:[{type:"string",rule:"not-empty",message:"Поле не должно быть пустым"}]},field2:{component:o,label:"Field2",inlineGroup:"row1"},field3:{component:o,label:"Field3"},field4:{component:o,label:"Field4"}},buttons:{ok:{position:"right"}}},f=()=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Пример простой формы с вертикальным расположением подписей полей1"}),e.jsx("div",{style:{maxWidth:500},children:e.jsx(p,{...u})})]}),y=i=>{const r=`
import React from 'react';
import {DForm, IDFormProps} from @krinopotam/ui-kit/dForm";
import {InlineGroupField} from @krinopotam/ui-kit/dForm/fields/inlineGroup/inlineGroupField";
import {InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField";
import {DateTimeField} from @krinopotam/ui-kit/dForm/fields/dateTime/dateTimeField";
const formProps: IDFormProps = {
    formId: 'Test form',
    confirmChanges: true,
    //layout:'horizontal',
    fieldsProps: {
        field1: {component: DateTimeField, label: 'Field1' ,inlineGroup:'row1', rules: [{type: 'string', rule: 'not-empty', message: 'Поле не должно быть пустым'}]} ,
        field2: {component: InputField, label: 'Field2',inlineGroup:'row1'},
        field3: {component: InputField, label: 'Field3'},
/*        group1: {
            component:InlineGroupField, fieldsProps: {
                field1: {component: InputField, label: 'Field1' ,inlineGroup:'row1', rules: [{type: 'string', rule: 'not-empty', message: 'Поле не должно быть пустым'}]} ,
                field2: {component: InputField, label: 'Field2',inlineGroup:'row1'},
            },//label:'group1'
        },*/
        field4: {component: InputField, label: 'Field4'},
    },
    buttons: {ok: {position: 'right'}},
};
export const NewFormSimple = (): React.JSX.Element => {
    return (
        <>
            <div style={{maxWidth: 500}}>
                <DForm {...formProps} />
            </div>
        </>
    );
};
`;return e.jsxs(t,{children:[e.jsx("div",{children:e.jsx(f,{})}),e.jsx(l,{}),e.jsx("div",{children:e.jsx(n,{items:[{key:1,label:"Show source",children:e.jsx(m,{language:"javascript",style:i.darkMode?s:d,showLineNumbers:!0,children:r})}]})})]})};export{y as Paged882eaf9592f43d5a07128e31aac0f67,y as default};