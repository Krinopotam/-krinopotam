import{r,j as o,D as a}from"./index-B_ePoftH.js";import{P as m,C as l,h as s,d as p,a as d}from"./docco-BMPGIKWL.js";import{B as c}from"./messageBox-BvRGMm6l.js";import{D as u}from"./dFormModal-M3vltEal.js";import{T as b}from"./tabsField-A7fTqdkq.js";import{I as e}from"./inputField-Di5-nvCH.js";import{D as n}from"./dateTimeField-BPMPdtt3.js";import{F as f}from"./buttonsProps-Dc0_DHT9.js";import"./dForm-CcoZZ7WD.js";import"./index-CFabrBDT.js";import"./modal-CKEVbAO9.js";import"./index-BmPwU4as.js";import"./EyeOutlined-MiG0h1ef.js";import"./SearchOutlined-fNJs2EgW.js";import"./useIcons-CQb7q79F.js";const i={},h={formId:"Test form",apiRef:i,confirmChanges:!0,fieldsProps:{tabsPages:{component:b,tabs:{" Visitor ":{object:{component:e,label:"Object"},nameIn:{component:e,label:"Inbound Name",inlineGroup:"row1"},dateIn:{component:n,label:"Inbound Date",inlineGroup:"row1",width:150},nameOut:{component:e,label:"Outbound Name",inlineGroup:"row2"},dateOut:{component:n,label:"Outbound Date",inlineGroup:"row2",width:150}}," Transport ":{vehicle:{component:e,label:"Vehicle model"},number:{component:e,label:"Registration number"}}}}},height:330,buttons:f(i)},F=()=>{const t=r.useCallback(()=>{i.open("create")},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"An example of a form with tabs containing several fields on one line (InlineGroups)"}),o.jsx("p",{children:"Uses InlineGroupsField component with simplified syntax inlineGroup:rowID"}),o.jsx(c,{onClick:t,children:"Open form"}),o.jsx(u,{...h})]})},R=t=>o.jsxs(m,{children:[o.jsx("div",{children:o.jsx(F,{})}),o.jsx(a,{}),o.jsx("div",{children:o.jsx(l,{items:[{key:1,label:"Show source",children:o.jsx(s,{language:"javascript",style:t.darkMode?p:d,showLineNumbers:!0,children:`
import React, {useCallback} from 'react';
import {Button} from @krinopotam/ui-kit/button';
import {IDFormModalApi, DFormModal, IDFormModalProps} from @krinopotam/ui-kit/dFormModal';
import {TabsField} from @krinopotam/ui-kit/dForm/fields/tabs/tabsField';
import {InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField';
import {DateTimeField} from @krinopotam/ui-kit/dForm/fields/dateTime/dateTimeField';
import {FormLayoutSwitch} from "../../common/buttonsProps";
const formApi = {} as IDFormModalApi;
const formProps: IDFormModalProps = {
    formId: 'Test form',
    apiRef: formApi,
    confirmChanges: true,
    fieldsProps: {
        tabsPages: {
            component: TabsField,
            tabs: {
                ' Visitor ': {
                    object: {component: InputField, label: 'Object'},
                    nameIn: {component: InputField, label: 'Inbound Name', inlineGroup: 'row1'},
                    dateIn: {component: DateTimeField, label: 'Inbound Date', inlineGroup: 'row1', width: 150},
                    nameOut: {component: InputField, label: 'Outbound Name', inlineGroup: 'row2'},
                    dateOut: {component: DateTimeField, label: 'Outbound Date', inlineGroup: 'row2', width: 150},
                },
                ' Transport ': {
                    vehicle: {component: InputField, label: 'Vehicle model'},
                    number: {component: InputField, label: 'Registration number'},
                },
            },
        },
    },
    height: 330,
    buttons: FormLayoutSwitch(formApi),
};
export const TabsWithSimpleInlineGroups = (): React.JSX.Element => {
    const onClick = useCallback(() => {
        formApi.open('create');
    }, []);
    return (
        <>
            <Button onClick={onClick}>Open form</Button>
            <DFormModal {...formProps} />
        </>
    );
};
`})}]})})]});export{R as Pagef1c4ccc696fc418ca5d4f88d072fc8e3,R as default};
