import{r as i,j as e,D as g}from"./index-61817db7.js";import{S as o,a as n,T as u,P as d,C as m,d as y}from"./docco-c83115a4.js";import{I as f}from"./index-37459ce3.js";import"./EyeOutlined-314614a5.js";import"./SearchOutlined-109e4278.js";const{Title:v}=u,{TextArea:T}=f,j=()=>{const[a,r]=i.useState(""),[c,h]=i.useState(""),x=i.useCallback(l=>{r(l.target.value);const p=/(?:([a-zA-Z_]+)\s?=\s?{([а-яА-Яa-zA-Z0-9~'`"!?%@#$№^&*|[\]\\/_\-+,.:;<>=()\s\n{}]*?)}(?:\s|\/?>\s?[^{])(\/\/.*)?)|(?:\s([a-zA-Z_]+)(?:\s|\/?>\s?[^{])(\/\/.*)?[^=])/gim;let s="",t;for(;t=p.exec(l.target.value);)t[1]&&t[2]?(s=s+`
    ${t[1]}: ${t[2]},`,t[3]&&(s=s+" "+t[3])):t[4]&&(s=s+`
    ${t[4]}: true,`,t[5]&&(s=s+" "+t[5]));h("{"+s+`
}`)},[]);return e.jsxs("div",{children:[e.jsx(v,{level:3,children:"Преобразование пропсов React компонента в объект"}),e.jsxs("div",{style:{display:"flex",flexDirection:"row",minHeight:"500px",maxWidth:"1600px"},children:[e.jsxs("div",{style:{flexGrow:1,flexShrink:1,width:"50%"},children:[e.jsx("p",{children:"Вставьте код компонента React"}),e.jsx(T,{style:{width:"100%",height:"100%"},onChange:x,value:a})]}),e.jsxs("div",{style:{flexGrow:1,flexShrink:1,width:"50%"},children:[e.jsx("p",{children:"Результат"}),e.jsx(o,{language:"javascript",style:n,showLineNumbers:!0,children:c})]})]})]})},C=a=>{const r=`
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
`;return e.jsxs(d,{children:[e.jsx("div",{children:e.jsx(j,{})}),e.jsx(g,{}),e.jsx("div",{children:e.jsx(m,{items:[{key:1,label:"Show source",children:e.jsx(o,{language:"javascript",style:a.darkMode?y:n,showLineNumbers:!0,children:r})}]})})]})};export{C as Pagea6e0c7fb66304030bb71cd4bc78914cd,C as default};
