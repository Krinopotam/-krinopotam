const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-BL7bdWBR.js","assets/default-highlight-Dl6tLCjN.js","assets/index-1vveH9ac.js"])))=>i.map(i=>d[i]);
import{r as o,j as t,_ as i,D as r}from"./index-1vveH9ac.js";import{B as s,a as l}from"./mergeButtons-DTGr5PDV.js";import{P as u,C as c,d,c as a}from"./darcula-DpQ7T8l_.js";const p=()=>{const e=o.useRef(null),n=b();return t.jsxs(t.Fragment,{children:[t.jsx("h1",{children:"Example of button selection by arrows keys"}),t.jsx("p",{children:"Buttons row must be wrapped by ButtonsRowWrapper"}),t.jsx("p",{children:"Disabled buttons, links, dividers are not selectable"}),t.jsx("div",{style:{maxWidth:"900px",border:"1px solid grey",padding:"10px"},children:t.jsx(s,{ref:e,children:t.jsx(l,{buttons:n,arrowsSelection:!0,styles:{leftBlockStyle:{border:"1px dashed grey"},centerBlockStyle:{border:"1px dashed grey"},rightBlockStyle:{border:"1px dashed grey"}}})})})]})},b=()=>({buttonLeft1:{type:"button",title:"button",active:!0,position:"left",onClick:()=>alert("Button is clicked")},buttonLeft2:{type:"link",title:"link",position:"left",onClick:()=>alert("Button is clicked")},buttonLeft3:{type:"button",title:"disabled",disabled:!0,position:"left",onClick:()=>alert("Button is clicked")},buttonLeft4:{type:"button",title:"button",position:"left",onClick:()=>alert("Button is clicked")},buttonCenter1:{type:"button",title:"button",position:"center",onClick:()=>alert("Button is clicked")},buttonCenter2:{type:"button",title:"button",position:"center",onClick:()=>alert("Button is clicked")},buttonRight:{type:"button",title:"button",position:"right",onClick:()=>alert("Button is clicked")}}),k=o.lazy(()=>i(()=>import("./index-BL7bdWBR.js").then(e=>e.ds),__vite__mapDeps([0,1,2])).then(e=>({default:e.Prism}))),B=e=>t.jsxs(u,{children:[t.jsx("div",{children:t.jsx(p,{})}),t.jsx(r,{}),t.jsx("div",{children:t.jsx(c,{items:[{key:1,label:"Show source",children:t.jsx(o.Suspense,{fallback:t.jsx("div",{children:"Loading source..."}),children:t.jsx(k,{language:"tsx",style:e.darkMode?d:a,showLineNumbers:!0,children:`
import React, {useRef} from 'react';
import {ButtonsRow, ButtonsRowWrapper, IFormButtons} from @krinopotam/ui-kit/buttonsRow';
export const Example = (): React.JSX.Element => {
    const ref = useRef<HTMLDivElement>(null);
    const buttons = useButtons();
    return (
        <>
            <div style={{maxWidth: '900px', border: '1px solid grey', padding: '10px'}}>
                <ButtonsRowWrapper ref={ref}>
                    <ButtonsRow
                        buttons={buttons}
                        arrowsSelection={true}
                        styles={{
                            leftBlockStyle: {border: '1px dashed grey'},
                            centerBlockStyle: {border: '1px dashed grey'},
                            rightBlockStyle: {border: '1px dashed grey'},
                        }}
                    />
                </ButtonsRowWrapper>
            </div>
        </>
    );
};
const useButtons = (): IFormButtons => {
    return {
        buttonLeft1: {
            type: 'button',
            title: 'button',
            active: true,
            position: 'left',
            onClick:()=>alert('Button is clicked'),
        },
        buttonLeft2: {
            type: 'link',
            title: 'link',
            position: 'left',
            onClick:()=>alert('Button is clicked'),
        },
        buttonLeft3: {
            type: 'button',
            title: 'disabled',
            disabled: true,
            position: 'left',
            onClick:()=>alert('Button is clicked'),
        },
        buttonLeft4: {
            type: 'button',
            title: 'button',
            position: 'left',
            onClick:()=>alert('Button is clicked'),
        },
        buttonCenter1: {
            type: 'button',
            title: 'button',
            position: 'center',
            onClick:()=>alert('Button is clicked'),
        },
        buttonCenter2: {
            type: 'button',
            title: 'button',
            position: 'center',
            onClick:()=>alert('Button is clicked'),
        },
        buttonRight: {
            type: 'button',
            title: 'button',
            position: 'right',
            onClick:()=>alert('Button is clicked'),
        },
    };
};
`})})}]})})]});export{B as Paged932c04819274ac893c58bfc2548f460,B as default};
