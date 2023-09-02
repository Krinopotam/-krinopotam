// noinspection DuplicatedCode

import {DForm} from '@src/dynamic-form';
import {DFormConfig} from '@src/dynamic-form/configBuilder/dFormConfig';
import React from 'react';
import {TreeSelectComponentConfig} from '@src/dynamic-form/configBuilder/treeSelectComponentConfig';
import {IDFormFieldTreeSelectProps} from '@src/dynamic-form/components/treeSelectComponent';

interface IFields {
    tip: string;
    process: string;
}

const dataSet1 = [
    {
        id: '1',
        title: 'Первый',
    },
    {
        id: '2',
        title: 'Второй',
    },
    {
        id: '3',
        title: 'Третий',
    },
];

const dataSet2_1 = [
    {
        id: '1',
        title: 'Первый процесс',
    },
    {
        id: '2',
        title: 'Второй процесс',
    },
];

const dataSet2_2 = [
    {
        id: '3',
        title: 'Третий процесс',
    },
    {
        id: '4',
        title: 'Четвертый процесс',
    },
];

const formProps = new DFormConfig<IFields>('Test form')
    .confirmChanges(true)
    .addFields(
        new TreeSelectComponentConfig<IFields>('tip').label('Тип процесса').fetchMode('onUse').dataSet(dataSet1),
        new TreeSelectComponentConfig<IFields>('process').label('Процессы').fetchMode('onUse').dataSet([{}])
    )
    .callbacks({
        onFieldValueChanged: (fieldName, _value, _prevValue, formApi) => {
            if (fieldName !== 'tip') return;
            const tipValue = formApi.model.getFieldValue('tip') as Record<'id', unknown>;
            let newDataSet: IDFormFieldTreeSelectProps['dataSet'];

            if (!tipValue) newDataSet = [];
            else if (tipValue.id === '1') newDataSet = dataSet2_1;
            else if (tipValue.id === '2') newDataSet = dataSet2_2;
            else newDataSet = [];

            if (!newDataSet) return;
            formApi.model.updateFieldProps('process', {dataSet: newDataSet});
        },
    })
    .buttons({ok: {position: 'right'}})
    .getConfig();

export const FormBetweenFields = (): React.JSX.Element => {
    return (
        <>
            {/*Description Start*/}
            <h1>Пример формы c полями, набор данных которых зависит друг от друга</h1>
            {/*Description End*/}
            <div style={{maxWidth: 500}}>
                <DForm {...formProps} />
            </div>
        </>
    );
};