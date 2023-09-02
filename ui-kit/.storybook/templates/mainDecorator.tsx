import {App, ConfigProvider, Layout, Space, Switch, theme} from "antd";
import ruRU from "antd/locale/ru_RU";
import React, {useState} from "react";

const {Content} = Layout;
const MainDecorator = ({children}: { children: React.ReactNode }): React.JSX.Element => {
    const [darkMode, setDarkMode] = useState(false)
    return (
        <ConfigProvider
            locale={ruRU}
            theme={{
                token: {
                    colorPrimary: '#0d6efd',
                    borderRadius: 4,
                },
                components: {Modal: {paddingContentHorizontal: 0}},
                //algorithm: theme.darkAlgorithm,
                algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
            }}
        >
            {/** antd context for static Modal (form MessageBox). Should use in root component */}
            <App>

                <Layout style={{padding: 10}}>
                    <Space style={{height: 30, marginBottom: 30}} align="center">
                        <div>
                            Dark Theme: <Switch onClick={setDarkMode}/>
                        </div>
                    </Space>

                    <Content style={{maxWidth: 1000}}>
                        {children}
                    </Content>

                </Layout>

            </App>
        </ConfigProvider>
    )
}

export default MainDecorator