import{j as e}from"./useToken-a9416e4a.js";import{r as i}from"./index-76fb7be0.js";import{S as d,B as r}from"./button-f2d700d6.js";import{u as f,m as y}from"./updateModalTheme-8f171516.js";import"./draggableRender-0125ae20.js";import"./index-092ccb3f.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./compact-item-065385a4.js";import"./index-a764d3ff.js";import"./assertThisInitialized-8802cfe2.js";import"./button-34478241.js";import"./index-00bf92b7.js";import"./helpersObjects-80970c28.js";import"./index-d6bd501e.js";import"./motion-98dddd30.js";import"./helpersString-59da762c.js";import"./v4-4a60fe23.js";import"./QuestionCircleOutlined-4f561e0b.js";import"./index-57bc639f.js";import"./useClosable-fd68c6c6.js";import"./KeyCode-6413d982.js";import"./ExclamationCircleFilled-3771385a.js";import"./context-67ce65ca.js";import"./index-ffee8d33.js";import"./motion-3729e44c.js";import"./pickAttrs-a0343510.js";import"./zoom-ad82ed8d.js";import"./InfoCircleOutlined-86235823.js";import"./PurePanel-ab2d6f85.js";import"./buttonsRow-d7c79a8c.js";import"./Sider-8cb48e9b.js";import"./row-62b547d9.js";import"./roundedArrow-1602316a.js";import"./colors-a767a02d.js";import"./index-9d475cdf.js";import"./_commonjs-dynamic-modules-302442b1.js";const l=o=>{var s;f();const n=i.useRef(null);n.current&&((s=n.current)==null||s.update(o));const t=i.useCallback(m=>{n.current=y.alert({...o,colorType:m})},[o]);return e.jsxs(d,{children:[e.jsx(r,{onClick:()=>t(),children:"Open alert"}),e.jsx(r,{type:"primary",colorType:"info",onClick:()=>t("info"),children:"Open alert"}),e.jsx(r,{type:"primary",colorType:"warning",onClick:()=>t("warning"),children:"Open alert"}),e.jsx(r,{type:"primary",colorType:"success",onClick:()=>t("success"),children:"Open alert"}),e.jsx(r,{type:"primary",colorType:"danger",onClick:()=>t("danger"),children:"Open alert"})]})},g=l;try{l.displayName="AlertMessageBoxComponent",l.__docgenInfo={description:"MessageBox Alert component",displayName:"AlertMessageBoxComponent",props:{okText:{defaultValue:null,description:"",name:"okText",required:!1,type:{name:"string"}},onOk:{defaultValue:null,description:"",name:"onOk",required:!1,type:{name:"((messageBox: MessageBoxApi) => boolean | void)"}},title:{defaultValue:null,description:"Form title",name:"title",required:!1,type:{name:"ReactNode"}},icon:{defaultValue:null,description:"Form icon",name:"icon",required:!1,type:{name:"ReactNode"}},content:{defaultValue:null,description:"Form content",name:"content",required:!1,type:{name:"ReactNode"}},colorType:{defaultValue:null,description:"Form type",name:"colorType",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"danger"'}]}},buttons:{defaultValue:null,description:"Form buttons",name:"buttons",required:!1,type:{name:"IFormButtons"}},centered:{defaultValue:null,description:"Center modal",name:"centered",required:!1,type:{name:"boolean"}},closable:{defaultValue:null,description:"Whether a close (x) button is visible on top right of the modal dialog or not",name:"closable",required:!1,type:{name:"boolean"}},maskClosable:{defaultValue:null,description:"Whether to close the modal dialog when the mask (area outside the modal) is clicked",name:"maskClosable",required:!1,type:{name:"boolean"}},onAfterClose:{defaultValue:null,description:"After controls close callback",name:"onAfterClose",required:!1,type:{name:"(() => void)"}},onCrossClose:{defaultValue:null,description:"On form close by close cross pressed callback",name:"onCrossClose",required:!1,type:{name:"(() => void)"}}}}}catch{}try{alertMessageBox.displayName="alertMessageBox",alertMessageBox.__docgenInfo={description:"MessageBox Alert component",displayName:"alertMessageBox",props:{okText:{defaultValue:null,description:"",name:"okText",required:!1,type:{name:"string"}},onOk:{defaultValue:null,description:"",name:"onOk",required:!1,type:{name:"((messageBox: MessageBoxApi) => boolean | void)"}},title:{defaultValue:null,description:"Form title",name:"title",required:!1,type:{name:"ReactNode"}},icon:{defaultValue:null,description:"Form icon",name:"icon",required:!1,type:{name:"ReactNode"}},content:{defaultValue:null,description:"Form content",name:"content",required:!1,type:{name:"ReactNode"}},colorType:{defaultValue:null,description:"Form type",name:"colorType",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"danger"'}]}},buttons:{defaultValue:null,description:"Form buttons",name:"buttons",required:!1,type:{name:"IFormButtons"}},centered:{defaultValue:null,description:"Center modal",name:"centered",required:!1,type:{name:"boolean"}},closable:{defaultValue:null,description:"Whether a close (x) button is visible on top right of the modal dialog or not",name:"closable",required:!1,type:{name:"boolean"}},maskClosable:{defaultValue:null,description:"Whether to close the modal dialog when the mask (area outside the modal) is clicked",name:"maskClosable",required:!1,type:{name:"boolean"}},onAfterClose:{defaultValue:null,description:"After controls close callback",name:"onAfterClose",required:!1,type:{name:"(() => void)"}},onCrossClose:{defaultValue:null,description:"On form close by close cross pressed callback",name:"onCrossClose",required:!1,type:{name:"(() => void)"}}}}}catch{}const ee={title:"Controls/MessageBox/Alert",component:g,tags:["autodocs"],parameters:{docs:{source:{language:"tsx",format:!0,code:`
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
