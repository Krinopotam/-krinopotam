const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-PpfmoLrq.js","assets/default-highlight-CWL5sYcU.js","assets/index-DLyGJszd.js"])))=>i.map(i=>d[i]);
import{R as n,r as e,j as a,_ as i,D as r}from"./index-DLyGJszd.js";import{b}from"./mergeButtons-OmCcH4N9.js";import{M as c}from"./modal-BEhuKh3S.js";import{m}from"./modal-CjmvIDqE.js";import{P as d,C as p,d as u,c as x}from"./darcula-BfEmJZ6D.js";const h=()=>{const[l,t]=n.useState(!1),s=e.useCallback(()=>{t(!0)},[]),o=e.useCallback(()=>{m.alert({content:"My message content example",colorType:"danger"})},[]);return a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example of a simple modal"}),a.jsx("p",{children:"By default, a modal has the ability to drag it by its title and resize it"}),a.jsxs("div",{style:{maxWidth:500},children:[a.jsx(b,{onClick:s,children:"Open form"}),a.jsxs(c,{open:l,title:"My modal title example",maskClosable:!0,onCancel:()=>t(!1),style:{minHeight:200,minWidth:300},children:[a.jsx("p",{children:"Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla "}),a.jsx("p",{children:"Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla "})]}),a.jsx(b,{onClick:o,children:"Open Message"})]})]})},k=e.lazy(()=>i(()=>import("./index-PpfmoLrq.js").then(l=>l.ds),__vite__mapDeps([0,1,2])).then(l=>({default:l.Prism}))),M=l=>a.jsxs(d,{children:[a.jsx("div",{children:a.jsx(h,{})}),a.jsx(r,{}),a.jsx("div",{children:a.jsx(p,{items:[{key:1,label:"Show source",children:a.jsx(e.Suspense,{fallback:a.jsx("div",{children:"Loading source..."}),children:a.jsx(k,{language:"tsx",style:l.darkMode?u:x,showLineNumbers:!0,children:`
import React, {useCallback} from 'react';
import {Button} from @krinopotam/ui-kit/button';
import {Modal} from @krinopotam/ui-kit/modal";
import {MessageBox} from @krinopotam/ui-kit/messageBox";
export const Simple = (): React.JSX.Element => {
    const [open, setOpen] = React.useState(false);
    const onClick = useCallback(() => {
        setOpen(true)
    }, []);
    const onMessageClick = useCallback(() => {
        MessageBox.alert({content: 'My message content example', colorType: 'danger'});
    }, [])
    return (
        <>
            <div style={{maxWidth: 500}}>
                <Button onClick={onClick}>Open form</Button>
                <Modal open={open} title={'My modal title example'} maskClosable onCancel={() => setOpen(false)} style={{minHeight: 200, minWidth: 300}}>
                    <p>Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla </p>
                    <p>Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla </p>
                </Modal>
                <Button onClick={onMessageClick}>Open Message</Button>
            </div>
        </>
    );
};
`})})}]})})]});export{M as Pagee1452221eef042e8becee9c3bbdad45a,M as default};
