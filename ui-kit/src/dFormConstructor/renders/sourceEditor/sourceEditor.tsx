import React, {useContext, useEffect, useRef} from 'react';
import {Editor, EditorProps, Monaco} from '@monaco-editor/react';
import {theme} from 'antd';
import {editor} from 'monaco-editor';
import {generateDummyTypes} from '@src/dFormConstructor/renders/sourceEditor/tools/generateDummyTypes';
import {ISourceEditorApi, usePrepareApi} from '@src/dFormConstructor/renders/sourceEditor/api/usePrepareApi';
import {FormSourceContext} from '@src/dFormConstructor/context/formSourceProvider';

export const SourceEditor = (props: {apiRef?: ISourceEditorApi}): React.JSX.Element => {
    console.log('SourceEditor')

    const {
        token: {colorBorder},
    } = theme.useToken();

    const {source, updatedBy} = useContext(FormSourceContext);

    const editorRef = useRef<editor.IStandaloneCodeEditor>(null);
    const monacoRef = useRef<Monaco>(null);

    const api = usePrepareApi(props.apiRef, editorRef);

    const onMount: EditorProps['onMount'] = (editor, monaco) => {
        editorRef.current = editor;
        monacoRef.current = monaco;
        monaco.languages.typescript.typescriptDefaults.addExtraLib(generateDummyTypes(), 'fake.d.ts');
    };

    useEffect(() => {
        if (!editorRef.current || updatedBy === 'codeEditor') return;
        api.setSource(source);
    });

    const onValidate: EditorProps['onValidate'] = markers => {
        console.log(markers);
    };

    return (
        <div
            style={{
                display: 'flex',
                flex: 1,
                minHeight: 0,
                minWidth: 0,
            }}
        >
            <Editor
                defaultLanguage="typescript"
                defaultValue={source}
                height="100vh"
                wrapperProps={{
                    style: {
                        display: 'flex',
                        position: 'relative',
                        textAlign: 'initial',
                        flex: 1,
                        minHeight: 0,
                        minWidth: 0,

                        border: '1px solid ' + colorBorder,
                    },
                }}
                options={{
                    formatOnType: true,
                    automaticLayout: true,
                    language: 'typescript',
                    minimap: {
                        enabled: false,
                    },
                    //wordWrap: 'on',
                    //tabSize: 2,
                    //'editor.formatOnType': true,
                }}
                onMount={onMount}
                onValidate={onValidate}
            />
        </div>
    );
};
