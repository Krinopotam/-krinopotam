const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-Cs1HhVBL.js","assets/default-highlight-PwdVU7L6.js","assets/index-CNGiMTrA.js"])))=>i.map(i=>d[i]);
import{r as i,j as o,_ as a,D as m}from"./index-CNGiMTrA.js";import{B as l}from"./modal-DVHWH6Qh.js";import{D as s}from"./dFormModal-Clfa5FkM.js";import{T as p}from"./tabsField-BpXq8seB.js";import{I as t}from"./inputField-B4IJanij.js";import{D as r}from"./dateTimeField-C6fPR-GH.js";import{F as d}from"./buttonsProps-SkvPiZH9.js";import{P as u,C as c,d as b,c as f}from"./darcula-BjE4oQkF.js";import"./dForm-DmRsT3BS.js";import"./index-u-jxti1R.js";import"./modal-BKWxOyv5.js";import"./index-BYrcsQQ_.js";import"./index-B9vEfmTq.js";import"./SearchOutlined-DGkPMlC6.js";import"./useIcons-B7FuD7ir.js";const n={},h={formId:"Test form",apiRef:n,confirmChanges:!0,fieldsProps:{tabsPages:{component:p,tabs:{" Visitor ":{object:{component:t,label:"Object"},nameIn:{component:t,label:"Inbound Name",inlineGroup:"row1"},dateIn:{component:r,label:"Inbound Date",inlineGroup:"row1",width:150},nameOut:{component:t,label:"Outbound Name",inlineGroup:"row2"},dateOut:{component:r,label:"Outbound Date",inlineGroup:"row2",width:150}}," Transport ":{vehicle:{component:t,label:"Vehicle model"},number:{component:t,label:"Registration number"}}}}},height:330,buttons:d(n)},F=()=>{const e=i.useCallback(()=>{n.open("create")},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"An example of a form with tabs containing several fields on one line (InlineGroups)"}),o.jsx("p",{children:"Uses InlineGroupsField component with simplified syntax inlineGroup:rowID"}),o.jsx(l,{onClick:e,children:"Open form"}),o.jsx(s,{...h})]})},I=i.lazy(()=>a(()=>import("./index-Cs1HhVBL.js").then(e=>e.ds),__vite__mapDeps([0,1,2])).then(e=>({default:e.Prism}))),R=e=>o.jsxs(u,{children:[o.jsx("div",{children:o.jsx(F,{})}),o.jsx(m,{}),o.jsx("div",{children:o.jsx(c,{items:[{key:1,label:"Show source",children:o.jsx(i.Suspense,{fallback:o.jsx("div",{children:"Loading source..."}),children:o.jsx(I,{language:"tsx",style:e.darkMode?b:f,showLineNumbers:!0,children:`
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
`})})}]})})]});export{R as Pagee15ea9b66d6c4206b303fda67c85ecc3,R as default};
