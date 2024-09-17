import {Divider, Layout, Menu, Space, Switch, theme} from 'antd';
import {Outlet} from 'react-router-dom';

import React, {useCallback} from 'react';
import {menuItems} from './menuProps';

const {Sider, Content} = Layout;

export const DemoLayout = (props: {setDarkMode: (mode: boolean) => void}): React.JSX.Element => {
    const {
        token: {colorBgContainer},
    } = theme.useToken();

    const onChange = useCallback(
        (checked: boolean) => {
            props.setDarkMode(checked);
        },
        [props]
    );

    return (
        <Layout style={{height: '100%'}}>
            <Space style={{height: 50, background: '#222222', color: '#FFFFFF', padding: 10}} align="center" split={<Divider type="vertical" />}>
                <div>
                    <h1>Примеры компонентов</h1>
                </div>
                <div>
                    Тема: <Switch onChange={onChange} />
                </div>
            </Space>
            <Layout style={{height: '100%', paddingBottom: 24}}>
                <Sider width={400} style={{background: colorBgContainer, overflow: 'auto', height: '100%', scrollbarWidth: 'thin'}}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['baseExamples']}
                        style={{height: '100%', borderRight: 0}}
                        items={menuItems}
                    />
                </Sider>
                <Layout style={{paddingLeft: 24, paddingRight: 24}}>
                    {/*breadcrumb */}

                    <Content
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            background: colorBgContainer,
                            overflow: 'auto',
                            height: '100%',
                            scrollbarWidth: 'thin',
                        }}
                    >
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};
