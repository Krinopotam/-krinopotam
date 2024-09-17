import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { sortByFileName } from './tools/sortByFileName.js';
import { getDirFilesInfo } from './getFilesInfo/getDirFilesInfo.js';
import { generateComponentLoader } from './fileGenerators/generateComponentLoader.js';
import { generateRoutes } from './fileGenerators/generateRoutes.js';
import { generateMenuProps } from './fileGenerators/generateMenuProps.js';
import { generatePages } from './fileGenerators/generatePages.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
function run() {
    const demoRoot = __dirname + '/../../';
    const componentsFN = 'components';
    const pagesFN = 'pages';
    const layoutsFN = 'layouts';
    const componentsPath = demoRoot + componentsFN;
    const pagesPath = demoRoot + pagesFN;
    const layoutsPath = demoRoot + layoutsFN;
    //clear pages folder
    fs.rmSync(pagesPath, { recursive: true, force: true });
    if (!fs.existsSync(pagesPath))
        fs.mkdirSync(pagesPath, { recursive: true });
    console.log('Generated:');
    const filesInfo = getDirFilesInfo(componentsPath, componentsFN);
    sortByFileName(filesInfo);
    const [routesString, componentMapStr] = generatePages(filesInfo, pagesFN, pagesPath);
    generateRoutes(layoutsPath, routesString);
    generateComponentLoader(layoutsPath, componentMapStr);
    generateMenuProps(filesInfo, layoutsPath);
}
run();
