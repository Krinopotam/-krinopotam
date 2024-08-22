import{r,j as o,D as a}from"./index-OT-fUFlw.js";import{P as m,C as l,h as s,d as p,a as d}from"./docco-Dp5WB1My.js";import{B as u}from"./messageBox-deXCqDea.js";import{D as c}from"./dFormModal-Brw-56ya.js";import{T as b}from"./tabsField-DlX5mBLn.js";import{I as e}from"./inputField-Coz0I3xz.js";import{D as n}from"./dateTimeField-BKqkPkVT.js";import{F as f}from"./buttonsProps-BMlR5a_A.js";import"./dForm-CXdkNth1.js";import"./index-BzsQSyIK.js";import"./modal-Cu7Nzp09.js";import"./index-BXyp7rr8.js";import"./EyeOutlined-BLUlGsNj.js";import"./SearchOutlined-q14VqUwO.js";import"./useIcons-BZ-gWI9M.js";const i={},h={formId:"Test form",apiRef:i,confirmChanges:!0,fieldsProps:{tabsPages:{component:b,tabs:{" Visitor ":{object:{component:e,label:"Object"},nameIn:{component:e,label:"Inbound Name",inlineGroup:"row1"},dateIn:{component:n,label:"Inbound Date",inlineGroup:"row1",width:150},nameOut:{component:e,label:"Outbound Name",inlineGroup:"row2"},dateOut:{component:n,label:"Outbound Date",inlineGroup:"row2",width:150}}," Transport ":{vehicle:{component:e,label:"Vehicle model"},number:{component:e,label:"Registration number"}}}}},height:330,buttons:f(i)},F=()=>{const t=r.useCallback(()=>{i.open("create")},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"An example of a form with tabs containing several fields on one line (InlineGroups)"}),o.jsx("p",{children:"Uses InlineGroupsField component with simplified syntax inlineGroup:rowID"}),o.jsx(u,{onClick:t,children:"Open form"}),o.jsx(c,{...h})]})},R=t=>o.jsxs(m,{children:[o.jsx("div",{children:o.jsx(F,{})}),o.jsx(a,{}),o.jsx("div",{children:o.jsx(l,{items:[{key:1,label:"Show source",children:o.jsx(s,{language:"javascript",style:t.darkMode?p:d,showLineNumbers:!0,children:`
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
`})}]})})]});export{R as Page3e7c754003b247b5a0dafa8e50901f32,R as default};
