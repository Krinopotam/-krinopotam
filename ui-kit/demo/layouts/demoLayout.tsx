import {Divider, Layout, Menu, Space, Switch, theme} from 'antd';
import {Outlet} from 'react-router-dom';

import React, {Suspense, useCallback} from 'react';
import {menuItems} from "./menuProps";

const {Sider, Content} = Layout;

export const DemoLayout = (props: { setDarkMode: (mode: boolean) => void }): React.JSX.Element => {
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
        <>
            <Layout>
                <Space style={{height: 50, background: '#222222', color: '#FFFFFF', padding: 10}} align="center" split={<Divider type="vertical"/>}>
                    <div>
                        <h1>Примеры компонентов</h1>
                    </div>
                    <div>
                        Тема: <Switch onChange={onChange}/>
                    </div>
                </Space>
                <Layout>
                    <Sider width={400} style={{background: colorBgContainer}}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['baseExamples']}
                            style={{height: '100%', borderRight: 0}}
                            items={menuItems}
                        />
                    </Sider>
                    <Layout style={{paddingLeft: 25, paddingRight: 24}}>
                        {/*breadcrumb */}

                        <Content
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                                background: colorBgContainer,
                            }}
                        >
                            {/* eslint-disable-next-line react/jsx-no-undef */}
                            <Suspense fallback={<div>Loading...</div>}>
                                <Outlet/>
                            </Suspense>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        </>
    );
};
