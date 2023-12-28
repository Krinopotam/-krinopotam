import{r as l,j as o,D as r}from"./index-353109d5.js";import{P as s,C as p,S as d,d as c,a as u}from"./docco-60b84056.js";import{B as b}from"./index-1664f5a0.js";import{D as f}from"./dFormModal-cd36bfcf.js";import{I as e}from"./inputField-8da0b016.js";import{D as t}from"./dateTimeField-f47a3798.js";import{T as n}from"./tabsField-e87693c4.js";import{F}from"./buttonsProps-55f44e0d.js";import"./index-9c270dd6.js";import"./EyeOutlined-da2ead67.js";import"./SearchOutlined-52a0f6fd.js";const i={},h={formId:"Test form",apiRef:i,confirmChanges:!0,fieldsProps:{tabs1:{component:n,tabs:{" Входы1 ":{nameIn1:{component:e,label:"Имя входящего"},dateIn1:{component:t,label:"Дата входа"},subTab1:{component:n,tabs:{" Проходы ":{subNameIn1:{component:e,label:"Имя проходящего",inlineGroup:"row1"},subDateIn1:{component:t,label:"Дата прохода",inlineGroup:"row1",width:150}}," Цходы ":{subNameOut1:{component:e,label:"Имя уходящего"},subDateOut1:{component:t,label:"Дата ухода",width:150}}}}}," Выходы1 ":{nameOut1:{component:e,label:"Имя выходящего"},dateOut1:{component:t,label:"Дата выхода"}}}},tabs2:{component:n,tabs:{" Входы2 ":{nameIn2:{component:e,label:"Имя входящего"},dateIn2:{component:t,label:"Дата входа",width:150}}," Выходы2 ":{nameOut2:{component:e,label:"Имя выходящего"},dateOut2:{component:t,label:"Дата выхода",width:150}}}}},bodyHeight:250,buttons:F(i)},I=()=>{const a=l.useCallback(()=>{i.open("create")},[]);return o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(b,{onClick:a,children:"Open form"}),o.jsx(f,{...h})]})},v=a=>{const m=`
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
`;return o.jsxs(s,{children:[o.jsx("div",{children:o.jsx(I,{})}),o.jsx(r,{}),o.jsx("div",{children:o.jsx(p,{items:[{key:1,label:"Show source",children:o.jsx(d,{language:"javascript",style:a.darkMode?c:u,showLineNumbers:!0,children:m})}]})})]})};export{v as Page6afb7416a2754da695623e272ffeadea,v as default};
