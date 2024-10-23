import{j as e}from"./extends-BRD_ACZV.js";import{S as f,B as n}from"./button-DqJryEvo.js";import{u as g,m as C}from"./updateModalTheme-C0KEeRFk.js";import{r as s}from"./index-uubelm5h.js";import"./compact-item-BeOSZLsy.js";import"./useToken-BDIznhTi.js";import"./index-DaxZXI7c.js";import"./assertThisInitialized-C7eLZ5Vw.js";import"./button-DkKyWrTV.js";import"./index-D62MHgvQ.js";import"./headerRender-DWkYwmfj.js";import"./index-rLuHFcUX.js";import"./ExclamationCircleFilled-BtGYKAGo.js";import"./pickAttrs-B40rHDqk.js";import"./context-O75vn3di.js";import"./wrapNativeSuper-CxOa5OEc.js";import"./motion-BkNeJ1lN.js";import"./CloseOutlined-Ch1VG0Li.js";import"./KeyCode-DNlgD2sM.js";import"./ContextIsolator-Bneeq0VO.js";import"./useClosable-BFXERm3r.js";import"./zoom-CJ23mhiy.js";import"./DownOutlined-C-j3uwiD.js";import"./index-0oUcX6ux.js";import"./index-D3eZ-H7s.js";import"./mergeButtons-BG20oFT9.js";import"./Sider-CDlNlFeD.js";import"./row-DEhRMJcW.js";import"./roundedArrow-oie2LNnU.js";import"./colors-CvqFSB8J.js";import"./getNanoId-DD8laUaD.js";import"./InfoCircleOutlined-BjbsVjbL.js";import"./QuestionCircleOutlined-B3NJnN9r.js";import"./index-DSucG7gu.js";const l=o=>{var i;g();const r=s.useRef(null);r.current&&((i=r.current)==null||i.update(o));const a=s.useCallback(p=>{r.current=C.confirmWaiter({...o,title:"Please confirm",content:"Are you sure?",waitContent:"Please wait",waitTitle:"Processing",colorType:p,onOk:d=>{setTimeout(()=>{d.destroy()},3e3)}})},[o]);return e.jsxs(f,{children:[e.jsx(n,{onClick:()=>a(),children:"Open confirm waiter"}),e.jsx(n,{color:"info",variant:"solid",onClick:()=>a("info"),children:"Open confirm waiter"}),e.jsx(n,{color:"warning",variant:"solid",onClick:()=>a("warning"),children:"Open confirm waiter"}),e.jsx(n,{color:"success",variant:"solid",onClick:()=>a("success"),children:"Open confirm waiter"}),e.jsx(n,{color:"danger",variant:"solid",onClick:()=>a("danger"),children:"Open confirm waiter"})]})},x=l;try{l.displayName="ConfirmWaiterMessageBoxComponent",l.__docgenInfo={description:"MessageBox Confirm Wait component",displayName:"ConfirmWaiterMessageBoxComponent",props:{okText:{defaultValue:null,description:"",name:"okText",required:!1,type:{name:"string"}},onOk:{defaultValue:null,description:"",name:"onOk",required:!1,type:{name:"((messageBox: MessageBoxApi) => boolean | void)"}},cancelText:{defaultValue:null,description:"",name:"cancelText",required:!1,type:{name:"string"}},onCancel:{defaultValue:null,description:"",name:"onCancel",required:!1,type:{name:"((messageBox: MessageBoxApi) => boolean | void)"}},title:{defaultValue:null,description:"Form title",name:"title",required:!1,type:{name:"ReactNode"}},content:{defaultValue:null,description:"Form content",name:"content",required:!1,type:{name:"ReactNode"}},icon:{defaultValue:null,description:"Form icon",name:"icon",required:!1,type:{name:"ReactNode"}},colorType:{defaultValue:null,description:"Form type",name:"colorType",required:!1,type:{name:"enum",value:[{value:'"warning"'},{value:'"danger"'},{value:'"default"'},{value:'"primary"'},{value:'"info"'},{value:'"success"'}]}},buttons:{defaultValue:null,description:"Form buttons",name:"buttons",required:!1,type:{name:"IFormButtons"}},centered:{defaultValue:null,description:"Center modal",name:"centered",required:!1,type:{name:"boolean"}},closable:{defaultValue:null,description:"Whether a close (x) button is visible on top right of the modal dialog or not",name:"closable",required:!1,type:{name:"boolean"}},maskClosable:{defaultValue:null,description:"Whether to close the modal dialog when the mask (area outside the modal) is clicked",name:"maskClosable",required:!1,type:{name:"boolean"}},onAfterClose:{defaultValue:null,description:"After controls close callback",name:"onAfterClose",required:!1,type:{name:"(() => void)"}},onCrossClose:{defaultValue:null,description:"On form close by close cross pressed callback",name:"onCrossClose",required:!1,type:{name:"(() => void)"}},language:{defaultValue:null,description:"Language",name:"language",required:!1,type:{name:"enum",value:[{value:'"ru"'},{value:'"en"'},{value:'"cn"'}]}},translation:{defaultValue:null,description:"Custom translation",name:"translation",required:!1,type:{name:"Partial<{ ok: string; cancel: string; attention: string; processing: string; pleaseWait: string; }>"}}}}}catch{}try{confirmWaiterMessageBox.displayName="confirmWaiterMessageBox",confirmWaiterMessageBox.__docgenInfo={description:"MessageBox Confirm Wait component",displayName:"confirmWaiterMessageBox",props:{okText:{defaultValue:null,description:"",name:"okText",required:!1,type:{name:"string"}},onOk:{defaultValue:null,description:"",name:"onOk",required:!1,type:{name:"((messageBox: MessageBoxApi) => boolean | void)"}},cancelText:{defaultValue:null,description:"",name:"cancelText",required:!1,type:{name:"string"}},onCancel:{defaultValue:null,description:"",name:"onCancel",required:!1,type:{name:"((messageBox: MessageBoxApi) => boolean | void)"}},title:{defaultValue:null,description:"Form title",name:"title",required:!1,type:{name:"ReactNode"}},content:{defaultValue:null,description:"Form content",name:"content",required:!1,type:{name:"ReactNode"}},icon:{defaultValue:null,description:"Form icon",name:"icon",required:!1,type:{name:"ReactNode"}},colorType:{defaultValue:null,description:"Form type",name:"colorType",required:!1,type:{name:"enum",value:[{value:'"warning"'},{value:'"danger"'},{value:'"default"'},{value:'"primary"'},{value:'"info"'},{value:'"success"'}]}},buttons:{defaultValue:null,description:"Form buttons",name:"buttons",required:!1,type:{name:"IFormButtons"}},centered:{defaultValue:null,description:"Center modal",name:"centered",required:!1,type:{name:"boolean"}},closable:{defaultValue:null,description:"Whether a close (x) button is visible on top right of the modal dialog or not",name:"closable",required:!1,type:{name:"boolean"}},maskClosable:{defaultValue:null,description:"Whether to close the modal dialog when the mask (area outside the modal) is clicked",name:"maskClosable",required:!1,type:{name:"boolean"}},onAfterClose:{defaultValue:null,description:"After controls close callback",name:"onAfterClose",required:!1,type:{name:"(() => void)"}},onCrossClose:{defaultValue:null,description:"On form close by close cross pressed callback",name:"onCrossClose",required:!1,type:{name:"(() => void)"}},language:{defaultValue:null,description:"Language",name:"language",required:!1,type:{name:"enum",value:[{value:'"ru"'},{value:'"en"'},{value:'"cn"'}]}},translation:{defaultValue:null,description:"Custom translation",name:"translation",required:!1,type:{name:"Partial<{ ok: string; cancel: string; attention: string; processing: string; pleaseWait: string; }>"}}}}}catch{}const Y={title:"Controls/MessageBox/ConfirmWaiter",component:x,tags:["autodocs"],parameters:{docs:{source:{language:"tsx",format:!0,code:`
                    import {Button, IButtonProps} from @krinopotam/ui-kit/button';
                    import {IModalConfirmConfig, MessageBox, MessageBoxApi, useUpdateMessageBoxTheme} from @krinopotam/ui-kit/messageBox';
                    import {Space} from 'antd';
                    import React, {useCallback, useRef} from 'react';
                    type IComponent = IModalConfirmConfig;
                    /** MessageBox Confirm Wait component */
                    export const ConfirmWaiterMessageBoxComponent = (props: IComponent): React.JSX.Element => {
                        useUpdateMessageBoxTheme(); //set current theme to messageBox
                        const curMessageBox = useRef<MessageBoxApi | null>(null);
                        if (curMessageBox.current) curMessageBox.current?.update(props);
                        const onClick = useCallback(
                            (colorType?: IButtonProps['color']) => {
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
                                <Button color="info" variant="solid" onClick={() => onClick('info')}>
                                    Open confirm waiter
                                </Button>
                                <Button color="warning" variant="solid" onClick={() => onClick('warning')}>
                                    Open confirm waiter
                                </Button>
                                <Button color="success" variant="solid" onClick={() => onClick('success')}>
                                    Open confirm waiter
                                </Button>
                                <Button color="danger" variant="solid" onClick={() => onClick('danger')}>
                                    Open confirm waiter
                                </Button>
                            </Space>
                        );
                    };
                    export default ConfirmWaiterMessageBoxComponent;
                `}}}},t={args:{content:"Info"}};var u,c,m;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    content: 'Info'
  }
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const Z=["ConfirmWaiter"];export{t as ConfirmWaiter,Z as __namedExportsOrder,Y as default};
