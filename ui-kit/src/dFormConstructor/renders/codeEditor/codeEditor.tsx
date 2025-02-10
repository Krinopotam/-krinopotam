import React, {useContext, useEffect, useRef} from 'react';
import {Editor, EditorProps, Monaco} from '@monaco-editor/react';
import {theme} from 'antd';
import {editor} from 'monaco-editor';
import {formPropsToSource} from '@src/dFormConstructor/renders/codeEditor/tools/formPropsToSource';
import {FormPropsContext} from '@src/dFormConstructor/context/formPropsProvider';
import * as ts from 'typescript';

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

    function showValue() {
        // Создаем исходный файл в памяти
        const sourceFile = ts.createSourceFile(
            'inMemory.ts', // Имя файла используется для ссылок внутри компилятора
            editorRef.current?.getValue() ?? '',
            ts.ScriptTarget.Latest,
            true
        );

        // Функция для обхода AST
        function visit(node: ts.Node) {
            // Обработка узла
            console.log(`Visiting ${ts.SyntaxKind[node.kind]}`, node);
            if (ts.isIdentifier(node) || ts.isStringLiteral(node) || ts.isNumericLiteral(node)) {
                console.log(`Value: ${node.text}`);
            }

            // Рекурсивно обходим дочерние узлы
            ts.forEachChild(node, visit);
        }

// Начало обхода с корневого узла AST
        visit(sourceFile);

        console.log(visit(sourceFile));
    }

    return (
        <>
            <button onClick={showValue}>Show value</button>

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
        </>
    );
};
