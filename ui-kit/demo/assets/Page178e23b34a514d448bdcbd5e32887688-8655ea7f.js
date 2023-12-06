import{r as l,j as o,D as r}from"./index-0409158c.js";import{P as s,C as p,S as d,d as c,a as b}from"./docco-fa9c9fcc.js";import{B as u}from"./index-da9b0dd9.js";import{D as f}from"./dFormModal-235aed86.js";import{I as e}from"./inputField-76b34995.js";import{D as t}from"./dateTimeField-1bb09f2b.js";import{T as a}from"./tabsField-40c53f46.js";import{F}from"./buttonsProps-1fa0e94e.js";import"./index-17293d60.js";import"./EyeOutlined-c44a8289.js";import"./SearchOutlined-d2aaca99.js";const i={},h={formId:"Test form",apiRef:i,confirmChanges:!0,fieldsProps:{tabs1:{component:a,tabs:{" Входы1 ":{nameIn1:{component:e,label:"Имя входящего"},dateIn1:{component:t,label:"Дата входа"},subTab1:{component:a,tabs:{" Проходы ":{subNameIn1:{component:e,label:"Имя проходящего",inlineGroup:"row1"},subDateIn1:{component:t,label:"Дата прохода",inlineGroup:"row1",width:150}}," Цходы ":{subNameOut1:{component:e,label:"Имя уходящего"},subDateOut1:{component:t,label:"Дата ухода",width:150}}}}}," Выходы1 ":{nameOut1:{component:e,label:"Имя выходящего"},dateOut1:{component:t,label:"Дата выхода"}}}},tabs2:{component:a,tabs:{" Входы2 ":{nameIn2:{component:e,label:"Имя входящего"},dateIn2:{component:t,label:"Дата входа",width:150}}," Выходы2 ":{nameOut2:{component:e,label:"Имя выходящего"},dateOut2:{component:t,label:"Дата выхода",width:150}}}}},bodyHeight:250,buttons:F(i)},I=()=>{const n=l.useCallback(()=>{i.open("create")},[]);return o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(u,{onClick:n,children:"Open form"}),o.jsx(f,{...h})]})},v=n=>{const m=`
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
`;return o.jsxs(s,{children:[o.jsx("div",{children:o.jsx(I,{})}),o.jsx(r,{}),o.jsx("div",{children:o.jsx(p,{items:[{key:1,label:"Show source",children:o.jsx(d,{language:"javascript",style:n.darkMode?c:b,showLineNumbers:!0,children:m})}]})})]})};export{v as Page178e23b34a514d448bdcbd5e32887688,v as default};
