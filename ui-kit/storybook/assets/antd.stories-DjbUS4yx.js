import{j as o}from"./jsx-runtime-CLpGMVip.js";import{F as t}from"./index-7UV5TWEd.js";import{I as e}from"./index-CI6JNeXi.js";import{R as l}from"./InfoCircleOutlined-DifEp91c.js";import"./index-C9MQhBv9.js";import"./compact-item-DA-GXfnI.js";import"./useToken-C7r1PZCj.js";import"./index-DYSaHhaM.js";import"./index-B-Tif3g2.js";import"./index-CEaSTCJ_.js";import"./context-55JlqysY.js";import"./pickAttrs-Br7KB4bY.js";import"./useVariants-54jhFFnz.js";import"./index-CNIUd1zL.js";import"./motion-hLQ8GYzu.js";import"./row-CIeG6Ir6.js";import"./ContextIsolator-QgC1AqAH.js";import"./roundedArrow-DmDmIiOY.js";import"./index-3upY0JfS.js";import"./colors-DUoAwKpO.js";import"./QuestionCircleOutlined-cSUxXC2W.js";import"./ExclamationCircleFilled-DH9qZ7y2.js";import"./EyeOutlined-ET-AKsvU.js";import"./SearchOutlined-DFtyfXXT.js";import"./button-bcPEIH53.js";const m=()=>o.jsxs(t,{layout:"horizontal",children:[o.jsx(t.Item,{label:"Field A",required:!0,tooltip:"This is a required field",children:o.jsx(e,{placeholder:"input placeholder"})}),o.jsx(t.Item,{label:"Field B",tooltip:{title:"Tooltip with customize icon",icon:o.jsx(l,{})},children:o.jsx(e,{placeholder:"input placeholder"})})]});try{antd.displayName="antd",antd.__docgenInfo={description:"",displayName:"antd",props:{}}}catch{}const k={title:"DForm/Examples/Antd",component:m,tags:["autodocs"],parameters:{docs:{source:{language:"tsx",format:!0,code:`
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
}`,...(p=(a=r.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const M=["Playground"];export{r as Playground,M as __namedExportsOrder,k as default};
