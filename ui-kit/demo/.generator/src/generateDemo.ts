import fs from 'fs';
import * as crypto from 'crypto';
import path from 'path';
import {fileURLToPath} from 'url';
import {upperFirstLetter} from './tools/upperFirstLetter.js';
import {trimExtension} from './tools/trimExtension.js';
import {getFileExtension} from './tools/getFileExtension.js';
import {getFileNameMainPart} from './tools/getFileNameMainPart.js';
import {parseComponentName} from './tools/parseComponentName.js';
import {camelCaseSplit} from './tools/camelCaseSplit.js';
import {IFileInfo} from './types/types';
import {menuItemsSorting} from './tools/menuItemsSorting.js';

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
    fs.rmSync(pagesPath, {recursive: true, force: true});
    if (!fs.existsSync(pagesPath)) fs.mkdirSync(pagesPath, {recursive: true});
    console.log('Generated:');
    const files = recursiveDirectoriesRun(componentsPath, componentsFN);
    menuItemsSorting(files);
    const [routesString, routeImportString] = generatePages(files, pagesFN, pagesPath);
    generateRoutes(routesString, routeImportString, layoutsPath);
    generateMenuProps(files, layoutsPath);
}

//region Prepare components files info
function recursiveDirectoriesRun(curDir: string, curDirFromRoot: string, files?: IFileInfo[]): IFileInfo[] {
    const fileList = fs.readdirSync(curDir, {withFileTypes: true});

    if (!files) files = [];
    for (const entity of fileList) {
        if (entity.isDirectory()) {
            const folder: IFileInfo = {
                fileGuid: crypto.randomUUID(),
                fileName: entity.name,
                fileExt: '',
                fileDir: curDir,
                fullFilePath: curDirFromRoot,
                menuItemName: upperFirstLetter(camelCaseSplit(entity.name)),
            };
            folder.children = recursiveDirectoriesRun(curDir + '/' + entity.name, curDirFromRoot + '/' + entity.name);
            files.push(folder);
        } else {
            const item = processFile(entity.name, curDir, curDirFromRoot + '/' + entity.name);
            if (item) files?.push(item);
        }
    }

    return files;
}

function processFile(fileName: string, fileDir: string, curDirFromRoot: string): IFileInfo | undefined {
    const extensions = 'ts|js|tsx|jsx';

    const fnPattern = new RegExp('^(.*)\\.(' + extensions + ')$', 'gi');
    if (!fileName.match(fnPattern)) return undefined;

    let fileContent = fs.readFileSync(fileDir + '/' + fileName, {encoding: 'utf8', flag: 'r'});
    if (!fileContent) return undefined;

    const [componentName, menuItemName] = parseFileProperties(fileName, fileContent);
    fileContent = clearSource(fileContent);

    return {
        fileGuid: crypto.randomUUID(),
        fileName: trimExtension(fileName),
        fileExt: getFileExtension(fileName),
        fileDir: fileDir,
        fullFilePath: curDirFromRoot,
        componentName: componentName,
        componentGuid: crypto.randomUUID(),
        menuItemName: menuItemName,
        menuItemLink: menuItemName.replaceAll(' ', ''),
        source: fileContent,
    };
}

function parseFileProperties(fileName: string, fileContent: string) {
    let componentName = parseComponentName(fileContent);

    const fName = getFileNameMainPart(fileName);
    if (!componentName) componentName = upperFirstLetter(fName);

    const menuItemName = upperFirstLetter(camelCaseSplit(fName));
    return [componentName, menuItemName];
}

