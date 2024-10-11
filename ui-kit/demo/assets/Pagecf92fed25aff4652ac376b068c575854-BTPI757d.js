const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CGS66BNA.js","assets/default-highlight-CcEIfVOS.js","assets/index-D5qwc_YF.js"])))=>i.map(i=>d[i]);
import{r as s,j as o,_ as i,D as m}from"./index-D5qwc_YF.js";import{B as a}from"./modal-Ba-Ua4rS.js";import{D as n}from"./dFormModal-CeNnxCAb.js";import{F as l}from"./buttonsProps-BySAuIC5.js";import{u as c}from"./inlineFields-BObOmFZD.js";import{P as p,C as u,d,c as f}from"./darcula-DCElNxcl.js";import"./dForm-D9Yj5CGv.js";import"./index-DfWwWpfW.js";import"./modal-BT6G55W2.js";import"./inputField-CQ70iDwA.js";import"./index-C64nsPO3.js";import"./SearchOutlined-C5suFlPC.js";import"./defaultButtonsProps-BAcIqfvm.js";import"./passwordField-DUKls5qI.js";import"./numberField-Ck-tn8B9.js";import"./treeSelectField-7_YE1frO.js";import"./useApiGetGroupsOnly-bkxEAo4A.js";import"./useShowArrow-DS8-lNfb.js";import"./useIcons-c7Gyy1VW.js";import"./selectField-CufBhoNK.js";const h=()=>{const r=s.useCallback(()=>{t.open("create")},[]),e=x();return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Form example with inline fields"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(a,{onClick:r,children:"Open form"}),o.jsx(n,{...e})]})]})},t={},x=()=>({...c(!1),apiRef:t,confirmChanges:!0,arrowsButtonsSelection:!0,buttons:l(t),onCancel:()=>{console.log("cancel")}}),F=s.lazy(()=>i(()=>import("./index-CGS66BNA.js").then(r=>r.ds),__vite__mapDeps([0,1,2])).then(r=>({default:r.Prism}))),W=r=>o.jsxs(p,{children:[o.jsx("div",{children:o.jsx(h,{})}),o.jsx(m,{}),o.jsx("div",{children:o.jsx(u,{items:[{key:1,label:"Show source",children:o.jsx(s.Suspense,{fallback:o.jsx("div",{children:"Loading source..."}),children:o.jsx(F,{language:"tsx",style:r.darkMode?d:f,showLineNumbers:!0,children:`
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
`})})}]})})]});export{W as Pagecf92fed25aff4652ac376b068c575854,W as default};
