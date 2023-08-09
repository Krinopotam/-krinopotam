export class DFormConfig {
    constructor(formId) {
        this._config = {};
        this._config.formId = formId;
    }
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
    addFields(...args) {
        this.addFieldsConfig(undefined, args);
        return this;
    }
    addTab(tabName, ...args) {
        this.addFieldsConfig(tabName, args);
        return this;
    }
    addFieldsConfig(tabName, configs) {
        for (const config of configs) {
            this.updateFieldsProps(config, tabName);
        }
        return this;
    }
    updateFieldsProps(configClass, tabName) {
        const id = configClass.getId();
        const fieldProps = configClass.getConfig();
        const validationRules = configClass.getValidationRules();
        if (!fieldProps || !id)
            return;
        if (!this._config.fieldsProps)
            this._config.fieldsProps = {};
        const formFieldsProps = this._config.fieldsProps;
        formFieldsProps[id] = Object.assign({}, fieldProps);
        if (!this._config.validationRules)
            this._config.validationRules = {};
        const formValidationRules = this._config.validationRules;
        if (validationRules && validationRules.length > 0)
            formValidationRules[id] = [...validationRules];
        if (typeof tabName !== "undefined")
            formFieldsProps[id].tab = tabName;
    }
    getConfig() {
        return this._config;
    }
}
