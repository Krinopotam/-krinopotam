import { v4 as uuid } from 'uuid';
export const GetUuid = () => {
    return uuid();
};
export const UpperFirstLetter = (val) => {
    return val.charAt(0).toUpperCase() + val.slice(1);
};
export const LowerFirstLetter = (val) => {
    return val.charAt(0).toLowerCase() + val.slice(1);
};
export const CamelCaseSplit = (str, splitter) => {
    if (typeof splitter === 'undefined')
        splitter = ' ';
    return str.replace(/([a-z0-9])([A-Z])/g, '$1' + splitter + '$2');
};
export const TrimFileExtension = (fileName) => {
    return fileName.replace(/\.[^/.]+$/, '');
};
export const GetRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};
