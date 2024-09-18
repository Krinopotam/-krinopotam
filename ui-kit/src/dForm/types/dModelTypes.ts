import {IDFormDataSet, IDFormDataSourcePromise} from '@src/dForm/types/dFormTypes';
import {IError} from '@krinopotam/service-types';
import {DModel} from '@src/dForm';
import {CallbackControl} from '@src/_shared/classes/callbackControl';

export interface IDFormBaseCallbacks<T> {
    // The form callbacks
    /** fires when the dirty state of the form changed */
    onFormDirtyStateChanged?: (state: boolean, api: T, cbControl: CallbackControl) => void;

    /** fires when the read only state of the form changed */
    onFormReadOnlyStateChanged?: (state: boolean, api: T, cbControl: CallbackControl) => void;

    /** fires when the disabled state of the form changed */
    onFormDisabledStateChanged?: (state: boolean, api: T, cbControl: CallbackControl) => void;

    /** fires when the form began initialization (renders for the first time) */
    onFormInit?: (api: T, cbControl: CallbackControl) => void;

    /** fires when the form model has been initialized */
    onFormModelInitialized?: (api: T, cbControl: CallbackControl) => void;

    /** fires when the form ready status changed (form ready means form is rendered, initialized and all fields data are loaded) */
    onFormReadyStateChanged?: (state: boolean, api: T, cbControl: CallbackControl) => void;

    /** fires when the form values changed  */
    onFormValuesChanged?: (fieldName: string, values: Record<string, unknown>, api: T, cbControl: CallbackControl) => void;

    /**
     * fires when the form validated
     * @param values form only values
     * @param dataSet form dataSet merged with form values
     * @param errors errors
     * @param isSubmit a sign that the form is validated upon form submission
     * @param api form api instance
     */
    onFormValidated?: (
        values: Record<string, unknown>,
        dataSet: IDFormDataSet,
        errors: Record<string, string>,
        isSubmit: boolean,
        api: T,
        cbControl: CallbackControl
    ) => void;

    /** fires when the form has errors
     * @param values form only values
     * @param dataSet form dataSet merged with form values
     * @param errors errors
     * @param api form api instance
     */
    onFormHasErrors?: (values: Record<string, unknown>, dataSet: IDFormDataSet, errors: Record<string, unknown>, api: T, cbControl: CallbackControl) => void;

    /** fires when the form has no errors
     * @param values form only values
     * @param dataSet form dataSet merged with form values
     * @param api form api instance
     */
    onFormHasNoErrors?: (values: Record<string, unknown>, dataSet: IDFormDataSet, api: T, cbControl: CallbackControl) => void;

    /** fires when the form trying to fetch data */
    onDataFetch?: (api: T, cbControl: CallbackControl) => IDFormDataSourcePromise | undefined;

    /** fires when the form fetch success */
    onDataFetchSuccess?: (result: {data: Record<string, unknown>}, api: T, cbControl: CallbackControl) => void;

    /** fires when the form fetch failed */
    onDataFetchError?: (error: IError, api: T, cbControl: CallbackControl) => void;

    /** fires after the completion of fetching the data, regardless of the result */
    onDataFetchComplete?: (api: T, cbControl: CallbackControl) => void;

    /** Fires on submitting the form. Can returns Promise, Object, Boolean or Void
     * @param values form only values
     * @param dataSet form dataSet merged with form values
     * @param api form api instance
     */
    onSubmit?: (
        values: Record<string, unknown>,
        dataSet: IDFormDataSet,
        api: T,
        cbControl: CallbackControl
    ) => IDFormSubmitResultPromise | IDFormSubmitResultObject | boolean | void;

    /** fires on submit validation
     * @param values form only values
     * @param dataSet form dataSet merged with form values
     * @param errors errors
     * @param api form api instance
     */
    onSubmitValidation?: (
        values: Record<string, unknown>,
        dataSet: IDFormDataSet,
        errors: Record<string, string | undefined>,
        api: T,
        cbControl: CallbackControl
    ) => void;

    /** fires on submit failed          *
     * @param values form only values
     * @param dataSet form dataSet merged with form values
     * @param resultData the data returned by the form submission method (for example, fetch). If the method does not return a data, then resultData = dataSet
     * @param api form api instance
     */
    onSubmitSuccess?: (
        values: Record<string, unknown>,
        dataSet: IDFormDataSet,
        resultData: Record<string, unknown> | undefined,
        api: T,
        cbControl: CallbackControl
    ) => void;

    /** fires on submit error
     * @param values form only values
     * @param dataSet form dataSet merged with form values
     * @param error error
     * @param api form api instance
     */
    onSubmitError?: (values: Record<string, unknown>, dataSet: IDFormDataSet, error: IError, api: T, cbControl: CallbackControl) => void;

    /** fires, when the submitting finishes, whether in failure or success.
     * @param values form only values
     * @param dataSet form dataSet merged with form values
     * @param errors errors
     * @param api form api instance
     */
    onSubmitComplete?: (
        values: Record<string, unknown>,
        dataSet: IDFormDataSet,
        errors: Record<string, string | undefined>,
        api: T,
        cbControl: CallbackControl
    ) => void;

    /** fires, when the form dataSet changed. Unlike onFormValuesChanged, it is triggered only when a new dataSet is set via setFormValues and is not called when the user changes the field values */
    onDataSetChange?: (dataSet: IDFormDataSet | undefined, api: T, cbControl: CallbackControl) => IDFormDataSet | undefined;
}

export type IDFormModelCallbacks = IDFormBaseCallbacks<DModel>;

export type IDFormSubmitResultPromise = Promise<{data: Record<string, unknown>} | void>;
export type IDFormSubmitResultObject = {data?: Record<string, unknown>; error?: IError};
