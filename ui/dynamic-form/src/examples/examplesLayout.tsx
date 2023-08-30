import {FolderOutlined, HomeOutlined} from '@ant-design/icons';
import {Divider, Layout, Menu, MenuProps, Space, Switch, theme} from 'antd';
import {Link, Outlet} from 'react-router-dom';

import React, {useCallback} from 'react';

const {Sider, Content} = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[], type?: 'group'): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuProps['items'] = [
    getItem(<Link to="home">Начало</Link>, 'home', <HomeOutlined/>),
    {type: 'divider', key: 'divider1'},
    getItem('DForm - Форма', 'dForm', <FolderOutlined/>, [
        getItem(<Link to="FormSimple">Простая форма (вертикальная)</Link>, 'FormSimple'),
    ]),
    //
    {type: 'divider', key: 'divider2'},
    getItem(<Link to="PlayGround">Песочница</Link>, 'PlayGround'),
];

export const ExamplesLayout = (props: { setDarkMode: (mode: boolean) => void }): React.JSX.Element => {
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
                        items={items}
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
                        <Outlet/>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};
