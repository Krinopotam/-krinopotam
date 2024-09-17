import fs from 'fs';

import {IFileInfo} from '../types/types';
import {trimExtension} from '../tools/trimExtension.js';

export const generatePageComponent = (file: IFileInfo, pagesFN: string, pagesPath: string, level: number) => {
    const componentImportPath = '../' + trimExtension(file.fullFilePath);
    const componentName = file.componentName;
    const menuItemLink = file.menuItemLink;
    const pageComponentName = file.componentPage;

    const pageComponentPath: string = pagesPath + '/' + pageComponentName + '.tsx';
    const pageImportPath = './../' + pagesFN + '/' + pageComponentName;

    let source = file.source!;
    source = source.replaceAll(/\$\{/g, '\\${');
    source = source.replaceAll(/`/g, '\\`');

    // language=text
    const importStr = `
    import React from 'react';
    import {PageLayout} from '../layouts/pageLayout';
    import {${componentName}} from '${componentImportPath}';
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
    const routeStr = `                        {path:"${menuItemLink}", element:<ComponentLoader pageName="${pageComponentName}" darkMode={props.darkMode} />},`;
    // language=text
    const componentMapStr = `    '${pageComponentName}': lazy(() => import('${pageImportPath}')),`;
    console.log(' '.repeat(level * 4), file.componentName);
    return [routeStr, componentMapStr];
};