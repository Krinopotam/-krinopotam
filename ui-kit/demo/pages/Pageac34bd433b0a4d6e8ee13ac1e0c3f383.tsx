
    import React from 'react';
    import {TabulatorGridMultiSelect} from '../components/tabulator/tabulatorGridMultiSelect';
    import { Divider, Collapse } from 'antd';
    import SyntaxHighlighter from 'react-syntax-highlighter';
    import {darcula, docco} from 'react-syntax-highlighter/dist/esm/styles/hljs';

    export const Pageac34bd433b0a4d6e8ee13ac1e0c3f383 = (props: {darkMode: boolean}): React.JSX.Element => {
    // language=text
    const source = `
import React from 'react';
import {TabulatorGrid} from @krinopotam/ui-kit/tabulatorGrid';
import {TabulatorBaseColumns, TabulatorBaseColumnsDef, TabulatorPlainData} from "../../data/tabulatorData";
export const TabulatorGridMultiSelect = (): React.JSX.Element => {
    return (
        <>
            <TabulatorGrid id={'TabulatorGridSimple'} columnDefaults={TabulatorBaseColumnsDef} columns={TabulatorBaseColumns} dataSet={TabulatorPlainData} multiSelect={true} height={500} layout={'fitColumns'}/>
        </>
    );
};
`
    return (
        <>
            <div>
                <TabulatorGridMultiSelect />
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

export default Pageac34bd433b0a4d6e8ee13ac1e0c3f383;
