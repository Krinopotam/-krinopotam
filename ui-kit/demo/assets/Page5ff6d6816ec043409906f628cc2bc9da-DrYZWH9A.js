const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-PpfmoLrq.js","assets/default-highlight-CWL5sYcU.js","assets/index-DLyGJszd.js"])))=>i.map(i=>d[i]);
import{r as i,j as o,_ as e,D as s}from"./index-DLyGJszd.js";import{b as a}from"./mergeButtons-OmCcH4N9.js";import{D as p}from"./dFormModal-L6NStncr.js";import{u as l}from"./complex-Dy33shry.js";import{F as n}from"./buttonsProps-CVwH8epV.js";import{P as c,C as d,d as u,c as f}from"./darcula-BfEmJZ6D.js";import"./dForm-8o49JMOI.js";import"./modal-CjmvIDqE.js";import"./index-CGhTEYKp.js";import"./modal-BEhuKh3S.js";import"./inputField-CrUAS0Ct.js";import"./index-DlQkoOxi.js";import"./SearchOutlined-B4yj2tsd.js";import"./tabsField-dL5aqlNH.js";import"./index-DSL2xdJU.js";import"./tabulatorGridField-Ca2SLFyR.js";import"./tabulatorGrid-rDkNf4Ba.js";import"./defaultButtonsProps-D0FGE1rH.js";import"./index-BGgfnEtT.js";import"./tabulatorData-8UvrI1Ir.js";import"./dateTimeField-Bt5Ip1z5.js";import"./useIcons-BA3OUTWw.js";import"./switchField-B4PYLo7t.js";import"./textAreaField-C6YEyxij.js";import"./selectField-DDmBvP2c.js";import"./useShowArrow-QhSRKkiR.js";const t={},h=()=>{const r=l(!1,!0),m=i.useCallback(()=>{t.open("create")},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Example of a complex modal form (vertical layout)"}),o.jsx("p",{children:"By default, a modal form has the ability to drag it by its title and resize it"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(a,{onClick:m,children:"Open form"}),o.jsx(p,{...r,height:550,width:600,apiRef:t,buttons:n(t)})]})]})},x=i.lazy(()=>e(()=>import("./index-PpfmoLrq.js").then(r=>r.ds),__vite__mapDeps([0,1,2])).then(r=>({default:r.Prism}))),T=r=>o.jsxs(c,{children:[o.jsx("div",{children:o.jsx(h,{})}),o.jsx(s,{}),o.jsx("div",{children:o.jsx(d,{items:[{key:1,label:"Show source",children:o.jsx(i.Suspense,{fallback:o.jsx("div",{children:"Loading source..."}),children:o.jsx(x,{language:"tsx",style:r.darkMode?u:f,showLineNumbers:!0,children:`
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
`})})}]})})]});export{T as Page5ff6d6816ec043409906f628cc2bc9da,T as default};
