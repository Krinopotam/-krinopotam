import {IFileInfo} from '../types/types';
import {generatePageComponent} from './generatePageComponent.js';

export const generatePages = (filesInfo: IFileInfo[], pagesDirName: string, pagesPath: string, subFolderPath = '', level: number = 0): [string, string] => {
    let routesStrings = '';
    let componentMapStrings = '';
    if (filesInfo.length === 0) return [routesStrings, componentMapStrings];
    for (const file of filesInfo) {
        if (file.children?.length) {
            const folderName = file.fileName;

            console.log(' '.repeat(level * 4), folderName);
            const [routeStr, componentMapStr] = generatePages(file.children, pagesDirName, pagesPath, subFolderPath + '/' + folderName, level + 1);

            routesStrings = routesStrings + `                        {path:"${folderName}", children: [\n${routeStr}\n]},` + '\n';
            componentMapStrings = componentMapStrings + componentMapStr + '\n';
        } else {
            const [routeStr, componentMapStr] = generatePageComponent(file, pagesDirName, pagesPath, level);
            routesStrings = routesStrings + routeStr + '\n';
            componentMapStrings = componentMapStrings + componentMapStr + '\n';
        }
    }

    return [routesStrings, componentMapStrings];
};