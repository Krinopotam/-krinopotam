import {CodeOutlined, CopyOutlined} from '@ant-design/icons';
import {useEvent} from '@krinopotam/common-hooks';
import {Button} from '@src/button';
import {SelectedFieldContext} from '@src/dFormConstructor/context/selectedFieldProvider';
import {FormPreview} from '@src/dFormConstructor/renders/formPreview/formPreview';
import {IDFormModalApi} from '@src/dFormModal';
import {Flex, message, theme, Tooltip, Typography} from 'antd';
import React, {useContext} from 'react';
import {FormInfoContext} from '@src/dFormConstructor/context/formInfoProvider';

export const FormPreviewLayout = ({sourceFormApi}: {sourceFormApi: IDFormModalApi}): React.JSX.Element => {
    const {
        token: {colorBgContainer},
    } = theme.useToken();

    const {setSelectedField} = useContext(SelectedFieldContext);
    const {formInfo} = useContext(FormInfoContext);
    const [messageApi, contextHolder] = message.useMessage();

    const onClick = useEvent((e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLElement;
        if (target.classList.contains('form-preview-header') || target.closest('.form-preview-header')) return;
        setSelectedField(undefined);
        e.stopPropagation();
    });

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
            onClick={onClick}
        >
            <Flex className={'form-preview-header'} style={{marginBottom: 10, paddingLeft: 20, display: 'flex', gap: 10, alignItems: 'center'}}>
                {contextHolder}
                <Typography.Title level={4} style={{margin: 0}}>
                    Form preview
                </Typography.Title>
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
                            navigator.clipboard.writeText(formInfo.toSource()).then(() => {
                                messageApi
                                    .success({
                                        content: 'Source code copied to clipboard',
                                    })
                                    .then();
                            });
                        }}
                    ></Button>
                </Tooltip>
            </Flex>
            <FormPreview />
        </div>
    );
};
