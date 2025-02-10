import {FieldsTree} from '@src/dFormConstructor/renders/fieldsTree/fieldsTree';
import {FormPreview} from '@src/dFormConstructor/renders/formPreview/formPreview';
import {Space, Switch, theme, Typography} from 'antd';
import React from 'react';
import {CodeEditor} from '@src/dFormConstructor/renders/codeEditor/codeEditor';

export const ConstructorLayout = (): React.JSX.Element => {
    const {
        token: {colorBgContainer, colorBorder},
    } = theme.useToken();

    const [codeView, setCodeView] = React.useState(false);

    return (
        <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
            <Typography.Title level={1} style={{marginBottom: 10, marginTop: 0}}>
                Form constructor
            </Typography.Title>
            <div style={{display: 'flex', flex: 1, flexDirection: 'row', minHeight: 0}}>
                <div
                    style={{
                        minWidth: 300,
                        background: colorBgContainer,
                        borderRight: 'solid 1px ' + colorBorder,
                        display: 'flex',
                        flexDirection: 'column',
                        minHeight: 0,
                    }}
                >
                    <FieldsTree />
                </div>
                <div
                    style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        background: colorBgContainer,
                        marginLeft: 20,
                        marginRight: 20,
                        minHeight: 0,
                    }}
                >
                    <Space style={{marginBottom: 10, paddingLeft: 20}}>
                        <Typography.Title level={3} style={{margin: 0}}>
                            {codeView ? 'Form code' : 'Form Preview'}
                        </Typography.Title>
                        <Switch checkedChildren={'Code'} unCheckedChildren={'Form'} onChange={() => setCodeView(cur => !cur)} />
                    </Space>
                    {codeView ? <CodeEditor /> : <FormPreview />}
                </div>
                <div
                    style={{
                        minWidth: 300,
                        background: colorBgContainer,
                        borderLeft: 'solid 1px ' + colorBorder,
                        display: 'flex',
                        flexDirection: 'column',
                        minHeight: 0,
                    }}
                ></div>
            </div>
        </div>
    );
};
