//region Options
import {IComponentOptions, parseProperties, saveFile} from "@src/dynamicForm/configGenerator/configParsingMethods";
import {addField, addFieldsConfig, addTabs, addValidationRules, getId, getValidationRules, updateFieldsProps} from "@src/dynamicForm/configGenerator/configExtraMethods";
import {generateClass, IClassProps} from "@src/dynamicForm/configGenerator/configClassMethods";

const options: Record<string, IComponentOptions> = {
    dForm: {
        modulePath: '../dForm.tsx',
        savePath: '../configBuilder/dFormConfig.ts',
        typeName: 'IDFormProps',
        typePath: '../dForm',
    },
    dFormModal: {
        modulePath: '../../dynamicFormModal/dFormModal.tsx',
        savePath: '../../dynamicFormModal/configBuilder/dFormModalConfig.ts',
        typeName: 'IDModalProps',
        typePath: '../dFormModal',
    },
    treeSelect: {
        modulePath: '../../treeselect/treeSelect.tsx',
        savePath: '',
        typeName: 'ITreeSelectProps',
        typePath: '@src/treeselect',
    },
};

const componentsList = [
    {name: 'baseComponent', interface: 'IDFormFieldProps'},
    {name: 'customComponent', interface: 'IDFormFieldCustomProps'},
    {name: 'dividerComponent', interface: 'IDFormFieldDividerProps'},
    {name: 'checkboxComponent', interface: 'IDFormFieldCheckBoxProps'},
    {name: 'dateTimeComponent', interface: 'IDFormFieldDateTimeProps'},
    {name: 'dragAndDropComponent', interface: 'IDFormFieldDragAndDropProps'},
    {name: 'inputComponent', interface: 'IDFormFieldInputProps'},
    {name: 'linkComponent', interface: 'IDFormFieldLinkProps'},
    {name: 'numberComponent', interface: 'IDFormFieldNumberProps'},
    {name: 'passwordComponent', interface: 'IDFormFieldPasswordProps'},
    {name: 'selectComponent', interface: 'IDFormFieldSelectProps'},
    {name: 'switchComponent', interface: 'IDFormFieldSwitchProps'},
    {name: 'textAreaComponent', interface: 'IDFormFieldTextAreaProps'},
    {name: 'quillEditorComponent', interface: 'IDFormFieldQuillEditorProps'},
    {name: 'treeSelectComponent', interface: 'IDFormFieldTreeSelectProps'},
    {name: 'tabulatorGridComponent', interface: 'IDFormFieldTabulatorGridProps'},
];

function addComponentsToOptions() {
    for (const component of componentsList) {
        options[component.name] = {
            modulePath: '../components/' + component.name + '.tsx',
            savePath: '../configBuilder/' + component.name + 'Config.ts',
            typeName: component.interface,
            typePath: '@src/dynamicForm/components/' + component.name
        };
    }
}

addComponentsToOptions();

//endregion

//region Service methods
function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

/** Get component config generation status info for console */
function prepareAlignedStatusMsg(componentName: string, status: string, width: number) {
    let result = '        ' + componentName + ' ';
    const addSpaces = width - result.length;
    if (addSpaces > 0) result = result + ' '.repeat(addSpaces);
    return result + status;
}

function logStatus(componentName: string, error?: string) {
    console.log(prepareAlignedStatusMsg(componentName, error || 'OK', 40));
}

//endregion

//region Generate configs
/** generate components config classes */
function generateComponentsConfigs() {
    for (const component of componentsList) {
        if (component.name === 'baseComponent') continue;
        saveConfigClass(component.name, getComponentClassProps);
    }
}

/**Generate base component config class props */
function getBaseComponentClassProps(componentName: string) {
    const baseOptions = options[componentName];
    const baseClassName = capitalizeFirstLetter(componentName + 'Config');
    const properties = parseProperties(baseOptions);
    delete properties['component'];

    return {
        className: baseClassName + '<T>',
        imports: {IDFormFieldProps: baseOptions.typePath, IRuleType: '../validators/baseValidator'},
        fields: {
            _config: {access: 'protected', type: 'Record<string, unknown>', value: '{}'},
            _id: {access: 'protected readonly', type: 'keyof T'},
            _validationRules: {access: 'protected', type: 'IRuleType[]', value: '[]'},
        },
        constructor: {
            parameters: {id: 'keyof T'},
            rows: [`this._id = id`],
        },
        propMethods: properties,
        additionalMethods: {
            validationRules: addValidationRules,
            getValidationRules: getValidationRules,
            getId: getId,
            getConfig: '/** Get field config */\n    getConfig() {\n        return this._config as unknown as ' + baseOptions.typeName + '\n    }',
        },
    };
}


