const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-HHVvrn9L.js","assets/default-highlight-Bg-yw1Xy.js","assets/index-C4KfxKt0.js"])))=>i.map(i=>d[i]);
import{r as s,j as o,_ as i,D as m}from"./index-C4KfxKt0.js";import{B as n}from"./modal-B9kdAnYE.js";import{D as a}from"./dFormModal-NILuEzR7.js";import{F as l}from"./buttonsProps-DJ62UfWI.js";import{u as p}from"./inlineFields-BgUW2-yS.js";import{P as c,C as u,d,c as f}from"./darcula-Dn2EXRAk.js";import"./dForm-DkkmO2de.js";import"./index-kYmYzKiJ.js";import"./modal-DhSU9O67.js";import"./inputField-DP4apb2P.js";import"./index-DguPym-O.js";import"./SearchOutlined-1XjRaxWd.js";import"./defaultButtonsProps-DB_b1JyB.js";import"./passwordField-NHDAhQx4.js";import"./numberField-CdCv50rS.js";import"./treeSelectField-DQqIU8U1.js";import"./useApiGetGroupsOnly-Di3cbyaq.js";import"./useShowArrow-Bin-bzmW.js";import"./useIcons-Dh6q2bL1.js";import"./selectField-B8p9NJUs.js";const h=()=>{const r=s.useCallback(()=>{t.open("create")},[]),e=x();return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Form example with inline fields"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(n,{onClick:r,children:"Open form"}),o.jsx(a,{...e})]})]})},t={},x=()=>({...p(!1),apiRef:t,confirmChanges:!0,arrowsButtonsSelection:!0,buttons:l(t),onCancel:()=>{console.log("cancel")}}),F=s.lazy(()=>i(()=>import("./index-HHVvrn9L.js").then(r=>r.ds),__vite__mapDeps([0,1,2])).then(r=>({default:r.Prism}))),W=r=>o.jsxs(c,{children:[o.jsx("div",{children:o.jsx(h,{})}),o.jsx(m,{}),o.jsx("div",{children:o.jsx(u,{items:[{key:1,label:"Show source",children:o.jsx(s.Suspense,{fallback:o.jsx("div",{children:"Loading source..."}),children:o.jsx(F,{language:"tsx",style:r.darkMode?d:f,showLineNumbers:!0,children:`
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
`})})}]})})]});export{W as Page7d1918bb25de4e2792316c7e47c03588,W as default};
