// noinspection DuplicatedCode

import React from 'react';
import {DForm, IDFormProps} from '@src/dForm';
import {InputField} from '@src/dForm/fields/input/inputField';
import {Space, Switch} from 'antd';

export const Example = (): React.JSX.Element => {
    const [horizontal, setHorizontal] = React.useState(false);
    const formProps = useFormProps(horizontal);
    return (
        <div>
            {/*Description Start*/}
            <h1>Example of loading data when opening a form</h1>
            <p>To ensure loading, you need to pass a function to the onDataFetch callback that returns a Promise, which, if the server responds successfully (resolve), returns an object like:</p>
            <code>{`data:{field_name1: "value", field_name2: "value 2"...}`}</code>
            <p>in case of error (reject)</p>
            <code>{`error:{message: string, code: number}`}</code>
            <p>For example, the probability of failure during loading is 50%</p>
            <p></p>
            {/*Description End*/}
            <div style={{maxWidth: 500}}>
                <Space style={{marginBottom: 30}}>
                    <Switch checkedChildren={'Horizontal'} unCheckedChildren={'Vertical'} onChange={() => setHorizontal(cur => !cur)} />
                </Space>
                <DForm {...formProps} />
            </div>
        </div>
    );
};

const useFormProps = (horizontal: boolean) => {
    return {
        formId: 'Test form',
        layout: horizontal ? 'horizontal' : 'vertical',
        formMode: 'update',
        confirmChanges: true,
        fieldsProps: {
            position: {component: InputField, label: 'Position'},
            department: {component: InputField, label: 'Department'},
        },

        onDataFetch: () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (Math.random() < 0.5) reject({message: 'Error loading data', code: 400});
                    else resolve({data: {position: 'Chief', department: 'Sales department'}});
                }, 3000);
            });
        },

        buttons: {ok: {position: 'right'}},
    } satisfies IDFormProps;
};