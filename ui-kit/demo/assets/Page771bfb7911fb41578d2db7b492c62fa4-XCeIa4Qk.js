const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DY4jbcst.js","assets/default-highlight-Dn6Zkl0a.js","assets/index-CtAjfk3U.js"])))=>i.map(i=>d[i]);
import{j as t,D as l,r as i,_ as s}from"./index-CtAjfk3U.js";import{a as o}from"./buttonsRow-DIWV9y5m.js";import{P as u,C as n}from"./pageLayout-BYJr8qhp.js";import{d as r,c as m}from"./darcula-BqMdvqtY.js";const c=()=>{const e=p();return t.jsxs(t.Fragment,{children:[t.jsx("h1",{children:"Example of a submenu buttons row"}),t.jsx("div",{style:{maxWidth:"900px",border:"1px solid grey",padding:"10px"},children:t.jsx(o,{buttons:e})})]})},p=()=>({menu1:{type:"button",title:"Clickable Menu",position:"left",variant:"filled",onClick:()=>alert("Button is clicked"),children:{sub1:{title:"Item 1"},sub2:{title:"Item 2"}}},menu2:{type:"button",title:"Menu with groups",position:"left",color:"success",children:{group1:{type:"group",title:"group 1",children:{sub1:{title:"Item 1"},sub2:{title:"Item 2"}}},group2:{type:"group",title:"group 2",children:{sub1:{title:"Item 1"},sub2:{title:"Item 2"}}}}},menu3:{type:"button",title:"Menu with submenu",position:"left",color:"danger",children:{sub1:{title:"Item 1",children:{sub1:{title:"Item 1"},sub2:{title:"Item 2"}}},sub2:{title:"Item 2",children:{sub1:{title:"Item 1"},sub2:{title:"Item 2"}}}}},menu4:{type:"link",title:"Clickable link",position:"left",children:{sub1:{title:"Item 1"},sub2:{title:"Item 2"}},href:"http://www.test.ru"}}),d=i.lazy(()=>s(()=>import("./index-DY4jbcst.js").then(e=>e.dw),__vite__mapDeps([0,1,2])).then(e=>({default:e.Prism}))),g=e=>t.jsxs(u,{children:[t.jsx(c,{}),t.jsx(l,{}),t.jsx("div",{children:t.jsx(n,{items:[{key:1,label:"Show source",children:t.jsx(i.Suspense,{fallback:t.jsx("div",{children:"Loading source..."}),children:t.jsx(d,{language:"tsx",style:e.darkMode?r:m,showLineNumbers:!0,children:`
import React from 'react';
import {ButtonsRow, IFormButtons} from @krinopotam/ui-kit/buttonsRow';
export const Example = (): React.JSX.Element => {
    const buttons = useButtons();
    return (
        <>
            <div style={{maxWidth: '900px', border: '1px solid grey', padding: '10px'}}>
                <ButtonsRow buttons={buttons} />
            </div>
        </>
    );
};
const useButtons = (): IFormButtons => {
    return {
        menu1: {
            type: 'button',
            title: 'Clickable Menu',
            position: 'left',
            variant:'filled',
            onClick:()=>alert('Button is clicked'),
            children: {
                sub1: {
                    title: 'Item 1',
                },
                sub2: {
                    title: 'Item 2',
                },
            },
        },
        menu2: {
            type: 'button',
            title: 'Menu with groups',
            position: 'left',
            color:'success',
            children: {
                group1: {
                    type: 'group',
                    title: 'group 1',
                    children: {
                        sub1: {
                            title: 'Item 1',
                        },
                        sub2: {
                            title: 'Item 2',
                        },
                    },
                },
                group2: {
                    type: 'group',
                    title: 'group 2',
                    children: {
                        sub1: {
                            title: 'Item 1',
                        },
                        sub2: {
                            title: 'Item 2',
                        },
                    },
                },
            },
        },
        menu3: {
            type: 'button',
            title: 'Menu with submenu',
            position: 'left',
            color:'danger',
            children: {
                sub1: {
                    title: 'Item 1',
                    children: {
                        sub1: {
                            title: 'Item 1',
                        },
                        sub2: {
                            title: 'Item 2',
                        },
                    },
                },
                sub2: {
                    title: 'Item 2',
                    children: {
                        sub1: {
                            title: 'Item 1',
                        },
                        sub2: {
                            title: 'Item 2',
                        },
                    },
                },
            },
        },
        menu4: {
            type: 'link',
            title: 'Clickable link',
            position: 'left',
            children: {
                sub1: {
                    title: 'Item 1',
                },
                sub2: {
                    title: 'Item 2',
                },
            },
            href: 'http://www.test.ru',
        },
    };
};
`})})}]})})]});export{g as Page771bfb7911fb41578d2db7b492c62fa4,g as default};
