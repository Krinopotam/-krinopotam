import{r as n,j as o,D as a}from"./index-CEW5Pw51.js";import{P as m,C as s,h as l,d,a as p}from"./docco-BDmKSriJ.js";import{B as u}from"./index-XDwG7I6Z.js";import{D as c}from"./dFormModal-CQxmvlme.js";import{I as r}from"./inputField-BWxo0HQm.js";import{D as i}from"./dateTimeField-QhPZ3x3K.js";import{T as b}from"./tabsField-B4ZuVTs-.js";import{F as f}from"./buttonsProps-C5HxqOnh.js";import"./index-Csn6HTCS.js";import"./EyeOutlined-CTrlI0WT.js";import"./SearchOutlined-3RvbUWh0.js";import"./useIcons-C2JgOeKM.js";const e={},F={formId:"Test form",apiRef:e,confirmChanges:!0,fieldsProps:{tabs:{component:b,tabs:{" Inbound ":{nameIn:{component:r,label:"Inbound Name",inlineGroup:"row1"},dateIn:{component:i,label:"Inbound Date",inlineGroup:"row1",width:150}}," Outbound ":{nameOut:{component:r,label:"Outbound Name",inlineGroup:"row2"},dateOut:{component:i,label:"Outbound Date",inlineGroup:"row2",width:150}}}}},bodyHeight:250,buttons:f(e)},h=()=>{const t=n.useCallback(()=>{e.open("create")},[]);return o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(u,{onClick:t,children:"Open form"}),o.jsx(c,{...F})]})},G=t=>o.jsxs(m,{children:[o.jsx("div",{children:o.jsx(h,{})}),o.jsx(a,{}),o.jsx("div",{children:o.jsx(s,{items:[{key:1,label:"Show source",children:o.jsx(l,{language:"javascript",style:t.darkMode?d:p,showLineNumbers:!0,children:`
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
`})}]})})]});export{G as Paged249b6339b1c49aba73b876f096b540e,G as default};
