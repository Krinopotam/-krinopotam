import{j as o}from"./extends-BRD_ACZV.js";import{F as t}from"./index-DMj878Uq.js";import{I as e}from"./index-CGAOD1SL.js";import{R as l}from"./InfoCircleOutlined-CvX0ly-N.js";import"./index-uubelm5h.js";import"./compact-item-Cq9_oKvy.js";import"./useToken-DcxMJEAm.js";import"./index-DaxZXI7c.js";import"./assertThisInitialized-C7eLZ5Vw.js";import"./index-jGjHQRy5.js";import"./context-Dw4q7UZT.js";import"./wrapNativeSuper-CxOa5OEc.js";import"./pickAttrs-BK90issH.js";import"./useVariants-BWqEf-UO.js";import"./ContextIsolator-CHJRnwEJ.js";import"./index-Bx0hWZS5.js";import"./motion-DInqWZju.js";import"./row-DGeTWQOf.js";import"./roundedArrow-DHHCDUVh.js";import"./zoom-C6i_ByaA.js";import"./colors-DipieP1N.js";import"./QuestionCircleOutlined-CTTbfydo.js";import"./ExclamationCircleFilled-BgVBMMmD.js";import"./EyeOutlined-BmNE_l5f.js";import"./SearchOutlined-wK2xDu78.js";import"./button-BV2UQvY4.js";const m=()=>o.jsxs(t,{layout:"horizontal",children:[o.jsx(t.Item,{label:"Field A",required:!0,tooltip:"This is a required field",children:o.jsx(e,{placeholder:"input placeholder"})}),o.jsx(t.Item,{label:"Field B",tooltip:{title:"Tooltip with customize icon",icon:o.jsx(l,{})},children:o.jsx(e,{placeholder:"input placeholder"})})]}),n=m;try{antd.displayName="antd",antd.__docgenInfo={description:"",displayName:"antd",props:{}}}catch{}const P={title:"DForm/Examples/Antd",component:n,tags:["autodocs"],parameters:{docs:{source:{language:"tsx",format:!0,code:`
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