function clearSource(source: string) {
    source = source.replaceAll(/\s*\{\/\*Description Start\*\/}[\S\s]*?\{\/\*Description End\*\/}/gi, ''); //remove {/*Description Start/*} blocks
    source = source.replaceAll(/\s*\/\*Description Start\*\/[\S\s]*?\/\*Description End\*\//gi, ''); //remove /*Description End*/ blocks
    source = source.replaceAll(/\/\/ noinspection DuplicatedCode/gi, ''); //remove // noinspection DuplicatedCode
    source = source.replaceAll(/['"]@src\//gi, '@krinopotam/ui-kit/'); //replace @src to @krinopotam/ui-kit

    const sourceLines = source.split(/\r?\n/);
    let newSource = '';
    for (const line of sourceLines) {
        if (line.trim().length === 0) continue;
        newSource = newSource + '\n' + line;
    }

    return newSource + '\n';
}

//endregion

//region Generate menu props
function prepareMenuProps(filesInfo: IFileInfo[], level: number = 1, rootFolder = '/') {
    if (filesInfo.length === 0) return '';
    let result = '[';
    for (const file of filesInfo) {
        if (file.children?.length) {
            const childrenItems = prepareMenuProps(file.children, level + 1, rootFolder + file.fileName + '/');
            result =
                result +
                // language=text
                `\n${' '.repeat(level * 4)}getItem("${file.menuItemName}", "Item${crypto.randomUUID()}", <FolderOutlined />, ${childrenItems}),`;
            continue;
        }

        // language=text
        result =
            result +
            `\n${' '.repeat(level * 4)}getItem(<Link to="${rootFolder + file.menuItemLink}">${file.menuItemName}</Link>, "Item${crypto.randomUUID()}"),`;
    }
    result = result + ']';

    return result;
}

function generateMenuProps(filesInfo: IFileInfo[], layoutsPath:string) {
    // language=text
    let content = `
import React from "react";
import {MenuProps} from "antd";
import {FolderOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";

type MenuItem = Required<MenuProps>['items'][number];

function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[], type?: 'group'): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

`;

    content = content + 'export const menuItems: MenuProps["items"] =' + prepareMenuProps(filesInfo);
    fs.writeFileSync(layoutsPath + '/menuProps.tsx', content, {encoding: 'utf8', flag: 'w'});
}

//endregion

//<editor-fold desc="Generate pages">
function generatePages(filesInfo: IFileInfo[], pagesFN:string, pagesPath:string, subFolderPath = '', level: number = 0): [string, string] {
    let routesStrings = '';
    let routeImportStrings = '';
    if (filesInfo.length === 0) return [routesStrings, routeImportStrings];
    for (const file of filesInfo) {
        if (file.children?.length) {
            const folderName = file.fileName;

            console.log(' '.repeat(level * 4), folderName);
            const [routeStr, routeImportStr] = generatePages(file.children, pagesFN, pagesPath, subFolderPath + '/' + folderName, level + 1);

            routesStrings = routesStrings + `                        {path:"${folderName}", children: [\n${routeStr}\n]},` + '\n';
            routeImportStrings = routeImportStrings + routeImportStr + '\n';
        } else {
            const [routeStr, routeImportStr] = generatePageComponent(file, pagesFN, pagesPath, level);
            routesStrings = routesStrings + routeStr + '\n';
            routeImportStrings = routeImportStrings + routeImportStr + '\n';
        }
    }

    return [routesStrings, routeImportStrings];
}

function generatePageComponent(file: IFileInfo, pagesFN:string, pagesPath:string, level: number) {
    const componentModulePath = '../' + trimExtension(file.fullFilePath);
    const componentName = file.componentName;
    const menuItemLink = file.menuItemLink;
    const pageComponentName = 'Page' + file.componentGuid?.replaceAll('-', '');

    const pageComponentPath: string = pagesPath + '/' + pageComponentName + '.tsx';
    const pageModulePath = './../' + pagesFN + '/' + pageComponentName;

    let source = file.source!;
    source = source.replaceAll(/\$\{/g, '\\${');
    source = source.replaceAll(/`/g, '\\`');

    // language=text
    const importStr = `
    import React from 'react';
    import {PageLayout} from '../layouts/pageLayout';
    import {${componentName}} from '${componentModulePath}';
    import { Divider, Collapse } from 'antd';
    import SyntaxHighlighter from 'react-syntax-highlighter';
    import {darcula, docco} from 'react-syntax-highlighter/dist/esm/styles/hljs';\n`;

    // language=text
    const bodyStr = `
    export const ${pageComponentName} = (props: {darkMode: boolean}): React.JSX.Element => {
    // language=text
    const source = \`${source}\`
    return (
        <PageLayout>
            <div>
                <${componentName} />
            </div>
            <Divider />
            <div>
                <Collapse 
                    items={[{key: 1, label: 'Show source', children: <SyntaxHighlighter language="javascript" style={props.darkMode ? darcula : docco} showLineNumbers={true}>{source}</SyntaxHighlighter>}]}>
                </Collapse>
            </div>
        </PageLayout>
    );
};

export default ${pageComponentName};
`;

    const content = importStr + bodyStr;
    fs.writeFileSync(pageComponentPath, content, {encoding: 'utf8', flag: 'w'});

    // language=text
    const routeStr = `                        {path:"${menuItemLink}", element:<${pageComponentName} darkMode={props.darkMode} />},`;
    const routeImportStr = `    const ${pageComponentName} = lazy(() => import('${pageModulePath}'))`;

    console.log(' '.repeat(level * 4), file.componentName);
    return [routeStr, routeImportStr];
}

//</editor-fold>

//region Generate routes
function generateRoutes(routers: string, imports: string, layoutsPath: string) {
    // language=text
    const result = `
    import React, {lazy, useMemo} from 'react';
    import {createHashRouter} from 'react-router-dom';
    import {DemoLayout} from './demoLayout';
    import {Home} from './home';
${imports}

export const useDemoRoutes = (props: {darkMode: boolean; setDarkMode: (mode: boolean) => void}) => {
        return useMemo(() => {
            return createHashRouter([
                {
                    path: '/',
                    element: <DemoLayout setDarkMode={props.setDarkMode} />,
                    children: [
                        {index: true, element: <Home />},
${routers}
                        {path: '*', element: <Home />},
                    ],
                },
            ]);
        }, [props.darkMode, props.setDarkMode]);
    };

`;
    fs.writeFileSync(layoutsPath + '/demoRoutes.tsx', result, {encoding: 'utf8', flag: 'w'});
}

run();
