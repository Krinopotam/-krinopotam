const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-PpfmoLrq.js","assets/default-highlight-CWL5sYcU.js","assets/index-DLyGJszd.js"])))=>i.map(i=>d[i]);
import{r as n,j as o,_ as a,D as m}from"./index-DLyGJszd.js";import{b as l}from"./mergeButtons-OmCcH4N9.js";import{D as s}from"./dFormModal-L6NStncr.js";import{T as p}from"./tabsField-dL5aqlNH.js";import{I as t}from"./inputField-CrUAS0Ct.js";import{D as r}from"./dateTimeField-Bt5Ip1z5.js";import{F as d}from"./buttonsProps-CVwH8epV.js";import{P as u,C as c,d as b,c as f}from"./darcula-BfEmJZ6D.js";import"./dForm-8o49JMOI.js";import"./modal-CjmvIDqE.js";import"./index-CGhTEYKp.js";import"./modal-BEhuKh3S.js";import"./index-DSL2xdJU.js";import"./index-DlQkoOxi.js";import"./SearchOutlined-B4yj2tsd.js";import"./useIcons-BA3OUTWw.js";const i={},h={formId:"Test form",apiRef:i,confirmChanges:!0,fieldsProps:{tabsPages:{component:p,tabs:{" Visitor ":{object:{component:t,label:"Object"},nameIn:{component:t,label:"Inbound Name",inlineGroup:"row1"},dateIn:{component:r,label:"Inbound Date",inlineGroup:"row1",width:150},nameOut:{component:t,label:"Outbound Name",inlineGroup:"row2"},dateOut:{component:r,label:"Outbound Date",inlineGroup:"row2",width:150}}," Transport ":{vehicle:{component:t,label:"Vehicle model"},number:{component:t,label:"Registration number"}}}}},height:330,buttons:d(i)},F=()=>{const e=n.useCallback(()=>{i.open("create")},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"An example of a form with tabs containing several fields on one line (InlineGroups)"}),o.jsx("p",{children:"Uses InlineGroupsField component with simplified syntax inlineGroup:rowID"}),o.jsx(l,{onClick:e,children:"Open form"}),o.jsx(s,{...h})]})},I=n.lazy(()=>a(()=>import("./index-PpfmoLrq.js").then(e=>e.ds),__vite__mapDeps([0,1,2])).then(e=>({default:e.Prism}))),_=e=>o.jsxs(u,{children:[o.jsx("div",{children:o.jsx(F,{})}),o.jsx(m,{}),o.jsx("div",{children:o.jsx(c,{items:[{key:1,label:"Show source",children:o.jsx(n.Suspense,{fallback:o.jsx("div",{children:"Loading source..."}),children:o.jsx(I,{language:"tsx",style:e.darkMode?b:f,showLineNumbers:!0,children:`
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
`})})}]})})]});export{_ as Page1550acdfb62947fabf7e24980fae45d9,_ as default};
