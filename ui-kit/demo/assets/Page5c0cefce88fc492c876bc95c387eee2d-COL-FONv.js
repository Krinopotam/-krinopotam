const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DY4jbcst.js","assets/default-highlight-Dn6Zkl0a.js","assets/index-CtAjfk3U.js"])))=>i.map(i=>d[i]);
import{j as t,D as r,r as o,_ as s}from"./index-CtAjfk3U.js";import{a as i}from"./buttonsRow-DIWV9y5m.js";import{P as n,C as l}from"./pageLayout-BYJr8qhp.js";import{d as c,c as d}from"./darcula-BqMdvqtY.js";const a=()=>{const e=u();return t.jsxs(t.Fragment,{children:[t.jsx("h1",{children:"Example of a simple buttons row"}),t.jsx("div",{style:{maxWidth:"900px",border:"1px solid grey",padding:"10px"},children:t.jsx(i,{buttons:e,styles:{leftBlockStyle:{border:"1px dashed grey"},centerBlockStyle:{border:"1px dashed grey"},rightBlockStyle:{border:"1px dashed grey"}}})})]})},u=()=>({buttonLeft:{type:"button",color:"primary",variant:"solid",title:"Left",position:"left",onClick:()=>alert("Button is clicked")},buttonCenter:{type:"button",title:"Center",position:"center",onClick:()=>alert("Button is clicked")},buttonRight:{type:"button",title:"Right",position:"right",onClick:()=>alert("Button is clicked")}}),p=o.lazy(()=>s(()=>import("./index-DY4jbcst.js").then(e=>e.dw),__vite__mapDeps([0,1,2])).then(e=>({default:e.Prism}))),g=e=>t.jsxs(n,{children:[t.jsx(a,{}),t.jsx(r,{}),t.jsx("div",{children:t.jsx(l,{items:[{key:1,label:"Show source",children:t.jsx(o.Suspense,{fallback:t.jsx("div",{children:"Loading source..."}),children:t.jsx(p,{language:"tsx",style:e.darkMode?c:d,showLineNumbers:!0,children:`
import React from 'react';
import {ButtonsRow, IFormButtons} from @krinopotam/ui-kit/buttonsRow';
export const Example = (): React.JSX.Element => {
    const buttons = useButtons();
    return (
        <>
            <div style={{maxWidth: '900px', border: '1px solid grey', padding: '10px'}}>
                <ButtonsRow
                    buttons={buttons}
                    styles={{
                        leftBlockStyle: {border: '1px dashed grey'},
                        centerBlockStyle: {border: '1px dashed grey'},
                        rightBlockStyle: {border: '1px dashed grey'},
                    }}
                />
            </div>
        </>
    );
};
const useButtons = (): IFormButtons => {
    return {
        buttonLeft: {
            type: 'button',
            color: 'primary',
            variant: 'solid',
            title: 'Left',
            position: 'left',
            onClick:()=>alert('Button is clicked'),
        },
        buttonCenter: {
            type: 'button',
            title: 'Center',
            position: 'center',
            onClick:()=>alert('Button is clicked'),
        },
        buttonRight: {
            type: 'button',
            title: 'Right',
            position: 'right',
            onClick:()=>alert('Button is clicked'),
        },
    };
};
`})})}]})})]});export{g as Page5c0cefce88fc492c876bc95c387eee2d,g as default};
