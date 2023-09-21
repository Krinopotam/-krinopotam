import {IDFormFieldProps} from '@src/dynamicForm/components/baseComponent';
import {BaseComponentConfig} from './baseComponentConfig';
import {IDFormFieldCheckBoxProps, CheckboxComponent} from '@src/dynamicForm/components/checkboxComponent';


export class CheckboxComponentConfig<T>  extends BaseComponentConfig<T> {

    constructor(id: keyof T) {
        super(id);
        this._config.component = CheckboxComponent; 
    }


    /** Help class */
    helpClass(value: IDFormFieldProps['helpClass']) {
        this._config.helpClass = value;
        return this;
    }

    /** Field label */
    label(value: IDFormFieldProps['label']) {
        this._config.label = value;
        return this;
    }

    /** Field placeholder*/
    placeholder(value: IDFormFieldProps['placeholder']) {
        this._config.placeholder = value;
        return this;
    }

    /** tab name */
    tab(value: IDFormFieldProps['tab']) {
        this._config.tab = value;
        return this;
    }

    /** inline group name */
    inlineGroup(value: IDFormFieldProps['inlineGroup']) {
        this._config.inlineGroup = value;
        return this;
    }

    /** default value */
    value(value: IDFormFieldCheckBoxProps['value']) {
        this._config.value = value;
        return this;
    }

    /** If field default state is hidden */
    hidden(value: IDFormFieldProps['hidden']) {
        this._config.hidden = value;
        return this;
    }

    /** If field default state is disabled */
    disabled(value: IDFormFieldProps['disabled']) {
        this._config.disabled = value;
        return this;
    }

    /** If field default state is readonly */
    readOnly(value: IDFormFieldProps['readOnly']) {
        this._config.readOnly = value;
        return this;
    }

    /** List of fields that must be filled in order to display this field */
    dependsOn(value: IDFormFieldProps['dependsOn']) {
        this._config.dependsOn = value;
        return this;
    }

    /** Field width */
    width(value: IDFormFieldProps['width']) {
        this._config.width = value;
        return this;
    }

    /** Get focus by default */
    autoFocus(value: IDFormFieldProps['autoFocus']) {
        this._config.autoFocus = value;
        return this;
    }

    /** Mark Field Label as Required */
    requiredMark(value: IDFormFieldProps['requiredMark']) {
        this._config.requiredMark = value;
        return this;
    }

    /** Config tooltip info */
    tooltip(value: IDFormFieldProps['tooltip']) {
        this._config.tooltip = value;
        return this;
    }

    /** Field CSS style */
    style(value: IDFormFieldProps['style']) {
        this._config.style = value;
        return this;
    }

    /** Row field container CSS style */
    rowStyle(value: IDFormFieldProps['rowStyle']) {
        this._config.rowStyle = value;
        return this;
    }

    /** fires when the value of a field changed */
    onValueChanged(value: IDFormFieldProps['onValueChanged']) {
        this._config.onValueChanged = value;
        return this;
    }

    /** fires when the touched state of a field changed */
    onTouchedStateChanged(value: IDFormFieldProps['onTouchedStateChanged']) {
        this._config.onTouchedStateChanged = value;
        return this;
    }

    /** fires when the dirty state of a field changed */
    onDirtyStateChanged(value: IDFormFieldProps['onDirtyStateChanged']) {
        this._config.onDirtyStateChanged = value;
        return this;
    }

    /** fires when the error of a field changed */
    onErrorChanged(value: IDFormFieldProps['onErrorChanged']) {
        this._config.onErrorChanged = value;
        return this;
    }

    /** fires when the hidden state of a field changed */
    onHiddenStateChanged(value: IDFormFieldProps['onHiddenStateChanged']) {
        this._config.onHiddenStateChanged = value;
        return this;
    }

    /** fires when read only state of a field changed */
    onReadOnlyStateChanged(value: IDFormFieldProps['onReadOnlyStateChanged']) {
        this._config.onReadOnlyStateChanged = value;
        return this;
    }

    /** fires when label of a field changed */
    onLabelChanged(value: IDFormFieldProps['onLabelChanged']) {
        this._config.onLabelChanged = value;
        return this;
    }

    /** fires when the disable state of a field changes  */
    onDisabledStateChanged(value: IDFormFieldProps['onDisabledStateChanged']) {
        this._config.onDisabledStateChanged = value;
        return this;
    }

    /** fires when a field is completely initialized, its data is loaded */
    onReady(value: IDFormFieldProps['onReady']) {
        this._config.onReady = value;
        return this;
    }

    /** fires when a field validated */
    onValidated(value: IDFormFieldProps['onValidated']) {
        this._config.onValidated = value;
        return this;
    }

    /** The indeterminate checked state of checkbox */
    indeterminate(value: IDFormFieldCheckBoxProps['indeterminate']) {
        this._config.indeterminate = value;
        return this;
    }


    /** Get field config */
    getConfig() {
        return this._config as unknown as IDFormFieldCheckBoxProps
    }
}