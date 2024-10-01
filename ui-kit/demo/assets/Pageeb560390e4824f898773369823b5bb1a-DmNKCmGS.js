const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-Cs1HhVBL.js","assets/default-highlight-PwdVU7L6.js","assets/index-CNGiMTrA.js"])))=>i.map(i=>d[i]);
import{r as o,j as e,_ as g,D as d}from"./index-CNGiMTrA.js";import{S as p}from"./default-highlight-PwdVU7L6.js";import{T as u}from"./index-u-jxti1R.js";import{I as x}from"./index-B9vEfmTq.js";import{P as m,C as j,d as f,c as y}from"./darcula-BjE4oQkF.js";import"./SearchOutlined-DGkPMlC6.js";const b={hljs:{display:"block",overflowX:"auto",padding:"0.5em",color:"#000",background:"#f8f8ff"},"hljs-comment":{color:"#408080",fontStyle:"italic"},"hljs-quote":{color:"#408080",fontStyle:"italic"},"hljs-keyword":{color:"#954121"},"hljs-selector-tag":{color:"#954121"},"hljs-literal":{color:"#954121"},"hljs-subst":{color:"#954121"},"hljs-number":{color:"#40a070"},"hljs-string":{color:"#219161"},"hljs-doctag":{color:"#219161"},"hljs-selector-id":{color:"#19469d"},"hljs-selector-class":{color:"#19469d"},"hljs-section":{color:"#19469d"},"hljs-type":{color:"#19469d"},"hljs-params":{color:"#00f"},"hljs-title":{color:"#458",fontWeight:"bold"},"hljs-tag":{color:"#000080",fontWeight:"normal"},"hljs-name":{color:"#000080",fontWeight:"normal"},"hljs-attribute":{color:"#000080",fontWeight:"normal"},"hljs-variable":{color:"#008080"},"hljs-template-variable":{color:"#008080"},"hljs-regexp":{color:"#b68"},"hljs-link":{color:"#b68"},"hljs-symbol":{color:"#990073"},"hljs-bullet":{color:"#990073"},"hljs-built_in":{color:"#0086b3"},"hljs-builtin-name":{color:"#0086b3"},"hljs-meta":{color:"#999",fontWeight:"bold"},"hljs-deletion":{background:"#fdd"},"hljs-addition":{background:"#dfd"},"hljs-emphasis":{fontStyle:"italic"},"hljs-strong":{fontWeight:"bold"}},{Title:v}=u,{TextArea:T}=x,R=()=>{const[l,r]=o.useState(""),[i,c]=o.useState(""),n=o.useCallback(a=>{r(a.target.value);const h=/(?:([a-zA-Z_]+)\s?=\s?{([а-яА-Яa-zA-Z0-9~'`"!?%@#$№^&*|[\]\\/_\-+,.:;<>=()\s\n{}]*?)}(?:\s|\/?>\s?[^{])(\/\/.*)?)|(?:\s([a-zA-Z_]+)(?:\s|\/?>\s?[^{])(\/\/.*)?[^=])/gim;let s="",t;for(;t=h.exec(a.target.value);)t[1]&&t[2]?(s=s+`
    ${t[1]}: ${t[2]},`,t[3]&&(s=s+" "+t[3])):t[4]&&(s=s+`
    ${t[4]}: true,`,t[5]&&(s=s+" "+t[5]));c("{"+s+`
}`)},[]);return e.jsxs("div",{children:[e.jsx(v,{level:3,children:"Преобразование пропсов React компонента в объект"}),e.jsxs("div",{style:{display:"flex",flexDirection:"row",minHeight:"500px",maxWidth:"1600px"},children:[e.jsxs("div",{style:{flexGrow:1,flexShrink:1,width:"50%"},children:[e.jsx("p",{children:"Вставьте код компонента React"}),e.jsx(T,{style:{width:"100%",height:"100%"},onChange:n,value:l})]}),e.jsxs("div",{style:{flexGrow:1,flexShrink:1,width:"50%"},children:[e.jsx("p",{children:"Результат"}),e.jsx(p,{language:"javascript",style:b,showLineNumbers:!0,children:i})]})]})]})},w=o.lazy(()=>g(()=>import("./index-Cs1HhVBL.js").then(l=>l.ds),__vite__mapDeps([0,1,2])).then(l=>({default:l.Prism}))),z=l=>e.jsxs(m,{children:[e.jsx("div",{children:e.jsx(R,{})}),e.jsx(d,{}),e.jsx("div",{children:e.jsx(j,{items:[{key:1,label:"Show source",children:e.jsx(o.Suspense,{fallback:e.jsx("div",{children:"Loading source..."}),children:e.jsx(w,{language:"tsx",style:l.darkMode?f:y,showLineNumbers:!0,children:`
import React, {useCallback, useState} from 'react';
import {Input, Typography} from 'antd';
import {docco} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import SyntaxHighlighter from 'react-syntax-highlighter';
const {Title} = Typography;
const {TextArea} = Input;
export const PropsToArgs = (): React.JSX.Element => {
    const [propsText, setPropsText] = useState('');
    const [argsText, setArgsText] = useState('');
    const onChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setPropsText(e.target.value);
        // noinspection RegExpUnnecessaryNonCapturingGroup
        const pattern =
            /(?:([a-zA-Z_]+)s?=s?{([а-яА-Яa-zA-Z0-9~'\`"!?%@#$№^&*|[]\\/_-+,.:;<>=()s
{}]*?)}(?:s|/?>s?[^{])(//.*)?)|(?:s([a-zA-Z_]+)(?:s|/?>s?[^{])(//.*)?[^=])/gim;
        //const pattern = /(?:([a-zA-Z_]+)s?=s?{([а-яА-Яa-zA-Z0-9~'\`"!?%@#$№^&*|[]\\/_-+,.:;<>=()s
{}]*?)}(?:s|/?>s?[^{]))|(?:s([a-zA-Z_]+)(?:s|/?>s?[^{])[^=])/gim;
        let argsResult = '';
        let match: RegExpExecArray | null;
        while ((match = pattern.exec(e.target.value))) {
            if (match[1] && match[2]) {
                //usual prop
                argsResult = argsResult + \`
    \${match[1]}: \${match[2]},\`;
                if (match[3]) argsResult = argsResult + ' ' + match[3]; //comment
            } else if (match[4]) {
                //simple boolean prop without value
                argsResult = argsResult + \`
    \${match[4]}: true,\`;
                if (match[5]) argsResult = argsResult + ' ' + match[5]; //comment
            }
        }
        setArgsText('{' + argsResult + '
}');
    }, []);
    return (
        <div>
            <Title level={3}>Преобразование пропсов React компонента в объект</Title>
            <div style={{display: 'flex', flexDirection: 'row', minHeight: '500px', maxWidth: '1600px'}}>
                <div style={{flexGrow: 1, flexShrink: 1, width: '50%'}}>
                    <p>Вставьте код компонента React</p>
                    <TextArea style={{width: '100%', height: '100%'}} onChange={onChange} value={propsText} />
                </div>
                <div style={{flexGrow: 1, flexShrink: 1, width: '50%'}}>
                    <p>Результат</p>
                    <SyntaxHighlighter language="javascript" style={docco} showLineNumbers={true}>
                        {argsText}
                    </SyntaxHighlighter>
                </div>
            </div>
        </div>
    );
};
`})})}]})})]});export{z as Pageeb560390e4824f898773369823b5bb1a,z as default};
