import {CodeOutlined, CopyOutlined} from '@ant-design/icons';
import {Button} from '@src/button';
import {FormPreview} from '@src/dFormConstructor/renders/formPreview/formPreview';
import {IDFormModalApi} from '@src/dFormModal';
import {Flex, message, Switch, theme, Tooltip, Typography} from 'antd';
import React, {useContext} from 'react';
import {TestContext} from '@src/dFormConstructor/context/testProvider';
import {FormSourceContext} from '@src/dFormConstructor/context/formSourceProvider';

export const FormPreviewLayout = ({sourceFormApi}: {sourceFormApi: IDFormModalApi}): React.JSX.Element => {
    const {
        token: {colorBgContainer},
    } = theme.useToken();

    const {source} = useContext(FormSourceContext);
    const [messageApi, contextHolder] = message.useMessage();
    const [horizontal, setHorizontal] = React.useState(false);

    const {val, setVal} = useContext(TestContext);
    return (
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
            <Flex style={{marginBottom: 10, paddingLeft: 20, display: 'flex', gap: 10, alignItems: 'center'}}>
                {contextHolder}
                <Typography.Title level={3} style={{margin: 0}}>
                    Form code
                </Typography.Title>
                <Switch checkedChildren={'Horizontal'} unCheckedChildren={'Vertical'} onChange={() => setHorizontal(cur => !cur)} />
                <div style={{flexGrow: 1}} />
                <Tooltip title={'Edit source code'}>
                    <Button
                        icon={<CodeOutlined />}
                        onClick={() => {
                            sourceFormApi.open('create');
                        }}
                    >
                        Source
                    </Button>
                </Tooltip>
                <Tooltip title={'Copy source code'}>
                    <Button
                        icon={<CopyOutlined />}
                        onClick={() => {
                            navigator.clipboard.writeText(source).then(() => {
                                messageApi
                                    .success({
                                        content: 'Source code copied to clipboard',
                                    })
                                    .then();
                            });
                        }}
                    ></Button>
                </Tooltip>
                <Button
                    onClick={() => {
                        setVal(val + '1');
                    }}
                >
                    Test
                </Button>
            </Flex>
            <FormPreview horizontal={horizontal} />
        </div>
    );
};
