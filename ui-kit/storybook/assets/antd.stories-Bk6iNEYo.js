import{j as o}from"./extends-BRD_ACZV.js";import{F as t}from"./index-f2g4SNMs.js";import{I as e}from"./index-BLw3cYKy.js";import{R as l}from"./InfoCircleOutlined-BjbsVjbL.js";import"./index-uubelm5h.js";import"./compact-item-BeOSZLsy.js";import"./useToken-BDIznhTi.js";import"./index-DaxZXI7c.js";import"./assertThisInitialized-C7eLZ5Vw.js";import"./index-0oUcX6ux.js";import"./context-O75vn3di.js";import"./wrapNativeSuper-CxOa5OEc.js";import"./pickAttrs-B40rHDqk.js";import"./useVariants-DabNv_YX.js";import"./ContextIsolator-Bneeq0VO.js";import"./index-BwUr6gXK.js";import"./motion-BkNeJ1lN.js";import"./row-DEhRMJcW.js";import"./roundedArrow-oie2LNnU.js";import"./zoom-CJ23mhiy.js";import"./colors-CvqFSB8J.js";import"./QuestionCircleOutlined-B3NJnN9r.js";import"./ExclamationCircleFilled-BtGYKAGo.js";import"./EyeOutlined-D4mYPtbf.js";import"./SearchOutlined-gONCw02j.js";import"./button-DkKyWrTV.js";const m=()=>o.jsxs(t,{layout:"horizontal",children:[o.jsx(t.Item,{label:"Field A",required:!0,tooltip:"This is a required field",children:o.jsx(e,{placeholder:"input placeholder"})}),o.jsx(t.Item,{label:"Field B",tooltip:{title:"Tooltip with customize icon",icon:o.jsx(l,{})},children:o.jsx(e,{placeholder:"input placeholder"})})]}),n=m;try{antd.displayName="antd",antd.__docgenInfo={description:"",displayName:"antd",props:{}}}catch{}const P={title:"DForm/Examples/Antd",component:n,tags:["autodocs"],parameters:{docs:{source:{language:"tsx",format:!0,code:`
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
}`,...(p=(a=r.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const S=["Playground"];export{r as Playground,S as __namedExportsOrder,P as default};
