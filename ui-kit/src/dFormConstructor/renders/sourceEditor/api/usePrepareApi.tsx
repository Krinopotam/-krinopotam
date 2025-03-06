import React, {useContext, useState} from 'react';
import {editor} from 'monaco-editor';
import {sourceToFormProps} from '@src/dFormConstructor/renders/sourceEditor/tools/sourceToFormProps';
import {FormInfoContext} from '@src/dFormConstructor/context/formInfoProvider';

export interface ISourceEditorApi {
    getSource: () => string;
    setSource: (source: string) => void;
    apply: () => void;
}

export const usePrepareApi = (apiRef: ISourceEditorApi | undefined, editorRef: React.RefObject<editor.IStandaloneCodeEditor | null>) => {
    const {formInfo} = useContext(FormInfoContext);
    const [apiNew] = useState({} as ISourceEditorApi);
    const api = apiRef ?? apiNew;

    api.getSource = () => editorRef.current?.getValue() ?? '';
    api.setSource = (source: string) => {
        editorRef.current?.setValue(source);
    };

    api.apply = () => {
        const source = api.getSource();
        const formProps = sourceToFormProps(source);

        formInfo.setProps(formProps ?? {});
        formInfo.emitFormPreviewRerender();
        formInfo.emitPropsEditorRerender();
        formInfo.emitFieldsTreeRerender();
    };

    return api;
};
