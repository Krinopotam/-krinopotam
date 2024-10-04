const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-0uqxO8u4.js","assets/default-highlight-AspSjZVb.js","assets/index-BvGUw9C6.js"])))=>i.map(i=>d[i]);
import{r as s,j as o,_ as i,D as m}from"./index-BvGUw9C6.js";import{B as a}from"./modal-DNjBPuEU.js";import{D as n}from"./dFormModal-DG3y0daw.js";import{F as l}from"./buttonsProps-upVQHP2r.js";import{u as p}from"./inlineFields-CS6KT_b-.js";import{P as c,C as u,d,c as f}from"./darcula-ztsHFdQx.js";import"./dForm-CuoIYVbt.js";import"./index-D8Aqgh10.js";import"./modal-CFEDQlJ_.js";import"./inputField-BEB_d-nY.js";import"./index-BEjDhyl7.js";import"./SearchOutlined-CBD5tlyV.js";import"./defaultButtonsProps-CC5Jyskk.js";import"./passwordField-CxoOJmqo.js";import"./numberField-mKzvZElQ.js";import"./treeSelectField-C3jRYHtF.js";import"./useApiGetGroupsOnly-CyGLECi2.js";import"./useShowArrow-34BS6KEh.js";import"./useIcons-Con9xg6E.js";import"./selectField-DczeQJcW.js";const h=()=>{const r=s.useCallback(()=>{t.open("create")},[]),e=x();return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Form example with inline fields"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(a,{onClick:r,children:"Open form"}),o.jsx(n,{...e})]})]})},t={},x=()=>({...p(!1),apiRef:t,confirmChanges:!0,arrowsButtonsSelection:!0,buttons:l(t),onCancel:()=>{console.log("cancel")}}),F=s.lazy(()=>i(()=>import("./index-0uqxO8u4.js").then(r=>r.ds),__vite__mapDeps([0,1,2])).then(r=>({default:r.Prism}))),W=r=>o.jsxs(c,{children:[o.jsx("div",{children:o.jsx(h,{})}),o.jsx(m,{}),o.jsx("div",{children:o.jsx(u,{items:[{key:1,label:"Show source",children:o.jsx(s.Suspense,{fallback:o.jsx("div",{children:"Loading source..."}),children:o.jsx(F,{language:"tsx",style:r.darkMode?d:f,showLineNumbers:!0,children:`
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
`})})}]})})]});export{W as Page26bfba06f3d94539b5b558ec3cf214e4,W as default};
