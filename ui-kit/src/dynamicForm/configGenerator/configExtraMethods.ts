//region Form config extra methods
// language=text
export const  addField = `/** Add fields or fields inline groups */
    addFields(...args: BaseComponentConfig<T>[]) {
        this.addFieldsConfig(undefined, args);
        return this;
    }`;

// language=text
export const  addTabs = `/** Add tabs */
    addTab(tabName: string, ...args: BaseComponentConfig<T>[]) {
        this.addFieldsConfig(tabName, args);
        return this;
    }`;

// language=text
export const  addFieldsConfig = `/** Add field properties to form config */
    protected addFieldsConfig(tabName: string | undefined, configs: BaseComponentConfig<T>[]) {
        for (const config of configs) {
            this.updateFieldsProps(config, tabName);
        }
        return this;
    }`;

// language=text
export const  updateFieldsProps = `/** Update the field properties */
    protected updateFieldsProps(configClass: BaseComponentConfig<T>, tabName?: string) {
        const id  = configClass.getId();
        const fieldProps = configClass.getConfig();
        const validationRules = configClass.getValidationRules();
        
        if (!fieldProps || !id) return;
        if (!this._config.fieldsProps) this._config.fieldsProps = {};
        const formFieldsProps = this._config.fieldsProps as Record<keyof T, IDFormFieldProps>;
        formFieldsProps[id] = {...fieldProps};

        if (!this._config.validationRules) this._config.validationRules = {};
        const formValidationRules = this._config.validationRules as Record<keyof T, IRuleType[]>;
        if (validationRules && validationRules.length > 0) formValidationRules[id] = [...validationRules];

        if (typeof tabName !== "undefined") formFieldsProps[id].tab = tabName;
    }`;
//endregion

//region Components config extra methods
// language=text
export const  getId = `/** Get component id */
    getId() {
        return this._id;
    }`;

// language=text
export const  getValidationRules = `/** Get validation rules */
    getValidationRules() {
        return this._validationRules;
    }`;

// language=text
export const  addValidationRules =`/** Add validation rules */
    validationRules(...args: IRuleType[]) {
        for (const rule of args) {
            this._validationRules.push(rule)
        }
        
        return this;
    }`
//endregion
