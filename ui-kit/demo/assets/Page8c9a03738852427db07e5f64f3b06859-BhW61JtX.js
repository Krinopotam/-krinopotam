const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-BL7bdWBR.js","assets/default-highlight-Dl6tLCjN.js","assets/index-1vveH9ac.js"])))=>i.map(i=>d[i]);
import{j as t,r as o,_ as r,D as s}from"./index-1vveH9ac.js";import{a as i}from"./mergeButtons-DTGr5PDV.js";import{P as n,C as l,d,c as a}from"./darcula-DpQ7T8l_.js";const c=()=>{const e=u();return t.jsxs(t.Fragment,{children:[t.jsx("h1",{children:"Example of a simple buttons row"}),t.jsx("div",{style:{maxWidth:"900px",border:"1px solid grey",padding:"10px"},children:t.jsx(i,{buttons:e,styles:{leftBlockStyle:{border:"1px dashed grey"},centerBlockStyle:{border:"1px dashed grey"},rightBlockStyle:{border:"1px dashed grey"}}})})]})},u=()=>({buttonLeft:{type:"button",color:"primary",variant:"solid",title:"Left",position:"left",onClick:()=>alert("Button is clicked")},buttonCenter:{type:"button",title:"Center",position:"center",onClick:()=>alert("Button is clicked")},buttonRight:{type:"button",title:"Right",position:"right",onClick:()=>alert("Button is clicked")}}),p=o.lazy(()=>r(()=>import("./index-BL7bdWBR.js").then(e=>e.ds),__vite__mapDeps([0,1,2])).then(e=>({default:e.Prism}))),m=e=>t.jsxs(n,{children:[t.jsx("div",{children:t.jsx(c,{})}),t.jsx(s,{}),t.jsx("div",{children:t.jsx(l,{items:[{key:1,label:"Show source",children:t.jsx(o.Suspense,{fallback:t.jsx("div",{children:"Loading source..."}),children:t.jsx(p,{language:"tsx",style:e.darkMode?d:a,showLineNumbers:!0,children:`
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
`})})}]})})]});export{m as Page8c9a03738852427db07e5f64f3b06859,m as default};
