import{r as n,j as o,D as a}from"./index-B_ePoftH.js";import{P as m,C as s,h as l,d,a as p}from"./docco-BMPGIKWL.js";import{B as u}from"./messageBox-BvRGMm6l.js";import{D as c}from"./dFormModal-M3vltEal.js";import{I as r}from"./inputField-Di5-nvCH.js";import{D as i}from"./dateTimeField-BPMPdtt3.js";import{T as f}from"./tabsField-A7fTqdkq.js";import{F as b}from"./buttonsProps-Dc0_DHT9.js";import"./dForm-CcoZZ7WD.js";import"./index-CFabrBDT.js";import"./modal-CKEVbAO9.js";import"./index-BmPwU4as.js";import"./EyeOutlined-MiG0h1ef.js";import"./SearchOutlined-fNJs2EgW.js";import"./useIcons-CQb7q79F.js";const e={},F={formId:"Test form",apiRef:e,confirmChanges:!0,fieldsProps:{tabs:{component:f,tabs:{" Inbound ":{nameIn:{component:r,label:"Inbound Name",inlineGroup:"row1"},dateIn:{component:i,label:"Inbound Date",inlineGroup:"row1",width:150}}," Outbound ":{nameOut:{component:r,label:"Outbound Name",inlineGroup:"row2"},dateOut:{component:i,label:"Outbound Date",inlineGroup:"row2",width:150}}}}},height:250,buttons:b(e)},h=()=>{const t=n.useCallback(()=>{e.open("create")},[]);return o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(u,{onClick:t,children:"Open form"}),o.jsx(c,{...F})]})},B=t=>o.jsxs(m,{children:[o.jsx("div",{children:o.jsx(h,{})}),o.jsx(a,{}),o.jsx("div",{children:o.jsx(s,{items:[{key:1,label:"Show source",children:o.jsx(l,{language:"javascript",style:t.darkMode?d:p,showLineNumbers:!0,children:`
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
    height: 250,
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
`})}]})})]});export{B as Page04af7937e7204543af868da7cfcf4a8d,B as default};
