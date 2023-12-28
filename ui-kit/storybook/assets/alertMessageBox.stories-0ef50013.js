import{j as e}from"./useToken-b19ab62a.js";import{r as i}from"./index-76fb7be0.js";import{S as d,B as r}from"./button-13ccc7ad.js";import{u as f,m as y}from"./updateModalTheme-425bc3b2.js";import"./draggableRender-817e2d38.js";import"./index-092ccb3f.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./compact-item-153ccf6f.js";import"./index-a764d3ff.js";import"./assertThisInitialized-8802cfe2.js";import"./button-3e1cd756.js";import"./index-84136495.js";import"./helpersObjects-335d2932.js";import"./index-6ed6bb17.js";import"./motion-a9f81d2c.js";import"./helpersString-59da762c.js";import"./v4-4a60fe23.js";import"./QuestionCircleOutlined-41527efc.js";import"./index-e792aa35.js";import"./useClosable-bab051fc.js";import"./KeyCode-6413d982.js";import"./ExclamationCircleFilled-cf151277.js";import"./context-5a13208d.js";import"./index-b1d11547.js";import"./motion-3729e44c.js";import"./pickAttrs-f83e05d3.js";import"./zoom-faeb00d0.js";import"./InfoCircleOutlined-b0bd8909.js";import"./PurePanel-71bfc635.js";import"./buttonsRow-f20d8f58.js";import"./Sider-ab22ad9d.js";import"./row-1394a33e.js";import"./roundedArrow-d75250bf.js";import"./colors-91786050.js";import"./index-9d475cdf.js";import"./_commonjs-dynamic-modules-302442b1.js";const l=o=>{var s;f();const n=i.useRef(null);n.current&&((s=n.current)==null||s.update(o));const t=i.useCallback(m=>{n.current=y.alert({...o,colorType:m})},[o]);return e.jsxs(d,{children:[e.jsx(r,{onClick:()=>t(),children:"Open alert"}),e.jsx(r,{type:"primary",colorType:"info",onClick:()=>t("info"),children:"Open alert"}),e.jsx(r,{type:"primary",colorType:"warning",onClick:()=>t("warning"),children:"Open alert"}),e.jsx(r,{type:"primary",colorType:"success",onClick:()=>t("success"),children:"Open alert"}),e.jsx(r,{type:"primary",colorType:"danger",onClick:()=>t("danger"),children:"Open alert"})]})},g=l;try{l.displayName="AlertMessageBoxComponent",l.__docgenInfo={description:"MessageBox Alert component",displayName:"AlertMessageBoxComponent",props:{okText:{defaultValue:null,description:"",name:"okText",required:!1,type:{name:"string"}},onOk:{defaultValue:null,description:"",name:"onOk",required:!1,type:{name:"((messageBox: MessageBoxApi) => boolean | void)"}},title:{defaultValue:null,description:"Form title",name:"title",required:!1,type:{name:"ReactNode"}},icon:{defaultValue:null,description:"Form icon",name:"icon",required:!1,type:{name:"ReactNode"}},content:{defaultValue:null,description:"Form content",name:"content",required:!1,type:{name:"ReactNode"}},colorType:{defaultValue:null,description:"Form type",name:"colorType",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"danger"'}]}},buttons:{defaultValue:null,description:"Form buttons",name:"buttons",required:!1,type:{name:"IFormButtons"}},centered:{defaultValue:null,description:"Center modal",name:"centered",required:!1,type:{name:"boolean"}},closable:{defaultValue:null,description:"Whether a close (x) button is visible on top right of the modal dialog or not",name:"closable",required:!1,type:{name:"boolean"}},maskClosable:{defaultValue:null,description:"Whether to close the modal dialog when the mask (area outside the modal) is clicked",name:"maskClosable",required:!1,type:{name:"boolean"}},onAfterClose:{defaultValue:null,description:"After controls close callback",name:"onAfterClose",required:!1,type:{name:"(() => void)"}},onCrossClose:{defaultValue:null,description:"On form close by close cross pressed callback",name:"onCrossClose",required:!1,type:{name:"(() => void)"}}}}}catch{}try{alertMessageBox.displayName="alertMessageBox",alertMessageBox.__docgenInfo={description:"MessageBox Alert component",displayName:"alertMessageBox",props:{okText:{defaultValue:null,description:"",name:"okText",required:!1,type:{name:"string"}},onOk:{defaultValue:null,description:"",name:"onOk",required:!1,type:{name:"((messageBox: MessageBoxApi) => boolean | void)"}},title:{defaultValue:null,description:"Form title",name:"title",required:!1,type:{name:"ReactNode"}},icon:{defaultValue:null,description:"Form icon",name:"icon",required:!1,type:{name:"ReactNode"}},content:{defaultValue:null,description:"Form content",name:"content",required:!1,type:{name:"ReactNode"}},colorType:{defaultValue:null,description:"Form type",name:"colorType",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"danger"'}]}},buttons:{defaultValue:null,description:"Form buttons",name:"buttons",required:!1,type:{name:"IFormButtons"}},centered:{defaultValue:null,description:"Center modal",name:"centered",required:!1,type:{name:"boolean"}},closable:{defaultValue:null,description:"Whether a close (x) button is visible on top right of the modal dialog or not",name:"closable",required:!1,type:{name:"boolean"}},maskClosable:{defaultValue:null,description:"Whether to close the modal dialog when the mask (area outside the modal) is clicked",name:"maskClosable",required:!1,type:{name:"boolean"}},onAfterClose:{defaultValue:null,description:"After controls close callback",name:"onAfterClose",required:!1,type:{name:"(() => void)"}},onCrossClose:{defaultValue:null,description:"On form close by close cross pressed callback",name:"onCrossClose",required:!1,type:{name:"(() => void)"}}}}}catch{}const ee={title:"Controls/MessageBox/Alert",component:g,tags:["autodocs"],parameters:{docs:{source:{language:"tsx",format:!0,code:`
                    import React, {useCallback, useRef} from 'react';
                    import {Button} from @krinopotam/ui-kit/button';
                    import {IModalAlertConfig, MessageBox, MessageBoxApi, useUpdateMessageBoxTheme} from @krinopotam/ui-kit/messageBox';
                    import {Space} from 'antd';
                    import {IColorType} from @krinopotam/ui-kit/button/button';
                    type IComponent = IModalAlertConfig;
                    /** MessageBox Alert component */
                    export const AlertMessageBoxComponent = (props: IComponent): React.JSX.Element => {
                        useUpdateMessageBoxTheme(); //set current theme to messageBox
                        const curMessageBox = useRef<MessageBoxApi|null>(null);
                        if (curMessageBox.current) curMessageBox.current?.update(props)
                        const onClick = useCallback(
                            (colorType?: IColorType) => {
                                curMessageBox.current = MessageBox.alert({...props, colorType: colorType});
                            },
                            [props]
                        );
                        return (
                            <Space>
                                <Button onClick={() => onClick()}>
                                    Open alert
                                </Button>
                                <Button type={'primary'} colorType="info" onClick={() => onClick('info')}>
                                    Open alert
                                </Button>
                                <Button type={'primary'} colorType="warning" onClick={() => onClick('warning')}>
                                    Open alert
                                </Button>
                                <Button type={'primary'} colorType="success" onClick={() => onClick('success')}>
                                    Open alert
                                </Button>
                                <Button type={'primary'} colorType="danger" onClick={() => onClick('danger')}>
                                    Open alert
                                </Button>
                            </Space>
                        );
                    };
                    export default AlertMessageBoxComponent;
                `}}}},a={args:{content:"Info"}};var p,c,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    content: 'Info'
  }
}`,...(u=(c=a.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const oe=["Alert"];export{a as Alert,oe as __namedExportsOrder,ee as default};
