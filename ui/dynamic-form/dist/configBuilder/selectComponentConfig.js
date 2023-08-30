import { BaseComponentConfig } from './baseComponentConfig';
import { SelectComponent } from '../components/selectComponent';
export class SelectComponentConfig extends BaseComponentConfig {
    constructor(id) {
        super(id);
        this._config.component = SelectComponent;
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
    dataSet(value) {
        this._config.dataSet = value;
        return this;
    }
    allowClear(value) {
        this._config.allowClear = value;
        return this;
    }
    autoClearSearchValue(value) {
        this._config.autoClearSearchValue = value;
        return this;
    }
    defaultActiveFirstOption(value) {
        this._config.defaultActiveFirstOption = value;
        return this;
    }
    defaultOpen(value) {
        this._config.defaultOpen = value;
        return this;
    }
    popupClassName(value) {
        this._config.popupClassName = value;
        return this;
    }
    dropdownRender(value) {
        this._config.dropdownRender = value;
        return this;
    }
    fieldNames(value) {
        this._config.fieldNames = value;
        return this;
    }
    filterOption(value) {
        this._config.filterOption = value;
        return this;
    }
    filterSort(value) {
        this._config.filterSort = value;
        return this;
    }
    labelInValue(value) {
        this._config.labelInValue = value;
        return this;
    }
    listHeight(value) {
        this._config.listHeight = value;
        return this;
    }
    loading(value) {
        this._config.loading = value;
        return this;
    }
    maxTagCount(value) {
        this._config.maxTagCount = value;
        return this;
    }
    maxTagPlaceholder(value) {
        this._config.maxTagPlaceholder = value;
        return this;
    }
    maxTagTextLength(value) {
        this._config.maxTagTextLength = value;
        return this;
    }
    menuItemSelectedIcon(value) {
        this._config.menuItemSelectedIcon = value;
        return this;
    }
    mode(value) {
        this._config.mode = value;
        return this;
    }
    notFoundContent(value) {
        this._config.notFoundContent = value;
        return this;
    }
    optionFilterProp(value) {
        this._config.optionFilterProp = value;
        return this;
    }
    optionLabelProp(value) {
        this._config.optionLabelProp = value;
        return this;
    }
    placement(value) {
        this._config.placement = value;
        return this;
    }
    removeIcon(value) {
        this._config.removeIcon = value;
        return this;
    }
    showArrow(value) {
        this._config.showArrow = value;
        return this;
    }
    showSearch(value) {
        this._config.showSearch = value;
        return this;
    }
    suffixIcon(value) {
        this._config.suffixIcon = value;
        return this;
    }
    tagRender(value) {
        this._config.tagRender = value;
        return this;
    }
    tokenSeparators(value) {
        this._config.tokenSeparators = value;
        return this;
    }
    virtual(value) {
        this._config.virtual = value;
        return this;
    }
    getConfig() {
        return this._config;
    }
}
