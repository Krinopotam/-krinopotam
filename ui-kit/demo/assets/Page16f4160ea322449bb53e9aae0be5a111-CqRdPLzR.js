import{r as m,j as o,D as r}from"./index-CRRPgvdi.js";import{P as l,C as s,h as p,d,a as c}from"./docco-COLmzWzy.js";import{B as u}from"./index-CR3eF2D1.js";import{D as b}from"./dFormModal-Df9g-P_m.js";import{I as e}from"./inputField-BCG6Hv6R.js";import{D as t}from"./dateTimeField-B0NTCfwC.js";import{T as n}from"./tabsField-BD8101hA.js";import{F as f}from"./buttonsProps-Bczlz-e7.js";import"./index-Dx0n4lO3.js";import"./EyeOutlined-DQsML7KC.js";import"./SearchOutlined-BOezqQLT.js";import"./useIcons-BN1b1-Dw.js";const i={},F={formId:"Test form",apiRef:i,confirmChanges:!0,fieldsProps:{tabs1:{component:n,tabs:{" Входы1 ":{nameIn1:{component:e,label:"Имя входящего"},dateIn1:{component:t,label:"Дата входа"},subTab1:{component:n,tabs:{" Проходы ":{subNameIn1:{component:e,label:"Имя проходящего",inlineGroup:"row1"},subDateIn1:{component:t,label:"Дата прохода",inlineGroup:"row1",width:150}}," Цходы ":{subNameOut1:{component:e,label:"Имя уходящего"},subDateOut1:{component:t,label:"Дата ухода",width:150}}}}}," Выходы1 ":{nameOut1:{component:e,label:"Имя выходящего"},dateOut1:{component:t,label:"Дата выхода"}}}},tabs2:{component:n,tabs:{" Входы2 ":{nameIn2:{component:e,label:"Имя входящего"},dateIn2:{component:t,label:"Дата входа",width:150}}," Выходы2 ":{nameOut2:{component:e,label:"Имя выходящего"},dateOut2:{component:t,label:"Дата выхода",width:150}}}}},bodyHeight:250,buttons:f(i)},h=()=>{const a=m.useCallback(()=>{i.open("create")},[]);return o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(u,{onClick:a,children:"Open form"}),o.jsx(b,{...F})]})},M=a=>o.jsxs(l,{children:[o.jsx("div",{children:o.jsx(h,{})}),o.jsx(r,{}),o.jsx("div",{children:o.jsx(s,{items:[{key:1,label:"Show source",children:o.jsx(p,{language:"javascript",style:a.darkMode?d:c,showLineNumbers:!0,children:`
import React, {useCallback} from 'react';
import {Button} from @krinopotam/ui-kit/button';
import {IDFormModalApi, DFormModal, IDFormModalProps} from @krinopotam/ui-kit/dFormModal';
import {InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField';
import {DateTimeField} from @krinopotam/ui-kit/dForm/fields/dateTime/dateTimeField';
import {TabsField} from @krinopotam/ui-kit/dForm/fields/tabs/tabsField';
import {FormLayoutSwitch} from "../../common/buttonsProps";
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
                                subNameIn1: {component: InputField, label: 'Имя проходящего', inlineGroup:'row1'},
                                subDateIn1: {component: DateTimeField, label: 'Дата прохода', inlineGroup:'row1', width: 150},
                            },
                            ' Цходы ': {
                                subNameOut1: {component: InputField, label: 'Имя уходящего'},
                                subDateOut1: {component: DateTimeField, label: 'Дата ухода', width: 150},
                            },
                        },
                    }
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
    bodyHeight: 250,
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
`})}]})})]});export{M as Page16f4160ea322449bb53e9aae0be5a111,M as default};
