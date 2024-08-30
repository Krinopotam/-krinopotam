export const CamelCaseSplit = (str, splitter) => {
    if (typeof splitter === 'undefined')
        splitter = ' ';
    return str.replace(/([a-z0-9])([A-Z])/g, '$1' + splitter + '$2');
};
