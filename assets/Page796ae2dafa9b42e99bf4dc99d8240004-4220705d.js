import{r as a,j as o,D as m}from"./index-23555c5c.js";import{P as l,C as s,S as p,d,a as u}from"./docco-c24c9fde.js";import{B as c}from"./index-e5590f2c.js";import{D as b}from"./dFormModal-9d6a497b.js";import{T as f}from"./tabsField-4b00296c.js";import{I as e}from"./inputField-52d55a73.js";import{D as i}from"./dateTimeField-32a17fbb.js";import{F}from"./buttonsProps-b1195f93.js";import"./index-c1cedb01.js";import"./EyeOutlined-cf850273.js";import"./SearchOutlined-d23aaaab.js";const n={},h={formId:"Test form",apiRef:n,confirmChanges:!0,fieldsProps:{tabsPages:{component:f,tabs:{" Visitor ":{object:{component:e,label:"Object"},nameIn:{component:e,label:"Inbound Name",inlineGroup:"row1"},dateIn:{component:i,label:"Inbound Date",inlineGroup:"row1",width:150},nameOut:{component:e,label:"Outbound Name",inlineGroup:"row2"},dateOut:{component:i,label:"Outbound Date",inlineGroup:"row2",width:150}}," Transport ":{vehicle:{component:e,label:"Vehicle model"},number:{component:e,label:"Registration number"}}}}},bodyHeight:330,buttons:F(n)},I=()=>{const t=a.useCallback(()=>{n.open("create")},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"An example of a form with tabs containing several fields on one line (InlineGroups)"}),o.jsx("p",{children:"Uses InlineGroupsField component with simplified syntax inlineGroup:rowID"}),o.jsx(c,{onClick:t,children:"Open form"}),o.jsx(b,{...h})]})},y=t=>{const r=`
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
    bodyHeight: 330,
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
`;return o.jsxs(l,{children:[o.jsx("div",{children:o.jsx(I,{})}),o.jsx(m,{}),o.jsx("div",{children:o.jsx(s,{items:[{key:1,label:"Show source",children:o.jsx(p,{language:"javascript",style:t.darkMode?d:u,showLineNumbers:!0,children:r})}]})})]})};export{y as Page796ae2dafa9b42e99bf4dc99d8240004,y as default};
