import {FieldsTreeLayout} from '@src/dFormConstructor/renders/fieldsTree/fieldsTreeLayout';
import {FormPreviewLayout} from '@src/dFormConstructor/renders/formPreview/formPreviewLayout';
import {PropsEditorLayout} from '@src/dFormConstructor/renders/propsEditor/propsEditorLayout';
import {IDFormModalApi} from '@src/dFormModal';
import {Typography} from 'antd';
import React, {useState} from 'react';
import {SourceEditorModal} from '@src/dFormConstructor/renders/sourceEditor/sourceEditorModal';

export const ConstructorLayout = (): React.JSX.Element => {
    const [sourceFormApi] = useState({} as IDFormModalApi);

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
            <SourceEditorModal sourceFormApi={sourceFormApi} />
        </div>
    );
};
