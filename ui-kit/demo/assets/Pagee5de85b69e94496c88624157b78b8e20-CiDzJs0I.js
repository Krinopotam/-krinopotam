const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DY4jbcst.js","assets/default-highlight-Dn6Zkl0a.js","assets/index-CtAjfk3U.js"])))=>i.map(i=>d[i]);
import{r as i,j as o,D as a,_ as s}from"./index-CtAjfk3U.js";import{b as l}from"./buttonsRow-DIWV9y5m.js";import{D as p}from"./dFormModal-DBrO8yV5.js";import{I as r}from"./inputField-i3gDy1o8.js";import{D as n}from"./dateTimeField-ToDBlyGl.js";import{T as d}from"./tabsField-1LK1nVmL.js";import{F as u}from"./buttonsProps-TJQ2MYKB.js";import{I as m}from"./inlineGroupField-B-kKho5M.js";import{P as c,C as f}from"./pageLayout-BYJr8qhp.js";import{d as b,c as F}from"./darcula-BqMdvqtY.js";import"./isArray-Dq3mFmoY.js";import"./messageBox-BEJz6LZv.js";import"./index-CQ36vsgA.js";import"./modal-CqlI0vXJ.js";import"./baseField-CLOOMrMa.js";import"./index-tEAOawB8.js";import"./SearchOutlined-BPRhDdUX.js";import"./useIcons-BRnDxCLJ.js";import"./index-CMA59ydq.js";import"./PlusOutlined-CjmZvIFI.js";const e={},I={formId:"Test form",apiRef:e,confirmChanges:!0,fieldsProps:{tabs:{component:d,tabs:{" Inbound ":{row1:{component:m,fieldsProps:{nameIn:{component:r,label:"Inbound Name"},dateIn:{component:n,label:"Inbound Date",width:150}}}}," Outbound ":{row2:{component:m,fieldsProps:{nameOut:{component:r,label:"Outbound Name"},dateOut:{component:n,label:"Outbound Date",width:150}}}}}}},height:250,buttons:u(e)},h=()=>{const t=i.useCallback(()=>{e.open("create")},[]);return o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(l,{onClick:t,children:"Open form"}),o.jsx(p,{...I})]})},k=i.lazy(()=>s(()=>import("./index-DY4jbcst.js").then(t=>t.dw),__vite__mapDeps([0,1,2])).then(t=>({default:t.Prism}))),W=t=>o.jsxs(c,{children:[o.jsx(h,{}),o.jsx(a,{}),o.jsx("div",{children:o.jsx(f,{items:[{key:1,label:"Show source",children:o.jsx(i.Suspense,{fallback:o.jsx("div",{children:"Loading source..."}),children:o.jsx(k,{language:"tsx",style:t.darkMode?b:F,showLineNumbers:!0,children:`
import React, {useCallback} from 'react';
import {Button} from @krinopotam/ui-kit/button';
import {IDFormModalApi, DFormModal, IDFormModalProps} from @krinopotam/ui-kit/dFormModal';
import {InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField';
import {DateTimeField} from @krinopotam/ui-kit/dForm/fields/dateTime/dateTimeField';
import {TabsField} from @krinopotam/ui-kit/dForm/fields/tabs/tabsField';
import {FormLayoutSwitch} from '../../common/buttonsProps';
import {IInlineGroupFieldProps, InlineGroupField} from @krinopotam/ui-kit/dForm/fields/inlineGroup';
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
                    row1: {
                        component: InlineGroupField,
                        fieldsProps: {
                            nameIn: {component: InputField, label: 'Inbound Name'},
                            dateIn: {component: DateTimeField, label: 'Inbound Date', width: 150},
                        },
                    } satisfies IInlineGroupFieldProps,
                },
                ' Outbound ': {
                    row2: {
                        component: InlineGroupField,
                        fieldsProps: {
                            nameOut: {component: InputField, label: 'Outbound Name'},
                            dateOut: {component: DateTimeField, label: 'Outbound Date', width: 150},
                        },
                    } satisfies IInlineGroupFieldProps,
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
`})})}]})})]});export{W as Pagee5de85b69e94496c88624157b78b8e20,W as default};
