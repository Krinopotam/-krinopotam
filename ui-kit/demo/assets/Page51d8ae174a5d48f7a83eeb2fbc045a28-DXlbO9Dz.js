const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CyxzPzPK.js","assets/default-highlight-BA4pzhEA.js","assets/index-Cpuh8Ebd.js"])))=>i.map(i=>d[i]);
import{r as m,j as e,_ as r,D as l}from"./index-Cpuh8Ebd.js";import{b as s}from"./buttonsRow-MpDC2SN8.js";import{D as p}from"./dFormModal-iIvnEeWS.js";import{I as t}from"./inputField-DrHpZyP5.js";import{D as a}from"./dateTimeField-DMD1m-to.js";import{T as n}from"./tabsField-CtzcurYq.js";import{F as d}from"./buttonsProps-CFHTGBOJ.js";import{P as c,C as u,d as b,c as f}from"./darcula-hcLbMwDB.js";import"./dForm-t1Ccos62.js";import"./modal-g5li7x1J.js";import"./index-DNdv76Wr.js";import"./modal-DJlUd0AK.js";import"./index-B7DtBnw9.js";import"./SearchOutlined-mv_WcC67.js";import"./useIcons-BgIqUolS.js";import"./index-_1IkvjzU.js";import"./PlusOutlined-BTCZ_JD0.js";const i={},F={formId:"Test form",apiRef:i,confirmChanges:!0,fieldsProps:{tabs1:{component:n,tabs:{" Входы1 ":{nameIn1:{component:t,label:"Имя входящего"},dateIn1:{component:a,label:"Дата входа"},subTab1:{component:n,tabs:{" Проходы ":{subNameIn1:{component:t,label:"Имя проходящего",inlineGroup:"row1"},subDateIn1:{component:a,label:"Дата прохода",inlineGroup:"row1",width:150}}," Уходы ":{subNameOut1:{component:t,label:"Имя уходящего"},subDateOut1:{component:a,label:"Дата ухода",width:150}}}}}," Выходы1 ":{nameOut1:{component:t,label:"Имя выходящего"},dateOut1:{component:a,label:"Дата выхода"}}}},tabs2:{component:n,tabs:{" Входы2 ":{nameIn2:{component:t,label:"Имя входящего"},dateIn2:{component:a,label:"Дата входа",width:150}}," Выходы2 ":{nameOut2:{component:t,label:"Имя выходящего"},dateOut2:{component:a,label:"Дата выхода",width:150}}}}},height:250,maxWidth:500,maxHeight:500,buttons:d(i)},h=()=>{const o=m.useCallback(()=>{i.open("create")},[]);return e.jsxs("div",{style:{maxWidth:500},children:[e.jsx(s,{onClick:o,children:"Open form"}),e.jsx(p,{...F})]})},I=m.lazy(()=>r(()=>import("./index-CyxzPzPK.js").then(o=>o.ds),__vite__mapDeps([0,1,2])).then(o=>({default:o.Prism}))),E=o=>e.jsxs(c,{children:[e.jsx("div",{children:e.jsx(h,{})}),e.jsx(l,{}),e.jsx("div",{children:e.jsx(u,{items:[{key:1,label:"Show source",children:e.jsx(m.Suspense,{fallback:e.jsx("div",{children:"Loading source..."}),children:e.jsx(I,{language:"tsx",style:o.darkMode?b:f,showLineNumbers:!0,children:`
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
`})})}]})})]});export{E as Page51d8ae174a5d48f7a83eeb2fbc045a28,E as default};
