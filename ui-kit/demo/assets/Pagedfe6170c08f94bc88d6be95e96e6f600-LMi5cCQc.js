const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CyxzPzPK.js","assets/default-highlight-BA4pzhEA.js","assets/index-Cpuh8Ebd.js"])))=>i.map(i=>d[i]);
import{r as s,j as o,_ as i,D as m}from"./index-Cpuh8Ebd.js";import{b as n}from"./buttonsRow-MpDC2SN8.js";import{D as a}from"./dFormModal-iIvnEeWS.js";import{F as l}from"./buttonsProps-CFHTGBOJ.js";import{u as p}from"./inlineFields-D4k_rktA.js";import{P as c,C as u,d,c as f}from"./darcula-hcLbMwDB.js";import"./dForm-t1Ccos62.js";import"./modal-g5li7x1J.js";import"./index-DNdv76Wr.js";import"./modal-DJlUd0AK.js";import"./inputField-DrHpZyP5.js";import"./index-B7DtBnw9.js";import"./SearchOutlined-mv_WcC67.js";import"./defaultButtonsProps-D12Yt--i.js";import"./PlusOutlined-BTCZ_JD0.js";import"./passwordField-Vkpds4CI.js";import"./numberField-Blo9rZZQ.js";import"./treeSelectField-B9bP6_6a.js";import"./useApiGetGroupsOnly-BkRI8wCQ.js";import"./useShowArrow-CyhrQEeE.js";import"./useIcons-BgIqUolS.js";import"./selectField-E6buzf6g.js";const h=()=>{const r=s.useCallback(()=>{t.open("create")},[]),e=x();return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Form example with inline fields"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(n,{onClick:r,children:"Open form"}),o.jsx(a,{...e})]})]})},t={},x=()=>({...p(!1),apiRef:t,confirmChanges:!0,arrowsButtonsSelection:!0,buttons:l(t),onCancel:()=>{console.log("cancel")}}),F=s.lazy(()=>i(()=>import("./index-CyxzPzPK.js").then(r=>r.ds),__vite__mapDeps([0,1,2])).then(r=>({default:r.Prism}))),H=r=>o.jsxs(c,{children:[o.jsx("div",{children:o.jsx(h,{})}),o.jsx(m,{}),o.jsx("div",{children:o.jsx(u,{items:[{key:1,label:"Show source",children:o.jsx(s.Suspense,{fallback:o.jsx("div",{children:"Loading source..."}),children:o.jsx(F,{language:"tsx",style:r.darkMode?d:f,showLineNumbers:!0,children:`
import {Button} from @krinopotam/ui-kit/button';
import {DFormModal, IDFormModalApi, IDFormModalProps} from @krinopotam/ui-kit/dFormModal';
import React, {useCallback} from 'react';
import {FormLayoutSwitch} from '../../common/buttonsProps';
import {useFormProps} from '../dForm/inlineFields';
export const Example = (): React.JSX.Element => {
    const onClick = useCallback(() => {
        formApi.open('create');
    }, []);
    const formProps = useModalFormProps();
    return (
        <>
            <div style={{maxWidth: 500}}>
                <Button onClick={onClick}>Open form</Button>
                <DFormModal {...formProps} />
            </div>
        </>
    );
};
const formApi = {} as IDFormModalApi;
const useModalFormProps = () => {
    const formProps = useFormProps(false)
    return {
        ...formProps,
        apiRef: formApi,
        confirmChanges: true,
        arrowsButtonsSelection: true,
        buttons: FormLayoutSwitch(formApi),
        onCancel: () => {
            console.log('cancel');
        },
    } satisfies IDFormModalProps;
};
`})})}]})})]});export{H as Pagedfe6170c08f94bc88d6be95e96e6f600,H as default};
