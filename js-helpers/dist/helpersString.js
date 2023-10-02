import { v4 as uuid } from 'uuid';
export const HelpersStrings = {
    getUuid: () => {
        return uuid();
    },
    upperFirstLetter: (val) => {
        return val.charAt(0).toUpperCase() + val.slice(1);
    },
    lowerFirstLetter: (val) => {
        return val.charAt(0).toLowerCase() + val.slice(1);
    },
    camelCaseSplit: (str, splitter) => {
        if (typeof splitter === 'undefined')
            splitter = ' ';
        return str.replace(/([a-z0-9])([A-Z])/g, '$1' + splitter + '$2');
    },
    trimFileExtension: (fileName) => {
        return fileName.replace(/\.[^/.]+$/, '');
    }
};
