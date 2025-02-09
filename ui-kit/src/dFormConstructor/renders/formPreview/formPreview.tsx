import React from 'react';
import {Space, Switch, Typography} from 'antd';
import {DForm, IDFormProps} from '@src/dForm';

export const FormPreview = ({formProps}: {formProps: IDFormProps}): React.JSX.Element => {
    const [horizontal, setHorizontal] = React.useState(false);
    const fProps: IDFormProps = {layout: horizontal ? 'horizontal' : 'vertical', ...formProps};

    return (
        <>
            <Space style={{marginBottom:10, paddingLeft:20}}>
                <Typography.Title level={3} style={{margin:0}}>Form Preview</Typography.Title>
                <Switch checkedChildren={'Horizontal'} unCheckedChildren={'Vertical'} onChange={() => setHorizontal(cur => !cur)} />
            </Space>
            <div style={{padding: 20, overflow: 'auto', scrollbarColor: 'rgb(234, 234, 234)', scrollbarGutter: 'stable', scrollbarWidth: 'thin'}}>
                <DForm {...fProps} />
            </div>
        </>
    );
};
