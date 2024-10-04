const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-BCkY1BI4.js","assets/default-highlight-BkRzspxv.js","assets/index-D4bHa_3o.js"])))=>i.map(i=>d[i]);
import{r as s,j as o,_ as i,D as m}from"./index-D4bHa_3o.js";import{B as a}from"./modal-Cje67qL2.js";import{D as n}from"./dFormModal-BCjjhs8Y.js";import{F as l}from"./buttonsProps-DqS9-gaB.js";import{u as p}from"./inlineFields-Bl2EMQK8.js";import{P as c,C as u,d,c as f}from"./darcula-DdlBXz-Q.js";import"./dForm-3m-O6pho.js";import"./index-BrKQ3NvS.js";import"./modal-B1kKEzi9.js";import"./inputField-DGR4oCWc.js";import"./index-D0MhsY60.js";import"./SearchOutlined-C-5aAKd9.js";import"./defaultButtonsProps-D413j251.js";import"./passwordField-BwrDeCTC.js";import"./numberField-CJ-rFpHC.js";import"./treeSelectField-BMcCeLPz.js";import"./useApiGetGroupsOnly-T5Kwr76U.js";import"./useShowArrow-DkzcVp1t.js";import"./useIcons-DVS72p3F.js";import"./selectField-1lx3eaiV.js";const h=()=>{const r=s.useCallback(()=>{t.open("create")},[]),e=x();return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Form example with inline fields"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(a,{onClick:r,children:"Open form"}),o.jsx(n,{...e})]})]})},t={},x=()=>({...p(!1),apiRef:t,confirmChanges:!0,arrowsButtonsSelection:!0,buttons:l(t),onCancel:()=>{console.log("cancel")}}),F=s.lazy(()=>i(()=>import("./index-BCkY1BI4.js").then(r=>r.ds),__vite__mapDeps([0,1,2])).then(r=>({default:r.Prism}))),W=r=>o.jsxs(c,{children:[o.jsx("div",{children:o.jsx(h,{})}),o.jsx(m,{}),o.jsx("div",{children:o.jsx(u,{items:[{key:1,label:"Show source",children:o.jsx(s.Suspense,{fallback:o.jsx("div",{children:"Loading source..."}),children:o.jsx(F,{language:"tsx",style:r.darkMode?d:f,showLineNumbers:!0,children:`
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
`})})}]})})]});export{W as Pagea3557fa3e17046e5b33eca3940b30828,W as default};
