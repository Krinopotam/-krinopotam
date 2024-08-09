import{j as o}from"./extends-CKwpSh1k.js";import{F as t}from"./index-DKKcxpSc.js";import{I as e}from"./index-C2sbGtmw.js";import{R as l}from"./InfoCircleOutlined-B2Jjl6_Y.js";import"./index-CTjT7uj6.js";import"./compact-item-B2r7eKHn.js";import"./useToken-DuQNFAH6.js";import"./index-Boe84S0F.js";import"./assertThisInitialized-C7eLZ5Vw.js";import"./index-56GSrRrr.js";import"./motion-D1Ok7SUs.js";import"./context-zxaTOXwp.js";import"./wrapNativeSuper-CxOa5OEc.js";import"./useVariants-bMUIY1dl.js";import"./index-BzgAe6ki.js";import"./motion-4S5rSXvC.js";import"./row-Bz4KYDPc.js";import"./roundedArrow-CdZeBiH2.js";import"./zoom-DgLa7ZOz.js";import"./colors-DKxxPweQ.js";import"./QuestionCircleOutlined-DItjCDaI.js";import"./ExclamationCircleFilled-BijZsmvo.js";import"./EyeOutlined-YuvBWI2n.js";import"./SearchOutlined-9InG0_lL.js";import"./button-dqH3xn1c.js";const m=()=>o.jsxs(t,{layout:"horizontal",children:[o.jsx(t.Item,{label:"Field A",required:!0,tooltip:"This is a required field",children:o.jsx(e,{placeholder:"input placeholder"})}),o.jsx(t.Item,{label:"Field B",tooltip:{title:"Tooltip with customize icon",icon:o.jsx(l,{})},children:o.jsx(e,{placeholder:"input placeholder"})})]}),n=m;try{antd.displayName="antd",antd.__docgenInfo={description:"",displayName:"antd",props:{}}}catch{}const M={title:"DForm/Examples/Antd",component:n,tags:["autodocs"],parameters:{docs:{source:{language:"tsx",format:!0,code:`
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
}`,...(p=(a=r.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const P=["Playground"];export{r as Playground,P as __namedExportsOrder,M as default};
