import {IDFormProps} from '@src/dForm';
import React, {useContext, useEffect, useRef, useState} from 'react';
import {Editor, EditorProps, Monaco} from '@monaco-editor/react';
import {theme} from 'antd';
import {editor} from 'monaco-editor';
import {formPropsToSource} from '@src/dFormConstructor/renders/codeEditor/tools/formPropsToSource';
import {FormPropsContext} from '@src/dFormConstructor/context/formPropsProvider';
import {sourceToFormProps} from '@src/dFormConstructor/renders/codeEditor/tools/sourceToFormProps';
import {generateDummyTypes} from '@src/dFormConstructor/renders/codeEditor/tools/generateDummyTypes';

export interface ICodeEditorApi {
    getSource: () => string;
    setSource: (source: string) => void;
    setSourceFromProps: (props: IDFormProps, formatCode?: boolean) => void;
}

export const CodeEditor = (props: {apiRef?: ICodeEditorApi}): React.JSX.Element => {
    const {
        token: {colorBorder},
    } = theme.useToken();

    const {formProps, setFormProps, updatedBy} = useContext(FormPropsContext);

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
        api.setSourceFromProps(formProps);
    });

    const onValidate: EditorProps['onValidate'] = (markers) => {
        console.log(markers)
    };

    function showValue() {
        const formProps = sourceToFormProps(editorRef.current?.getValue() ?? '');
        setFormProps(formProps ?? {}, 'codeEditor');
        console.log(formProps);
    }

    return (
        <>
            <button onClick={showValue}>Show value</button>

            <Editor
                defaultLanguage="typescript"
                defaultValue={formPropsToSource(formProps)}
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

const usePrepareApi = (apiRef: ICodeEditorApi | undefined, editorRef: React.RefObject<editor.IStandaloneCodeEditor | null>) => {
    const [apiNew] = useState({} as ICodeEditorApi);
    const api = apiRef ?? apiNew;

    api.getSource = () => editorRef.current?.getValue() ?? '';
    api.setSource = (source: string) => {
        editorRef.current?.setValue(source);
    };

    api.setSourceFromProps = (props: IDFormProps, formatCode = true) => {
        const source = formPropsToSource(props);
        editorRef.current?.setValue(source);
        if (!formatCode) return;
        setTimeout(() => {
            editorRef.current?.getAction?.('editor.action.formatDocument')?.run();
        }, 100);
    };
    return api;
};
