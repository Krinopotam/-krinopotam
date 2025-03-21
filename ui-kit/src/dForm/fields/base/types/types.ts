import {AnyType, IError} from '@krinopotam/service-types';
import {DModel, IDFormDataSourcePromise, IRuleType} from '@src/dForm';
import {BaseField} from '@src/dForm/fields/base';
import {LabelTooltipType} from 'antd/es/form/FormItemLabel';
import React from 'react';

export interface IBaseFieldProps<TField extends IBaseField, TValue> extends Record<string, AnyType> {
    /** Field React component */
    component: new (fieldName: string, fieldProps: AnyType, model: DModel, parent?: IBaseField) => TField;

    /** Help class */
    helpClass?: string;

    /** Field label */
    label?: string | React.ReactNode;

    /** Field class name (directly the field itself, not the container) */
    className?: string;

    /** Field item class name (field item is field wrapper with label and error status) */
    itemWrapperClassName?: string;

    /** Field container class name (container for field wrapper or field) */
    containerClassName?: string;

    /** Field placeholder*/
    placeholder?: string;

    /** Field default value */
    defaultValue?: TValue;

    /** Whether the field default state is hidden */
    hidden?: boolean;

    /** Whether the field default state is disabled */
    disabled?: boolean;

    /** Whether the field default state is readonly */
    readOnly?: boolean;

    /** Whether the field can not be edited (the field will have readOnly or disabled state if formMode is 'update') */
    nonEditable?: boolean | 'readOnly' | 'disabled';

    /** List of fields that must be filled in order to display this field */
    dependsOn?: string[];

    /** Field width */
    width?: string | number;

    /** Field container height auto resize  */
    autoHeightResize?: boolean;

    /** Get focus by default */
    autoFocus?: boolean;

    /** Mark Field Label as Required */
    requiredMark?: boolean;

    /** Config tooltip info */
    tooltip?: LabelTooltipType;

    /** Field CSS style */
    style?: React.CSSProperties;

    /** Form item CSS style (form item is field wrapper with label and error status) */
    itemWrapperStyle?: React.CSSProperties;

    /** Field container CSS style (container for field wrapper or field) */
    containerStyle?: React.CSSProperties;

    /** Render field item without wrapper */
    noItemWrapper?: boolean;

    /**  Render field or field wrapper without container */
    noContainer?: boolean;

    /** Field validation rules */
    rules?: IRuleType[];

    /*************** Callbacks **************/
    /** fires when the value of a field changed */
    onValueChanged?: (value: TValue, prevValue: TValue, field: TField) => void;

    /** fires when the touched state of a field changed */
    onTouchedStateChanged?: (state: boolean, field: TField) => void;

    /** fires when the dirty state of a field changed */
    onDirtyStateChanged?: (state: boolean, field: TField) => void;

    /** fires when the error of a field changed */
    onErrorChanged?: (error: string, field: TField) => void;

    /** fires when the hidden state of a field changed */
    onHiddenStateChanged?: (state: boolean, field: TField) => void;

    /** fires when read only state of a field changed */
    onReadOnlyStateChanged?: (state: boolean, field: TField) => void;

    /** fires when label of a field changed */
    onLabelChanged?: (label: React.ReactNode, prevLabel: React.ReactNode, field: TField) => void;

    /** fires when the disable state of a field changes  */
    onDisabledStateChanged?: (state: boolean, field: TField) => void;

    /** fires when a field is completely initialized, its data is loaded */
    onReadyStateChanged?: (state: boolean, field: TField) => void;

    /** fires when a field validated */
    onValidated?: (value: TValue, error: string, isSubmit: boolean, field: TField) => void;

    /** fires when the field trying to fetch data */
    onFieldDataFetch?: (field: TField) => IDFormDataSourcePromise | undefined;

    /** fires when the field fetch success */
    onFieldDataFetchSuccess?: (result: {data: Record<string, AnyType>}, field: TField) => void;

    /** fires when the field fetch failed */
    onFieldDataFetchError?: (error: IError, field: TField) => void;
}

export type IAnyFieldProps<TField extends IBaseField = AnyType, TValue = AnyType> = IBaseFieldProps<TField, TValue>;
export type IBaseField = BaseField<IAnyFieldProps>;
