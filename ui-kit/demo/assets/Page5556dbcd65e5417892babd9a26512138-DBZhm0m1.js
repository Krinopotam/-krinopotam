const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DY4jbcst.js","assets/default-highlight-Dn6Zkl0a.js","assets/index-CtAjfk3U.js"])))=>i.map(i=>d[i]);
import{r as m,j as o,D as l,_ as s}from"./index-CtAjfk3U.js";import{b as p}from"./buttonsRow-DIWV9y5m.js";import{D as d}from"./dFormModal-DBrO8yV5.js";import{I as t}from"./inputField-i3gDy1o8.js";import{D as n}from"./dateTimeField-ToDBlyGl.js";import{T as i}from"./tabsField-1LK1nVmL.js";import{F as c}from"./buttonsProps-TJQ2MYKB.js";import{I as r}from"./inlineGroupField-B-kKho5M.js";import{P as u,C as b}from"./pageLayout-BYJr8qhp.js";import{d as f,c as F}from"./darcula-BqMdvqtY.js";import"./isArray-Dq3mFmoY.js";import"./messageBox-BEJz6LZv.js";import"./index-CQ36vsgA.js";import"./modal-CqlI0vXJ.js";import"./baseField-CLOOMrMa.js";import"./index-tEAOawB8.js";import"./SearchOutlined-BPRhDdUX.js";import"./useIcons-BRnDxCLJ.js";import"./index-CMA59ydq.js";import"./PlusOutlined-CjmZvIFI.js";const a={},I={formId:"Test form",apiRef:a,confirmChanges:!0,fieldsProps:{tabs1:{component:i,tabs:{" Входы1 ":{nameIn1:{component:t,label:"Имя входящего"},dateIn1:{component:n,label:"Дата входа"},subTab1:{component:i,tabs:{" Проходы ":{row1:{component:r,fieldsProps:{subNameIn1:{component:t,label:"Имя проходящего"},subDateIn1:{component:n,label:"Дата прохода",width:150}}}}," Уходы ":{row2:{component:r,fieldsProps:{subNameOut1:{component:t,label:"Имя уходящего"},subDateOut1:{component:n,label:"Дата ухода",width:150}}}}}}}," Выходы1 ":{nameOut1:{component:t,label:"Имя выходящего"},dateOut1:{component:n,label:"Дата выхода"}}}},tabs2:{component:i,tabs:{" Входы2 ":{nameIn2:{component:t,label:"Имя входящего"},dateIn2:{component:n,label:"Дата входа",width:150}}," Выходы2 ":{nameOut2:{component:t,label:"Имя выходящего"},dateOut2:{component:n,label:"Дата выхода",width:150}}}}},height:250,maxWidth:500,maxHeight:500,buttons:c(a)},h=()=>{const e=m.useCallback(()=>{a.open("create")},[]);return o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(p,{onClick:e,children:"Open form"}),o.jsx(d,{...I})]})},x=m.lazy(()=>s(()=>import("./index-DY4jbcst.js").then(e=>e.dw),__vite__mapDeps([0,1,2])).then(e=>({default:e.Prism}))),W=e=>o.jsxs(u,{children:[o.jsx(h,{}),o.jsx(l,{}),o.jsx("div",{children:o.jsx(b,{items:[{key:1,label:"Show source",children:o.jsx(m.Suspense,{fallback:o.jsx("div",{children:"Loading source..."}),children:o.jsx(x,{language:"tsx",style:e.darkMode?f:F,showLineNumbers:!0,children:`
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
        tabs1: {
            component: TabsField,
            tabs: {
                ' Входы1 ': {
                    nameIn1: {component: InputField, label: 'Имя входящего'},
                    dateIn1: {component: DateTimeField, label: 'Дата входа'},
                    subTab1: {
                        component: TabsField,
                        tabs: {
                            ' Проходы ': {
                                row1: {
                                    component: InlineGroupField,
                                    fieldsProps: {
                                        subNameIn1: {component: InputField, label: 'Имя проходящего'},
                                        subDateIn1: {component: DateTimeField, label: 'Дата прохода', width: 150},
                                    },
                                } satisfies IInlineGroupFieldProps,
                            },
                            ' Уходы ': {
                                row2: {
                                    component: InlineGroupField,
                                    fieldsProps: {
                                        subNameOut1: {component: InputField, label: 'Имя уходящего'},
                                        subDateOut1: {component: DateTimeField, label: 'Дата ухода', width: 150},
                                    },
                                } satisfies IInlineGroupFieldProps,
                            },
                        },
                    },
                },
                ' Выходы1 ': {
                    nameOut1: {component: InputField, label: 'Имя выходящего'},
                    dateOut1: {component: DateTimeField, label: 'Дата выхода'},
                },
            },
        },
        tabs2: {
            component: TabsField,
            tabs: {
                ' Входы2 ': {
                    nameIn2: {component: InputField, label: 'Имя входящего'},
                    dateIn2: {component: DateTimeField, label: 'Дата входа', width: 150},
                },
                ' Выходы2 ': {
                    nameOut2: {component: InputField, label: 'Имя выходящего'},
                    dateOut2: {component: DateTimeField, label: 'Дата выхода', width: 150},
                },
            },
        },
    },
    height: 250,
    maxWidth: 500,
    maxHeight: 500,
    buttons: FormLayoutSwitch(formApi),
};
export const SeveralTabs = (): React.JSX.Element => {
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
`})})}]})})]});export{W as Page5556dbcd65e5417892babd9a26512138,W as default};
