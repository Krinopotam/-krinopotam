import { BaseComponentConfig } from './baseComponentConfig';
import { NumberComponent } from '../components/numberComponent';
export class NumberComponentConfig extends BaseComponentConfig {
    constructor(id) {
        super(id);
        this._config.component = NumberComponent;
    }
    helpClass(value) {
        this._config.helpClass = value;
        return this;
    }
    label(value) {
        this._config.label = value;
        return this;
    }
    placeholder(value) {
        this._config.placeholder = value;
        return this;
    }
    tab(value) {
        this._config.tab = value;
        return this;
    }
    inlineGroup(value) {
        this._config.inlineGroup = value;
        return this;
    }
    default(value) {
        this._config.default = value;
        return this;
    }
    hidden(value) {
        this._config.hidden = value;
        return this;
    }
    disabled(value) {
        this._config.disabled = value;
        return this;
    }
    readOnly(value) {
        this._config.readOnly = value;
        return this;
    }
    dependsOn(value) {
        this._config.dependsOn = value;
        return this;
    }
    width(value) {
        this._config.width = value;
        return this;
    }
    autoFocus(value) {
        this._config.autoFocus = value;
        return this;
    }
    requiredMark(value) {
        this._config.requiredMark = value;
        return this;
    }
    callbacks(value) {
        this._config.callbacks = value;
        return this;
    }
    style(value) {
        this._config.style = value;
        return this;
    }
    addonAfter(value) {
        this._config.addonAfter = value;
        return this;
    }
    addonBefore(value) {
        this._config.addonBefore = value;
        return this;
    }
    controls(value) {
        this._config.controls = value;
        return this;
    }
    decimalSeparator(value) {
        this._config.decimalSeparator = value;
        return this;
    }
    formatter(value) {
        this._config.formatter = value;
        return this;
    }
    keyboard(value) {
        this._config.keyboard = value;
        return this;
    }
    maxLength(value) {
        this._config.maxLength = value;
        return this;
    }
    max(value) {
        this._config.max = value;
        return this;
    }
    min(value) {
        this._config.min = value;
        return this;
    }
    parser(value) {
        this._config.parser = value;
        return this;
    }
    precision(value) {
        this._config.precision = value;
        return this;
    }
    prefix(value) {
        this._config.prefix = value;
        return this;
    }
    step(value) {
        this._config.step = value;
        return this;
    }
    stringMode(value) {
        this._config.stringMode = value;
        return this;
    }
    upHandler(value) {
        this._config.upHandler = value;
        return this;
    }
    downHandler(value) {
        this._config.downHandler = value;
        return this;
    }
    className(value) {
        this._config.className = value;
        return this;
    }
    prefixCls(value) {
        this._config.prefixCls = value;
        return this;
    }
    getConfig() {
        return this._config;
    }
}
