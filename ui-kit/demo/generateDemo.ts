import * as fs from 'fs';
import * as crypto from 'crypto';

const _componentsFolder = 'components';
const _pagesFolder = 'pages';
const _examplesRoot = __dirname + '/' + _componentsFolder;
const _pagesPath = __dirname + '/' + _pagesFolder;

interface IFileInfo {
    /** File or directory unique id*/
    fileGuid: string;
    /** File name without extension or directory name */
    fileName: string;
    /** File extension */
    fileExt?: string;
    /** file directory from app root */
    fileDir: string;
    /** full file path from app root */
    fullFilePath: string;
    /** file source content */
    source?: string;
    /** component name */
    componentName?: string;
    /** unique component id */
    componentGuid?: string;
    /** item name for menu */
    menuItemName?: string;
    /** link name for menu item */
    menuItemLink?: string;
    /** item title */
    title?: string;
    /** item description */
    description?: string;

    /** children files (for directory)*/
    children?: IFileInfo[];
}

function run() {
    //clear pages folder
    fs.rmSync(_pagesPath, {recursive: true, force: true});
    if (!fs.existsSync(_pagesPath)) fs.mkdirSync(_pagesPath, {recursive: true});
    console.log('Generated:');
    const files = recursiveDirectoriesRun(_examplesRoot, _componentsFolder);
    menuItemsSorting(files);
    const [routesString, routeImportString] = generatePages(files);
    generateRoutes(routesString, routeImportString);
    generateMenuProps(files);
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
    source = source.replaceAll(/\s*\/\*Description Start\*\/[\S\s]*?\/\*Description End\*\//gi, ''); //remove /*Description Start*/ blocks
    source = source.replaceAll(/\/\/ noinspection DuplicatedCode/gi, ''); //remove // noinspection DuplicatedCode
    source = source.replaceAll(/['"]@src\//gi, '@krinopotam/ui-kit/'); //remove // noinspection DuplicatedCode

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
const _itemNum = {num: 0};

function prepareMenuProps(filesInfo: IFileInfo[], level: number = 1, rootFolder = '/') {
    if (filesInfo.length === 0) return '';
    let result = '[';
    for (const file of filesInfo) {
        _itemNum.num++;
        if (file.children?.length) {
            const childrenItems = prepareMenuProps(file.children, level + 1, rootFolder + file.fileName + '/');
            result =
                result +
                // language=text
                `\n${' '.repeat(level * 4)}getItem("${file.menuItemName}", "Item${_itemNum.num}", <FolderOutlined />, ${childrenItems}),`;
            continue;
        }

        // language=text
        result = result + `\n${' '.repeat(level * 4)}getItem(<Link to="${rootFolder + file.menuItemLink}">${file.menuItemName}</Link>, "Item${_itemNum.num}"),`;
    }
    result = result + ']';

    return result;
}

function generateMenuProps(filesInfo: IFileInfo[]) {
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
    fs.writeFileSync(__dirname + '/menuProps.tsx', content, {encoding: 'utf8', flag: 'w'});
}

//endregion

//<editor-fold desc="Generate pages">
function generatePages(filesInfo: IFileInfo[], subFolderPath = '', level: number = 0): [string, string] {
    let routesStrings = '';
    let routeImportStrings = '';
    if (filesInfo.length === 0) return [routesStrings, routeImportStrings];
    for (const file of filesInfo) {
        if (file.children?.length) {
            const folderName = file.fileName;

            console.log(' '.repeat(level * 4), folderName);
            const [routeStr, routeImportStr] = generatePages(file.children, subFolderPath + '/' + folderName, level + 1);

            routesStrings = routesStrings + `                        {path:"${folderName}", children: [\n${routeStr}\n]},` + '\n';
            routeImportStrings = routeImportStrings + routeImportStr + '\n';
        } else {
            const [routeStr, routeImportStr] = generatePageComponent(file, subFolderPath, level);
            routesStrings = routesStrings + routeStr + '\n';
            routeImportStrings = routeImportStrings + routeImportStr + '\n';
        }
    }

    return [routesStrings, routeImportStrings];
}

function generatePageComponent(file: IFileInfo, subFolderPath: string, level: number) {
    const componentModulePath = '../' + trimExtension(file.fullFilePath);
    const componentName = file.componentName;
    const menuItemLink = file.menuItemLink;
    const pageComponentName = 'Page' + file.componentGuid?.replaceAll('-', '');

    const pagesPath: string = _pagesPath + '/' + pageComponentName + '.tsx';
    const pageModulePath = './' + _pagesFolder + '/' + pageComponentName;

    let source = file.source!;
    source = source.replaceAll(/\$\{/g, '\\${');
    source = source.replaceAll(/`/g, '\\`');

    // language=text
    const importStr = `
    import React from 'react';
    import {${componentName}} from '${componentModulePath}';
    import { Divider, Collapse } from 'antd';
    import SyntaxHighlighter from 'react-syntax-highlighter';
    import {darcula, docco} from 'react-syntax-highlighter/dist/esm/styles/hljs';\n`;

    const bodyStr = `
    export const ${pageComponentName} = (props: {darkMode: boolean}): React.JSX.Element => {
    // language=text
    const source = \`${source}\`
    return (
        <>
            <div>
                <${componentName} />
            </div>
            <Divider />
            <div>
                <Collapse 
                    items={[{key: 1, label: 'Show source', children: <SyntaxHighlighter language="javascript" style={props.darkMode ? darcula : docco} showLineNumbers={true}>{source}</SyntaxHighlighter>}]}>
                </Collapse>
            </div>
        </>
    );
};

export default ${pageComponentName};
`;

    const content = importStr + bodyStr;
    fs.writeFileSync(pagesPath, content, {encoding: 'utf8', flag: 'w'});

    // language=text
    const routeStr = `                        {path:"${menuItemLink}", element:<${pageComponentName} darkMode={props.darkMode} />},`;
    const routeImportStr = `    const ${pageComponentName} = lazy(() => import('${pageModulePath}'))`;

    console.log(' '.repeat(level * 4), file.componentName);
    return [routeStr, routeImportStr];
}

//</editor-fold>

//region Generate routes
function generateRoutes(routers: string, imports: string) {
    // language=text
    const result = `
    import React, {lazy, useMemo} from 'react';
    import {createBrowserRouter} from 'react-router-dom';
    import {DemoLayout} from './demoLayout';
    import {Home} from './home';
${imports}

export const useDemoRoutes = (props: {darkMode: boolean; setDarkMode: (mode: boolean) => void}) => {
        return useMemo(() => {
            return createBrowserRouter([
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
    fs.writeFileSync(__dirname + '/demoRoutes.tsx', result, {encoding: 'utf8', flag: 'w'});
}

//endregion

//region Sorting
function menuItemsSorting(items: IFileInfo[]) {
    items.sort((a, b) => {
        if (a.children?.length) menuItemsSorting(a.children);
        if (b.children?.length) menuItemsSorting(b.children);

        if (a.children?.length && b.children?.length) {
            if (a.fileName === b.fileName) return 0;
            else return a.fileName > b.fileName ? 1 : -1;
        } else if (a.children?.length) return -1;
        else return 1;
    });
}

//endregion

//region Service methods
function camelCaseSplit(str: string, splitter?: string) {
    if (typeof splitter === 'undefined') splitter = ' ';
    return str.replace(/([a-z0-9][a-z0-9])([A-Z][a-z0-9])/g, '$1' + splitter + '$2');
}

function parseComponentName(source: string) {
    const matcher = /export const ([A-Z][A-Za-z_0-9]*)\s?=/g;
    const match = matcher.exec(source);
    return match?.[1] ?? '';
}

function getFileNameMainPart(fileName: string) {
    const parts = fileName.split('.');
    return parts[0];
}

function getFileExtension(fileName: string) {
    const parts = fileName.split('.');
    if (parts.length === 1) return '';
    return parts[parts.length - 1];
}

function trimExtension(fileName: string) {
    return fileName.replace(/\.[^/.]+$/, '');
}

function upperFirstLetter(val: string) {
    return val.charAt(0).toUpperCase() + val.slice(1);
}

//endregion

run();
