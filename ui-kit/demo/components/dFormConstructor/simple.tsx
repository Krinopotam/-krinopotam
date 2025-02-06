// noinspection DuplicatedCode

import {Space, Switch} from 'antd';
import React from 'react';
import {DFormConstructor} from '@src/dFormConstructor/dFormConstructor';

export const Example = (): React.JSX.Element => {
    const [horizontal, setHorizontal] = React.useState(false);

    return (
        <div>
            {/*Description Start*/}
            <h1>Form constructor example</h1>
            {/*Description End*/}
            <div style={{maxWidth: 1000}}>
                <Space style={{marginBottom: 30}}>
                    <Switch checkedChildren={'Horizontal'} unCheckedChildren={'Vertical'} onChange={() => setHorizontal(cur => !cur)} />
                </Space>
                <DFormConstructor  />
            </div>
        </div>
    );
};
