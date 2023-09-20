import {App, ConfigProvider, Layout, theme} from "antd";
import ruRU from "antd/locale/ru_RU";
import React from "react";

const {Content} = Layout;
const MainDecorator = ({mode, children}: { mode: 'dark' | 'light', children: React.ReactNode }): React.JSX.Element => {
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
                algorithm: mode === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
            }}
        >
            {/** antd context for static Modal (form MessageBox). Should use in root component */}
            <App>

                <Layout style={{padding: 10}}>
                    <Content style={{maxWidth: 1000}}>
                        {children}
                    </Content>

                </Layout>

            </App>
        </ConfigProvider>
    )
}

export default MainDecorator