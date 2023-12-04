import{j as e,D as l}from"./index-23555c5c.js";import{P as t,C as n,S as m,d as s,a as d}from"./docco-c24c9fde.js";import{D as p}from"./index-e5590f2c.js";import{D as a}from"./dateTimeField-32a17fbb.js";import{I as o}from"./inputField-52d55a73.js";import"./index-c1cedb01.js";import"./EyeOutlined-cf850273.js";import"./SearchOutlined-d23aaaab.js";const u={formId:"Test form",confirmChanges:!0,fieldsProps:{field1:{component:a,label:"Field1",inlineGroup:"row1",rules:[{type:"string",rule:"not-empty",message:"Поле не должно быть пустым"}]},field2:{component:o,label:"Field2",inlineGroup:"row1"},field3:{component:o,label:"Field3"},field4:{component:o,label:"Field4"}},buttons:{ok:{position:"right"}}},c=()=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Пример простой формы с вертикальным расположением подписей полей1"}),e.jsx("div",{style:{maxWidth:500},children:e.jsx(p,{...u})})]}),y=i=>{const r=`
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
`;return e.jsxs(t,{children:[e.jsx("div",{children:e.jsx(c,{})}),e.jsx(l,{}),e.jsx("div",{children:e.jsx(n,{items:[{key:1,label:"Show source",children:e.jsx(m,{language:"javascript",style:i.darkMode?s:d,showLineNumbers:!0,children:r})}]})})]})};export{y as Pagee45cbe5679584c45a3cd0c8353d32aea,y as default};
