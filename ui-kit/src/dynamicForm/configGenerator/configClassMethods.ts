export interface IClassProps {
    className: string,

    /** import props */
    imports?: Record<string, string>,

    /** fields props */
    fields?: Record<string, { access?: string, value?: string, type: string }>

    /** constructor props */
    constructor?: { parameters: Record<string, string>, rows: string[] }

    /** propMethods */
    propMethods?: Record<string, { name: string, type: string, sourceType: string, comment: string }>

    /** additional methods props */
    additionalMethods?: Record<string, string>

    /** types props */
    types?: string

    /** implements props */
    implements?: string

    /** extends props */
    extends?: string
}

/** Generate class text  */
export const generateClass = (props: IClassProps) => {
    return `${generateImports(props.imports)}
${props.types || ''}
export class ${props.className} ${props.implements ? ' implements ' + props.implements : ''}${props.extends ? ' extends ' + props.extends : ''} {
${generateClassFields(props.fields)}
${generateClassConstructor(props.constructor)}
${generatePropsMethods(props.propMethods)}
${generateAdditionalMethods(props.additionalMethods)}
}`;
};

/** generate import section  */
function generateImports(imports: IClassProps['imports']) {
    if (!imports) return '';
    let result = '';

    const groupedImport: Record<string, string> = {};
    for (const resourceName in imports) {
        const resourcePath = imports[resourceName];
        if (!resourcePath) continue;
        if (groupedImport[resourcePath]) groupedImport[resourcePath] = groupedImport[resourcePath] + ', ' + resourceName;
        else groupedImport[resourcePath] = resourceName;
    }

    for (const path in groupedImport) {
        const name = groupedImport[path];
        result = result + getImportTemplate(name, path) + '\n';
    }

    return result;
}

/** Generate class fields section props  */
function generateClassFields(props: IClassProps['fields']) {
    if (!props) return '';

    let result = '';
    for (const varName in props) {
        const varProps = props[varName];
        let line = `    ${varProps.access || ''} ${varName}: ${varProps.type}`;
        if (typeof varProps.value !== 'undefined') line = line + ' = ' + varProps.value;
        result = result + line + ';\n';
    }

    return result;
}

/** Generate class constructor  */
function generateClassConstructor(props: IClassProps['constructor']) {
    if (!props) return '';

    let rows = '';
    let parameters = '';
    if (props.parameters) {
        for (const paramName in props.parameters) {
            const paramType = props.parameters[paramName];
            if (parameters) parameters = parameters + ', ';
            parameters = parameters + (paramName + ': ' + paramType);
        }
    }

    if (props.rows) {
        for (const row of props.rows) {
            if (rows) rows = rows + '\n';
            rows = rows + '        ' + row + ';';
        }
    }

    if (!parameters && !rows) return '';

    return `    constructor(${parameters}) {
${rows} 
    }`;
}

/** Generate property set methods */
function generatePropsMethods(props: IClassProps['propMethods']) {
    if (!props) return '';
    let result = '';
    for (const name in props) {
        result = result + '\n\n' + generateProperty(props[name]);
    }

    return result;
}

/** Generate additional class methods  */
function generateAdditionalMethods(props: IClassProps['additionalMethods']) {
    if (!props) return '';

    let rows = '';
    for (const methodName in props) {
        const methodContent = props[methodName];
        if (!methodContent) continue;
        rows = rows + '\n\n    ' + methodContent;
    }

    return rows;
}

function getImportTemplate(importName: string, importPath: string) {
    return `import {${importName}} from '${importPath}';`;
}

/** Generate the property set function */
function generateProperty(prop: { name: string, type: string, sourceType: string, comment: string }) {
    return `    ${prop.comment}
    ${prop.name}(value: ${prop.type}) {
        this._config.${prop.name} = value;
        return this;
    }`;
}