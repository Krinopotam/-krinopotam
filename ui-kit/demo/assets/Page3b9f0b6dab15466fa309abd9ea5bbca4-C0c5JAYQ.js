const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CaEZq3o6.js","assets/default-highlight-Co1BbaV1.js","assets/index-CzYOWtY3.js"])))=>i.map(i=>d[i]);
import{r as i,j as o,_ as e,D as s}from"./index-CzYOWtY3.js";import{b as a}from"./buttonsRow-NOziNv-G.js";import{D as p}from"./dFormModal-6yYFB7nU.js";import{u as l}from"./complex-yD-PIaSs.js";import{F as n}from"./buttonsProps-DOMeKhty.js";import{P as c,C as d,d as u,c as f}from"./darcula-fwW_2Y8a.js";import"./dForm-oEAd0w94.js";import"./modal-BG6C0-ZR.js";import"./index-DX1MZAsy.js";import"./modal-Bv76__XP.js";import"./inputField-JsxEKsAN.js";import"./index-BQhEJFnB.js";import"./SearchOutlined-C3qLh6j9.js";import"./tabsField-D0bNtp8c.js";import"./index-Dcm2_Qro.js";import"./PlusOutlined-BAR0uPLn.js";import"./tabulatorGridField-PJ_t9CPq.js";import"./tabulatorGrid-CHQlxMIO.js";import"./defaultButtonsProps-DlxVY7Az.js";import"./index-CCx_ORm0.js";import"./tabulatorData-A6MdMGe-.js";import"./dateTimeField-DTFiZV_9.js";import"./useIcons-LdXygS9_.js";import"./switchField-D36FCIax.js";import"./textAreaField-qJgffvq9.js";import"./selectField-BAjQQr2A.js";import"./useShowArrow-uFV0qQa6.js";const t={},h=()=>{const r=l(!1,!0),m=i.useCallback(()=>{t.open("create")},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Example of a complex modal form (vertical layout)"}),o.jsx("p",{children:"By default, a modal form has the ability to drag it by its title and resize it"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(a,{onClick:m,children:"Open form"}),o.jsx(p,{...r,height:550,width:600,apiRef:t,buttons:n(t)})]})]})},x=i.lazy(()=>e(()=>import("./index-CaEZq3o6.js").then(r=>r.ds),__vite__mapDeps([0,1,2])).then(r=>({default:r.Prism}))),V=r=>o.jsxs(c,{children:[o.jsx("div",{children:o.jsx(h,{})}),o.jsx(s,{}),o.jsx("div",{children:o.jsx(d,{items:[{key:1,label:"Show source",children:o.jsx(i.Suspense,{fallback:o.jsx("div",{children:"Loading source..."}),children:o.jsx(x,{language:"tsx",style:r.darkMode?u:f,showLineNumbers:!0,children:`
import React, {useCallback} from 'react';
import {Button} from @krinopotam/ui-kit/button';
import {DFormModal, IDFormModalApi, IDFormModalProps} from @krinopotam/ui-kit/dFormModal';
import {useFormProps} from '../dForm/complex';
import {FormLayoutSwitch} from "../../common/buttonsProps";
const formApi = {} as IDFormModalApi;
export const Example = (): React.JSX.Element => {
    const formProps:IDFormModalProps = useFormProps(false, true)
    const onClick = useCallback(() => {
        formApi.open('create');
    }, []);
    return (
        <>
            <div style={{maxWidth: 500}}>
                <Button onClick={onClick}>Open form</Button>
                <DFormModal {...formProps} height={550} width={600} apiRef={formApi} buttons={FormLayoutSwitch(formApi)} />
            </div>
        </>
    );
};
`})})}]})})]});export{V as Page3b9f0b6dab15466fa309abd9ea5bbca4,V as default};
