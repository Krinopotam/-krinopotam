import {CustomField, ICustomFieldProps} from '@src/dForm/fields/custom';
import {FormPropsContext} from "@src/dFormConstructor/context/formPropsProvider";
import {CodeEditor, ICodeEditorApi} from '@src/dFormConstructor/renders/codeEditor/codeEditor';
import {parseSourceToFormProps} from "@src/dFormConstructor/renders/codeEditor/tools/parseSourceToFormProps";
import {FieldsTreeLayout} from '@src/dFormConstructor/renders/fieldsTree/fieldsTreeLayout';
import {FormPreviewLayout} from '@src/dFormConstructor/renders/formPreview/formPreviewLayout';
import {PropsEditorLayout} from '@src/dFormConstructor/renders/propsEditor/propsEditorLayout';
import {DFormModal, IDFormModalApi, IDFormModalProps} from '@src/dFormModal';
import {Typography} from 'antd';
import React, {useContext, useState} from 'react';

export const ConstructorLayout = (): React.JSX.Element => {
    const [sourceFormApi] = useState({} as IDFormModalApi);
    const [codeEditorApi] = useState({} as ICodeEditorApi);
    const {setFormProps} = useContext(FormPropsContext);

    const formProps: IDFormModalProps = {
        apiRef: sourceFormApi,
        height: 500,
        width: 700,
        confirmChanges: false,
        fieldsProps: {
            codeEditor: {component: CustomField, onRender: () => <CodeEditor apiRef={codeEditorApi} />} as ICustomFieldProps,
        },

buttons:{temp: {position: 'left', title: 'Save'}},
/*        buttons:{ok:{
                onClick: () => {
                    const formProps = parseSourceToFormProps(codeEditorApi.getSource());
                    setFormProps(formProps ?? {}, 'codeEditor');
                }
            }}*/
    };

    return (
        <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
            <Typography.Title level={1} style={{marginBottom: 10, marginTop: 0}}>
                Form constructor
            </Typography.Title>
            <div style={{display: 'flex', flex: 1, flexDirection: 'row', minHeight: 0}}>
                <FieldsTreeLayout />
                <FormPreviewLayout sourceFormApi={sourceFormApi} />
                <PropsEditorLayout />
            </div>
            <DFormModal {...formProps} />
        </div>
    );
};
