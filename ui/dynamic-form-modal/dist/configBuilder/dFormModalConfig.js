import { DFormConfig } from '@krinopotam/ui-dynamic-form/configBuilder/dFormConfig';
export class DFormModalConfig extends DFormConfig {
    apiRef(value) {
        this._config.apiRef = value;
        return this;
    }
    buttons(value) {
        this._config.buttons = value;
        return this;
    }
    callbacks(value) {
        this._config.callbacks = value;
        return this;
    }
    className(value) {
        this._config.className = value;
        return this;
    }
    containerClassName(value) {
        this._config.containerClassName = value;
        return this;
    }
    contentIndent(value) {
        this._config.contentIndent = value;
        return this;
    }
    dataSet(value) {
        this._config.dataSet = value;
        return this;
    }
    parentDataSet(value) {
        this._config.parentDataSet = value;
        return this;
    }
    fieldsProps(value) {
        this._config.fieldsProps = value;
        return this;
    }
    formType(value) {
        this._config.formType = value;
        return this;
    }
    labelCol(value) {
        this._config.labelCol = value;
        return this;
    }
    layout(value) {
        this._config.layout = value;
        return this;
    }
    formMode(value) {
        this._config.formMode = value;
        return this;
    }
    readOnly(value) {
        this._config.readOnly = value;
        return this;
    }
    noAutoHideDependedFields(value) {
        this._config.noAutoHideDependedFields = value;
        return this;
    }
    tabsProps(value) {
        this._config.tabsProps = value;
        return this;
    }
    unfilledForm(value) {
        this._config.unfilledForm = value;
        return this;
    }
    validationRules(value) {
        this._config.validationRules = value;
        return this;
    }
    wrapperCol(value) {
        this._config.wrapperCol = value;
        return this;
    }
    confirmChanges(value) {
        this._config.confirmChanges = value;
        return this;
    }
    submitConfirmMessage(value) {
        this._config.submitConfirmMessage = value;
        return this;
    }
    closeFormConfirmMessage(value) {
        this._config.closeFormConfirmMessage = value;
        return this;
    }
    title(value) {
        this._config.title = value;
        return this;
    }
    width(value) {
        this._config.width = value;
        return this;
    }
    minWidth(value) {
        this._config.minWidth = value;
        return this;
    }
    maxWidth(value) {
        this._config.maxWidth = value;
        return this;
    }
    bodyHeight(value) {
        this._config.bodyHeight = value;
        return this;
    }
    bodyMinHeight(value) {
        this._config.bodyMinHeight = value;
        return this;
    }
    bodyMaxHeight(value) {
        this._config.bodyMaxHeight = value;
        return this;
    }
    bodyStyle(value) {
        this._config.bodyStyle = value;
        return this;
    }
    notScrollable(value) {
        this._config.notScrollable = value;
        return this;
    }
    resizable(value) {
        this._config.resizable = value;
        return this;
    }
    isOpened(value) {
        this._config.isOpened = value;
        return this;
    }
    getConfig() {
        return this._config;
    }
    addTab(tabName, ...args) {
        this.addFieldsConfig(tabName, args);
        return this;
    }
    addFields(...args) {
        this.addFieldsConfig(undefined, args);
        return this;
    }
}
