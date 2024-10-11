const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CGS66BNA.js","assets/default-highlight-CcEIfVOS.js","assets/index-D5qwc_YF.js"])))=>i.map(i=>d[i]);
import{R as n,r as e,j as a,_ as i,D as r}from"./index-D5qwc_YF.js";import{m as c,B as b}from"./modal-Ba-Ua4rS.js";import{M as d}from"./modal-BT6G55W2.js";import{P as m,C as p,d as u,c as x}from"./darcula-DCElNxcl.js";const h=()=>{const[l,t]=n.useState(!1),s=e.useCallback(()=>{t(!0)},[]),o=e.useCallback(()=>{c.alert({content:"My message content example",colorType:"danger"})},[]);return a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example of a simple modal"}),a.jsx("p",{children:"By default, a modal has the ability to drag it by its title and resize it"}),a.jsxs("div",{style:{maxWidth:500},children:[a.jsx(b,{onClick:s,children:"Open form"}),a.jsxs(d,{open:l,title:"My modal title example",maskClosable:!0,onCancel:()=>t(!1),style:{minHeight:200,minWidth:300},children:[a.jsx("p",{children:"Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla "}),a.jsx("p",{children:"Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla "})]}),a.jsx(b,{onClick:o,children:"Open Message"})]})]})},k=e.lazy(()=>i(()=>import("./index-CGS66BNA.js").then(l=>l.ds),__vite__mapDeps([0,1,2])).then(l=>({default:l.Prism}))),y=l=>a.jsxs(m,{children:[a.jsx("div",{children:a.jsx(h,{})}),a.jsx(r,{}),a.jsx("div",{children:a.jsx(p,{items:[{key:1,label:"Show source",children:a.jsx(e.Suspense,{fallback:a.jsx("div",{children:"Loading source..."}),children:a.jsx(k,{language:"tsx",style:l.darkMode?u:x,showLineNumbers:!0,children:`
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
`})})}]})})]});export{y as Page65d032954d814e8699d84fb6b266b386,y as default};
