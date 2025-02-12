import React, {useContext, useState} from 'react';
import {editor} from 'monaco-editor';
import {IDFormProps} from '@src/dForm';
import {formPropsToSource} from '@src/dFormConstructor/renders/sourceEditor/tools/formPropsToSource';
import {FormSourceContext} from '@src/dFormConstructor/context/formSourceProvider';

export interface ISourceEditorApi {
    getSource: () => string;
    setSource: (source: string) => void;
    setSourceFromProps: (props: IDFormProps, formatCode?: boolean) => void;
    apply: () => void;
}

export const usePrepareApi = (apiRef: ISourceEditorApi | undefined, editorRef: React.RefObject<editor.IStandaloneCodeEditor | null>) => {
    const [apiNew] = useState({} as ISourceEditorApi);
    const api = apiRef ?? apiNew;
    const {setSource} = useContext(FormSourceContext);

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

    api.apply = () => {
        setSource(api.getSource(), 'codeEditor');
        //const formProps = sourceToFormProps(api.getSource());
        //setFormProps(formProps ?? {}, 'codeEditor');
    };

    return api;
};
