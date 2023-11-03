import { v4 as uuid } from 'uuid';
export const getUuid = () => {
    return uuid();
};
export const upperFirstLetter = (val) => {
    return val.charAt(0).toUpperCase() + val.slice(1);
};
export const lowerFirstLetter = (val) => {
    return val.charAt(0).toLowerCase() + val.slice(1);
};
export const camelCaseSplit = (str, splitter) => {
    if (typeof splitter === 'undefined')
        splitter = ' ';
    return str.replace(/([a-z0-9])([A-Z])/g, '$1' + splitter + '$2');
};
export const trimFileExtension = (fileName) => {
    return fileName.replace(/\.[^/.]+$/, '');
};
export const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};
