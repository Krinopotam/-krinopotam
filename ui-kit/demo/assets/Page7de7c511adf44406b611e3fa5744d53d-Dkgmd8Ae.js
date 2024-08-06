import{j as e,D as r}from"./index-Bl-1kopd.js";import{P as l,C as t,h as n,d as m,a as s}from"./docco-DI1KRtYq.js";import{D as d}from"./index-Cz3A2iSd.js";import{D as p}from"./dateTimeField-BlQHNbwI.js";import{I as o}from"./inputField-BJn_KJf5.js";import"./useIcons-nrTxXwn9.js";import"./SearchOutlined-Drmuc8b0.js";import"./index-dliuYOsp.js";import"./EyeOutlined-VtVLuKtp.js";const a={formId:"Test form",confirmChanges:!0,fieldsProps:{field1:{component:p,label:"Field1",inlineGroup:"row1",rules:[{type:"string",rule:"not-empty",message:"Поле не должно быть пустым"}]},field2:{component:o,label:"Field2",inlineGroup:"row1"},field3:{component:o,label:"Field3"},field4:{component:o,label:"Field4"}},buttons:{ok:{position:"right"}}},u=()=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Пример простой формы с вертикальным расположением подписей полей1"}),e.jsx("div",{style:{maxWidth:500},children:e.jsx(d,{...a})})]}),y=i=>e.jsxs(l,{children:[e.jsx("div",{children:e.jsx(u,{})}),e.jsx(r,{}),e.jsx("div",{children:e.jsx(t,{items:[{key:1,label:"Show source",children:e.jsx(n,{language:"javascript",style:i.darkMode?m:s,showLineNumbers:!0,children:`
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
`})}]})})]});export{y as Page7de7c511adf44406b611e3fa5744d53d,y as default};
