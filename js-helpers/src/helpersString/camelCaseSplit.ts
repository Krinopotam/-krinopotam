/** Separates a string in CamelCase with spaces (for example: "CamelCaseString" to "Camel Case String")*/
export const CamelCaseSplit = (str: string, splitter?: string) => {
    if (typeof splitter === 'undefined') splitter = ' ';
    return str.replace(/([a-z0-9])([A-Z])/g, '$1' + splitter + '$2');
};