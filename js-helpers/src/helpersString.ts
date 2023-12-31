// noinspection JSUnusedGlobalSymbols

/**
 * @StringHelpers
 * @version 1.0.32
 * @link omegatester@gmail.com
 * @author Maksim Zaytsev
 * @license MIT
 */

import {v4 as uuid} from 'uuid';

/** generate new UUID */
export const GetUuid = () => {
    return uuid();
};

/** Converts the first letter of a string to uppercase */
export const UpperFirstLetter = (val: string) => {
    return val.charAt(0).toUpperCase() + val.slice(1);
};

/** Converts the first letter of a string to lowercase */
export const LowerFirstLetter = (val: string) => {
    return val.charAt(0).toLowerCase() + val.slice(1);
};

/** Separates a string in CamelCase with spaces (for example: "CamelCaseString" to "Camel Case String")*/
export const CamelCaseSplit = (str: string, splitter?: string) => {
    if (typeof splitter === 'undefined') splitter = ' ';
    return str.replace(/([a-z0-9])([A-Z])/g, '$1' + splitter + '$2');
};

/** Removes extension from file name*/
export const TrimFileExtension = (fileName: string) => {
    return fileName.replace(/\.[^/.]+$/, '');
};

/* Returns random color **/
export const GetRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};
