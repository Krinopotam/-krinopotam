import{r as n,j as o,D as a}from"./index-DDBz1-0O.js";import{P as m,C as s,h as l,d,a as p}from"./docco-C1crFo0W.js";import{B as u}from"./messageBox-DliIkF0r.js";import{D as c}from"./dFormModal-nAwu1QC2.js";import{I as r}from"./inputField-8dkBtnUh.js";import{D as i}from"./dateTimeField-B-5H7Dve.js";import{T as b}from"./tabsField-Cn2eLal1.js";import{F as f}from"./buttonsProps-8VhwyjF0.js";import"./dForm-BA1kBRHr.js";import"./index-DF9EXunC.js";import"./modal-DePWROKc.js";import"./index-CK8-QQ6E.js";import"./EyeOutlined-Dh1NUrDq.js";import"./SearchOutlined-COl8paAj.js";import"./useIcons-YQJskKaU.js";const e={},F={formId:"Test form",apiRef:e,confirmChanges:!0,fieldsProps:{tabs:{component:b,tabs:{" Inbound ":{nameIn:{component:r,label:"Inbound Name",inlineGroup:"row1"},dateIn:{component:i,label:"Inbound Date",inlineGroup:"row1",width:150}}," Outbound ":{nameOut:{component:r,label:"Outbound Name",inlineGroup:"row2"},dateOut:{component:i,label:"Outbound Date",inlineGroup:"row2",width:150}}}}},bodyHeight:250,buttons:f(e)},h=()=>{const t=n.useCallback(()=>{e.open("create")},[]);return o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(u,{onClick:t,children:"Open form"}),o.jsx(c,{...F})]})},B=t=>o.jsxs(m,{children:[o.jsx("div",{children:o.jsx(h,{})}),o.jsx(a,{}),o.jsx("div",{children:o.jsx(s,{items:[{key:1,label:"Show source",children:o.jsx(l,{language:"javascript",style:t.darkMode?d:p,showLineNumbers:!0,children:`
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
`})}]})})]});export{B as Page48864c35b95c470fa42a1bcc16a2ebc9,B as default};
