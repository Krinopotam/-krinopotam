const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-UHTfNfHP.js","assets/default-highlight-BW2eIfdj.js","assets/index-fLDE7RV8.js"])))=>i.map(i=>d[i]);
import{r as i,j as o,_ as m,D as s}from"./index-fLDE7RV8.js";import{b as a}from"./mergeButtons-5jDhs16v.js";import{D as p}from"./dFormModal-BONKQnKH.js";import{u as l}from"./complex-xAi50ALL.js";import{F as n}from"./buttonsProps-LpFfehxM.js";import{P as c,C as d,d as u,c as f}from"./darcula-BAaai0cd.js";import"./dForm-DcZj9aOC.js";import"./modal-CJqMGIFI.js";import"./index-Dm8OxE-t.js";import"./modal-DKiW44iu.js";import"./inputField-CjWubR6e.js";import"./index-BoVgkjiJ.js";import"./SearchOutlined-bm7ljvup.js";import"./tabsField-B0v8U2YI.js";import"./index-Bk2xzZot.js";import"./tabulatorGridField-DZZlCS7S.js";import"./tabulatorGrid-BJwlOlPS.js";import"./defaultButtonsProps-BRD3xjmK.js";import"./index-CTvaTwjg.js";import"./tabulatorData-DJNiiClm.js";import"./dateTimeField-BiTVac_v.js";import"./useIcons-C467XfOT.js";import"./switchField-CD6iLdxB.js";import"./textAreaField-VgtgLb5F.js";import"./selectField-DduBBaA6.js";import"./useShowArrow-Cn6xTPHQ.js";const t={},h=()=>{const r=l(!1,!0),e=i.useCallback(()=>{t.open("create")},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Example of a complex modal form (vertical layout)"}),o.jsx("p",{children:"By default, a modal form has the ability to drag it by its title and resize it"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(a,{onClick:e,children:"Open form"}),o.jsx(p,{...r,height:550,width:600,apiRef:t,buttons:n(t)})]})]})},x=i.lazy(()=>m(()=>import("./index-UHTfNfHP.js").then(r=>r.ds),__vite__mapDeps([0,1,2])).then(r=>({default:r.Prism}))),T=r=>o.jsxs(c,{children:[o.jsx("div",{children:o.jsx(h,{})}),o.jsx(s,{}),o.jsx("div",{children:o.jsx(d,{items:[{key:1,label:"Show source",children:o.jsx(i.Suspense,{fallback:o.jsx("div",{children:"Loading source..."}),children:o.jsx(x,{language:"tsx",style:r.darkMode?u:f,showLineNumbers:!0,children:`
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
`})})}]})})]});export{T as Pagee519595122d748f29b8166013dffd3fe,T as default};
