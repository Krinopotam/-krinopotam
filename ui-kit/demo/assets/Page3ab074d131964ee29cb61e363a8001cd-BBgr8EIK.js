const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CyxzPzPK.js","assets/default-highlight-BA4pzhEA.js","assets/index-Cpuh8Ebd.js"])))=>i.map(i=>d[i]);
import{r as i,j as o,_ as m,D as s}from"./index-Cpuh8Ebd.js";import{b as a}from"./buttonsRow-MpDC2SN8.js";import{D as p}from"./dFormModal-iIvnEeWS.js";import{u as l}from"./complex-DjvRrqsd.js";import{F as n}from"./buttonsProps-CFHTGBOJ.js";import{P as c,C as d,d as u,c as f}from"./darcula-hcLbMwDB.js";import"./dForm-t1Ccos62.js";import"./modal-g5li7x1J.js";import"./index-DNdv76Wr.js";import"./modal-DJlUd0AK.js";import"./inputField-DrHpZyP5.js";import"./index-B7DtBnw9.js";import"./SearchOutlined-mv_WcC67.js";import"./tabsField-CtzcurYq.js";import"./index-_1IkvjzU.js";import"./PlusOutlined-BTCZ_JD0.js";import"./tabulatorGridField-1FlYJ5im.js";import"./tabulatorGrid-Da6sMqw5.js";import"./defaultButtonsProps-D12Yt--i.js";import"./index-D9n8SM2Y.js";import"./tabulatorData-BJFebvAp.js";import"./dateTimeField-DMD1m-to.js";import"./useIcons-BgIqUolS.js";import"./switchField-DJULnj6-.js";import"./textAreaField-JPwCrcs0.js";import"./selectField-E6buzf6g.js";import"./useShowArrow-CyhrQEeE.js";const t={},h=()=>{const r=l(!1,!0),e=i.useCallback(()=>{t.open("create")},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Example of a complex modal form (vertical layout)"}),o.jsx("p",{children:"By default, a modal form has the ability to drag it by its title and resize it"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(a,{onClick:e,children:"Open form"}),o.jsx(p,{...r,height:550,width:600,apiRef:t,buttons:n(t)})]})]})},x=i.lazy(()=>m(()=>import("./index-CyxzPzPK.js").then(r=>r.ds),__vite__mapDeps([0,1,2])).then(r=>({default:r.Prism}))),V=r=>o.jsxs(c,{children:[o.jsx("div",{children:o.jsx(h,{})}),o.jsx(s,{}),o.jsx("div",{children:o.jsx(d,{items:[{key:1,label:"Show source",children:o.jsx(i.Suspense,{fallback:o.jsx("div",{children:"Loading source..."}),children:o.jsx(x,{language:"tsx",style:r.darkMode?u:f,showLineNumbers:!0,children:`
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
`})})}]})})]});export{V as Page3ab074d131964ee29cb61e363a8001cd,V as default};
