import ts from 'typescript';
import {AnyType} from '@krinopotam/service-types';
import {IDFormProps} from '@src/dForm';
import {FIELDS_INFO_MAP} from '@src/dFormConstructor/renders/fieldsTree/config/fieldsList';

export const sourceToFormProps = (source: string, targetVarName = 'formProps'): IDFormProps | null => {
    if (!source) return {};
    let jsSource = transpileTsToJs(source);
    jsSource = jsSource.replace(/component:\s*(\w+)/g, 'component: "$1"'); //add component class semicolons

    try {
        const rawProps = eval(jsSource + targetVarName);
        return replaceClassNameToClass(rawProps);
    } catch {
        console.warn('The error of converting the source code into FormProps');
    }
    return null;
};

const replaceClassNameToClass = (obj: unknown): AnyType => {
    if (Array.isArray(obj)) return obj.map(replaceClassNameToClass);

    if (typeof obj !== 'object' || obj === null) return obj;

    const updatedObj: {[key: string]: AnyType} = {};
    for (const [key, value] of Object.entries(obj)) {
        updatedObj[key] = key === 'component' ? getComponentClass(value) : replaceClassNameToClass(value);
    }
    return updatedObj;
};


// Typescript transpilation in JavaScript
function transpileTsToJs(tsCode: string): string {
    return ts.transpileModule(tsCode, {
        compilerOptions: {module: ts.ModuleKind.CommonJS},
    }).outputText;
}

/** Get component class constructor by class name*/
const getComponentClass = (className: string) => {
    for (const key in FIELDS_INFO_MAP) {
        const classInfo = FIELDS_INFO_MAP[key];
        const classInstance = new classInfo();
        if (classInstance.CLASS?.name === className) return classInstance.CLASS;
    }
    return null;
};
