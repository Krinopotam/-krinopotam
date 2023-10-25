
    import React from 'react';
    import {TabulatorGridTree} from '../components/tabulator/tabulatorGridTree';
    import { Divider, Collapse } from 'antd';
    import SyntaxHighlighter from 'react-syntax-highlighter';
    import {darcula, docco} from 'react-syntax-highlighter/dist/esm/styles/hljs';

    export const Page030ec5d96c204de8aa7a39bbdb6d7df3 = (props: {darkMode: boolean}): React.JSX.Element => {
    // language=text
    const source = `
import React from 'react';
import {TabulatorGrid} from @krinopotam/ui-kit/tabulatorGrid';
import {TabulatorBaseColumns, TabulatorBaseColumnsDef, TabulatorTreeData} from '../../data/tabulatorData';
export const TabulatorGridTree = (): React.JSX.Element => {
    return (
        <>
            <TabulatorGrid
                id={'TabulatorGridTree'}
                columnDefaults={TabulatorBaseColumnsDef}
                columns={TabulatorBaseColumns}
                dataSet={TabulatorTreeData}
                dataTree={true}
                height={500}
                layout={'fitColumns'}
            />
        </>
    );
};
`
    return (
        <>
            <div>
                <TabulatorGridTree />
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

export default Page030ec5d96c204de8aa7a39bbdb6d7df3;
