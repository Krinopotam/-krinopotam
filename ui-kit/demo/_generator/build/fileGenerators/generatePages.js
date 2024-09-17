import { generatePageComponent } from './generatePageComponent.js';
export const generatePages = (filesInfo, pagesFN, pagesPath, subFolderPath = '', level = 0) => {
    let routesStrings = '';
    let componentMapStrings = '';
    if (filesInfo.length === 0)
        return [routesStrings, componentMapStrings];
    for (const file of filesInfo) {
        if (file.children?.length) {
            const folderName = file.fileName;
            console.log(' '.repeat(level * 4), folderName);
            const [routeStr, componentMapStr] = generatePages(file.children, pagesFN, pagesPath, subFolderPath + '/' + folderName, level + 1);
            routesStrings = routesStrings + `                        {path:"${folderName}", children: [\n${routeStr}\n]},` + '\n';
            componentMapStrings = componentMapStrings + componentMapStr + '\n';
        }
        else {
            const [routeStr, componentMapStr] = generatePageComponent(file, pagesFN, pagesPath, level);
            routesStrings = routesStrings + routeStr + '\n';
            componentMapStrings = componentMapStrings + componentMapStr + '\n';
        }
    }
    return [routesStrings, componentMapStrings];
};
