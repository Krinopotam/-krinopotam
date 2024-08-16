import{j as e}from"./extends-CKwpSh1k.js";import{r as s}from"./index-CTjT7uj6.js";import{S as f,B as n}from"./button-cAudtZ5H.js";import{u as y,m as g}from"./updateModalTheme-nn0WQEFL.js";import"./modalRender-C0UNESu4.js";import"./index-DGqZ_Opy.js";import"./compact-item-B2r7eKHn.js";import"./useToken-DuQNFAH6.js";import"./index-Boe84S0F.js";import"./assertThisInitialized-C7eLZ5Vw.js";import"./button-dqH3xn1c.js";import"./index-C1vctpir.js";import"./helpersObjects-NFjaQN06.js";import"./helpersString-BLksZHLM.js";import"./v4-CQkTLCs1.js";import"./QuestionCircleOutlined-DItjCDaI.js";import"./motion-D1Ok7SUs.js";import"./index-4vYY965U.js";import"./CloseOutlined-RkEA9oNw.js";import"./KeyCode-DNlgD2sM.js";import"./context-zxaTOXwp.js";import"./wrapNativeSuper-CxOa5OEc.js";import"./ExclamationCircleFilled-BijZsmvo.js";import"./index-DrMe33ah.js";import"./motion-4S5rSXvC.js";import"./useClosable-DReJefU5.js";import"./zoom-DgLa7ZOz.js";import"./InfoCircleOutlined-B2Jjl6_Y.js";import"./buttonsRow-UYP48lyS.js";import"./Sider-C8lbNVsG.js";import"./index-56GSrRrr.js";import"./row-Bz4KYDPc.js";import"./roundedArrow-CdZeBiH2.js";import"./colors-DKxxPweQ.js";import"./DownOutlined-dRo7eB-m.js";import"./index-BRV0Se7Z.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";const i=o=>{var l;y();const r=s.useRef(null);r.current&&((l=r.current)==null||l.update(o));const t=s.useCallback(p=>{r.current=g.confirmWaiter({...o,title:"Please confirm",content:"Are you sure?",waitContent:"Please wait",waitTitle:"Processing",colorType:p,onOk:d=>{setTimeout(()=>{d.destroy()},3e3)}})},[o]);return e.jsxs(f,{children:[e.jsx(n,{onClick:()=>t(),children:"Open confirm waiter"}),e.jsx(n,{type:"primary",colorType:"info",onClick:()=>t("info"),children:"Open confirm waiter"}),e.jsx(n,{type:"primary",colorType:"warning",onClick:()=>t("warning"),children:"Open confirm waiter"}),e.jsx(n,{type:"primary",colorType:"success",onClick:()=>t("success"),children:"Open confirm waiter"}),e.jsx(n,{type:"primary",colorType:"danger",onClick:()=>t("danger"),children:"Open confirm waiter"})]})},C=i;try{i.displayName="ConfirmWaiterMessageBoxComponent",i.__docgenInfo={description:"MessageBox Confirm Wait component",displayName:"ConfirmWaiterMessageBoxComponent",props:{okText:{defaultValue:null,description:"",name:"okText",required:!1,type:{name:"string"}},onOk:{defaultValue:null,description:"",name:"onOk",required:!1,type:{name:"((messageBox: MessageBoxApi) => boolean | void)"}},cancelText:{defaultValue:null,description:"",name:"cancelText",required:!1,type:{name:"string"}},onCancel:{defaultValue:null,description:"",name:"onCancel",required:!1,type:{name:"((messageBox: MessageBoxApi) => boolean | void)"}},title:{defaultValue:null,description:"Form title",name:"title",required:!1,type:{name:"ReactNode"}},content:{defaultValue:null,description:"Form content",name:"content",required:!1,type:{name:"ReactNode"}},buttons:{defaultValue:null,description:"Form buttons",name:"buttons",required:!1,type:{name:"IFormButtons"}},icon:{defaultValue:null,description:"Form icon",name:"icon",required:!1,type:{name:"ReactNode"}},colorType:{defaultValue:null,description:"Form type",name:"colorType",required:!1,type:{name:"enum",value:[{value:'"warning"'},{value:'"neutral"'},{value:'"info"'},{value:'"success"'},{value:'"danger"'}]}},centered:{defaultValue:null,description:"Center modal",name:"centered",required:!1,type:{name:"boolean"}},closable:{defaultValue:null,description:"Whether a close (x) button is visible on top right of the modal dialog or not",name:"closable",required:!1,type:{name:"boolean"}},maskClosable:{defaultValue:null,description:"Whether to close the modal dialog when the mask (area outside the modal) is clicked",name:"maskClosable",required:!1,type:{name:"boolean"}},onAfterClose:{defaultValue:null,description:"After controls close callback",name:"onAfterClose",required:!1,type:{name:"(() => void)"}},onCrossClose:{defaultValue:null,description:"On form close by close cross pressed callback",name:"onCrossClose",required:!1,type:{name:"(() => void)"}}}}}catch{}try{confirmWaiterMessageBox.displayName="confirmWaiterMessageBox",confirmWaiterMessageBox.__docgenInfo={description:"MessageBox Confirm Wait component",displayName:"confirmWaiterMessageBox",props:{okText:{defaultValue:null,description:"",name:"okText",required:!1,type:{name:"string"}},onOk:{defaultValue:null,description:"",name:"onOk",required:!1,type:{name:"((messageBox: MessageBoxApi) => boolean | void)"}},cancelText:{defaultValue:null,description:"",name:"cancelText",required:!1,type:{name:"string"}},onCancel:{defaultValue:null,description:"",name:"onCancel",required:!1,type:{name:"((messageBox: MessageBoxApi) => boolean | void)"}},title:{defaultValue:null,description:"Form title",name:"title",required:!1,type:{name:"ReactNode"}},content:{defaultValue:null,description:"Form content",name:"content",required:!1,type:{name:"ReactNode"}},buttons:{defaultValue:null,description:"Form buttons",name:"buttons",required:!1,type:{name:"IFormButtons"}},icon:{defaultValue:null,description:"Form icon",name:"icon",required:!1,type:{name:"ReactNode"}},colorType:{defaultValue:null,description:"Form type",name:"colorType",required:!1,type:{name:"enum",value:[{value:'"warning"'},{value:'"neutral"'},{value:'"info"'},{value:'"success"'},{value:'"danger"'}]}},centered:{defaultValue:null,description:"Center modal",name:"centered",required:!1,type:{name:"boolean"}},closable:{defaultValue:null,description:"Whether a close (x) button is visible on top right of the modal dialog or not",name:"closable",required:!1,type:{name:"boolean"}},maskClosable:{defaultValue:null,description:"Whether to close the modal dialog when the mask (area outside the modal) is clicked",name:"maskClosable",required:!1,type:{name:"boolean"}},onAfterClose:{defaultValue:null,description:"After controls close callback",name:"onAfterClose",required:!1,type:{name:"(() => void)"}},onCrossClose:{defaultValue:null,description:"On form close by close cross pressed callback",name:"onCrossClose",required:!1,type:{name:"(() => void)"}}}}}catch{}const oe={title:"Controls/MessageBox/ConfirmWaiter",component:C,tags:["autodocs"],parameters:{docs:{source:{language:"tsx",format:!0,code:`
                    import React, {useCallback, useRef} from 'react';
                    import {Button} from @krinopotam/ui-kit/button';
                    import {IModalConfirmConfig, MessageBox, MessageBoxApi, useUpdateMessageBoxTheme} from @krinopotam/ui-kit/messageBox';
                    import {Space} from 'antd';
                    import {IColorType} from @krinopotam/ui-kit/button/button';
                    type IComponent = IModalConfirmConfig;
                    /** MessageBox Confirm Wait component */
                    export const ConfirmWaiterMessageBoxComponent = (props: IComponent): React.JSX.Element => {
                        useUpdateMessageBoxTheme(); //set current theme to messageBox
                        const curMessageBox = useRef<MessageBoxApi | null>(null);
                        if (curMessageBox.current) curMessageBox.current?.update(props);
                        const onClick = useCallback(
                            (colorType?: IColorType) => {
                                curMessageBox.current = MessageBox.confirmWaiter({
                                    ...props,
                                    title: 'Please confirm',
                                    content: 'Are you sure?',
                                    waitContent: 'Please wait',
                                    waitTitle: 'Processing',
                                    colorType: colorType,
                                    onOk: messageBox => {
                                        setTimeout(() => {
                                            messageBox.destroy();
                                        }, 3000);
                                    },
                                });
                            },
                            [props]
                        );
                        return (
                            <Space>
                                <Button onClick={() => onClick()}>Open confirm waiter</Button>
                                <Button type={'primary'} colorType="info" onClick={() => onClick('info')}>
                                    Open confirm waiter
                                </Button>
                                <Button type={'primary'} colorType="warning" onClick={() => onClick('warning')}>
                                    Open confirm waiter
                                </Button>
                                <Button type={'primary'} colorType="success" onClick={() => onClick('success')}>
                                    Open confirm waiter
                                </Button>
                                <Button type={'primary'} colorType="danger" onClick={() => onClick('danger')}>
                                    Open confirm waiter
                                </Button>
                            </Space>
                        );
                    };
                    export default ConfirmWaiterMessageBoxComponent;
                `}}}},a={args:{content:"Info"}};var c,m,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    content: 'Info'
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const te=["ConfirmWaiter"];export{a as ConfirmWaiter,te as __namedExportsOrder,oe as default};
