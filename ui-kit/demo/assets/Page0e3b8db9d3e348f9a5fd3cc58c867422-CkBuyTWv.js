const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DdqqSCj0.js","assets/default-highlight-9uSTSbTs.js","assets/index-c6xXn22Z.js"])))=>i.map(i=>d[i]);
import{r as m,j as e,_ as r,D as l}from"./index-c6xXn22Z.js";import{B as s}from"./modal-CDnUOe4A.js";import{D as p}from"./dFormModal-C6Y0IuSi.js";import{I as t}from"./inputField-CPNFEZKC.js";import{D as n}from"./dateTimeField-B2iDbqF-.js";import{T as a}from"./tabsField-DjnorSoT.js";import{F as d}from"./buttonsProps-CErdzg06.js";import{P as c,C as u,d as b,c as f}from"./darcula-DhxqnDMh.js";import"./dForm-CZw76wHB.js";import"./index-CzWkA8Ku.js";import"./modal-CyZhQyS5.js";import"./index-Cbpa_xnq.js";import"./SearchOutlined-DGItvMC8.js";import"./useIcons-DgSa-zT7.js";import"./index-CQhiZmSX.js";const i={},F={formId:"Test form",apiRef:i,confirmChanges:!0,fieldsProps:{tabs1:{component:a,tabs:{" Входы1 ":{nameIn1:{component:t,label:"Имя входящего"},dateIn1:{component:n,label:"Дата входа"},subTab1:{component:a,tabs:{" Проходы ":{subNameIn1:{component:t,label:"Имя проходящего",inlineGroup:"row1"},subDateIn1:{component:n,label:"Дата прохода",inlineGroup:"row1",width:150}}," Уходы ":{subNameOut1:{component:t,label:"Имя уходящего"},subDateOut1:{component:n,label:"Дата ухода",width:150}}}}}," Выходы1 ":{nameOut1:{component:t,label:"Имя выходящего"},dateOut1:{component:n,label:"Дата выхода"}}}},tabs2:{component:a,tabs:{" Входы2 ":{nameIn2:{component:t,label:"Имя входящего"},dateIn2:{component:n,label:"Дата входа",width:150}}," Выходы2 ":{nameOut2:{component:t,label:"Имя выходящего"},dateOut2:{component:n,label:"Дата выхода",width:150}}}}},height:250,maxWidth:500,maxHeight:500,buttons:d(i)},h=()=>{const o=m.useCallback(()=>{i.open("create")},[]);return e.jsxs("div",{style:{maxWidth:500},children:[e.jsx(s,{onClick:o,children:"Open form"}),e.jsx(p,{...F})]})},I=m.lazy(()=>r(()=>import("./index-DdqqSCj0.js").then(o=>o.ds),__vite__mapDeps([0,1,2])).then(o=>({default:o.Prism}))),L=o=>e.jsxs(c,{children:[e.jsx("div",{children:e.jsx(h,{})}),e.jsx(l,{}),e.jsx("div",{children:e.jsx(u,{items:[{key:1,label:"Show source",children:e.jsx(m.Suspense,{fallback:e.jsx("div",{children:"Loading source..."}),children:e.jsx(I,{language:"tsx",style:o.darkMode?b:f,showLineNumbers:!0,children:`
import React, {useCallback} from 'react';
import {Button} from @krinopotam/ui-kit/button';
import {IDFormModalApi, DFormModal, IDFormModalProps} from @krinopotam/ui-kit/dFormModal';
import {InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField';
import {DateTimeField} from @krinopotam/ui-kit/dForm/fields/dateTime/dateTimeField';
import {TabsField} from @krinopotam/ui-kit/dForm/fields/tabs/tabsField';
import {FormLayoutSwitch} from '../../common/buttonsProps';
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
                                subNameIn1: {component: InputField, label: 'Имя проходящего', inlineGroup: 'row1'},
                                subDateIn1: {component: DateTimeField, label: 'Дата прохода', inlineGroup: 'row1', width: 150},
                            },
                            ' Уходы ': {
                                subNameOut1: {component: InputField, label: 'Имя уходящего'},
                                subDateOut1: {component: DateTimeField, label: 'Дата ухода', width: 150},
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
`})})}]})})]});export{L as Page0e3b8db9d3e348f9a5fd3cc58c867422,L as default};
