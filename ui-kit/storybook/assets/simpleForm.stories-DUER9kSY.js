import{j as e}from"./extends-CKwpSh1k.js";import{D as m}from"./dForm-Bv2L02vf.js";import"./index-DGqZ_Opy.js";import"./dayjs.min-BljPK31Q.js";import{I as n}from"./inputField-ayn29oHB.js";import{f as t}from"./index-BNzM6CSE.js";import"./index-CTjT7uj6.js";import"./helpersObjects-NFjaQN06.js";import"./index-Boe84S0F.js";import"./index-DKKcxpSc.js";import"./compact-item-B2r7eKHn.js";import"./useToken-DuQNFAH6.js";import"./assertThisInitialized-C7eLZ5Vw.js";import"./index-56GSrRrr.js";import"./motion-D1Ok7SUs.js";import"./context-zxaTOXwp.js";import"./wrapNativeSuper-CxOa5OEc.js";import"./useVariants-bMUIY1dl.js";import"./index-BzgAe6ki.js";import"./motion-4S5rSXvC.js";import"./row-Bz4KYDPc.js";import"./roundedArrow-CdZeBiH2.js";import"./zoom-DgLa7ZOz.js";import"./colors-DKxxPweQ.js";import"./QuestionCircleOutlined-DItjCDaI.js";import"./ExclamationCircleFilled-BijZsmvo.js";import"./updateModalTheme-nn0WQEFL.js";import"./modalRender-C0UNESu4.js";import"./index-C1vctpir.js";import"./InfoCircleOutlined-B2Jjl6_Y.js";import"./button-cAudtZ5H.js";import"./button-dqH3xn1c.js";import"./buttonsRow-UYP48lyS.js";import"./Sider-C8lbNVsG.js";import"./KeyCode-DNlgD2sM.js";import"./DownOutlined-dRo7eB-m.js";import"./helpersString-BLksZHLM.js";import"./v4-CQkTLCs1.js";import"./index-BRV0Se7Z.js";import"./index-DrMe33ah.js";import"./CloseOutlined-RkEA9oNw.js";import"./useClosable-DReJefU5.js";import"./index-4vYY965U.js";import"./CheckOutlined-ChgTJtAc.js";import"./useIsDebugMode-B-VM_G4X.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-C2sbGtmw.js";import"./EyeOutlined-YuvBWI2n.js";import"./SearchOutlined-9InG0_lL.js";import"./index-DuM-I7-B.js";const d={formId:"Test form",confirmChanges:!0,fieldsProps:{login:{component:n,label:"Логин",tooltip:"Ввод логина"},password:{component:n,label:"Пароль",tooltip:"Ввод пвароль"}},buttons:{ok:{position:"right"}}},o=r=>{const u={...d,...r};return e.jsx(e.Fragment,{children:e.jsx("div",{style:{maxWidth:500},children:e.jsx(m,{...u})})})},p=o;try{o.displayName="SimpleForm",o.__docgenInfo={description:"Simple Dynamic form example",displayName:"SimpleForm",props:{apiRef:{defaultValue:null,description:"A mutable object to merge with these controls api",name:"apiRef",required:!1,type:{name:"unknown"}},formId:{defaultValue:null,description:"Form formId",name:"formId",required:!1,type:{name:"string"}},buttons:{defaultValue:null,description:"Buttons properties",name:"buttons",required:!1,type:{name:"IFormButtons | null"}},className:{defaultValue:null,description:"Form CSS class",name:"className",required:!1,type:{name:"string"}},formStyle:{defaultValue:null,description:"Form style",name:"formStyle",required:!1,type:{name:"CSSProperties"}},containerClassName:{defaultValue:null,description:"Form container class name",name:"containerClassName",required:!1,type:{name:"string"}},containerStyle:{defaultValue:null,description:"Form container style",name:"containerStyle",required:!1,type:{name:"CSSProperties"}},contentIndent:{defaultValue:null,description:"Indent from the beginning of the controls (default 12)",name:"contentIndent",required:!1,type:{name:"number"}},dataSet:{defaultValue:null,description:"Form data",name:"dataSet",required:!1,type:{name:"IDFormDataSet"}},parentDataSet:{defaultValue:null,description:"Parent form data",name:"parentDataSet",required:!1,type:{name:"IDFormDataSet"}},fieldsProps:{defaultValue:null,description:"Fields properties",name:"fieldsProps",required:!1,type:{name:"IDFormFieldsProps"}},colorType:{defaultValue:null,description:"Form color type",name:"colorType",required:!1,type:{name:"enum",value:[{value:'"warning"'},{value:'"neutral"'},{value:'"info"'},{value:'"success"'},{value:'"danger"'}]}},labelCol:{defaultValue:null,description:"label column parameters, for example span:'8'",name:"labelCol",required:!1,type:{name:"ColProps"}},wrapperCol:{defaultValue:null,description:"wrapper column parameters, for example span:'16'",name:"wrapperCol",required:!1,type:{name:"ColProps"}},labelAlign:{defaultValue:null,description:"text align of label of all items",name:"labelAlign",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},layout:{defaultValue:null,description:"Form layout (horizontal or vertical). Vertical is default",name:"layout",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},formMode:{defaultValue:null,description:"Form mode",name:"formMode",required:!1,type:{name:"enum",value:[{value:'"view"'},{value:'"create"'},{value:'"update"'},{value:'"clone"'},{value:'"delete"'}]}},readOnly:{defaultValue:null,description:"The form is read only",name:"readOnly",required:!1,type:{name:"boolean"}},disableDepended:{defaultValue:null,description:"Automatically disable fields if they depend on fields whose value is not set. Otherwise, such fields will be automatically hidden",name:"disableDepended",required:!1,type:{name:"boolean"}},tabsHeight:{defaultValue:null,description:"Tabs panes height (default 40)",name:"tabsHeight",required:!1,type:{name:"number"}},unfilledForm:{defaultValue:null,description:"No use controls data",name:"unfilledForm",required:!1,type:{name:"boolean"}},validationRules:{defaultValue:null,description:"Validation rules",name:"validationRules",required:!1,type:{name:"IDFormValidationRules"}},confirmChanges:{defaultValue:null,description:"Should the form request confirmation before the form submitting or cancel, if the form data was changed by the user",name:"confirmChanges",required:!1,type:{name:"boolean"}},submitConfirmMessage:{defaultValue:null,description:"Confirm message before the form submitting",name:"submitConfirmMessage",required:!1,type:{name:"ReactNode"}},requiredMark:{defaultValue:null,description:"Required mark style. Can use required mark or optional mark. You can not config to single Form.Item since this is a Form level config",name:"requiredMark",required:!1,type:{name:"RequiredMark"}},arrowsButtonsSelection:{defaultValue:null,description:"allow select buttons using arrows keys",name:"arrowsButtonsSelection",required:!1,type:{name:"boolean"}},onFormDirtyStateChanged:{defaultValue:null,description:"fires when the dirty state of the form changed",name:"onFormDirtyStateChanged",required:!1,type:{name:"((state: boolean, api: IDFormApi) => void)"}},onFormReadOnlyStateChanged:{defaultValue:null,description:"fires when the read only state of the form changed",name:"onFormReadOnlyStateChanged",required:!1,type:{name:"((state: boolean, api: IDFormApi) => void)"}},onFormDisabledStateChanged:{defaultValue:null,description:"fires when the disabled state of the form changed",name:"onFormDisabledStateChanged",required:!1,type:{name:"((state: boolean, api: IDFormApi) => void)"}},onFormInit:{defaultValue:null,description:"fires when the form began initialization (renders for the first time)",name:"onFormInit",required:!1,type:{name:"((api: IDFormApi) => void)"}},onFormModelInitialized:{defaultValue:null,description:"fires when the form model has been initialized",name:"onFormModelInitialized",required:!1,type:{name:"((api: IDFormApi) => void)"}},onFormReadyStateChanged:{defaultValue:null,description:"fires when the form ready status changed (form ready means form is rendered, initialized and all fields data are loaded)",name:"onFormReadyStateChanged",required:!1,type:{name:"((state: boolean, api: IDFormApi) => boolean | void)"}},onFormValuesChanged:{defaultValue:null,description:"fires when the form values changed",name:"onFormValuesChanged",required:!1,type:{name:"((fieldName: string, values: Record<string, unknown>, api: IDFormApi) => void)"}},onFormValidated:{defaultValue:null,description:"fires when the form validated",name:"onFormValidated",required:!1,type:{name:"((values: Record<string, unknown>, errors: Record<string, string>, isSubmit: boolean, api: IDFormApi) => void)"}},onFormHasErrors:{defaultValue:null,description:"fires when the form has errors",name:"onFormHasErrors",required:!1,type:{name:"((values: Record<string, unknown>, errors: Record<string, unknown>, api: IDFormApi) => void)"}},onFormHasNoErrors:{defaultValue:null,description:"fires when the form has no errors",name:"onFormHasNoErrors",required:!1,type:{name:"((values: Record<string, unknown>, api: IDFormApi) => boolean | void)"}},onDataFetch:{defaultValue:null,description:"fires when the form trying to fetch data",name:"onDataFetch",required:!1,type:{name:"((api: IDFormApi) => IDFormDataSourcePromise)"}},onDataFetchSuccess:{defaultValue:null,description:"fires when the form fetch success",name:"onDataFetchSuccess",required:!1,type:{name:"((result: { data: Record<string, unknown>; }, api: IDFormApi) => boolean | void)"}},onDataFetchError:{defaultValue:null,description:"fires when the form fetch failed",name:"onDataFetchError",required:!1,type:{name:"((error: IError, api: IDFormApi) => boolean | void)"}},onDataFetchComplete:{defaultValue:null,description:"fires after the completion of fetching the data, regardless of the result",name:"onDataFetchComplete",required:!1,type:{name:"((api: IDFormApi) => void)"}},onSubmit:{defaultValue:null,description:"Fires on submitting the form. Can returns Promise, Object, Boolean or Void",name:"onSubmit",required:!1,type:{name:"((values: Record<string, unknown>, api: IDFormApi) => boolean | void | IDFormSubmitResultPromise | IDFormSubmitResultObject)"}},onSubmitValidation:{defaultValue:null,description:"fires on submit validation",name:"onSubmitValidation",required:!1,type:{name:"((values: Record<string, unknown>, errors: Record<string, string>, api: IDFormApi) => void)"}},onSubmitSuccess:{defaultValue:null,description:"fires on submit failed",name:"onSubmitSuccess",required:!1,type:{name:"((values: Record<string, unknown>, resultValues: Record<string, unknown>, api: IDFormApi) => boolean | void)"}},onSubmitError:{defaultValue:null,description:"fires on submit error",name:"onSubmitError",required:!1,type:{name:"((values: Record<string, unknown>, error: IError, api: IDFormApi) => boolean | void)"}},onSubmitComplete:{defaultValue:null,description:"fires, when the submitting finishes, whether in failure or success.",name:"onSubmitComplete",required:!1,type:{name:"((values: Record<string, unknown>, errors: Record<string, string>, api: IDFormApi) => boolean | void)"}},onDataSetChange:{defaultValue:null,description:"fires, when the form dataSet changed. Unlike onFormValuesChanged, it is triggered only when a new dataSet is set via setFormValues and is not called when the user changes the field values",name:"onDataSetChange",required:!1,type:{name:"((dataSet: IDFormDataSet, api: IDFormApi) => IDFormDataSet) | undefined"}}}}}catch{}try{simpleForm.displayName="simpleForm",simpleForm.__docgenInfo={description:"Simple Dynamic form example",displayName:"simpleForm",props:{apiRef:{defaultValue:null,description:"A mutable object to merge with these controls api",name:"apiRef",required:!1,type:{name:"unknown"}},formId:{defaultValue:null,description:"Form formId",name:"formId",required:!1,type:{name:"string"}},buttons:{defaultValue:null,description:"Buttons properties",name:"buttons",required:!1,type:{name:"IFormButtons | null"}},className:{defaultValue:null,description:"Form CSS class",name:"className",required:!1,type:{name:"string"}},formStyle:{defaultValue:null,description:"Form style",name:"formStyle",required:!1,type:{name:"CSSProperties"}},containerClassName:{defaultValue:null,description:"Form container class name",name:"containerClassName",required:!1,type:{name:"string"}},containerStyle:{defaultValue:null,description:"Form container style",name:"containerStyle",required:!1,type:{name:"CSSProperties"}},contentIndent:{defaultValue:null,description:"Indent from the beginning of the controls (default 12)",name:"contentIndent",required:!1,type:{name:"number"}},dataSet:{defaultValue:null,description:"Form data",name:"dataSet",required:!1,type:{name:"IDFormDataSet"}},parentDataSet:{defaultValue:null,description:"Parent form data",name:"parentDataSet",required:!1,type:{name:"IDFormDataSet"}},fieldsProps:{defaultValue:null,description:"Fields properties",name:"fieldsProps",required:!1,type:{name:"IDFormFieldsProps"}},colorType:{defaultValue:null,description:"Form color type",name:"colorType",required:!1,type:{name:"enum",value:[{value:'"warning"'},{value:'"neutral"'},{value:'"info"'},{value:'"success"'},{value:'"danger"'}]}},labelCol:{defaultValue:null,description:"label column parameters, for example span:'8'",name:"labelCol",required:!1,type:{name:"ColProps"}},wrapperCol:{defaultValue:null,description:"wrapper column parameters, for example span:'16'",name:"wrapperCol",required:!1,type:{name:"ColProps"}},labelAlign:{defaultValue:null,description:"text align of label of all items",name:"labelAlign",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},layout:{defaultValue:null,description:"Form layout (horizontal or vertical). Vertical is default",name:"layout",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},formMode:{defaultValue:null,description:"Form mode",name:"formMode",required:!1,type:{name:"enum",value:[{value:'"view"'},{value:'"create"'},{value:'"update"'},{value:'"clone"'},{value:'"delete"'}]}},readOnly:{defaultValue:null,description:"The form is read only",name:"readOnly",required:!1,type:{name:"boolean"}},disableDepended:{defaultValue:null,description:"Automatically disable fields if they depend on fields whose value is not set. Otherwise, such fields will be automatically hidden",name:"disableDepended",required:!1,type:{name:"boolean"}},tabsHeight:{defaultValue:null,description:"Tabs panes height (default 40)",name:"tabsHeight",required:!1,type:{name:"number"}},unfilledForm:{defaultValue:null,description:"No use controls data",name:"unfilledForm",required:!1,type:{name:"boolean"}},validationRules:{defaultValue:null,description:"Validation rules",name:"validationRules",required:!1,type:{name:"IDFormValidationRules"}},confirmChanges:{defaultValue:null,description:"Should the form request confirmation before the form submitting or cancel, if the form data was changed by the user",name:"confirmChanges",required:!1,type:{name:"boolean"}},submitConfirmMessage:{defaultValue:null,description:"Confirm message before the form submitting",name:"submitConfirmMessage",required:!1,type:{name:"ReactNode"}},requiredMark:{defaultValue:null,description:"Required mark style. Can use required mark or optional mark. You can not config to single Form.Item since this is a Form level config",name:"requiredMark",required:!1,type:{name:"RequiredMark"}},arrowsButtonsSelection:{defaultValue:null,description:"allow select buttons using arrows keys",name:"arrowsButtonsSelection",required:!1,type:{name:"boolean"}},onFormDirtyStateChanged:{defaultValue:null,description:"fires when the dirty state of the form changed",name:"onFormDirtyStateChanged",required:!1,type:{name:"((state: boolean, api: IDFormApi) => void)"}},onFormReadOnlyStateChanged:{defaultValue:null,description:"fires when the read only state of the form changed",name:"onFormReadOnlyStateChanged",required:!1,type:{name:"((state: boolean, api: IDFormApi) => void)"}},onFormDisabledStateChanged:{defaultValue:null,description:"fires when the disabled state of the form changed",name:"onFormDisabledStateChanged",required:!1,type:{name:"((state: boolean, api: IDFormApi) => void)"}},onFormInit:{defaultValue:null,description:"fires when the form began initialization (renders for the first time)",name:"onFormInit",required:!1,type:{name:"((api: IDFormApi) => void)"}},onFormModelInitialized:{defaultValue:null,description:"fires when the form model has been initialized",name:"onFormModelInitialized",required:!1,type:{name:"((api: IDFormApi) => void)"}},onFormReadyStateChanged:{defaultValue:null,description:"fires when the form ready status changed (form ready means form is rendered, initialized and all fields data are loaded)",name:"onFormReadyStateChanged",required:!1,type:{name:"((state: boolean, api: IDFormApi) => boolean | void)"}},onFormValuesChanged:{defaultValue:null,description:"fires when the form values changed",name:"onFormValuesChanged",required:!1,type:{name:"((fieldName: string, values: Record<string, unknown>, api: IDFormApi) => void)"}},onFormValidated:{defaultValue:null,description:"fires when the form validated",name:"onFormValidated",required:!1,type:{name:"((values: Record<string, unknown>, errors: Record<string, string>, isSubmit: boolean, api: IDFormApi) => void)"}},onFormHasErrors:{defaultValue:null,description:"fires when the form has errors",name:"onFormHasErrors",required:!1,type:{name:"((values: Record<string, unknown>, errors: Record<string, unknown>, api: IDFormApi) => void)"}},onFormHasNoErrors:{defaultValue:null,description:"fires when the form has no errors",name:"onFormHasNoErrors",required:!1,type:{name:"((values: Record<string, unknown>, api: IDFormApi) => boolean | void)"}},onDataFetch:{defaultValue:null,description:"fires when the form trying to fetch data",name:"onDataFetch",required:!1,type:{name:"((api: IDFormApi) => IDFormDataSourcePromise)"}},onDataFetchSuccess:{defaultValue:null,description:"fires when the form fetch success",name:"onDataFetchSuccess",required:!1,type:{name:"((result: { data: Record<string, unknown>; }, api: IDFormApi) => boolean | void)"}},onDataFetchError:{defaultValue:null,description:"fires when the form fetch failed",name:"onDataFetchError",required:!1,type:{name:"((error: IError, api: IDFormApi) => boolean | void)"}},onDataFetchComplete:{defaultValue:null,description:"fires after the completion of fetching the data, regardless of the result",name:"onDataFetchComplete",required:!1,type:{name:"((api: IDFormApi) => void)"}},onSubmit:{defaultValue:null,description:"Fires on submitting the form. Can returns Promise, Object, Boolean or Void",name:"onSubmit",required:!1,type:{name:"((values: Record<string, unknown>, api: IDFormApi) => boolean | void | IDFormSubmitResultPromise | IDFormSubmitResultObject)"}},onSubmitValidation:{defaultValue:null,description:"fires on submit validation",name:"onSubmitValidation",required:!1,type:{name:"((values: Record<string, unknown>, errors: Record<string, string>, api: IDFormApi) => void)"}},onSubmitSuccess:{defaultValue:null,description:"fires on submit failed",name:"onSubmitSuccess",required:!1,type:{name:"((values: Record<string, unknown>, resultValues: Record<string, unknown>, api: IDFormApi) => boolean | void)"}},onSubmitError:{defaultValue:null,description:"fires on submit error",name:"onSubmitError",required:!1,type:{name:"((values: Record<string, unknown>, error: IError, api: IDFormApi) => boolean | void)"}},onSubmitComplete:{defaultValue:null,description:"fires, when the submitting finishes, whether in failure or success.",name:"onSubmitComplete",required:!1,type:{name:"((values: Record<string, unknown>, errors: Record<string, string>, api: IDFormApi) => boolean | void)"}},onDataSetChange:{defaultValue:null,description:"fires, when the form dataSet changed. Unlike onFormValuesChanged, it is triggered only when a new dataSet is set via setFormValues and is not called when the user changes the field values",name:"onDataSetChange",required:!1,type:{name:"((dataSet: IDFormDataSet, api: IDFormApi) => IDFormDataSet) | undefined"}}}}}catch{}const ue={title:"DForm/Examples/SimpleForm",component:p,tags:["autodocs"],parameters:{docs:{source:{language:"tsx",format:!0,code:`
                    import React from 'react';
                    import {DForm, IDFormProps} from @krinopotam/ui-kit/dForm';
                    import {InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField";
                    const formProps: IDFormProps = {
                        formId: 'Test form',
                        confirmChanges: true,
                        fieldsProps: {
                            login: {component: InputField, label: 'Логин', tooltip: 'Ввод логина'},
                            password: {component: InputField, label: 'Пароль', tooltip: 'Ввод пвароль'},
                        },
                        buttons: {ok: {position: 'right'}},
                    };
                    /** Simple Dynamic form example */
                    export const SimpleForm = (props?: IDFormProps): React.JSX.Element => {
                        const compProps = {...formProps, ...props};
                        return (
                            <>
                                <div style={{maxWidth: 500}}>
                                    <DForm {...compProps} />
                                </div>
                            </>
                        );
                    };
                    export default SimpleForm;
                `}}}},a={args:{layout:"horizontal",onFormModelInitialized:t(),onFormInit:t()}};var i,l,s;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    layout: 'horizontal',
    onFormModelInitialized: fn(),
    onFormInit: fn()
  }
}`,...(s=(l=a.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const me=["Playground"];export{a as Playground,me as __namedExportsOrder,ue as default};
