import React, {useContext, useEffect, useRef} from 'react';
import {Editor, EditorProps, Monaco} from '@monaco-editor/react';
import {theme} from 'antd';
import {editor} from 'monaco-editor';
import {formPropsToSource} from '@src/dFormConstructor/renders/codeEditor/tools/formPropsToSource';
import {FormPropsContext} from '@src/dFormConstructor/context/formPropsProvider';

export const CodeEditor = (): React.JSX.Element => {
    const {formProps} = useContext(FormPropsContext);

    const {
        token: {colorBorder},
    } = theme.useToken();

    const editorRef = useRef<editor.IStandaloneCodeEditor>(null);
    const monacoRef = useRef<Monaco>(null);

    const handleEditorDidMount: EditorProps['onMount'] = (editor, monaco) => {
        editorRef.current = editor;
        monacoRef.current = monaco;

        /*        monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
            noSemanticValidation: false,
            noSyntaxValidation: false,
        });

        monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
            target: monaco.languages.typescript.ScriptTarget.ESNext,
            allowNonTsExtensions: true,


        });*/
    };

    useEffect(() => {
        if (editorRef.current) {
            editorRef.current.setValue('const f =' + formPropsToSource(formProps));
            setTimeout(() => {
                editorRef.current?.getAction?.('editor.action.formatDocument')?.run();
                //editorRef.current?.trigger?.('anyString', 'editor.action.formatDocument');
            }, 100);
        }
    });

    return (
        <Editor
            defaultLanguage="typescript"
            defaultValue={'const f =' + formPropsToSource(formProps)}
            height="100vh"
            wrapperProps={{
                style: {
                    display: 'flex',
                    position: 'relative',
                    textAlign: 'initial',
                    width: '100%',
                    height: '100vh',

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
            onMount={handleEditorDidMount}
        />
    );
};
