const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-D988I8zH.js","assets/default-highlight-CW7-1fMQ.js","assets/index-BZKbt60r.js"])))=>i.map(i=>d[i]);
import{r as s,j as o,_ as i,D as m}from"./index-BZKbt60r.js";import{B as a}from"./modal-BFvfzGH2.js";import{D as n}from"./dFormModal-Br15X1Ve.js";import{F as l}from"./buttonsProps-Bo8Ms0bZ.js";import{u as p}from"./inlineFields-DVuRNG5X.js";import{P as c,C as u,d,c as f}from"./darcula-BNSS4uSE.js";import"./dForm-Cc85MzR5.js";import"./index-BYKAZVg4.js";import"./modal-DVeoQbYX.js";import"./inputField-Dpow2U-B.js";import"./index-BavPCaLU.js";import"./SearchOutlined-BbXYsGdC.js";import"./defaultButtonsProps-rqR8zV0W.js";import"./passwordField-BKkIQ24U.js";import"./numberField-Dmcrq_Oe.js";import"./treeSelectField-CbP6GsnK.js";import"./useApiGetGroupsOnly-B5fIqrid.js";import"./useShowArrow-CZRVeNli.js";import"./useIcons-i1iFiWUH.js";import"./selectField-CvloY4kF.js";const h=()=>{const r=s.useCallback(()=>{t.open("create")},[]),e=x();return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Form example with inline fields"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(a,{onClick:r,children:"Open form"}),o.jsx(n,{...e})]})]})},t={},x=()=>({...p(!1),apiRef:t,confirmChanges:!0,arrowsButtonsSelection:!0,buttons:l(t),onCancel:()=>{console.log("cancel")}}),F=s.lazy(()=>i(()=>import("./index-D988I8zH.js").then(r=>r.ds),__vite__mapDeps([0,1,2])).then(r=>({default:r.Prism}))),W=r=>o.jsxs(c,{children:[o.jsx("div",{children:o.jsx(h,{})}),o.jsx(m,{}),o.jsx("div",{children:o.jsx(u,{items:[{key:1,label:"Show source",children:o.jsx(s.Suspense,{fallback:o.jsx("div",{children:"Loading source..."}),children:o.jsx(F,{language:"tsx",style:r.darkMode?d:f,showLineNumbers:!0,children:`
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
`})})}]})})]});export{W as Page274a0a7a8a604eb48b928361d380d882,W as default};
