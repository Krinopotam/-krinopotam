// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');

const examplesRoot = __dirname + '/components';
const importExamplesRoot = '../components/';
const importPagesRoot = './pages/';
const pagesPath = __dirname + '/pages';

function upperFirstLetter(val: string) {
    return val.charAt(0).toUpperCase() + val.slice(1);
}

function lowerFirstLetter(val: string) {
    return val.charAt(0).toLowerCase() + val.slice(1);
}

function generatePageComponent(componentFileName: string, componentPath: string, source: string, pagesPath: string) {
    const moduleName = componentFileName.split('.')[0];
    const componentName = upperFirstLetter(moduleName);

    const pageComponentName = componentName + 'Page';

    source = source.replaceAll(/\s*\{\/\*Description Start\*\/}[\S\s]*?\{\/\*Description End\*\/}/gi, ''); //remove {/*Description Start/*} blocks
    source = source.replaceAll(/\s*\/\*Description Start\*\/[\S\s]*?\/\*Description End\*\//gi, ''); //remove /*Description Start*/ blocks

    source = source.replaceAll(/\$\{/g, '\\${');
    source = source.replaceAll(/`/g, '\\`');

    // language=text
    const importStr = `
    import React from 'react';
    import {${componentName}} from '${importExamplesRoot + moduleName}';
    import { Divider } from 'antd';
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
                <SyntaxHighlighter language="javascript" style={props.darkMode ? darcula : docco}>
                    {source}
                </SyntaxHighlighter>
            </div>
        </>
    );
};
`;
    const pageFileName = lowerFirstLetter(pageComponentName) + '.tsx';

    const content = importStr + bodyStr;
    fs.writeFileSync(pagesPath + '/' + pageFileName, content, {encoding: 'utf8', flag: 'w'});

    // language=text
    const routeStr = `                <Route path="${componentName}" element={<${pageComponentName} darkMode={props.darkMode} />} />;`;
    const routeImportStr = `    import {${pageComponentName}} from '${importPagesRoot + moduleName + 'Page'}';`;
    return [routeStr, routeImportStr];
}

function generateExamplesRoutes(imports:string, routers:string) {
    // language=text
    const result = `
    import React from 'react';
    import {Route, Routes} from 'react-router-dom';
    import {ExamplesLayout} from './examplesLayout';
    import {Home} from './home';
${imports}

export const ExamplesRoutes = (props: {darkMode: boolean; setDarkMode: (mode:boolean) => void}) => {
    return (
        <Routes>
            <Route path="/" element={<ExamplesLayout setDarkMode={props.setDarkMode} />}>
                <Route index element={<Home />} />
${routers}
                <Route path="*" element={<Home />} />
            </Route>
        </Routes>
    );
};
`;
    fs.writeFileSync(__dirname + '/examplesRoutes.tsx', result, {encoding: 'utf8', flag: 'w'});
}

function run() {
    console.log(__dirname + '/' + examplesRoot);
    const fileList = fs.readdirSync(examplesRoot);

    let routers = '';
    let imports = '';
    for (const fileName of fileList) {
        const fileSource = fs.readFileSync(examplesRoot + '/' + fileName, {encoding: 'utf8', flag: 'r'});
        const [routeStr, importStr] = generatePageComponent(fileName, examplesRoot, fileSource, pagesPath);

        routers = routers + routeStr + '\n';
        imports = imports + importStr + '\n';
    }

    generateExamplesRoutes(imports, routers);
}

run();
