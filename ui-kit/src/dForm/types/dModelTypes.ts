import {IDFormDataSet, IDFormDataSourcePromise} from "@src/dForm/types/dFormTypes";
import {IError} from "@krinopotam/service-types";
import {DModel} from "@src/dForm";

export interface IDFormBaseCallbacks<T> {
    // The form callbacks
    /** fires when the dirty state of the form changed */
    onFormDirtyStateChanged?: (state: boolean, api: T) => void;

    /** fires when the read only state of the form changed */
    onFormReadOnlyStateChanged?: (state: boolean, api: T) => void;

    /** fires when the disabled state of the form changed */
    onFormDisabledStateChanged?: (state: boolean, api: T) => void;

    /** fires when the form began initialization (renders for the first time) */
    onFormInit?: (api: T) => void;

    /** fires when the form model has been initialized */
    onFormModelInitialized?: (api: T) => void;

    /** fires when the form ready status changed (form ready means form is rendered, initialized and all fields data are loaded) */
    onFormReadyStateChanged?: (state: boolean, api: T) => boolean | void;

    /** fires when the form values changed  */
    onFormValuesChanged?: (fieldName:string, values: Record<string, unknown>,  api: T) => void;

    /** fires when the form validated */
    onFormValidated?: (values: Record<string, unknown>, errors: Record<string, string>, isSubmit: boolean, api: T) => void;

    /** fires when the form has errors */
    onFormHasErrors?: (values: Record<string, unknown>, errors: Record<string, unknown>, api: T) => void;

    /** fires when the form has no errors */
    onFormHasNoErrors?: (values: Record<string, unknown>, api: T) => boolean | void;

    /** fires when the form trying to fetch data */
    onDataFetch?: (api: T) => IDFormDataSourcePromise | undefined;

    /** fires when the form fetch success */
    onDataFetchSuccess?: (result: { data: Record<string, unknown> }, api: T) => boolean | void;

    /** fires when the form fetch failed */
    onDataFetchError?: (error: IError, api: T) => boolean | void;

    /** fires after the completion of fetching the data, regardless of the result */
    onDataFetchComplete?: (api: T) => void;

    /** Fires on submitting the form. Can returns Promise, Object, Boolean or Void */
    onSubmit?: (values: Record<string, unknown>, api: T) => IDFormSubmitResultPromise | IDFormSubmitResultObject | boolean | void;

    /** fires on submit validation */
    onSubmitValidation?: (values: Record<string, unknown>, errors: Record<string, string | undefined>, api: T) => void;

    /** fires on submit failed */
    onSubmitSuccess?: (values: Record<string, unknown>, resultValues: Record<string, unknown> | undefined, api: T) => boolean | void;

    /** fires on submit error */
    onSubmitError?: (values: Record<string, unknown>, error: IError, api: T) => boolean | void;

    /** fires, when the submitting finishes, whether in failure or success. */
    onSubmitComplete?: (values: Record<string, unknown>, errors: Record<string, string | undefined>, api: T) => boolean | void;

    /** fires, when the form dataSet changed. Unlike onFormValuesChanged, it is triggered only when a new dataSet is set via setFormValues and is not called when the user changes the field values */
    onDataSetChange?: (dataSet: IDFormDataSet | undefined, api: T) => IDFormDataSet | undefined;
}

export type IDFormModelCallbacks = IDFormBaseCallbacks<DModel>;

export type IDFormSubmitResultPromise = Promise<{ data: Record<string, unknown> } | void>;
export type IDFormSubmitResultObject = { data?: Record<string, unknown>; error?: IError };