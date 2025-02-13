import React, {useContext, useState} from 'react';
import {editor} from 'monaco-editor';
import {IDFormProps} from '@src/dForm';
import {formPropsToSource} from '@src/dFormConstructor/renders/sourceEditor/tools/formPropsToSource';
import {FormPropsContext} from '@src/dFormConstructor/context/formPropsProvider';
import {sourceToFormProps} from '@src/dFormConstructor/renders/sourceEditor/tools/sourceToFormProps';
import {FormInfoContext} from "@src/dFormConstructor/context/formInfoProvider";

export interface ISourceEditorApi {
    getSource: () => string;
    setSource: (source: string) => void;
    setSourceFromProps: (props: IDFormProps, formatCode?: boolean) => void;
    apply: () => void;
}

export const usePrepareApi = (apiRef: ISourceEditorApi | undefined, editorRef: React.RefObject<editor.IStandaloneCodeEditor | null>) => {
    const [apiNew] = useState({} as ISourceEditorApi);
    const api = apiRef ?? apiNew;
    const {setFormProps} = useContext(FormPropsContext);
    const {formInfo} = useContext(FormInfoContext);

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
        const source = api.getSource();
        const formProps = sourceToFormProps(source);
        setFormProps(formProps, source, 'codeEditor');
        formInfo.setProps(formProps ?? {});
    };

    return api;
};
