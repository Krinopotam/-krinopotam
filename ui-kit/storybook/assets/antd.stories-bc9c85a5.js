import{j as o}from"./useToken-b19ab62a.js";import{F as t,I as e}from"./index-89674408.js";import{I as l}from"./InfoCircleOutlined-b0bd8909.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./extends-98964cd2.js";import"./compact-item-153ccf6f.js";import"./index-a764d3ff.js";import"./assertThisInitialized-8802cfe2.js";import"./context-5a13208d.js";import"./index-26e00ff7.js";import"./index-6ed6bb17.js";import"./motion-a9f81d2c.js";import"./statusUtils-fe2ccc25.js";import"./SearchOutlined-2078d1e8.js";import"./button-3e1cd756.js";import"./motion-3729e44c.js";import"./zoom-faeb00d0.js";import"./row-1394a33e.js";import"./roundedArrow-d75250bf.js";import"./colors-91786050.js";import"./QuestionCircleOutlined-41527efc.js";import"./ExclamationCircleFilled-cf151277.js";const m=()=>o.jsxs(t,{layout:"horizontal",children:[o.jsx(t.Item,{label:"Field A",required:!0,tooltip:"This is a required field",children:o.jsx(e,{placeholder:"input placeholder"})}),o.jsx(t.Item,{label:"Field B",tooltip:{title:"Tooltip with customize icon",icon:o.jsx(l,{})},children:o.jsx(e,{placeholder:"input placeholder"})})]}),n=m;try{antd.displayName="antd",antd.__docgenInfo={description:"",displayName:"antd",props:{}}}catch{}const N={title:"DForm/Examples/Antd",component:n,tags:["autodocs"],parameters:{docs:{source:{language:"tsx",format:!0,code:`
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
