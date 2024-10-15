const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-BL7bdWBR.js","assets/default-highlight-Dl6tLCjN.js","assets/index-1vveH9ac.js"])))=>i.map(i=>d[i]);
import{r as s,j as o,_ as i,D as m}from"./index-1vveH9ac.js";import{b as a}from"./mergeButtons-DTGr5PDV.js";import{D as n}from"./dFormModal-0jOrNNg7.js";import{F as l}from"./buttonsProps-DSDACY4d.js";import{u as p}from"./inlineFields-BxmIPWdj.js";import{P as c,C as d,d as u,c as f}from"./darcula-DpQ7T8l_.js";import"./dForm-D5DpcrSR.js";import"./modal-DQmoWYEp.js";import"./index-X3DQSWWD.js";import"./modal-CIPFU5OD.js";import"./inputField-BRpnxfXg.js";import"./index-BcuKpake.js";import"./SearchOutlined-BPQ8xTir.js";import"./defaultButtonsProps-BsF6dd38.js";import"./passwordField-BG5Mrjtz.js";import"./numberField-B5-RPfBh.js";import"./treeSelectField-CcrBFq05.js";import"./useApiGetGroupsOnly-Cy_aNnif.js";import"./useShowArrow-BB91wjZK.js";import"./useIcons-uxujrtzw.js";import"./selectField-CBV8GWAZ.js";const h=()=>{const r=s.useCallback(()=>{t.open("create")},[]),e=x();return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Form example with inline fields"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(a,{onClick:r,children:"Open form"}),o.jsx(n,{...e})]})]})},t={},x=()=>({...p(!1),apiRef:t,confirmChanges:!0,arrowsButtonsSelection:!0,buttons:l(t),onCancel:()=>{console.log("cancel")}}),F=s.lazy(()=>i(()=>import("./index-BL7bdWBR.js").then(r=>r.ds),__vite__mapDeps([0,1,2])).then(r=>({default:r.Prism}))),z=r=>o.jsxs(c,{children:[o.jsx("div",{children:o.jsx(h,{})}),o.jsx(m,{}),o.jsx("div",{children:o.jsx(d,{items:[{key:1,label:"Show source",children:o.jsx(s.Suspense,{fallback:o.jsx("div",{children:"Loading source..."}),children:o.jsx(F,{language:"tsx",style:r.darkMode?u:f,showLineNumbers:!0,children:`
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
`})})}]})})]});export{z as Page9d7b89da68dc40ce9aa08f376eb83323,z as default};
