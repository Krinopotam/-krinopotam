import{j as o}from"./useToken-a9416e4a.js";import{F as t,I as e}from"./index-b899e8ff.js";import{I as l}from"./InfoCircleOutlined-86235823.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./extends-98964cd2.js";import"./compact-item-065385a4.js";import"./index-a764d3ff.js";import"./assertThisInitialized-8802cfe2.js";import"./context-67ce65ca.js";import"./index-1ebd326d.js";import"./index-d6bd501e.js";import"./motion-98dddd30.js";import"./statusUtils-31e49fff.js";import"./SearchOutlined-cb161250.js";import"./button-34478241.js";import"./motion-3729e44c.js";import"./zoom-ad82ed8d.js";import"./row-62b547d9.js";import"./roundedArrow-1602316a.js";import"./colors-a767a02d.js";import"./QuestionCircleOutlined-4f561e0b.js";import"./ExclamationCircleFilled-3771385a.js";const m=()=>o.jsxs(t,{layout:"horizontal",children:[o.jsx(t.Item,{label:"Field A",required:!0,tooltip:"This is a required field",children:o.jsx(e,{placeholder:"input placeholder"})}),o.jsx(t.Item,{label:"Field B",tooltip:{title:"Tooltip with customize icon",icon:o.jsx(l,{})},children:o.jsx(e,{placeholder:"input placeholder"})})]}),n=m;try{antd.displayName="antd",antd.__docgenInfo={description:"",displayName:"antd",props:{}}}catch{}const N={title:"DForm/Examples/Antd",component:n,tags:["autodocs"],parameters:{docs:{source:{language:"tsx",format:!0,code:`
                    import React, { useState } from 'react';
                    import { InfoCircleOutlined } from '@ant-design/icons';
                    import { Button, Form, Input, Radio, Tag } from 'antd';
                    type RequiredMark = boolean | 'optional' | 'customize';
                    const customizeRequiredMark = (label: React.ReactNode, { required }: { required: boolean }) => (
                        <>
                            {required ? <Tag color="error">Required</Tag> : <Tag color="warning">optional</Tag>}
                            {label}
                        </>
                    );
                    const App: React.FC = () => {
                        return (
                            <Form
                                layout="horizontal"
                            >
                                <Form.Item label="Field A" required tooltip="This is a required field">
                                    <Input placeholder="input placeholder" />
                                </Form.Item>
                                <Form.Item
                                    label="Field B"
                                    tooltip={{ title: 'Tooltip with customize icon', icon: <InfoCircleOutlined /> }}
                                >
                                    <Input placeholder="input placeholder" />
                                </Form.Item>
                            </Form>
                        );
                    };
                    export default App;
                `}}}},r={args:{}};var i,a,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {}
}`,...(p=(a=r.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const k=["Playground"];export{r as Playground,k as __namedExportsOrder,N as default};
