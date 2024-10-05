import {parseComponentName} from '../tools/parseComponentName.js';
import {getFileNameMainPart} from '../tools/getFileNameMainPart.js';
import {upperFirstLetter} from '../tools/upperFirstLetter.js';
import {camelCaseSplit} from '../tools/camelCaseSplit.js';

export const parseFileProperties = (fileName: string, fileContent: string) => {
    let componentName = parseComponentName(fileContent);

    const fName = getFileNameMainPart(fileName);
    if (!componentName) componentName = upperFirstLetter(fName);

    const menuItemName = upperFirstLetter(camelCaseSplit(fName).toLowerCase());
    return [componentName, menuItemName];
};