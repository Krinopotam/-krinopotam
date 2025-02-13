const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DY4jbcst.js","assets/default-highlight-Dn6Zkl0a.js","assets/index-CtAjfk3U.js"])))=>i.map(i=>d[i]);
import{j as t,D as p,r as i,_ as b}from"./index-CtAjfk3U.js";import{a as n}from"./buttonsRow-DIWV9y5m.js";import{P as d,C as c}from"./pageLayout-BYJr8qhp.js";import{d as x,c as m}from"./darcula-BqMdvqtY.js";const y=()=>{const o=s("default"),e=s("primary"),r=s("danger"),u=s("info"),a=s("warning"),l=s("success");return t.jsxs(t.Fragment,{children:[t.jsx("h1",{children:"Example of a buttons variants"}),t.jsxs("div",{style:{maxWidth:"900px",border:"1px solid grey",padding:"10px"},children:[t.jsx(n,{buttons:o,style:{margin:"10px"}}),t.jsx(n,{buttons:e,style:{margin:"10px"}}),t.jsx(n,{buttons:r,style:{margin:"10px"}}),t.jsx(n,{buttons:u,style:{margin:"10px"}}),t.jsx(n,{buttons:a,style:{margin:"10px"}}),t.jsx(n,{buttons:l,style:{margin:"10px"}})]})]})},s=o=>({button1:{type:"button",color:o,variant:"solid",title:"solid",position:"left"},button2:{type:"button",color:o,variant:"outlined",title:"outlined",position:"left"},button3:{type:"button",color:o,variant:"dashed",title:"dashed",position:"left"},button4:{type:"button",color:o,variant:"filled",title:"filled",position:"left"},button5:{type:"button",color:o,variant:"link",title:"link",position:"left"},button6:{type:"button",color:o,variant:"text",title:"text",position:"left"}}),f=i.lazy(()=>b(()=>import("./index-DY4jbcst.js").then(o=>o.dw),__vite__mapDeps([0,1,2])).then(o=>({default:o.Prism}))),j=o=>t.jsxs(d,{children:[t.jsx(y,{}),t.jsx(p,{}),t.jsx("div",{children:t.jsx(c,{items:[{key:1,label:"Show source",children:t.jsx(i.Suspense,{fallback:t.jsx("div",{children:"Loading source..."}),children:t.jsx(f,{language:"tsx",style:o.darkMode?x:m,showLineNumbers:!0,children:`
import React from 'react';
import {ButtonsRow, IFormButtons} from @krinopotam/ui-kit/buttonsRow';
import {IButtonColorType} from @krinopotam/ui-kit/button";
export const Example = (): React.JSX.Element => {
    const buttonsDefault = useButtons('default');
    const buttonsPrimary = useButtons('primary');
    const buttonsDanger = useButtons('danger');
    const buttonsInfo = useButtons('info');
    const buttonsWarning = useButtons('warning');
    const buttonsSuccess = useButtons('success');
    return (
        <>
            <div style={{maxWidth: '900px', border: '1px solid grey', padding: '10px'}}>
                <ButtonsRow buttons={buttonsDefault} style={{margin: '10px'}}/>
                <ButtonsRow buttons={buttonsPrimary} style={{margin: '10px'}} />
                <ButtonsRow buttons={buttonsDanger} style={{margin: '10px'}} />
                <ButtonsRow buttons={buttonsInfo} style={{margin: '10px'}} />
                <ButtonsRow buttons={buttonsWarning} style={{margin: '10px'}} />
                <ButtonsRow buttons={buttonsSuccess} style={{margin: '10px'}} />
            </div>
        </>
    );
};
const useButtons = (color:IButtonColorType): IFormButtons => {
    return {
        button1: {
            type: 'button',
            color: color,
            variant: 'solid',
            title: 'solid',
            position: 'left',
        },
        button2: {
            type: 'button',
            color: color,
            variant: 'outlined',
            title: 'outlined',
            position: 'left',
        },
        button3: {
            type: 'button',
            color: color,
            variant: 'dashed',
            title: 'dashed',
            position: 'left',
        },
        button4: {
            type: 'button',
            color: color,
            variant: 'filled',
            title: 'filled',
            position: 'left',
        },
        button5: {
            type: 'button',
            color: color,
            variant: 'link',
            title: 'link',
            position: 'left',
        },
        button6: {
            type: 'button',
            color: color,
            variant: 'text',
            title: 'text',
            position: 'left',
        },
    };
};
`})})}]})})]});export{j as Page7e10647bf0f34dcbb4f179a040674532,j as default};
