const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DY4jbcst.js","assets/default-highlight-Dn6Zkl0a.js","assets/index-CtAjfk3U.js"])))=>i.map(i=>d[i]);
import{r as i,j as o,D as e,_ as s}from"./index-CtAjfk3U.js";import{b as a}from"./buttonsRow-DIWV9y5m.js";import{D as p}from"./dFormModal-DBrO8yV5.js";import{u as l}from"./complex-DSxGzYH5.js";import{F as n}from"./buttonsProps-TJQ2MYKB.js";import{P as c,C as d}from"./pageLayout-BYJr8qhp.js";import{d as u,c as f}from"./darcula-BqMdvqtY.js";import"./isArray-Dq3mFmoY.js";import"./messageBox-BEJz6LZv.js";import"./index-CQ36vsgA.js";import"./modal-CqlI0vXJ.js";import"./inputField-i3gDy1o8.js";import"./baseField-CLOOMrMa.js";import"./index-tEAOawB8.js";import"./SearchOutlined-BPRhDdUX.js";import"./inlineGroupField-B-kKho5M.js";import"./tabsField-1LK1nVmL.js";import"./index-CMA59ydq.js";import"./PlusOutlined-CjmZvIFI.js";import"./tabulatorGridField-BMb3oB4p.js";import"./tabulatorGrid-Bes3Jt16.js";import"./defaultButtonsProps-BFWSm065.js";import"./index-C2aIs9ND.js";import"./tabulatorData-DSy7h6X7.js";import"./dateTimeField-ToDBlyGl.js";import"./useIcons-BRnDxCLJ.js";import"./switchField-Bm9sKCKt.js";import"./textAreaField-D8MGn02C.js";import"./index-BypK2dcJ.js";import"./selectField-CcZFqXQc.js";import"./useShowArrow-aGotVQ22.js";import"./dividerField-BhGG_biZ.js";const t={},h=()=>{const r=l(!1,!0),m=i.useCallback(()=>{t.open("create")},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Example of a complex modal form (vertical layout)"}),o.jsx("p",{children:"By default, a modal form has the ability to drag it by its title and resize it"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(a,{onClick:m,children:"Open form"}),o.jsx(p,{...r,height:550,width:600,apiRef:t,buttons:n(t)})]})]})},x=i.lazy(()=>s(()=>import("./index-DY4jbcst.js").then(r=>r.dw),__vite__mapDeps([0,1,2])).then(r=>({default:r.Prism}))),Q=r=>o.jsxs(c,{children:[o.jsx(h,{}),o.jsx(e,{}),o.jsx("div",{children:o.jsx(d,{items:[{key:1,label:"Show source",children:o.jsx(i.Suspense,{fallback:o.jsx("div",{children:"Loading source..."}),children:o.jsx(x,{language:"tsx",style:r.darkMode?u:f,showLineNumbers:!0,children:`
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
`})})}]})})]});export{Q as Page409b6f48daa346e885b873fd0cf8a17d,Q as default};
