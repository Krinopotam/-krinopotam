/// <reference types="react" />
import { IDFormApi } from '../../dForm';
import { IGridApi } from "./api";
export declare const usePrepareEditFormProps: (gridApi: IGridApi) => {
    title?: string | undefined;
    width?: number | undefined;
    minWidth?: number | undefined;
    maxWidth?: number | undefined;
    bodyHeight?: number | undefined;
    bodyMinHeight?: number | undefined;
    bodyMaxHeight?: number | undefined;
    bodyStyle?: import("react").CSSProperties | undefined;
    notScrollable?: boolean | undefined;
    resizable?: boolean | undefined;
    isOpened?: boolean | undefined;
    headerStyle?: import("react").CSSProperties | undefined;
    headerIcon?: import("react").ReactNode;
    footerStyle?: import("react").CSSProperties | undefined;
    closeFormConfirmMessage?: import("react").ReactNode;
    onOpen?: ((formApi: import("../../dFormModal").IDFormModalApi, dataSet: import("../../dForm").IDFormDataSet | undefined) => boolean | void) | undefined;
    onOpened?: ((formApi: import("../../dFormModal").IDFormModalApi, dataSet: import("../../dForm").IDFormDataSet | undefined) => void) | undefined;
    onClosing?: ((formApi: import("../../dFormModal").IDFormModalApi) => boolean | void) | undefined;
    onClosed?: ((formApi: import("../../dFormModal").IDFormModalApi) => void) | undefined;
    onTabHiddenStateChanged?: (((tabName: string, state: boolean, api: import("../../dFormModal").IDFormModalApi) => void) & ((tabName: string, state: boolean, api: IDFormApi) => void)) | undefined;
    onTabReadOnlyStateChanged?: (((tabName: string, state: boolean, api: import("../../dFormModal").IDFormModalApi) => void) & ((tabName: string, state: boolean, api: IDFormApi) => void)) | undefined;
    onTabDisabledStateChanged?: (((tabName: string, state: boolean, api: import("../../dFormModal").IDFormModalApi) => void) & ((tabName: string, state: boolean, api: IDFormApi) => void)) | undefined;
    onFormDirtyStateChanged?: (((state: boolean, api: import("../../dFormModal").IDFormModalApi) => void) & ((state: boolean, api: IDFormApi) => void)) | undefined;
    onFormReadOnlyStateChanged?: (((state: boolean, api: import("../../dFormModal").IDFormModalApi) => void) & ((state: boolean, api: IDFormApi) => void)) | undefined;
    onFormDisabledStateChanged?: (((state: boolean, api: import("../../dFormModal").IDFormModalApi) => void) & ((state: boolean, api: IDFormApi) => void)) | undefined;
    onFormInit?: (((api: import("../../dFormModal").IDFormModalApi) => void) & ((api: IDFormApi) => void)) | undefined;
    onFormReadyStateChanged?: (((state: boolean, api: import("../../dFormModal").IDFormModalApi) => boolean | void) & ((state: boolean, api: IDFormApi) => boolean | void)) | undefined;
    onFormValidated?: (((values: Record<string, unknown>, errors: Record<string, string>, isSubmit: boolean, api: import("../../dFormModal").IDFormModalApi) => void) & ((values: Record<string, unknown>, errors: Record<string, string>, isSubmit: boolean, api: IDFormApi) => void)) | undefined;
    onFormHasErrors?: (((values: Record<string, unknown>, errors: Record<string, unknown>, api: import("../../dFormModal").IDFormModalApi) => void) & ((values: Record<string, unknown>, errors: Record<string, unknown>, api: IDFormApi) => void)) | undefined;
    onFormHasNoErrors?: (((values: Record<string, unknown>, api: import("../../dFormModal").IDFormModalApi) => boolean | void) & ((values: Record<string, unknown>, api: IDFormApi) => boolean | void)) | undefined;
    onDataFetch?: (((api: import("../../dFormModal").IDFormModalApi) => import("../../dForm").IDFormDataSourcePromise | undefined) & ((api: IDFormApi) => import("../../dForm").IDFormDataSourcePromise | undefined)) | undefined;
    onDataFetchSuccess?: (((result: {
        data: Record<string, unknown>;
    }, api: import("../../dFormModal").IDFormModalApi) => boolean | void) & ((result: {
        data: Record<string, unknown>;
    }, api: IDFormApi) => boolean | void)) | undefined;
    onDataFetchError?: (((message: string, code: number, api: import("../../dFormModal").IDFormModalApi) => boolean | void) & ((message: string, code: number, api: IDFormApi) => boolean | void)) | undefined;
    onDataFetchComplete?: (((api: import("../../dFormModal").IDFormModalApi) => void) & ((api: IDFormApi) => void)) | undefined;
    onSubmit?: (((values: Record<string, unknown>, api: import("../../dFormModal").IDFormModalApi) => boolean | void | import("../../dForm").IDFormSubmitResultPromise | import("../../dForm").IDFormSubmitResultObject) & ((values: Record<string, unknown>, api: IDFormApi) => boolean | void | import("../../dForm").IDFormSubmitResultPromise | import("../../dForm").IDFormSubmitResultObject)) | undefined;
    onSubmitValidation?: (((values: Record<string, unknown>, errors: Record<string, string | undefined>, api: import("../../dFormModal").IDFormModalApi) => void) & ((values: Record<string, unknown>, errors: Record<string, string | undefined>, api: IDFormApi) => void)) | undefined;
    onSubmitSuccess?: (((values: Record<string, unknown>, resultValues: Record<string, unknown> | undefined, api: import("../../dFormModal").IDFormModalApi) => boolean | void) & ((values: Record<string, unknown>, resultValues: Record<string, unknown> | undefined, api: IDFormApi) => boolean | void)) | undefined;
    onSubmitError?: (((values: Record<string, unknown>, message: string, code: number, api: import("../../dFormModal").IDFormModalApi) => boolean | void) & ((values: Record<string, unknown>, message: string, code: number, api: IDFormApi) => boolean | void)) | undefined;
    onSubmitComplete?: (((values: Record<string, unknown>, errors: Record<string, string | undefined>, api: import("../../dFormModal").IDFormModalApi) => boolean | void) & ((values: Record<string, unknown>, errors: Record<string, string | undefined>, api: IDFormApi) => boolean | void)) | undefined;
    onDataSetChange?: (((dataSet: import("../../dForm").IDFormDataSet | undefined, api: import("../../dFormModal").IDFormModalApi) => import("../../dForm").IDFormDataSet | undefined) & ((dataSet: import("../../dForm").IDFormDataSet | undefined, api: IDFormApi) => import("../../dForm").IDFormDataSet | undefined)) | undefined;
    apiRef?: unknown;
    formId?: string | undefined;
    buttons?: import("../../buttonsRow").IFormButtons | null | undefined;
    className?: string | undefined;
    formStyle?: import("react").CSSProperties | undefined;
    containerClassName?: string | undefined;
    containerStyle?: import("react").CSSProperties | undefined;
    contentIndent?: number | undefined;
    dataSet?: import("../../dForm").IDFormDataSet | undefined;
    parentDataSet?: import("../../dForm").IDFormDataSet | undefined;
    fieldsProps?: import("../../dForm").IDFormFieldsProps | undefined;
    colorType?: import("../../button/button").IColorType | undefined;
    labelCol?: import("antd").ColProps | undefined;
    wrapperCol?: import("antd").ColProps | undefined;
    labelAlign?: import("antd/es/form/interface").FormLabelAlign | undefined;
    layout?: "horizontal" | "vertical" | undefined;
    formMode?: import("../../dForm").IDFormMode | undefined;
    readOnly?: boolean | undefined;
    disableDepended?: boolean | undefined;
    tabsHeight?: number | undefined;
    unfilledForm?: boolean | undefined;
    validationRules?: import("../../dForm").IDFormValidationRules | undefined;
    confirmChanges?: boolean | undefined;
    submitConfirmMessage?: import("react").ReactNode;
    requiredMark?: import("antd/es/form/Form").RequiredMark | undefined;
    arrowsButtonsSelection?: boolean | undefined;
} | undefined;
