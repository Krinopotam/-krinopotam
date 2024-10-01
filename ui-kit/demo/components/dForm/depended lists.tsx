// noinspection DuplicatedCode

import {DForm, IDFormProps} from '@src/dForm';
import React from 'react';
import {ITreeSelectFieldProps, TreeSelectField} from '@src/dForm/fields/treeSelect/treeSelectField';
import {Space, Switch} from 'antd';
import {AnyType} from '@krinopotam/service-types';

const dataSet1 = [
    {
        id: '1',
        title: 'First',
    },
    {
        id: '2',
        title: 'Second',
    },
    {
        id: '3',
        title: 'Third',
    },
];

const dataSet2_1 = [
    {
        id: '1',
        title: 'First type process 1',
    },
    {
        id: '2',
        title: 'First type process 2',
    },
];

const dataSet2_2 = [
    {
        id: '3',
        title: 'Second type process 1',
    },
    {
        id: '4',
        title: 'Second type process 2',
    },
];

export const Example = (): React.JSX.Element => {
    const formProps = useFormProps();
    return (
        <div>
            {/*Description Start*/}
            <h1>An example of a form with TreeSelect fields, the data set of one of which depends on the selection in the other</h1>
            {/*Description End*/}
            <div style={{maxWidth: 500}}>
                <DForm {...formProps} />
            </div>
        </div>
    );
};

const useFormProps = () => {
    return {
        formId: 'TestForm',
        confirmChanges: true,
        fieldsProps: {
            tip: {
                component: TreeSelectField,
                label: 'Process type',
                fetchMode: 'onUse',
                dataSet: dataSet1,
                onValueChanged: (value, prevValue, field) => {
                    const tipValue = field.getValue() as Record<string, AnyType>;
                    let newDataSet: ITreeSelectFieldProps['dataSet'];

                    if (!tipValue) newDataSet = [];
                    else if (tipValue.id === '1') newDataSet = dataSet2_1;
                    else if (tipValue.id === '2') newDataSet = dataSet2_2;
                    else newDataSet = [];

                    if (!newDataSet) return;
                    const process = field.getModel().getField('process');
                    process.updateProps({dataSet: newDataSet});
                },
            } as ITreeSelectFieldProps,
            process: {component: TreeSelectField, label: 'Process', fetchMode: 'onUse', dataSet: [{}]},
        },
        buttons: {ok: {position: 'right'}},
    } satisfies IDFormProps;
};
