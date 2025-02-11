import ts from 'typescript';
import {AnyType} from '@krinopotam/service-types';
import {IDFormProps} from '@src/dForm';
import {FIELDS_INFO_MAP} from '@src/dFormConstructor/renders/fieldsTree/config/fieldsList';

export const parseSourceToFormProps = (source: string, targetVarName = 'formProps'): IDFormProps | null => {
    const sourceFile: ts.SourceFile = createSourceFile(source);

    let formPropsObject: IDFormProps | null = null;

    const visit = (node: ts.Node) => {
        if (ts.isVariableStatement(node)) {
            node.declarationList.declarations.forEach(declaration => {
                if (
                    ts.isIdentifier(declaration.name) &&
                    declaration.name.text === targetVarName &&
                    declaration.initializer &&
                    ts.isObjectLiteralExpression(declaration.initializer)
                ) {
                    formPropsObject = parseObjectLiteral(declaration.initializer);
                }
            });
        }
        ts.forEachChild(node, visit);
    };

    visit(sourceFile);
    return formPropsObject;
};

const createSourceFile = (source: string) => {
    return ts.createSourceFile(
        'inMemory.ts', // The file name is used for links inside the compiler
        source,
        ts.ScriptTarget.Latest,
        true
    );
};

const parseExpression = (node: ts.Expression): AnyType => {
    // Strings
    if (ts.isStringLiteral(node)) return node.text;

    // Numbers
    if (ts.isNumericLiteral(node)) return Number(node.text);

    // Boolean true
    if (node.kind === ts.SyntaxKind.TrueKeyword) return true;

    // Boolean false
    if (node.kind === ts.SyntaxKind.FalseKeyword) return false;

    // Null
    if (node.kind === ts.SyntaxKind.NullKeyword) return null;

    //Arrays (recursive)
    if (ts.isArrayLiteralExpression(node)) return node.elements.map(parseExpression);

    // Objects (recursive)
    if (ts.isObjectLiteralExpression(node)) return parseObjectLiteral(node);

    // Identifiers (for example, DatetimeField)
    if (ts.isIdentifier(node)) return node.text;


    // Functions
    if (ts.isArrowFunction(node) || ts.isFunctionExpression(node)) {
        return handleFunctionValue(node);
    }

    // Appeal to properties (for example, Obj.prop)
    if (ts.isPropertyAccessExpression(node)) {
        return `${parseExpression(node.expression)}.${node.name.text}`;
    }

    // Calls of functions
    if (ts.isCallExpression(node)) {
        return `${parseExpression(node.expression)}(${node.arguments.map(parseExpression).join(', ')})`;
    }
    return undefined; // Неизвестные типы (можно добавить поддержку других случаев)
};

const parseObjectLiteral = (node: ts.ObjectLiteralExpression): AnyType => {
    const result: AnyType = {};
    node.properties.forEach(prop => {
        if (ts.isPropertyAssignment(prop)) {
            const key = prop.name.getText();
            let value = parseExpression(prop.initializer);

            if (key === 'component') {
                const componentClass = getComponentClass(value);
                if (componentClass) value = componentClass;
            }

            result[key] = value;
        }
    });
    return result;
};

function handleFunctionValue(node: ts.FunctionExpression | ts.ArrowFunction) {
    const functionCode = node.getText(); // We get the entire function of the function
    const transpiledCode = transpileTsToJs(functionCode); // We transplant in js

    // Return the function created through the New Function
    return new Function('return ' + transpiledCode)();
}

// Typescript transpilation in JavaScript
function transpileTsToJs(tsCode: string): string {
    return ts.transpileModule(tsCode, {
        compilerOptions: { module: ts.ModuleKind.CommonJS }
    }).outputText;
}

/** Get component class constructor by class name*/
const getComponentClass = (className: string) => {
    for (const key in FIELDS_INFO_MAP) {
        const classInfo = FIELDS_INFO_MAP[key];
        const classInstance = new classInfo();
        if (classInstance.CLASS?.name === className) return classInstance.CLASS;
    }
    return className;
};
