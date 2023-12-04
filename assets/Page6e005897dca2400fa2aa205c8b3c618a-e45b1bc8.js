import{r as a,j as o,D as m}from"./index-23555c5c.js";import{P as s,C as l,S as d,d as p,a as u}from"./docco-c24c9fde.js";import{B as c}from"./index-e5590f2c.js";import{D as b}from"./dFormModal-9d6a497b.js";import{I as r}from"./inputField-52d55a73.js";import{D as i}from"./dateTimeField-32a17fbb.js";import{T as f}from"./tabsField-4b00296c.js";import{F}from"./buttonsProps-b1195f93.js";import"./index-c1cedb01.js";import"./EyeOutlined-cf850273.js";import"./SearchOutlined-d23aaaab.js";const e={},h={formId:"Test form",apiRef:e,confirmChanges:!0,fieldsProps:{tabs:{component:f,tabs:{" Inbound ":{nameIn:{component:r,label:"Inbound Name",inlineGroup:"row1"},dateIn:{component:i,label:"Inbound Date",inlineGroup:"row1",width:150}}," Outbound ":{nameOut:{component:r,label:"Outbound Name",inlineGroup:"row2"},dateOut:{component:i,label:"Outbound Date",inlineGroup:"row2",width:150}}}}},bodyHeight:250,buttons:F(e)},I=()=>{const t=a.useCallback(()=>{e.open("create")},[]);return o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(c,{onClick:t,children:"Open form"}),o.jsx(b,{...h})]})},M=t=>{const n=`
import React, {useCallback} from 'react';
import {Button} from @krinopotam/ui-kit/button';
import {IDFormModalApi, DFormModal, IDFormModalProps} from @krinopotam/ui-kit/dFormModal';
import {InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField';
import {DateTimeField} from @krinopotam/ui-kit/dForm/fields/dateTime/dateTimeField';
import {TabsField} from @krinopotam/ui-kit/dForm/fields/tabs/tabsField';
import {FormLayoutSwitch} from "../../common/buttonsProps";
const formApi = {} as IDFormModalApi;
const formProps: IDFormModalProps = {
    formId: 'Test form',
    apiRef: formApi,
    confirmChanges: true,
    fieldsProps: {
        tabs: {
            component: TabsField,
            tabs: {
                ' Inbound ': {
                    nameIn: {component: InputField, label: 'Inbound Name', inlineGroup: 'row1'},
                    dateIn: {component: DateTimeField, label: 'Inbound Date', inlineGroup: 'row1', width: 150},
                },
                ' Outbound ': {
                    nameOut: {component: InputField, label: 'Outbound Name', inlineGroup: 'row2'},
                    dateOut: {component: DateTimeField, label: 'Outbound Date', inlineGroup: 'row2', width: 150},
                },
            },
        },
    },
    bodyHeight: 250,
    buttons: FormLayoutSwitch(formApi),
};
export const FormWithTabs = (): React.JSX.Element => {
    const onClick = useCallback(() => {
        formApi.open('create');
    }, []);
    return (
        <div style={{maxWidth: 500}}>
            <Button onClick={onClick}>Open form</Button>
            <DFormModal {...formProps} />
        </div>
    );
};
`;return o.jsxs(s,{children:[o.jsx("div",{children:o.jsx(I,{})}),o.jsx(m,{}),o.jsx("div",{children:o.jsx(l,{items:[{key:1,label:"Show source",children:o.jsx(d,{language:"javascript",style:t.darkMode?p:u,showLineNumbers:!0,children:n})}]})})]})};export{M as Page6e005897dca2400fa2aa205c8b3c618a,M as default};
