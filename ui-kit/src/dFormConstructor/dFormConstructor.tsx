import {FieldsTree} from '@src/dFormConstructor/renders/fieldsTree/fieldsTree';
import {FormPreview} from '@src/dFormConstructor/renders/formPreview/formPreview';
import {Typography} from 'antd';
import React, {useState} from 'react';

export const DFormConstructor = (): React.JSX.Element => {
    const [formProps, setFormProps] = useState({});
    return (
        <div style={{display: 'flex', flexDirection: 'column', height:'100%'}}>
            <Typography.Title level={1} style={{marginBottom: 10, marginTop: 0}}>
                Form constructor
            </Typography.Title>
            <div style={{display: 'flex', flex: 1, flexDirection: 'row', minHeight:0}}>
                <div
                    style={{
                        minWidth: 300,
                        background: '#FFF',
                        borderRight: 'solid 1px RGB(234,234,234)',
                        display: 'flex',
                        flexDirection: 'column',
                        minHeight:0
                    }}
                >
                    <FieldsTree setFormProps={setFormProps} />
                </div>
                <div
                    style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        background: '#FFF',
                        marginLeft: 20,
                        marginRight: 20,
                        minHeight:0
                    }}
                >
                    <FormPreview formProps={formProps} />
                </div>
                <div
                    style={{
                        minWidth: 300,
                        background: '#FFF',
                        borderLeft: 'solid 1px RGB(234,234,234)',
                        display: 'flex',
                        flexDirection: 'column',
                        minHeight:0
                    }}
                ></div>
            </div>
        </div>
    );
};
