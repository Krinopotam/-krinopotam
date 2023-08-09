import { BaseComponentConfig } from './baseComponentConfig';
import { SwitchComponent } from '../components/switchComponent';
export class SwitchComponentConfig extends BaseComponentConfig {
    constructor(id) {
        super(id);
        this._config.component = SwitchComponent;
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
    callbacks(value) {
        this._config.callbacks = value;
        return this;
    }
    checkedChildren(value) {
        this._config.checkedChildren = value;
        return this;
    }
    unCheckedChildren(value) {
        this._config.unCheckedChildren = value;
        return this;
    }
    loading(value) {
        this._config.loading = value;
        return this;
    }
    getConfig() {
        return this._config;
    }
}
