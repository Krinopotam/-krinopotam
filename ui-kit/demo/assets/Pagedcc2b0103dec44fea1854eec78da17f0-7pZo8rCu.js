const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-Cz0v0Rp9.js","assets/default-highlight-CrA-MuiQ.js","assets/index-DKsnjJVp.js"])))=>i.map(i=>d[i]);
import{r,j as o,_ as a,D as m}from"./index-DKsnjJVp.js";import{B as s}from"./modal-s_O7aRct.js";import{D as l}from"./dFormModal-BxobeehR.js";import{I as i}from"./inputField-E9h4FWeh.js";import{D as n}from"./dateTimeField-Wr8j4fxp.js";import{T as d}from"./tabsField-B3Vnownd.js";import{F as p}from"./buttonsProps-CvcbfanL.js";import{P as u,C as c,d as f,c as b}from"./darcula-CbhncTMN.js";import"./dForm-RzxzTjHO.js";import"./index-CSyocx7G.js";import"./modal-sKRn3jmz.js";import"./index-Cr9wBgfG.js";import"./SearchOutlined-K0l7o9jX.js";import"./useIcons-CWHa1yEa.js";import"./index-j4TMk8Nl.js";const e={},h={formId:"Test form",apiRef:e,confirmChanges:!0,fieldsProps:{tabs:{component:d,tabs:{" Inbound ":{nameIn:{component:i,label:"Inbound Name",inlineGroup:"row1"},dateIn:{component:n,label:"Inbound Date",inlineGroup:"row1",width:150}}," Outbound ":{nameOut:{component:i,label:"Outbound Name",inlineGroup:"row2"},dateOut:{component:n,label:"Outbound Date",inlineGroup:"row2",width:150}}}}},height:250,buttons:p(e)},F=()=>{const t=r.useCallback(()=>{e.open("create")},[]);return o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(s,{onClick:t,children:"Open form"}),o.jsx(l,{...h})]})},I=r.lazy(()=>a(()=>import("./index-Cz0v0Rp9.js").then(t=>t.ds),__vite__mapDeps([0,1,2])).then(t=>({default:t.Prism}))),L=t=>o.jsxs(u,{children:[o.jsx("div",{children:o.jsx(F,{})}),o.jsx(m,{}),o.jsx("div",{children:o.jsx(c,{items:[{key:1,label:"Show source",children:o.jsx(r.Suspense,{fallback:o.jsx("div",{children:"Loading source..."}),children:o.jsx(I,{language:"tsx",style:t.darkMode?f:b,showLineNumbers:!0,children:`
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
`})})}]})})]});export{L as Pagedcc2b0103dec44fea1854eec78da17f0,L as default};
