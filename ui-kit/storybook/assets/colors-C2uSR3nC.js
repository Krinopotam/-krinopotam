import{_ as t}from"./useToken-5hoSZr8q.js";const n=["blue","purple","cyan","green","magenta","pink","red","orange","yellow","volcano","geekblue","lime","gold"];function C(e,s){return n.reduce((o,r)=>{const u=e[`${r}1`],a=e[`${r}3`],i=e[`${r}6`],l=e[`${r}7`];return Object.assign(Object.assign({},o),s(r,{lightColor:u,lightBorderColor:a,darkColor:i,textColor:l}))},{})}const c=n.map(e=>`${e}-inverse`),g=["success","processing","error","default","warning"];function m(e){return(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0)?[].concat(t(c),t(n)).includes(e):n.includes(e)}function p(e){return g.includes(e)}export{p as a,C as g,m as i};