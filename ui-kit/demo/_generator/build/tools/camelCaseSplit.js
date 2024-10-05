//region Service methods
export const camelCaseSplit = (str, splitter) => {
    if (typeof splitter === 'undefined')
        splitter = ' ';
    return str.replace(/([a-z0-9])([A-Z](?=[a-z0-9]))/g, '$1' + splitter + '$2');
};
