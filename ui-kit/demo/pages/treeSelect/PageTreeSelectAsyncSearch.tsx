
    import React from 'react';
    import {TreeSelectAsyncSearch} from '../../components/treeSelect/treeSelectAsyncSearch';
    import { Divider, Collapse } from 'antd';
    import SyntaxHighlighter from 'react-syntax-highlighter';
    import {darcula, docco} from 'react-syntax-highlighter/dist/esm/styles/hljs';

    export const PageTreeSelectAsyncSearch = (props: {darkMode: boolean}): React.JSX.Element => {
    // language=text
    const source = `
import React from 'react';
import {DForm} from @krinopotam/ui-kit/dynamicForm';
import {DFormConfig} from @krinopotam/ui-kit/dynamicForm/configBuilder/dFormConfig';
import {TreeSelectComponentConfig} from @krinopotam/ui-kit/dynamicForm/configBuilder/treeSelectComponentConfig';
import {ITreeSelectSourcePromise} from @krinopotam/ui-kit/treeSelect'
import {HelpersObjects} from "@krinopotam/js-helpers";
const formProps = new DFormConfig<IFields>('Test form')
    .confirmChanges(true)
    .addFields(
        new TreeSelectComponentConfig<IFields>('departments')
            .label('Подразделения')
            .fetchMode('onUse')
            .noCacheFetchedData(true)
            .minSearchLength(1)
            .onDataFetch((search: string) => {
                return asyncFetch(search) as ITreeSelectSourcePromise;
            })
    )
    .buttons(null)
    .getConfig();
export const TreeSelectAsyncSearch = (): React.JSX.Element => {
    return (
        <>
            <div style={{maxWidth: 500}}>
                <DForm {...formProps} />
            </div>
        </>
    );
};
`
    return (
        <>
            <div>
                <TreeSelectAsyncSearch />
            </div>
            <Divider />
            <div>
                <Collapse 
                    items={[{key: 1, label: 'Show source', children: <SyntaxHighlighter language="javascript" style={props.darkMode ? darcula : docco}>{source}</SyntaxHighlighter>}]}>
                </Collapse>
            </div>
        </>
    );
};

export default PageTreeSelectAsyncSearch;
