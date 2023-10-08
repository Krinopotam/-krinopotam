// noinspection DuplicatedCode

import React from 'react';
import {DForm, IDFormProps} from '@src/dynamicForm';
import {IDFormModalApi} from '@src/dynamicFormModal';
import {IDFormFieldTreeSelectProps, TreeSelectComponent} from "@src/dynamicForm/components/treeSelectComponent";


const departments = [
    {
        id: '01',
        title: 'Департамент аналитики данных',
    },
    {
        id: '02',
        title: 'Департамент инженерных работ',
    },
    {
        id: '03',
        title: 'Департамент проектных работ',
    },
];

const divisions1 = [
    {
        id: '01-01',
        title: 'Управление аналитики продаж',
        children: [
            {id: '01-01-01', title: 'Отдел прода север'},
            {id: '01-01-02', title: 'Отдел прода юг'},
            {id: '01-01-03', title: 'Отдел прода запад'},
        ],
    },
    {
        id: '01-02',
        title: 'Управление аналитики закупок',
        children: [
            {id: '01-02-01', title: 'Отдел закупок север'},
            {id: '01-02-02', title: 'Отдел закупок юг'},
            {id: '01-02-03', title: 'Отдел закупок запад'},
        ],
    },
    {
        id: '01-03',
        title: 'Управление аналитики производства',
        children: [
            {id: '01-03-01', title: 'Отдел производства север'},
            {id: '01-03-02', title: 'Отдел производства юг'},
            {id: '01-03-03', title: 'Отдел производства запад'},
        ],
    },
];

const divisions2 = [
    {
        id: '02-01',
        title: 'Управление строительства',
        children: [
            {id: '02-01-01', title: 'Отдел строительства север'},
            {id: '02-01-02', title: 'Отдел строительства юг'},
            {id: '02-01-03', title: 'Отдел строительства запад'},
        ],
    },
    {
        id: '02-02',
        title: 'Управление демонтажа',
        children: [
            {id: '02-02-01', title: 'Отдел демонтажа север'},
            {id: '02-02-02', title: 'Отдел демонтажа юг'},
            {id: '02-02-03', title: 'Отдел демонтажа запад'},
        ],
    },
    {
        id: '02-03',
        title: 'Управление реконструкции',
        children: [
            {id: '02-03-01', title: 'Отдел реконструкции север'},
            {id: '02-03-02', title: 'Отдел реконструкции юг'},
            {id: '02-03-03', title: 'Отдел реконструкции запад'},
        ],
    },
];

const divisions3 = [
    {
        id: '03-01',
        title: 'Управление проектирования',
        children: [
            {id: '03-01-01', title: 'Отдел проектирования север'},
            {id: '03-01-02', title: 'Отдел проектирования юг'},
            {id: '03-01-03', title: 'Отдел проектирования запад'},
        ],
    },
    {
        id: '03-02',
        title: 'Управление согласования',
        children: [
            {id: '03-02-01', title: 'Отдел согласования север'},
            {id: '03-02-02', title: 'Отдел согласования юг'},
            {id: '03-02-03', title: 'Отдел согласования запад'},
        ],
    },
    {
        id: '03-03',
        title: 'Управление анализа проектов',
        children: [
            {id: '03-03-01', title: 'Отдел анализа север'},
            {id: '03-03-02', title: 'Отдел анализа юг'},
            {id: '03-03-03', title: 'Отдел анализа запад'},
        ],
    },
];
const formApi = {} as IDFormModalApi;

const formProps: IDFormProps = {
    formId: 'Test form',
    apiRef: formApi,
    confirmChanges: true,
    fieldsProps: {
        department: {
            component: TreeSelectComponent, label: 'Департамент', fetchMode: 'onUse', onDataFetch: () => {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        if (Math.random() < 0.0) reject({message: 'Ошибка загрузки данных', code: 400});
                        else resolve({data: departments});
                    }, 2000);
                })
            }
        } as unknown as IDFormFieldTreeSelectProps,
        division: {
            component: TreeSelectComponent, label: 'Управления', fetchMode: 'onUse', dependsOn: ['department'], noCacheFetchedData: true, onDataFetch: () => {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        const departmentValue = formApi.model.getFieldValue('department') as Record<'id', unknown>; //we can get the current department value and use it for server request

                        /** the server request imitation */
                        let newDataSet: IDFormFieldTreeSelectProps['dataSet'];
                        if (!departmentValue) newDataSet = [];
                        else if (departmentValue.id === '01') newDataSet = divisions1;
                        else if (departmentValue.id === '02') newDataSet = divisions2;
                        else if (departmentValue.id === '03') newDataSet = divisions3;
                        else newDataSet = [];

                        resolve({data: newDataSet});
                    }, 2000);
                });
            }
        } as unknown as IDFormFieldTreeSelectProps,
    },
    onFieldValueChanged: (fieldName, _value, _prevValue, formApi) => {
        //clear selected division if department changed
        if (fieldName === 'department') formApi.model.setFieldValue('division', null);
    },
    buttons: null
}


export const TreeSelectDependedAsync = (): React.JSX.Element => {
    return (
        <>
            {/*Description Start*/}
            <h1>Пример отображения зависимых асинхронных TreeSelect</h1>
            <p>Пока не выбран департамент, поле Управление скрыто. При изменении департамента изменяются параметры запроса списка управлений.</p>
            {/*Description End*/}
            <div style={{maxWidth: 500}}>
                <DForm {...formProps} />
            </div>
        </>
    );
};
