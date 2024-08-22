import{R as n,r as b,j as a,D as i}from"./index-BRcPwwbH.js";import{P as r,C as c,h as m,d,a as p}from"./docco-8ZfxCt3s.js";import{m as u,B as t}from"./messageBox-Dgk4xpFW.js";import{M as x}from"./modal-BltPdufQ.js";const h=()=>{const[l,e]=n.useState(!1),s=b.useCallback(()=>{e(!0)},[]),o=b.useCallback(()=>{u.alert({content:"My message content example",colorType:"danger"})},[]);return a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example of a simple modal"}),a.jsx("p",{children:"By default, a modal has the ability to drag it by its title and resize it"}),a.jsxs("div",{style:{maxWidth:500},children:[a.jsx(t,{onClick:s,children:"Open form"}),a.jsxs(x,{open:l,title:"My modal title example",maskClosable:!0,onCancel:()=>e(!1),style:{minHeight:200,minWidth:300},children:[a.jsx("p",{children:"Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla "}),a.jsx("p",{children:"Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla "})]}),a.jsx(t,{onClick:o,children:"Open Message"})]})]})},f=l=>a.jsxs(r,{children:[a.jsx("div",{children:a.jsx(h,{})}),a.jsx(i,{}),a.jsx("div",{children:a.jsx(c,{items:[{key:1,label:"Show source",children:a.jsx(m,{language:"javascript",style:l.darkMode?d:p,showLineNumbers:!0,children:`
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
`})}]})})]});export{f as Page51709b895dae4d14a011b0b67a3c8b20,f as default};
