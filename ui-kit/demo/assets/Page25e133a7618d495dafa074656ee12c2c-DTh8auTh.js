const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-aRU0KM20.js","assets/default-highlight-Kf2sMSRd.js","assets/index-BEbJdilr.js"])))=>i.map(i=>d[i]);
import{r as s,j as o,_ as i,D as m}from"./index-BEbJdilr.js";import{B as a}from"./modal-DZ70cJBI.js";import{D as n}from"./dFormModal-DVM0pNWI.js";import{F as l}from"./buttonsProps-DUvqEtm5.js";import{u as p}from"./inlineFields-B6Denljp.js";import{P as c,C as u,d,c as f}from"./darcula-DUU8WC9V.js";import"./dForm-BUs8TQbJ.js";import"./index-DJAh43lQ.js";import"./modal-CKnotMHS.js";import"./inputField-CHnFv8h3.js";import"./index-C0ukGqzI.js";import"./SearchOutlined-CqkiXlgD.js";import"./defaultButtonsProps-BuloFMuY.js";import"./passwordField-BZL91Zof.js";import"./numberField-DUBNUrBL.js";import"./treeSelectField-1yWgJPJB.js";import"./useApiGetGroupsOnly-B8IoRGb1.js";import"./useShowArrow-Co7GTLtH.js";import"./useIcons-go0WpEcA.js";import"./selectField-Dvkzbn_6.js";const h=()=>{const r=s.useCallback(()=>{t.open("create")},[]),e=x();return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Form example with inline fields"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(a,{onClick:r,children:"Open form"}),o.jsx(n,{...e})]})]})},t={},x=()=>({...p(!1),apiRef:t,confirmChanges:!0,arrowsButtonsSelection:!0,buttons:l(t),onCancel:()=>{console.log("cancel")}}),F=s.lazy(()=>i(()=>import("./index-aRU0KM20.js").then(r=>r.ds),__vite__mapDeps([0,1,2])).then(r=>({default:r.Prism}))),W=r=>o.jsxs(c,{children:[o.jsx("div",{children:o.jsx(h,{})}),o.jsx(m,{}),o.jsx("div",{children:o.jsx(u,{items:[{key:1,label:"Show source",children:o.jsx(s.Suspense,{fallback:o.jsx("div",{children:"Loading source..."}),children:o.jsx(F,{language:"tsx",style:r.darkMode?d:f,showLineNumbers:!0,children:`
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
`})})}]})})]});export{W as Page25e133a7618d495dafa074656ee12c2c,W as default};
