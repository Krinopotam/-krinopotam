import fs from 'fs';
import crypto from 'crypto';
import { parseFileProperties } from './parseFileProperties.js';
import { clearSource } from './clearSource.js';
import { trimExtension } from '../tools/trimExtension.js';
import { getFileExtension } from '../tools/getFileExtension.js';
export const getFileInfo = (fileName, fileDir, curDirFromRoot) => {
    const extensions = 'ts|js|tsx|jsx';
    const fnPattern = new RegExp('^(.*)\\.(' + extensions + ')$', 'gi');
    if (!fileName.match(fnPattern))
        return undefined;
    let fileContent = fs.readFileSync(fileDir + '/' + fileName, { encoding: 'utf8', flag: 'r' });
    if (!fileContent)
        return undefined;
    const [componentName, menuItemName] = parseFileProperties(fileName, fileContent);
    fileContent = clearSource(fileContent);
    return {
        fileGuid: crypto.randomUUID(),
        fileName: trimExtension(fileName),
        fileExt: getFileExtension(fileName),
        fileDir: fileDir,
        fullFilePath: curDirFromRoot,
        componentName: componentName,
        componentPage: 'Page' + crypto.randomUUID().replaceAll('-', ''),
        menuItemName: menuItemName,
        menuItemLink: menuItemName.replaceAll(' ', ''),
        source: fileContent,
    };
};
