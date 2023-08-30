import { BaseComponentConfig } from './baseComponentConfig';
import { DateTimeComponent } from '../components/dateTimeComponent';
export class DateTimeComponentConfig extends BaseComponentConfig {
    constructor(id) {
        super(id);
        this._config.component = DateTimeComponent;
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
    allowClear(value) {
        this._config.allowClear = value;
        return this;
    }
    clearIcon(value) {
        this._config.clearIcon = value;
        return this;
    }
    dateRender(value) {
        this._config.dateRender = value;
        return this;
    }
    defaultPickerValue(value) {
        this._config.defaultPickerValue = value;
        return this;
    }
    disabledDate(value) {
        this._config.disabledDate = value;
        return this;
    }
    disabledTime(value) {
        this._config.disabledTime = value;
        return this;
    }
    format(value) {
        this._config.format = value;
        return this;
    }
    mode(value) {
        this._config.mode = value;
        return this;
    }
    popupClassName(value) {
        this._config.popupClassName = value;
        return this;
    }
    inputReadOnly(value) {
        this._config.inputReadOnly = value;
        return this;
    }
    nextIcon(value) {
        this._config.nextIcon = value;
        return this;
    }
    panelRender(value) {
        this._config.panelRender = value;
        return this;
    }
    picker(value) {
        this._config.picker = value;
        return this;
    }
    placement(value) {
        this._config.placement = value;
        return this;
    }
    popupStyle(value) {
        this._config.popupStyle = value;
        return this;
    }
    presets(value) {
        this._config.presets = value;
        return this;
    }
    prevIcon(value) {
        this._config.prevIcon = value;
        return this;
    }
    renderExtraFooter(value) {
        this._config.renderExtraFooter = value;
        return this;
    }
    showNow(value) {
        this._config.showNow = value;
        return this;
    }
    showTime(value) {
        this._config.showTime = value;
        return this;
    }
    showToday(value) {
        this._config.showToday = value;
        return this;
    }
    superNextIcon(value) {
        this._config.superNextIcon = value;
        return this;
    }
    superPrevIcon(value) {
        this._config.superPrevIcon = value;
        return this;
    }
    onOpenChange(value) {
        this._config.onOpenChange = value;
        return this;
    }
    onOk(value) {
        this._config.onOk = value;
        return this;
    }
    getConfig() {
        return this._config;
    }
}
