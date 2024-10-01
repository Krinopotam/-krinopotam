import{j as e}from"./extends-BRD_ACZV.js";import{D as d}from"./dForm-hjCYRWo-.js";import"./dayjs.min-C_f_bfvq.js";import{I as t}from"./inputField-VAU2qHkF.js";import{f as n}from"./index-C_FWhylE.js";import"./index-uubelm5h.js";import"./index-DaxZXI7c.js";import"./index-DMj878Uq.js";import"./compact-item-Cq9_oKvy.js";import"./useToken-DcxMJEAm.js";import"./assertThisInitialized-C7eLZ5Vw.js";import"./index-jGjHQRy5.js";import"./context-Dw4q7UZT.js";import"./wrapNativeSuper-CxOa5OEc.js";import"./pickAttrs-BK90issH.js";import"./useVariants-BWqEf-UO.js";import"./ContextIsolator-CHJRnwEJ.js";import"./index-Bx0hWZS5.js";import"./motion-DInqWZju.js";import"./row-DGeTWQOf.js";import"./roundedArrow-DHHCDUVh.js";import"./zoom-C6i_ByaA.js";import"./colors-DipieP1N.js";import"./QuestionCircleOutlined-CTTbfydo.js";import"./ExclamationCircleFilled-BgVBMMmD.js";import"./isArray-Cl7xn3Rc.js";import"./buttonsRow-B6oqgMUN.js";import"./button-Cwr6DgNZ.js";import"./button-BV2UQvY4.js";import"./index-C09VgAx5.js";import"./Sider-BdPjJ3kT.js";import"./KeyCode-DNlgD2sM.js";import"./DownOutlined-DgGpJDSU.js";import"./getNanoId-DD8laUaD.js";import"./updateModalTheme-zQ_YOxAB.js";import"./headerRender-C2XI2y67.js";import"./index-BloC46dp.js";import"./CloseOutlined-DudQdYPk.js";import"./useClosable-DUhy-sMk.js";import"./index-D3eZ-H7s.js";import"./InfoCircleOutlined-CvX0ly-N.js";import"./index-DZAtJoSc.js";import"./CheckOutlined-Dktt4At8.js";import"./modal-DD7Ss0Dh.js";import"./useIsDebugMode-_qV3LLe4.js";import"./index-CGAOD1SL.js";import"./EyeOutlined-BmNE_l5f.js";import"./SearchOutlined-wK2xDu78.js";const u={formId:"Test form",confirmChanges:!0,fieldsProps:{login:{component:t,label:"Логин",tooltip:"Ввод логина"},password:{component:t,label:"Пароль",tooltip:"Ввод пвароль"}},buttons:{ok:{position:"right"}}},o=r=>{const m={...u,...r};return e.jsx(e.Fragment,{children:e.jsx("div",{style:{maxWidth:500},children:e.jsx(d,{...m})})})},p=o;try{o.displayName="SimpleForm",o.__docgenInfo={description:"Simple Dynamic form example",displayName:"SimpleForm",props:{apiRef:{defaultValue:null,description:"A mutable object to merge with these controls api",name:"apiRef",required:!1,type:{name:"unknown"}},formId:{defaultValue:null,description:"Form formId",name:"formId",required:!1,type:{name:"string"}},buttons:{defaultValue:null,description:"Buttons properties",name:"buttons",required:!1,type:{name:"IFormButtons | null"}},className:{defaultValue:null,description:"Form CSS class",name:"className",required:!1,type:{name:"string"}},formStyle:{defaultValue:null,description:"Form style",name:"formStyle",required:!1,type:{name:"CSSProperties"}},containerClassName:{defaultValue:null,description:"Form container class name",name:"containerClassName",required:!1,type:{name:"string"}},containerStyle:{defaultValue:null,description:"Form container style",name:"containerStyle",required:!1,type:{name:"CSSProperties"}},contentIndent:{defaultValue:null,description:"Indent from the beginning of the controls (default 12)",name:"contentIndent",required:!1,type:{name:"number"}},defaultValues:{defaultValue:null,description:`Form default values. Unlike dataSet, defaultValues sets field values in Create form mode.
Has a priority lower than the field's set value`,name:"defaultValues",required:!1,type:{name:"Record<string, any>"}},dataSet:{defaultValue:null,description:"Form data (are not set in Create form mode)",name:"dataSet",required:!1,type:{name:"IDFormDataSet"}},parentDataSet:{defaultValue:null,description:"Parent form data",name:"parentDataSet",required:!1,type:{name:"IDFormDataSet"}},fieldsProps:{defaultValue:null,description:"Fields properties",name:"fieldsProps",required:!1,type:{name:"IDFormFieldsProps"}},colorType:{defaultValue:null,description:"Form color type",name:"colorType",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"danger"'}]}},labelCol:{defaultValue:null,description:"label column parameters, for example span:'8'",name:"labelCol",required:!1,type:{name:"ColProps"}},wrapperCol:{defaultValue:null,description:"wrapper column parameters, for example span:'16'",name:"wrapperCol",required:!1,type:{name:"ColProps"}},labelAlign:{defaultValue:null,description:"text align of label of all items",name:"labelAlign",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},layout:{defaultValue:null,description:"Form layout (horizontal or vertical). Vertical is default",name:"layout",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},formMode:{defaultValue:null,description:"Form mode",name:"formMode",required:!1,type:{name:"enum",value:[{value:'"view"'},{value:'"create"'},{value:'"update"'},{value:'"clone"'},{value:'"delete"'}]}},readOnly:{defaultValue:null,description:"The form is read only",name:"readOnly",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"The form is disabled",name:"disabled",required:!1,type:{name:"boolean"}},disableDepended:{defaultValue:null,description:"Automatically disable fields if they depend on fields whose value is not set. Otherwise, such fields will be automatically hidden",name:"disableDepended",required:!1,type:{name:"boolean"}},tabsHeight:{defaultValue:null,description:"Tabs panes height (default 40)",name:"tabsHeight",required:!1,type:{name:"number"}},unfilledForm:{defaultValue:null,description:"No use controls data",name:"unfilledForm",required:!1,type:{name:"boolean"}},validationRules:{defaultValue:null,description:"Validation rules",name:"validationRules",required:!1,type:{name:"IDFormValidationRules"}},confirmChanges:{defaultValue:null,description:"Should the form request confirmation before the form submitting or cancel, if the form data was changed by the user",name:"confirmChanges",required:!1,type:{name:"boolean"}},submitConfirmMessage:{defaultValue:null,description:"Confirm message before the form submitting",name:"submitConfirmMessage",required:!1,type:{name:"ReactNode"}},requiredMark:{defaultValue:null,description:"Required mark style. Can use required mark or optional mark. You can not config to single Form.Item since this is a Form level config",name:"requiredMark",required:!1,type:{name:"RequiredMark"}},arrowsButtonsSelection:{defaultValue:null,description:"allow select buttons using arrows keys",name:"arrowsButtonsSelection",required:!1,type:{name:"boolean"}},assignExtraValues:{defaultValue:null,description:`If specified, additional values will be added to the resulting form data depending on the form mode
@example {create:'isNew', clone?:'clonedFrom', update?:'isUpdating'}`,name:"assignExtraValues",required:!1,type:{name:"{ create?: string; clone?: string; update?: string | undefined; } | undefined"}},language:{defaultValue:null,description:"Language",name:"language",required:!1,type:{name:"enum",value:[{value:'"ru"'},{value:'"en"'},{value:'"cn"'}]}},translation:{defaultValue:null,description:"Custom translation",name:"translation",required:!1,type:{name:"Partial<{ ok: string; cancel: string; yes: string; no: string; confirm: string; fixError: string; confirmChangesQs: string; tryAgainQt: string; error: string; }>"}},_overriddenApi:{defaultValue:null,description:"@private O A service property meaning that the form is used in another component that overrides the api part (for example DModalForm)",name:"_overriddenApi",required:!1,type:{name:"{ t?: boolean; model?: boolean; getButtonsApi?: boolean | undefined; validateForm?: boolean | undefined; submitForm?: boolean | undefined; getId?: boolean | undefined; getProps?: boolean | undefined; setProps?: boolean | undefined; updateProps?: boolean | undefined; getIsMounted?: boolean | u..."}},onFirstRender:{defaultValue:null,description:"On first render callback",name:"onFirstRender",required:!1,type:{name:"((props: IDFormProps) => void | IDFormProps)"}},onFormDirtyStateChanged:{defaultValue:null,description:"fires when the dirty state of the form changed",name:"onFormDirtyStateChanged",required:!1,type:{name:"((state: boolean, api: IDFormApi<IDFormProps>, cbControl: CallbackControl) => void)"}},onFormReadOnlyStateChanged:{defaultValue:null,description:"fires when the read only state of the form changed",name:"onFormReadOnlyStateChanged",required:!1,type:{name:"((state: boolean, api: IDFormApi<IDFormProps>, cbControl: CallbackControl) => void)"}},onFormDisabledStateChanged:{defaultValue:null,description:"fires when the disabled state of the form changed",name:"onFormDisabledStateChanged",required:!1,type:{name:"((state: boolean, api: IDFormApi<IDFormProps>, cbControl: CallbackControl) => void)"}},onFormInit:{defaultValue:null,description:"fires when the form began initialization (renders for the first time)",name:"onFormInit",required:!1,type:{name:"((api: IDFormApi<IDFormProps>, cbControl: CallbackControl) => void)"}},onFormModelInitialized:{defaultValue:null,description:"fires when the form model has been initialized",name:"onFormModelInitialized",required:!1,type:{name:"((api: IDFormApi<IDFormProps>, cbControl: CallbackControl) => void)"}},onFormReadyStateChanged:{defaultValue:null,description:"fires when the form ready status changed (form ready means form is rendered, initialized and all fields data are loaded)",name:"onFormReadyStateChanged",required:!1,type:{name:"((state: boolean, api: IDFormApi<IDFormProps>, cbControl: CallbackControl) => void)"}},onFormValuesChanged:{defaultValue:null,description:"fires when the form values changed",name:"onFormValuesChanged",required:!1,type:{name:"((fieldName: string, values: Record<string, any>, api: IDFormApi<IDFormProps>, cbControl: CallbackControl) => void)"}},onFormValidated:{defaultValue:null,description:`fires when the form validated
@param values form only values
@param dataSet form dataSet merged with form values
@param errors errors
@param isSubmit a sign that the form is validated upon form submission
@param api form api instance`,name:"onFormValidated",required:!1,type:{name:"((values: Record<string, any>, dataSet: IDFormDataSet, errors: Record<string, string>, isSubmit: boolean, api: IDFormApi<IDFormProps>, cbControl: CallbackControl) => void)"}},onFormHasErrors:{defaultValue:null,description:`fires when the form has errors
@param values form only values
@param dataSet form dataSet merged with form values
@param errors errors
@param api form api instance`,name:"onFormHasErrors",required:!1,type:{name:"((values: Record<string, any>, dataSet: IDFormDataSet, errors: Record<string, any>, api: IDFormApi<IDFormProps>, cbControl: CallbackControl) => void)"}},onFormHasNoErrors:{defaultValue:null,description:`fires when the form has no errors
@param values form only values
@param dataSet form dataSet merged with form values
@param api form api instance`,name:"onFormHasNoErrors",required:!1,type:{name:"((values: Record<string, any>, dataSet: IDFormDataSet, api: IDFormApi<IDFormProps>, cbControl: CallbackControl) => void)"}},onDataFetch:{defaultValue:null,description:"fires when the form trying to fetch data",name:"onDataFetch",required:!1,type:{name:"((api: IDFormApi<IDFormProps>, cbControl: CallbackControl) => IDFormDataSourcePromise)"}},onDataFetchSuccess:{defaultValue:null,description:"fires when the form fetch success",name:"onDataFetchSuccess",required:!1,type:{name:"((result: { data: Record<string, any>; }, api: IDFormApi<IDFormProps>, cbControl: CallbackControl) => void)"}},onDataFetchError:{defaultValue:null,description:"fires when the form fetch failed",name:"onDataFetchError",required:!1,type:{name:"((error: IError, api: IDFormApi<IDFormProps>, cbControl: CallbackControl) => void)"}},onDataFetchComplete:{defaultValue:null,description:"fires after the completion of fetching the data, regardless of the result",name:"onDataFetchComplete",required:!1,type:{name:"((api: IDFormApi<IDFormProps>, cbControl: CallbackControl) => void)"}},onSubmit:{defaultValue:null,description:`Fires on submitting the form. Can returns Promise, Object, Boolean or Void
@param values form only values
@param dataSet form dataSet merged with form values
@param api form api instance`,name:"onSubmit",required:!1,type:{name:"((values: Record<string, any>, dataSet: IDFormDataSet, api: IDFormApi<IDFormProps>, cbControl: CallbackControl) => boolean | ... 2 more ... | IDFormSubmitResultObject)"}},onSubmitValidation:{defaultValue:null,description:`fires on submit validation
@param values form only values
@param dataSet form dataSet merged with form values
@param errors errors
@param api form api instance`,name:"onSubmitValidation",required:!1,type:{name:"((values: Record<string, any>, dataSet: IDFormDataSet, errors: Record<string, string>, api: IDFormApi<IDFormProps>, cbControl: CallbackControl) => void)"}},onSubmitSuccess:{defaultValue:null,description:`fires on submit failed          *
@param values form only values
@param dataSet form dataSet merged with form values
@param resultData the data returned by the form submission method (for example, fetch). If the method does not return a data, then resultData = dataSet
@param api form api instance`,name:"onSubmitSuccess",required:!1,type:{name:"((values: Record<string, any>, dataSet: IDFormDataSet, resultData: Record<string, any>, api: IDFormApi<IDFormProps>, cbControl: CallbackControl) => void)"}},onSubmitError:{defaultValue:null,description:`fires on submit error
@param values form only values
@param dataSet form dataSet merged with form values
@param error error
@param api form api instance`,name:"onSubmitError",required:!1,type:{name:"((values: Record<string, any>, dataSet: IDFormDataSet, error: IError, api: IDFormApi<IDFormProps>, cbControl: CallbackControl) => void)"}},onSubmitComplete:{defaultValue:null,description:`fires, when the submitting finishes, whether in failure or success.
@param values form only values
@param dataSet form dataSet merged with form values
@param errors errors
@param api form api instance`,name:"onSubmitComplete",required:!1,type:{name:"((values: Record<string, any>, dataSet: IDFormDataSet, errors: Record<string, string>, api: IDFormApi<IDFormProps>, cbControl: CallbackControl) => void)"}},onDataSetChange:{defaultValue:null,description:"fires, when the form dataSet changed. Unlike onFormValuesChanged, it is triggered only when a new dataSet is set via setFormValues and is not called when the user changes the field values",name:"onDataSetChange",required:!1,type:{name:"((dataSet: IDFormDataSet, api: IDFormApi<IDFormProps>, cbControl: CallbackControl) => IDFormDataSet) | undefined"}}}}}catch{}try{simpleForm.displayName="simpleForm",simpleForm.__docgenInfo={description:"Simple Dynamic form example",displayName:"simpleForm",props:{apiRef:{defaultValue:null,description:"A mutable object to merge with these controls api",name:"apiRef",required:!1,type:{name:"unknown"}},formId:{defaultValue:null,description:"Form formId",name:"formId",required:!1,type:{name:"string"}},buttons:{defaultValue:null,description:"Buttons properties",name:"buttons",required:!1,type:{name:"IFormButtons | null"}},className:{defaultValue:null,description:"Form CSS class",name:"className",required:!1,type:{name:"string"}},formStyle:{defaultValue:null,description:"Form style",name:"formStyle",required:!1,type:{name:"CSSProperties"}},containerClassName:{defaultValue:null,description:"Form container class name",name:"containerClassName",required:!1,type:{name:"string"}},containerStyle:{defaultValue:null,description:"Form container style",name:"containerStyle",required:!1,type:{name:"CSSProperties"}},contentIndent:{defaultValue:null,description:"Indent from the beginning of the controls (default 12)",name:"contentIndent",required:!1,type:{name:"number"}},defaultValues:{defaultValue:null,description:`Form default values. Unlike dataSet, defaultValues sets field values in Create form mode.
Has a priority lower than the field's set value`,name:"defaultValues",required:!1,type:{name:"Record<string, any>"}},dataSet:{defaultValue:null,description:"Form data (are not set in Create form mode)",name:"dataSet",required:!1,type:{name:"IDFormDataSet"}},parentDataSet:{defaultValue:null,description:"Parent form data",name:"parentDataSet",required:!1,type:{name:"IDFormDataSet"}},fieldsProps:{defaultValue:null,description:"Fields properties",name:"fieldsProps",required:!1,type:{name:"IDFormFieldsProps"}},colorType:{defaultValue:null,description:"Form color type",name:"colorType",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"danger"'}]}},labelCol:{defaultValue:null,description:"label column parameters, for example span:'8'",name:"labelCol",required:!1,type:{name:"ColProps"}},wrapperCol:{defaultValue:null,description:"wrapper column parameters, for example span:'16'",name:"wrapperCol",required:!1,type:{name:"ColProps"}},labelAlign:{defaultValue:null,description:"text align of label of all items",name:"labelAlign",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},layout:{defaultValue:null,description:"Form layout (horizontal or vertical). Vertical is default",name:"layout",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},formMode:{defaultValue:null,description:"Form mode",name:"formMode",required:!1,type:{name:"enum",value:[{value:'"view"'},{value:'"create"'},{value:'"update"'},{value:'"clone"'},{value:'"delete"'}]}},readOnly:{defaultValue:null,description:"The form is read only",name:"readOnly",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"The form is disabled",name:"disabled",required:!1,type:{name:"boolean"}},disableDepended:{defaultValue:null,description:"Automatically disable fields if they depend on fields whose value is not set. Otherwise, such fields will be automatically hidden",name:"disableDepended",required:!1,type:{name:"boolean"}},tabsHeight:{defaultValue:null,description:"Tabs panes height (default 40)",name:"tabsHeight",required:!1,type:{name:"number"}},unfilledForm:{defaultValue:null,description:"No use controls data",name:"unfilledForm",required:!1,type:{name:"boolean"}},validationRules:{defaultValue:null,description:"Validation rules",name:"validationRules",required:!1,type:{name:"IDFormValidationRules"}},confirmChanges:{defaultValue:null,description:"Should the form request confirmation before the form submitting or cancel, if the form data was changed by the user",name:"confirmChanges",required:!1,type:{name:"boolean"}},submitConfirmMessage:{defaultValue:null,description:"Confirm message before the form submitting",name:"submitConfirmMessage",required:!1,type:{name:"ReactNode"}},requiredMark:{defaultValue:null,description:"Required mark style. Can use required mark or optional mark. You can not config to single Form.Item since this is a Form level config",name:"requiredMark",required:!1,type:{name:"RequiredMark"}},arrowsButtonsSelection:{defaultValue:null,description:"allow select buttons using arrows keys",name:"arrowsButtonsSelection",required:!1,type:{name:"boolean"}},assignExtraValues:{defaultValue:null,description:`If specified, additional values will be added to the resulting form data depending on the form mode
@example {create:'isNew', clone?:'clonedFrom', update?:'isUpdating'}`,name:"assignExtraValues",required:!1,type:{name:"{ create?: string; clone?: string; update?: string | undefined; } | undefined"}},language:{defaultValue:null,description:"Language",name:"language",required:!1,type:{name:"enum",value:[{value:'"ru"'},{value:'"en"'},{value:'"cn"'}]}},translation:{defaultValue:null,description:"Custom translation",name:"translation",required:!1,type:{name:"Partial<{ ok: string; cancel: string; yes: string; no: string; confirm: string; fixError: string; confirmChangesQs: string; tryAgainQt: string; error: string; }>"}},_overriddenApi:{defaultValue:null,description:"@private O A service property meaning that the form is used in another component that overrides the api part (for example DModalForm)",name:"_overriddenApi",required:!1,type:{name:"{ t?: boolean; model?: boolean; getButtonsApi?: boolean | undefined; validateForm?: boolean | undefined; submitForm?: boolean | undefined; getId?: boolean | undefined; getProps?: boolean | undefined; setProps?: boolean | undefined; updateProps?: boolean | undefined; getIsMounted?: boolean | u..."}},onFirstRender:{defaultValue:null,description:"On first render callback",name:"onFirstRender",required:!1,type:{name:"((props: IDFormProps) => void | IDFormProps)"}},onFormDirtyStateChanged:{defaultValue:null,description:"fires when the dirty state of the form changed",name:"onFormDirtyStateChanged",required:!1,type:{name:"((state: boolean, api: IDFormApi<IDFormProps>, cbControl: CallbackControl) => void)"}},onFormReadOnlyStateChanged:{defaultValue:null,description:"fires when the read only state of the form changed",name:"onFormReadOnlyStateChanged",required:!1,type:{name:"((state: boolean, api: IDFormApi<IDFormProps>, cbControl: CallbackControl) => void)"}},onFormDisabledStateChanged:{defaultValue:null,description:"fires when the disabled state of the form changed",name:"onFormDisabledStateChanged",required:!1,type:{name:"((state: boolean, api: IDFormApi<IDFormProps>, cbControl: CallbackControl) => void)"}},onFormInit:{defaultValue:null,description:"fires when the form began initialization (renders for the first time)",name:"onFormInit",required:!1,type:{name:"((api: IDFormApi<IDFormProps>, cbControl: CallbackControl) => void)"}},onFormModelInitialized:{defaultValue:null,description:"fires when the form model has been initialized",name:"onFormModelInitialized",required:!1,type:{name:"((api: IDFormApi<IDFormProps>, cbControl: CallbackControl) => void)"}},onFormReadyStateChanged:{defaultValue:null,description:"fires when the form ready status changed (form ready means form is rendered, initialized and all fields data are loaded)",name:"onFormReadyStateChanged",required:!1,type:{name:"((state: boolean, api: IDFormApi<IDFormProps>, cbControl: CallbackControl) => void)"}},onFormValuesChanged:{defaultValue:null,description:"fires when the form values changed",name:"onFormValuesChanged",required:!1,type:{name:"((fieldName: string, values: Record<string, any>, api: IDFormApi<IDFormProps>, cbControl: CallbackControl) => void)"}},onFormValidated:{defaultValue:null,description:`fires when the form validated
@param values form only values
@param dataSet form dataSet merged with form values
@param errors errors
@param isSubmit a sign that the form is validated upon form submission
@param api form api instance`,name:"onFormValidated",required:!1,type:{name:"((values: Record<string, any>, dataSet: IDFormDataSet, errors: Record<string, string>, isSubmit: boolean, api: IDFormApi<IDFormProps>, cbControl: CallbackControl) => void)"}},onFormHasErrors:{defaultValue:null,description:`fires when the form has errors
@param values form only values
@param dataSet form dataSet merged with form values
@param errors errors
@param api form api instance`,name:"onFormHasErrors",required:!1,type:{name:"((values: Record<string, any>, dataSet: IDFormDataSet, errors: Record<string, any>, api: IDFormApi<IDFormProps>, cbControl: CallbackControl) => void)"}},onFormHasNoErrors:{defaultValue:null,description:`fires when the form has no errors
@param values form only values
@param dataSet form dataSet merged with form values
@param api form api instance`,name:"onFormHasNoErrors",required:!1,type:{name:"((values: Record<string, any>, dataSet: IDFormDataSet, api: IDFormApi<IDFormProps>, cbControl: CallbackControl) => void)"}},onDataFetch:{defaultValue:null,description:"fires when the form trying to fetch data",name:"onDataFetch",required:!1,type:{name:"((api: IDFormApi<IDFormProps>, cbControl: CallbackControl) => IDFormDataSourcePromise)"}},onDataFetchSuccess:{defaultValue:null,description:"fires when the form fetch success",name:"onDataFetchSuccess",required:!1,type:{name:"((result: { data: Record<string, any>; }, api: IDFormApi<IDFormProps>, cbControl: CallbackControl) => void)"}},onDataFetchError:{defaultValue:null,description:"fires when the form fetch failed",name:"onDataFetchError",required:!1,type:{name:"((error: IError, api: IDFormApi<IDFormProps>, cbControl: CallbackControl) => void)"}},onDataFetchComplete:{defaultValue:null,description:"fires after the completion of fetching the data, regardless of the result",name:"onDataFetchComplete",required:!1,type:{name:"((api: IDFormApi<IDFormProps>, cbControl: CallbackControl) => void)"}},onSubmit:{defaultValue:null,description:`Fires on submitting the form. Can returns Promise, Object, Boolean or Void
@param values form only values
@param dataSet form dataSet merged with form values
@param api form api instance`,name:"onSubmit",required:!1,type:{name:"((values: Record<string, any>, dataSet: IDFormDataSet, api: IDFormApi<IDFormProps>, cbControl: CallbackControl) => boolean | ... 2 more ... | IDFormSubmitResultObject)"}},onSubmitValidation:{defaultValue:null,description:`fires on submit validation
@param values form only values
@param dataSet form dataSet merged with form values
@param errors errors
@param api form api instance`,name:"onSubmitValidation",required:!1,type:{name:"((values: Record<string, any>, dataSet: IDFormDataSet, errors: Record<string, string>, api: IDFormApi<IDFormProps>, cbControl: CallbackControl) => void)"}},onSubmitSuccess:{defaultValue:null,description:`fires on submit failed          *
@param values form only values
@param dataSet form dataSet merged with form values
@param resultData the data returned by the form submission method (for example, fetch). If the method does not return a data, then resultData = dataSet
@param api form api instance`,name:"onSubmitSuccess",required:!1,type:{name:"((values: Record<string, any>, dataSet: IDFormDataSet, resultData: Record<string, any>, api: IDFormApi<IDFormProps>, cbControl: CallbackControl) => void)"}},onSubmitError:{defaultValue:null,description:`fires on submit error
@param values form only values
@param dataSet form dataSet merged with form values
@param error error
@param api form api instance`,name:"onSubmitError",required:!1,type:{name:"((values: Record<string, any>, dataSet: IDFormDataSet, error: IError, api: IDFormApi<IDFormProps>, cbControl: CallbackControl) => void)"}},onSubmitComplete:{defaultValue:null,description:`fires, when the submitting finishes, whether in failure or success.
@param values form only values
@param dataSet form dataSet merged with form values
@param errors errors
@param api form api instance`,name:"onSubmitComplete",required:!1,type:{name:"((values: Record<string, any>, dataSet: IDFormDataSet, errors: Record<string, string>, api: IDFormApi<IDFormProps>, cbControl: CallbackControl) => void)"}},onDataSetChange:{defaultValue:null,description:"fires, when the form dataSet changed. Unlike onFormValuesChanged, it is triggered only when a new dataSet is set via setFormValues and is not called when the user changes the field values",name:"onDataSetChange",required:!1,type:{name:"((dataSet: IDFormDataSet, api: IDFormApi<IDFormProps>, cbControl: CallbackControl) => IDFormDataSet) | undefined"}}}}}catch{}const ie={title:"DForm/Examples/SimpleForm",component:p,tags:["autodocs"],parameters:{docs:{source:{language:"tsx",format:!0,code:`
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
                `}}}},a={args:{layout:"horizontal",onFormModelInitialized:n(),onFormInit:n()}};var l,i,s;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    layout: 'horizontal',
    onFormModelInitialized: fn(),
    onFormInit: fn()
  }
}`,...(s=(i=a.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const se=["Playground"];export{a as Playground,se as __namedExportsOrder,ie as default};