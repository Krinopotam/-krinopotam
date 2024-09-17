import fs from 'fs';

import {IFileInfo} from '../types/types';
import {trimExtension} from '../tools/trimExtension.js';

export const generatePageComponent = (file: IFileInfo, pagesDirName: string, pagesPath: string, level: number) => {
    const componentImportPath = '../../' + trimExtension(file.fullFilePath);
    const componentName = file.componentName;
    const menuItemLink = file.menuItemLink;
    const pageComponentName = file.componentPage;

    const pageComponentPath: string = pagesPath + '/' + pageComponentName + '.tsx';
    const pageImportPath = './' + pagesDirName + '/' + pageComponentName;

    let source = file.source!;
    source = source.replaceAll(/\$\{/g, '\\${');
    source = source.replaceAll(/`/g, '\\`');

    // language=text
    const importStr = `
    import React, {lazy, Suspense} from 'react';
    import {${componentName}} from '${componentImportPath}';
    import {PageLayout} from '../../_internal/pageLayout'
    import { Divider, Collapse } from 'antd';
    import { darcula, coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
    
    //const SyntaxHighlighter = lazy(() => import('react-syntax-highlighter'));
    const SyntaxHighlighter = lazy(() => import('react-syntax-highlighter').then(module => ({ default: module.Prism })));
    `;

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
                    items={[{key: 1, label: 'Show source', children: <Suspense fallback={<div>Loading source...</div>}>
                        <SyntaxHighlighter language="tsx" style={props.darkMode ? darcula : coy} showLineNumbers={true}>{source}</SyntaxHighlighter>
                    </Suspense>}]}>
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