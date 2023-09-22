// eslint-disable-next-line @typescript-eslint/no-var-requires

import fs from "fs";

export type IComponentOptions = { modulePath: string, savePath: string, typeName: string, typePath: string }
export type IProperty = { name: string, type: string, sourceType: string, comment: string }

//region File data load/save
/** Load file */
function loadFile(options: IComponentOptions) {
    const path = __dirname + '/' + options.modulePath;
    try {
        return fs.readFileSync(path, 'utf8');
    } catch (err) {
        throw new Error('file loading ' + err);
    }
}

/**  Save content to file */
export const saveFile = (filePath: string, content: string): string | undefined => {
    const path = __dirname + '/' + filePath;
    try {
        fs.writeFileSync(path, content, 'utf8');
    } catch (err) {
        return err as string;
    }
};

//endregion

//region Parse interface properties
/** Get interface text from file content */
export const parseInterfaceText = (options: IComponentOptions) => {
    const fileContent = loadFile(options);
    if (!fileContent) throw new Error(
        'file parsing Error: Empty file "' + options.modulePath
    );

    const matcher = new RegExp(
        //'export interface ' + options.typeName + '\\s*(?:extends\\s[A-Za-z_<>,\'"\\s]*\\s*)?{[\\r\\n]([a-zA-Z\\d\\s/*&?:;,.\'`"@_=<>|()\\[\\]+-]*)[\\n\\r]}',
        'export interface ' + options.typeName + '\\s*(?:extends\\s[A-Za-z_<>,\'"\\s|]*\\s*)?{(([^{}]|{[^{}]*})*)}',
        'gm'
    );

    const matched = matcher.exec(fileContent);
    if (!matched || typeof matched[1] === 'undefined') {
        throw new Error(
            'file parsing Error: Can not find interface "' +
            options.typeName +
            '" in the file "' +
            options.modulePath +
            '" content\nMatcher: ' +
            matcher.toString()
        );
    }

    return matched[1];
}

/**  Get properties collection */
export const parseProperties = (options: IComponentOptions) => {
    const interfaceText = parseInterfaceText(options);
    const rows = interfaceText.split('\n');
    rows.push('//');

    const result: Record<string, IProperty> = {};
    let prevComment = '';
    for (const elem of rows) {
        const curRow = elem.trim();
        if (!curRow) {
            prevComment = '';
            continue;
        }

        const isComment = curRow.startsWith('//') || curRow.startsWith('/*');
        if (isComment) {
            prevComment = curRow; //allow the single row comment only
            continue;
        }

        const property = getProperty(prevComment, curRow, options);
        if (property) result[property.name] = property;
        prevComment = '';
    }

    return result;
};

/** Parse property  */
export const getProperty = (commentRow: string, propertyRow: string, options: IComponentOptions): IProperty | undefined => {
    const [part1, ...rest] = propertyRow.split(':');
    const part2 = rest.join(':');

    if (!part1) return undefined;
    let property = part1.trim();
    let sourceStr = part2 ? part2.trim() : '';

    if (property.endsWith('?')) property = property.substring(0, property.length - 1);
    if (sourceStr.endsWith(';')) sourceStr = sourceStr.substring(0, sourceStr.length - 1);
    const typeStr = `${options.typeName}['${property}']`;

    return {name: property, type: typeStr, sourceType: sourceStr, comment: commentRow};
}
//endregion
