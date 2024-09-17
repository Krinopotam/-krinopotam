import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

import {sortByFileName} from './tools/sortByFileName.js';
import {getDirFilesInfo} from './getFilesInfo/getDirFilesInfo.js';
import {generateComponentLoader} from './fileGenerators/generateComponentLoader.js';
import {generateRoutes} from './fileGenerators/generateRoutes.js';
import {generateMenuProps} from './fileGenerators/generateMenuProps.js';
import {generatePages} from './fileGenerators/generatePages.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function run() {
    const demoRoot = __dirname + '/../../';
    const generatedPath = demoRoot + '_generated';
    const componentsDirName = 'components';
    const pagesDirName = 'pages';
    const componentsPath = demoRoot + componentsDirName;
    const pagesPath = generatedPath + '/' + pagesDirName;

    if (!fs.existsSync(generatedPath)) fs.mkdirSync(generatedPath, {recursive: true});
    //clear pages folder
    fs.rmSync(pagesPath, {recursive: true, force: true});
    if (!fs.existsSync(pagesPath)) fs.mkdirSync(pagesPath, {recursive: true});

    console.log('Generated:');
    const filesInfo = getDirFilesInfo(componentsPath, componentsDirName);

    sortByFileName(filesInfo);
    const [routesString, componentMapStr] = generatePages(filesInfo, pagesDirName, pagesPath);
    generateRoutes( generatedPath, routesString);
    generateComponentLoader( generatedPath, componentMapStr);
    generateMenuProps( generatedPath, filesInfo);
}

run();
