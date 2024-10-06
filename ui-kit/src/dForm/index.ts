import {AnyType} from '@krinopotam/service-types';

export {DForm} from './dForm';
export type {
    IDFormValidationRules,
    IDFormMode,
    IDFormProps,
    IDFormPropsNoCB,
    IDFormCallbacks,
    IDFormFieldsProps,
    IDFormDataSet,
    IDFormDataSourcePromise,
    IDFormApi,
} from './types/dFormTypes';

export {DModel} from './dModel';
export type {IDFormBaseCallbacks, IDFormModelCallbacks, IDFormSubmitResultObject, IDFormSubmitResultPromise} from './types/dModelTypes';

export {BaseValidator} from './validators/baseValidator';
export type {IRuleType, IRuleCustom, IRuleDate, IRuleFile, IRuleNumber, IRuleString, IRuleObject} from './validators/baseValidator';

/** Tool for getting field properties
 * @param T field constructor
 * @example:
 * type IField = IGetFieldProps<typeof InputField>
 */
export type IGetFieldProps<T> = T extends new (fieldName: string, fieldProps: infer P, model: AnyType, parent: AnyType) => AnyType ? P : never;
