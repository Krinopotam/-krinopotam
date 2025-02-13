const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DY4jbcst.js","assets/default-highlight-Dn6Zkl0a.js","assets/index-CtAjfk3U.js"])))=>i.map(i=>d[i]);
import{r as t,j as o,D as s,_ as a}from"./index-CtAjfk3U.js";import{b as l}from"./buttonsRow-DIWV9y5m.js";import{D as p}from"./dFormModal-DBrO8yV5.js";import{I as i}from"./inputField-i3gDy1o8.js";import{D as n}from"./dateTimeField-ToDBlyGl.js";import{F as d}from"./buttonsProps-TJQ2MYKB.js";import{I as m}from"./inlineGroupField-B-kKho5M.js";import{P as c,C as u}from"./pageLayout-BYJr8qhp.js";import{d as f,c as F}from"./darcula-BqMdvqtY.js";import"./isArray-Dq3mFmoY.js";import"./messageBox-BEJz6LZv.js";import"./index-CQ36vsgA.js";import"./modal-CqlI0vXJ.js";import"./baseField-CLOOMrMa.js";import"./index-tEAOawB8.js";import"./SearchOutlined-BPRhDdUX.js";import"./useIcons-BRnDxCLJ.js";const r={},h={formId:"Test form",apiRef:r,confirmChanges:!0,fieldsProps:{row1:{component:m,fieldsProps:{nameIn:{component:i,label:"Имя входящего"},dateIn:{component:n,label:"Дата входа",width:150}}},row2:{component:m,fieldsProps:{nameOut:{component:i,label:"Имя выходящего"},dateOut:{component:n,label:"Дата выхода",width:150}}}},buttons:d(r)},I=()=>{const e=t.useCallback(()=>{r.open("create")},[]);return o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(l,{onClick:e,children:"Open form"}),o.jsx(p,{...h})]})},b=t.lazy(()=>a(()=>import("./index-DY4jbcst.js").then(e=>e.dw),__vite__mapDeps([0,1,2])).then(e=>({default:e.Prism}))),R=e=>o.jsxs(c,{children:[o.jsx(I,{}),o.jsx(s,{}),o.jsx("div",{children:o.jsx(u,{items:[{key:1,label:"Show source",children:o.jsx(t.Suspense,{fallback:o.jsx("div",{children:"Loading source..."}),children:o.jsx(b,{language:"tsx",style:e.darkMode?f:F,showLineNumbers:!0,children:`
import React, {useCallback} from 'react';
import {Button} from @krinopotam/ui-kit/button';
import {IDFormModalApi, DFormModal, IDFormModalProps} from @krinopotam/ui-kit/dFormModal';
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
        row1: {
            component: InlineGroupField,
            fieldsProps: {
                nameIn: {component: InputField, label: 'Имя входящего'},
                dateIn: {component: DateTimeField, label: 'Дата входа', width: 150},
            },
        } satisfies IInlineGroupFieldProps,
        row2: {
            component: InlineGroupField,
            fieldsProps: {
                nameOut: {component: InputField, label: 'Имя выходящего'},
                dateOut: {component: DateTimeField, label: 'Дата выхода', width: 150},
            },
        } satisfies IInlineGroupFieldProps,
    },
    buttons: FormLayoutSwitch(formApi),
};
export const ModalFormWithGroups = (): React.JSX.Element => {
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
`})})}]})})]});export{R as Paged2d47a78e72b426c8519c95e4abca83e,R as default};
