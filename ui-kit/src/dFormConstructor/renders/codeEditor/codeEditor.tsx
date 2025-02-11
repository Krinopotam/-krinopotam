import React, {useContext, useEffect, useRef} from 'react';
import {Editor, EditorProps, Monaco} from '@monaco-editor/react';
import {theme} from 'antd';
import {editor} from 'monaco-editor';
import {formPropsToSource} from '@src/dFormConstructor/renders/codeEditor/tools/formPropsToSource';
import {FormPropsContext} from '@src/dFormConstructor/context/formPropsProvider';
import {parseSourceToFormProps} from '@src/dFormConstructor/renders/codeEditor/tools/parseSourceToFormProps';

export const CodeEditor = (): React.JSX.Element => {
    const {formProps, setFormProps, updatedBy} = useContext(FormPropsContext);

    const {
        token: {colorBorder},
    } = theme.useToken();

    const editorRef = useRef<editor.IStandaloneCodeEditor>(null);
    const monacoRef = useRef<Monaco>(null);

    const onMount: EditorProps['onMount'] = (editor, monaco) => {
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
        if (!editorRef.current || updatedBy === 'codeEditor') return;
        editorRef.current.setValue('const formProps =' + formPropsToSource(formProps));
        setTimeout(() => {
            editorRef.current?.getAction?.('editor.action.formatDocument')?.run();
        }, 100);
    });

    const onValidate: EditorProps['onValidate'] = () => {
        const formProps = parseSourceToFormProps(editorRef.current?.getValue() ?? '');
        console.log(formProps)
        setFormProps(formProps ?? {}, 'codeEditor');
    };

    function showValue() {
        const formProps = parseSourceToFormProps(editorRef.current?.getValue() ?? '');
        setFormProps(formProps ?? {}, 'codeEditor');
        console.log(formProps);
    }

    return (
        <>
            <button onClick={showValue}>Show value</button>

            <Editor
                defaultLanguage="typescript"
                defaultValue={'const formProps =' + formPropsToSource(formProps)}
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
                onMount={onMount}
                onValidate={onValidate}
            />
        </>
    );
};
