const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DJhjoKXt.js","assets/default-highlight-1wZDEzJ6.js","assets/index-B5poLpDm.js"])))=>i.map(i=>d[i]);
import{r as i,j as o,D as e,_ as s}from"./index-B5poLpDm.js";import{b as a}from"./buttonsRow-aX3TQ5bu.js";import{D as p}from"./dFormModal-C_QqbNS_.js";import{u as l}from"./complex-GNgEgduR.js";import{F as n}from"./buttonsProps-AMpdU5hQ.js";import{P as c,C as d,d as u,c as f}from"./darcula-DszBWugp.js";import"./dForm-vrGhQ6Lh.js";import"./messageBox-1o2XjDyt.js";import"./index-AMqWlYeY.js";import"./modal-tHBgt86o.js";import"./inputField-Bxibjdcf.js";import"./index-ldRzAboz.js";import"./SearchOutlined-D8SaSDI5.js";import"./tabsField-D3YqzPTF.js";import"./index-CDQLj6wX.js";import"./PlusOutlined-Bg-hNKo-.js";import"./tabulatorGridField-CReHSRkk.js";import"./tabulatorGrid-igE2XdiX.js";import"./defaultButtonsProps-DtqWhfDr.js";import"./index--2ky6TFp.js";import"./tabulatorData-BmpfO34x.js";import"./dateTimeField-Cbahq53r.js";import"./useIcons-BKmiU9RQ.js";import"./switchField-DcJ5hpKo.js";import"./textAreaField-BNi7HnSs.js";import"./index-BVhKSSo6.js";import"./selectField-qU98sbBL.js";import"./useShowArrow-Dw-Bhs1H.js";const t={},h=()=>{const r=l(!1,!0),m=i.useCallback(()=>{t.open("create")},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Example of a complex modal form (vertical layout)"}),o.jsx("p",{children:"By default, a modal form has the ability to drag it by its title and resize it"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(a,{onClick:m,children:"Open form"}),o.jsx(p,{...r,height:550,width:600,apiRef:t,buttons:n(t)})]})]})},x=i.lazy(()=>s(()=>import("./index-DJhjoKXt.js").then(r=>r.dw),__vite__mapDeps([0,1,2])).then(r=>({default:r.Prism}))),X=r=>o.jsxs(c,{children:[o.jsx("div",{children:o.jsx(h,{})}),o.jsx(e,{}),o.jsx("div",{children:o.jsx(d,{items:[{key:1,label:"Show source",children:o.jsx(i.Suspense,{fallback:o.jsx("div",{children:"Loading source..."}),children:o.jsx(x,{language:"tsx",style:r.darkMode?u:f,showLineNumbers:!0,children:`
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
`})})}]})})]});export{X as Pagef6c96c339e65451c9a1570c598ab65d3,X as default};
