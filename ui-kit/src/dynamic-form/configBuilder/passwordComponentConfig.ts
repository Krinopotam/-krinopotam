import {IDFormFieldProps} from '@src/dynamic-form/components/baseComponent';
import {BaseComponentConfig} from './baseComponentConfig';
import {IDFormFieldPasswordProps, PasswordComponent} from '@src/dynamic-form/components/passwordComponent';


export class PasswordComponentConfig<T>  extends BaseComponentConfig<T> {

    constructor(id: keyof T) {
        super(id);
        this._config.component = PasswordComponent; 
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

    /** Default value */
    default(value: IDFormFieldPasswordProps['default']) {
        this._config.default = value;
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

    /** Field callbacks */
    callbacks(value: IDFormFieldProps['callbacks']) {
        this._config.callbacks = value;
        return this;
    }

    /** Field CSS style */
    style(value: IDFormFieldProps['style']) {
        this._config.style = value;
        return this;
    }

    /** Show input counter */
    showCount(value: IDFormFieldPasswordProps['showCount']) {
        this._config.showCount = value;
        return this;
    }

    /** Max input length */
    maxLength(value: IDFormFieldPasswordProps['maxLength']) {
        this._config.maxLength = value;
        return this;
    }

    /** Icons render */
    iconRender(value: IDFormFieldPasswordProps['iconRender']) {
        this._config.iconRender = value;
        return this;
    }


    /** Get field config */
    getConfig() {
        return this._config as unknown as IDFormFieldPasswordProps
    }
}