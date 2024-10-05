const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DdqqSCj0.js","assets/default-highlight-9uSTSbTs.js","assets/index-c6xXn22Z.js"])))=>i.map(i=>d[i]);
import{r,j as o,_ as a,D as m}from"./index-c6xXn22Z.js";import{B as s}from"./modal-CDnUOe4A.js";import{D as l}from"./dFormModal-C6Y0IuSi.js";import{I as i}from"./inputField-CPNFEZKC.js";import{D as n}from"./dateTimeField-B2iDbqF-.js";import{T as d}from"./tabsField-DjnorSoT.js";import{F as p}from"./buttonsProps-CErdzg06.js";import{P as u,C as c,d as b,c as f}from"./darcula-DhxqnDMh.js";import"./dForm-CZw76wHB.js";import"./index-CzWkA8Ku.js";import"./modal-CyZhQyS5.js";import"./index-Cbpa_xnq.js";import"./SearchOutlined-DGItvMC8.js";import"./useIcons-DgSa-zT7.js";import"./index-CQhiZmSX.js";const e={},h={formId:"Test form",apiRef:e,confirmChanges:!0,fieldsProps:{tabs:{component:d,tabs:{" Inbound ":{nameIn:{component:i,label:"Inbound Name",inlineGroup:"row1"},dateIn:{component:n,label:"Inbound Date",inlineGroup:"row1",width:150}}," Outbound ":{nameOut:{component:i,label:"Outbound Name",inlineGroup:"row2"},dateOut:{component:n,label:"Outbound Date",inlineGroup:"row2",width:150}}}}},height:250,buttons:p(e)},F=()=>{const t=r.useCallback(()=>{e.open("create")},[]);return o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(s,{onClick:t,children:"Open form"}),o.jsx(l,{...h})]})},I=r.lazy(()=>a(()=>import("./index-DdqqSCj0.js").then(t=>t.ds),__vite__mapDeps([0,1,2])).then(t=>({default:t.Prism}))),L=t=>o.jsxs(u,{children:[o.jsx("div",{children:o.jsx(F,{})}),o.jsx(m,{}),o.jsx("div",{children:o.jsx(c,{items:[{key:1,label:"Show source",children:o.jsx(r.Suspense,{fallback:o.jsx("div",{children:"Loading source..."}),children:o.jsx(I,{language:"tsx",style:t.darkMode?b:f,showLineNumbers:!0,children:`
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
        tabs: {
            component: TabsField,
            tabs: {
                ' Inbound ': {
                    nameIn: {component: InputField, label: 'Inbound Name', inlineGroup: 'row1'},
                    dateIn: {component: DateTimeField, label: 'Inbound Date', inlineGroup: 'row1', width: 150},
                },
                ' Outbound ': {
                    nameOut: {component: InputField, label: 'Outbound Name', inlineGroup: 'row2'},
                    dateOut: {component: DateTimeField, label: 'Outbound Date', inlineGroup: 'row2', width: 150},
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
`})})}]})})]});export{L as Pagefb4a46c230cc46c6b71336b48b68f42a,L as default};
