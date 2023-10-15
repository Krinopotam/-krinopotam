
    import React from 'react';
    import {TreeSelectAsyncSearch} from '../../components/treeSelect/treeSelectAsyncSearch';
    import { Divider, Collapse } from 'antd';
    import SyntaxHighlighter from 'react-syntax-highlighter';
    import {darcula, docco} from 'react-syntax-highlighter/dist/esm/styles/hljs';

    export const PageTreeSelectAsyncSearch = (props: {darkMode: boolean}): React.JSX.Element => {
    // language=text
    const source = `
import React from 'react';
import {DForm, IDFormProps} from @krinopotam/ui-kit/dynamicForm';
import {ITreeSelectSourcePromise} from @krinopotam/ui-kit/treeSelect'
import {HelpersObjects} from "@krinopotam/js-helpers";
import {IDFormFieldTreeSelectProps, TreeSelectComponent} from @krinopotam/ui-kit/dynamicForm/components/treeSelectComponent";
const formProps: IDFormProps = {
    formId: 'Test form',
    confirmChanges: true,
    fieldsProps: {
        departments: {
            component: TreeSelectComponent, label: 'Подразделения', fetchMode: 'onUse', noCacheFetchedData: true, minSearchLength: 1, onDataFetch: (search:string) => {
                return asyncFetch(search) as ITreeSelectSourcePromise;
            }
        } as unknown as IDFormFieldTreeSelectProps,
    },
    buttons: null,
};
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
