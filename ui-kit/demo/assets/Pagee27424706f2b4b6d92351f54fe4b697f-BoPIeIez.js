const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-0uqxO8u4.js","assets/default-highlight-AspSjZVb.js","assets/index-BvGUw9C6.js"])))=>i.map(i=>d[i]);
import{r as i,j as o,_ as a,D as m}from"./index-BvGUw9C6.js";import{B as l}from"./modal-DNjBPuEU.js";import{D as s}from"./dFormModal-DG3y0daw.js";import{T as p}from"./tabsField-D8LYQJU3.js";import{I as t}from"./inputField-BEB_d-nY.js";import{D as r}from"./dateTimeField-BXVpO--Z.js";import{F as d}from"./buttonsProps-upVQHP2r.js";import{P as u,C as c,d as b,c as f}from"./darcula-ztsHFdQx.js";import"./dForm-CuoIYVbt.js";import"./index-D8Aqgh10.js";import"./modal-CFEDQlJ_.js";import"./index-BhbndeHu.js";import"./index-BEjDhyl7.js";import"./SearchOutlined-CBD5tlyV.js";import"./useIcons-Con9xg6E.js";const n={},h={formId:"Test form",apiRef:n,confirmChanges:!0,fieldsProps:{tabsPages:{component:p,tabs:{" Visitor ":{object:{component:t,label:"Object"},nameIn:{component:t,label:"Inbound Name",inlineGroup:"row1"},dateIn:{component:r,label:"Inbound Date",inlineGroup:"row1",width:150},nameOut:{component:t,label:"Outbound Name",inlineGroup:"row2"},dateOut:{component:r,label:"Outbound Date",inlineGroup:"row2",width:150}}," Transport ":{vehicle:{component:t,label:"Vehicle model"},number:{component:t,label:"Registration number"}}}}},height:330,buttons:d(n)},F=()=>{const e=i.useCallback(()=>{n.open("create")},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"An example of a form with tabs containing several fields on one line (InlineGroups)"}),o.jsx("p",{children:"Uses InlineGroupsField component with simplified syntax inlineGroup:rowID"}),o.jsx(l,{onClick:e,children:"Open form"}),o.jsx(s,{...h})]})},I=i.lazy(()=>a(()=>import("./index-0uqxO8u4.js").then(e=>e.ds),__vite__mapDeps([0,1,2])).then(e=>({default:e.Prism}))),R=e=>o.jsxs(u,{children:[o.jsx("div",{children:o.jsx(F,{})}),o.jsx(m,{}),o.jsx("div",{children:o.jsx(c,{items:[{key:1,label:"Show source",children:o.jsx(i.Suspense,{fallback:o.jsx("div",{children:"Loading source..."}),children:o.jsx(I,{language:"tsx",style:e.darkMode?b:f,showLineNumbers:!0,children:`
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
`})})}]})})]});export{R as Pagee27424706f2b4b6d92351f54fe4b697f,R as default};
