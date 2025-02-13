const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DY4jbcst.js","assets/default-highlight-Dn6Zkl0a.js","assets/index-CtAjfk3U.js"])))=>i.map(i=>d[i]);
import{r,j as o,D as a,_ as l}from"./index-CtAjfk3U.js";import{b as s}from"./buttonsRow-DIWV9y5m.js";import{D as p}from"./dFormModal-DBrO8yV5.js";import{T as d}from"./tabsField-1LK1nVmL.js";import{I as t}from"./inputField-i3gDy1o8.js";import{D as n}from"./dateTimeField-ToDBlyGl.js";import{F as u}from"./buttonsProps-TJQ2MYKB.js";import{I as m}from"./inlineGroupField-B-kKho5M.js";import{P as c,C as b}from"./pageLayout-BYJr8qhp.js";import{d as f,c as F}from"./darcula-BqMdvqtY.js";import"./isArray-Dq3mFmoY.js";import"./messageBox-BEJz6LZv.js";import"./index-CQ36vsgA.js";import"./modal-CqlI0vXJ.js";import"./baseField-CLOOMrMa.js";import"./index-CMA59ydq.js";import"./PlusOutlined-CjmZvIFI.js";import"./index-tEAOawB8.js";import"./SearchOutlined-BPRhDdUX.js";import"./useIcons-BRnDxCLJ.js";const i={},I={formId:"Test form",apiRef:i,confirmChanges:!0,fieldsProps:{tabsPages:{component:d,tabs:{" Visitor ":{object:{component:t,label:"Object"},row1:{component:m,fieldsProps:{nameIn:{component:t,label:"Inbound Name"},dateIn:{component:n,label:"Inbound Date",width:150}}},row2:{component:m,fieldsProps:{nameOut:{component:t,label:"Outbound Name"},dateOut:{component:n,label:"Outbound Date",width:150}}}}," Transport ":{vehicle:{component:t,label:"Vehicle model"},number:{component:t,label:"Registration number"}}}}},height:330,buttons:u(i)},h=()=>{const e=r.useCallback(()=>{i.open("create")},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"An example of a form with tabs containing several fields on one line (InlineGroups)"}),o.jsx(s,{onClick:e,children:"Open form"}),o.jsx(p,{...I})]})},P=r.lazy(()=>l(()=>import("./index-DY4jbcst.js").then(e=>e.dw),__vite__mapDeps([0,1,2])).then(e=>({default:e.Prism}))),B=e=>o.jsxs(c,{children:[o.jsx(h,{}),o.jsx(a,{}),o.jsx("div",{children:o.jsx(b,{items:[{key:1,label:"Show source",children:o.jsx(r.Suspense,{fallback:o.jsx("div",{children:"Loading source..."}),children:o.jsx(P,{language:"tsx",style:e.darkMode?f:F,showLineNumbers:!0,children:`
import React, {useCallback} from 'react';
import {Button} from @krinopotam/ui-kit/button';
import {IDFormModalApi, DFormModal, IDFormModalProps} from @krinopotam/ui-kit/dFormModal';
import {TabsField} from @krinopotam/ui-kit/dForm/fields/tabs/tabsField';
import {InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField';
import {DateTimeField} from @krinopotam/ui-kit/dForm/fields/dateTime/dateTimeField';
import {FormLayoutSwitch} from '../../common/buttonsProps';
import {IInlineGroupFieldProps, InlineGroupField} from @krinopotam/ui-kit/dForm/fields/inlineGroup';
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
                    row1: {
                        component: InlineGroupField,
                        fieldsProps: {
                            nameIn: {component: InputField, label: 'Inbound Name'},
                            dateIn: {component: DateTimeField, label: 'Inbound Date', width: 150},
                        },
                    } satisfies IInlineGroupFieldProps,
                    row2: {
                        component: InlineGroupField,
                        fieldsProps: {
                            nameOut: {component: InputField, label: 'Outbound Name'},
                            dateOut: {component: DateTimeField, label: 'Outbound Date', width: 150},
                        },
                    } satisfies IInlineGroupFieldProps,
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
`})})}]})})]});export{B as Page1b319d60c6de4f7b9532b084e216b2a3,B as default};
