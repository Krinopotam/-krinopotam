import{r as a,j as o,D as m}from"./index-7abbb94e.js";import{P as s,C as d,S as l,d as p,a as u}from"./docco-6bf51e55.js";import{B as c}from"./index-22f8d441.js";import{D as b}from"./dFormModal-d77fb2bf.js";import{I as r}from"./inputField-0673e106.js";import{D as i}from"./dateTimeField-c1043cdc.js";import{T as f}from"./tabsField-c7413254.js";import{F}from"./buttonsProps-48e806a3.js";import"./index-2daee1bb.js";import"./EyeOutlined-4b705a51.js";import"./SearchOutlined-7a7e5389.js";const e={},h={formId:"Test form",apiRef:e,confirmChanges:!0,fieldsProps:{tabs:{component:f,tabs:{" Inbound ":{nameIn:{component:r,label:"Inbound Name",inlineGroup:"row1"},dateIn:{component:i,label:"Inbound Date",inlineGroup:"row1",width:150}}," Outbound ":{nameOut:{component:r,label:"Outbound Name",inlineGroup:"row2"},dateOut:{component:i,label:"Outbound Date",inlineGroup:"row2",width:150}}}}},bodyHeight:250,buttons:F(e)},I=()=>{const t=a.useCallback(()=>{e.open("create")},[]);return o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(c,{onClick:t,children:"Open form"}),o.jsx(b,{...h})]})},M=t=>{const n=`
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
`;return o.jsxs(s,{children:[o.jsx("div",{children:o.jsx(I,{})}),o.jsx(m,{}),o.jsx("div",{children:o.jsx(d,{items:[{key:1,label:"Show source",children:o.jsx(l,{language:"javascript",style:t.darkMode?p:u,showLineNumbers:!0,children:n})}]})})]})};export{M as Page54adf1dea24a4fd1806b61c91a09e8a0,M as default};
