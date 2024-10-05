const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DdqqSCj0.js","assets/default-highlight-9uSTSbTs.js","assets/index-c6xXn22Z.js"])))=>i.map(i=>d[i]);
import{r as s,j as o,_ as i,D as m}from"./index-c6xXn22Z.js";import{B as a}from"./modal-CDnUOe4A.js";import{D as n}from"./dFormModal-C6Y0IuSi.js";import{F as l}from"./buttonsProps-CErdzg06.js";import{u as c}from"./inlineFields-CLdpkhYW.js";import{P as p,C as u,d,c as f}from"./darcula-DhxqnDMh.js";import"./dForm-CZw76wHB.js";import"./index-CzWkA8Ku.js";import"./modal-CyZhQyS5.js";import"./inputField-CPNFEZKC.js";import"./index-Cbpa_xnq.js";import"./SearchOutlined-DGItvMC8.js";import"./defaultButtonsProps-B2tjDYAJ.js";import"./passwordField-D_Xxq_rP.js";import"./numberField-BjVw34OH.js";import"./treeSelectField-CFXWdYJO.js";import"./useApiGetGroupsOnly-BSTTPQIo.js";import"./useShowArrow-BgspAse-.js";import"./useIcons-DgSa-zT7.js";import"./selectField-CF3SfIou.js";const h=()=>{const r=s.useCallback(()=>{t.open("create")},[]),e=x();return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Form example with inline fields"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(a,{onClick:r,children:"Open form"}),o.jsx(n,{...e})]})]})},t={},x=()=>({...c(!1),apiRef:t,confirmChanges:!0,arrowsButtonsSelection:!0,buttons:l(t),onCancel:()=>{console.log("cancel")}}),F=s.lazy(()=>i(()=>import("./index-DdqqSCj0.js").then(r=>r.ds),__vite__mapDeps([0,1,2])).then(r=>({default:r.Prism}))),W=r=>o.jsxs(p,{children:[o.jsx("div",{children:o.jsx(h,{})}),o.jsx(m,{}),o.jsx("div",{children:o.jsx(u,{items:[{key:1,label:"Show source",children:o.jsx(s.Suspense,{fallback:o.jsx("div",{children:"Loading source..."}),children:o.jsx(F,{language:"tsx",style:r.darkMode?d:f,showLineNumbers:!0,children:`
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
`})})}]})})]});export{W as Page966887bf296344dcbdc67cae4a39aa5b,W as default};
