/**
 * @StringHelpers
 * @version 0.0.1
 * @link omegatester@gmail.com
 * @author Maksim Zaytsev
 * @license MIT
 */

import {v4 as uuid} from 'uuid';

export const HelpersStrings = {
    /** generate new UUID */
    getUuid: () => {
        return uuid()
    },

    /** Converts the first letter of a string to uppercase */
    upperFirstLetter: (val: string) => {
        return val.charAt(0).toUpperCase() + val.slice(1);
    },

    /** Converts the first letter of a string to lowercase */
    lowerFirstLetter: (val: string) => {
        return val.charAt(0).toLowerCase() + val.slice(1);
    },

    /** Separates a string in CamelCase with spaces (for example: "CamelCaseString" to "Camel Case String")*/
    camelCaseSplit: (str: string, splitter?: string) => {
        if (typeof splitter === 'undefined') splitter = ' ';
        return str.replace(/([a-z0-9])([A-Z])/g, '$1' + splitter + '$2')
    },

    /** Removes extension from file name*/
    trimFileExtension: (fileName: string) => {
        return fileName.replace(/\.[^/.]+$/, '')
    }
}