/** Generate component config class props */
function getComponentClassProps(componentName: string) {
    const baseComponentsClassProps = getBaseComponentClassProps('baseComponent');

    //component options
    const componentOptions = options[componentName];
    const componentClassName = capitalizeFirstLetter(componentName) + 'Config';
    let properties = parseProperties(componentOptions);
    delete properties['component'];

    //region unique components extra processing
    let treeSelectImport;
    if (componentName === 'treeSelectComponent') {
        const treeSelectProperties = parseProperties(options.treeSelect);
        delete treeSelectProperties['onChange'];
        properties = {...treeSelectProperties, ...properties};
        treeSelectImport = options.treeSelect.typePath;
    }
    //endregion

    /**@type IClassProps */
    const classProps: IClassProps = {
        className: componentClassName + '<T>',
        imports: {
            //...baseComponentsClassProps.imports,
            'IDFormFieldProps': baseComponentsClassProps.imports['IDFormFieldProps'],
            BaseComponentConfig: './baseComponentConfig',
        },
        extends: 'BaseComponentConfig<T>',
        constructor: {
            parameters: {id: 'keyof T'},
            rows: ['super(id)', `this._config.component = ${capitalizeFirstLetter(componentName)}`],
        },
        propMethods: {...baseComponentsClassProps.propMethods, ...properties},
        additionalMethods: {
            getConfig: '/** Get field config */\n    getConfig() {\n        return this._config as unknown as ' + componentOptions.typeName + '\n    }',
        },
    };

    if (!classProps.imports) classProps.imports = {};
    classProps.imports[componentOptions.typeName] = componentOptions.typePath;
    classProps.imports[capitalizeFirstLetter(componentName)] = componentOptions.typePath;
    if (treeSelectImport) classProps.imports['ITreeSelectProps'] = treeSelectImport;
    return classProps;
}

/** Generate DForm config class props  */
function getFormClassProps(componentName: string) {
    const formClassname = capitalizeFirstLetter(componentName + 'Config');
    const formOptions = options[componentName];
    const properties = parseProperties(formOptions);
    properties['fieldsProps'] = {...properties['fieldsProps'], type: 'Record<keyof T, IDFormFieldProps>'};
    properties['validationRules'] = {...properties['validationRules'], type: 'Partial<Record<keyof T, IRuleType[]>>'};
    delete properties['formId'];

    return {
        className: formClassname + '<T>',
        imports: {
            IDFormProps: formOptions.typePath,
            BaseComponentConfig: './baseComponentConfig',
            IDFormFieldProps: '@src/dynamicForm/components/baseComponent',
            IRuleType: '@src/dynamicForm/validators/baseValidator',
        },
        constructor: {
            parameters: {formId: 'string'},
            rows: [`this._config.formId = formId`],
        },
        fields: {_config: {access: 'protected', type: 'Record<string, unknown>', value: '{}'}},
        propMethods: properties,
        additionalMethods: {
            addFields: addField,
            addTab: addTabs,
            addFieldsConfig: addFieldsConfig,
            updateFieldsProps: updateFieldsProps,
            getConfig: '/** Get form config */\n    getConfig() {\n        return this._config as unknown as ' + formOptions.typeName + '\n    }',
        },
    } satisfies IClassProps;
}

/**
 * Generate DFormModal config class props
 * @param {string} componentName
 * @returns {IClassProps}
 */
function getFormModalClassProps(componentName: string) {
    const formClassProps = getFormClassProps('dForm');
    const formModalClassname = capitalizeFirstLetter(componentName + 'Config');
    const formModalOptions = options[componentName];
    const properties = parseProperties(formModalOptions);
    delete properties['formId'];

    return {
        constructor: undefined,
        className: formModalClassname + '<T>',
        extends: 'DFormConfig<T>',
        imports: {
            IDFormProps: '@src/dynamicForm',
            IDFormFieldProps: '@src/dynamicForm/components/baseComponent',
            IRuleType: '@src/dynamicForm/validators/baseValidator',
            DFormConfig: '@src/dynamicForm/configBuilder/dFormConfig',
            BaseComponentConfig: '@src/dynamicForm/configBuilder/baseComponentConfig',
            IDModalProps: formModalOptions.typePath,
            IDFormModalProps: formModalOptions.typePath,
        },
        propMethods: {...formClassProps.propMethods, ...properties},
        additionalMethods: {
            getConfig: '/** Get form config */\n    getConfig() {\n        return this._config as unknown as IDFormModalProps \n    }',
            addTab: formClassProps.additionalMethods.addTab,
            addFields: formClassProps.additionalMethods.addFields,
        },
    } satisfies IClassProps;
}

//endregion
function saveConfigClass(componentName: string, classGenerator: (name: string) => IClassProps) {
    try {
        const componentOptions = options[componentName];
        const classProps = classGenerator(componentName);
        const classTxt = generateClass(classProps);
        saveFile(componentOptions.savePath, classTxt);
        logStatus(componentName, componentOptions.savePath);
    } catch (e) {
        logStatus(componentName, e as string);
    }
}

function run() {
    console.log('Generating DForm components config builders classes');
    console.log('    Components configs classes:');
    saveConfigClass('baseComponent', getBaseComponentClassProps);
    generateComponentsConfigs();

    console.log('    Forms configs classes:');
    saveConfigClass('dForm', getFormClassProps);
    saveConfigClass('dFormModal', getFormModalClassProps);
    console.log('The task finished');
}

run();
