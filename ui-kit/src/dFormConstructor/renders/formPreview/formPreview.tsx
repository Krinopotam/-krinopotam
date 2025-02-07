import React from 'react';
import {Space, Switch} from 'antd';
import {DForm, IDFormProps} from '@src/dForm';

export const FormPreview = ({formProps}: {formProps: IDFormProps}): React.JSX.Element => {
    const [horizontal, setHorizontal] = React.useState(false);
    const fProps: IDFormProps = {layout: horizontal ? 'horizontal' : 'vertical', ...formProps};
    console.log(fProps)

    return (
        <div style={{border: 'solid 1px grey', padding:20}}>
            <h1>Form preview</h1>
            <div style={{maxWidth: 500, minWidth:300, border: 'solid 1px grey'}}>
                <Space style={{marginBottom: 30}}>
                    <Switch checkedChildren={'Horizontal'} unCheckedChildren={'Vertical'} onChange={() => setHorizontal(cur => !cur)} />
                </Space>
                <DForm {...fProps} />
            </div>
        </div>
    );
};
