const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CaEZq3o6.js","assets/default-highlight-Co1BbaV1.js","assets/index-CzYOWtY3.js"])))=>i.map(i=>d[i]);
import{j as t,r as i,_ as s,D as l}from"./index-CzYOWtY3.js";import{a as o}from"./buttonsRow-NOziNv-G.js";import{P as u,C as n,d as r,c}from"./darcula-fwW_2Y8a.js";const m=()=>{const e=d();return t.jsxs(t.Fragment,{children:[t.jsx("h1",{children:"Example of a submenu buttons row"}),t.jsx("div",{style:{maxWidth:"900px",border:"1px solid grey",padding:"10px"},children:t.jsx(o,{buttons:e})})]})},d=()=>({menu1:{type:"button",title:"Clickable Menu",position:"left",variant:"filled",onClick:()=>alert("Button is clicked"),children:{sub1:{title:"Item 1"},sub2:{title:"Item 2"}}},menu2:{type:"button",title:"Menu with groups",position:"left",color:"success",children:{group1:{type:"group",title:"group 1",children:{sub1:{title:"Item 1"},sub2:{title:"Item 2"}}},group2:{type:"group",title:"group 2",children:{sub1:{title:"Item 1"},sub2:{title:"Item 2"}}}}},menu3:{type:"button",title:"Menu with submenu",position:"left",color:"danger",children:{sub1:{title:"Item 1",children:{sub1:{title:"Item 1"},sub2:{title:"Item 2"}}},sub2:{title:"Item 2",children:{sub1:{title:"Item 1"},sub2:{title:"Item 2"}}}}},menu4:{type:"link",title:"Clickable link",position:"left",children:{sub1:{title:"Item 1"},sub2:{title:"Item 2"}},href:"http://www.test.ru"}}),p=i.lazy(()=>s(()=>import("./index-CaEZq3o6.js").then(e=>e.ds),__vite__mapDeps([0,1,2])).then(e=>({default:e.Prism}))),I=e=>t.jsxs(u,{children:[t.jsx("div",{children:t.jsx(m,{})}),t.jsx(l,{}),t.jsx("div",{children:t.jsx(n,{items:[{key:1,label:"Show source",children:t.jsx(i.Suspense,{fallback:t.jsx("div",{children:"Loading source..."}),children:t.jsx(p,{language:"tsx",style:e.darkMode?r:c,showLineNumbers:!0,children:`
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
`})})}]})})]});export{I as Page51b2a48106734ce8979afe6b57285a4d,I as default};
