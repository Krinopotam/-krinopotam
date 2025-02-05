const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DJhjoKXt.js","assets/default-highlight-1wZDEzJ6.js","assets/index-B5poLpDm.js"])))=>i.map(i=>d[i]);
import{r as e,j as o,D as i,_ as m}from"./index-B5poLpDm.js";import{b as a}from"./buttonsRow-aX3TQ5bu.js";import{D as n}from"./dFormModal-C_QqbNS_.js";import{F as p}from"./buttonsProps-AMpdU5hQ.js";import{u as l}from"./inlineFields-DctGYouX.js";import{P as c,C as d,d as u,c as f}from"./darcula-DszBWugp.js";import"./dForm-vrGhQ6Lh.js";import"./messageBox-1o2XjDyt.js";import"./index-AMqWlYeY.js";import"./modal-tHBgt86o.js";import"./inputField-Bxibjdcf.js";import"./index-ldRzAboz.js";import"./SearchOutlined-D8SaSDI5.js";import"./defaultButtonsProps-DtqWhfDr.js";import"./PlusOutlined-Bg-hNKo-.js";import"./passwordField-DdAaiKn-.js";import"./numberField-QPb425aV.js";import"./treeSelectField-B_h9TBfM.js";import"./useApiGetGroupsOnly-5VEr3Syr.js";import"./index-BVhKSSo6.js";import"./useShowArrow-Dw-Bhs1H.js";import"./useIcons-BKmiU9RQ.js";import"./selectField-qU98sbBL.js";const h=()=>{const r=e.useCallback(()=>{t.open("create")},[]),s=x();return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Form example with inline fields"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(a,{onClick:r,children:"Open form"}),o.jsx(n,{...s})]})]})},t={},x=()=>({...l(!1),apiRef:t,confirmChanges:!0,arrowsButtonsSelection:!0,buttons:p(t),onCancel:()=>{console.log("cancel")}}),F=e.lazy(()=>m(()=>import("./index-DJhjoKXt.js").then(r=>r.dw),__vite__mapDeps([0,1,2])).then(r=>({default:r.Prism}))),J=r=>o.jsxs(c,{children:[o.jsx("div",{children:o.jsx(h,{})}),o.jsx(i,{}),o.jsx("div",{children:o.jsx(d,{items:[{key:1,label:"Show source",children:o.jsx(e.Suspense,{fallback:o.jsx("div",{children:"Loading source..."}),children:o.jsx(F,{language:"tsx",style:r.darkMode?u:f,showLineNumbers:!0,children:`
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
`})})}]})})]});export{J as Page4d9173616eed4cfa8a596ec4da90ecec,J as default};
