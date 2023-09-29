// noinspection DuplicatedCode

import React from 'react';
import {DFormModalConfig, NumberComponentConfig, InputComponentConfig} from '@src/dynamicFormModal/configBuilder';
import TabulatorGrid, {ITabulatorProps, IGridRowData} from '@src/tabulatorGrid';
import {dateTimeFormatter} from "@src/tabulatorBase/formatters/dateTime";
import {dateTimeSorter} from "@src/tabulatorBase/sorters/dateTime";

type IPerson = {
    id: string;
    name: string;
    age: number;
    col: string;
    dob: string;
};

const columnDefaults: ITabulatorProps['columnDefaults'] = {
    resizable: 'header',
    headerFilter: true,
};

const columns: ITabulatorProps['columns'] = [
    {title: 'Name', field: 'name'},
    {title: 'Age', field: 'age', hozAlign: 'left', formatter: 'progress'},
    {title: 'Favourite Color', field: 'col'},
    {title: 'Date Of Birth', field: 'dob', hozAlign: 'center', formatter: dateTimeFormatter, formatterParams: {inputFormat: 'DD/MM/YYYY', outputFormat: 'DD.MM.YYYY'}, sorter: dateTimeSorter, sorterParams: {format: 'DD/MM/YYYY'}},
    {title: 'Rating', field: 'rating', hozAlign: 'center', formatter: 'star', headerFilterFunc: '='},
    {title: 'Passed?', field: 'passed', hozAlign: 'center', formatter: 'tickCross', headerFilterFunc: '='},
];

const dataSet: IGridRowData[] = [
    {id: '1', name: 'Oli Bob1', age: '12', col: 'red', dob: '', rating: 1, passed: false},
    {id: '2', name: 'Mary May1', age: '1', col: 'blue', dob: '14/05/1982', rating: 2, passed: false},
    {id: '3', name: 'Christine Lobowski1', age: '42', col: 'green', dob: '22/05/1982', rating: 5, passed: true},
    {id: '4', name: 'Brendon Philips1', age: '125', col: 'orange', dob: '01/08/1980', rating: 4, passed: true},
    {id: '5', name: 'Margret Marmajuke1', age: '16', col: 'yellow', dob: '31/01/1999', rating: 3, passed: true},
    {id: '6', name: 'Oli Bob2', age: '12', col: 'red', dob: '', rating: 5, passed: true},
    {id: '7', name: 'Mary May2', age: '1', col: 'blue', dob: '14/05/1982', rating: 2, passed: false},
    {id: '8', name: 'Christine Lobowski2', age: '42', col: 'green', dob: '22/05/1982', rating: 3, passed: true},
    {id: '9', name: 'Brendon Philips2', age: '125', col: 'orange', dob: '01/08/1980', rating: 3, passed: true},
    {id: '10', name: 'Margret Marmajuke2', age: '16', col: 'yellow', dob: '31/01/1999', rating: 2, passed: false},
    {id: '11', name: 'Oli Bob3', age: '12', col: 'red', dob: '', rating: 1, passed: false},
    {id: '12', name: 'Mary May3', age: '1', col: 'blue', dob: '14/05/1982', rating: 4, passed: true},
    {id: '13', name: 'Christine Lobowski3', age: '42', col: 'green', dob: '22/05/1982', rating: 1, passed: false},
    {id: '14', name: 'Brendon Philips3', age: '125', col: 'orange', dob: '01/08/1980', rating: 5, passed: true},
    {id: '15', name: 'Margret Marmajuke3', age: '16', col: 'yellow', dob: '31/01/1999', rating: 1, passed: false},
    {id: '16', name: 'Oli Bob4', age: '12', col: 'red', dob: '', rating: 5, passed: true},
    {id: '17', name: 'Mary May4', age: '1', col: 'blue', dob: '14/05/1982', rating: 2, passed: false},
    {id: '18', name: 'Christine Lobowski4', age: '42', col: 'green', dob: '22/05/1982', rating: 3, passed: true},
    {id: '19', name: 'Brendon Philips4', age: '125', col: 'orange', dob: '01/08/1980', rating: 4, passed: true},
    {id: '20', name: 'Margret Marmajuke4', age: '16', col: 'yellow', dob: '31/01/1999', rating: 1, passed: false},
];

const editFormConfig = new DFormModalConfig<IPerson>('gridEditForm')
    .layout('horizontal')
    .addFields(
        new InputComponentConfig<IPerson>('name').label('Name'),
        new NumberComponentConfig<IPerson>('age').label('Age'),
        new InputComponentConfig<IPerson>('col').label('Favourite Color'),
        new InputComponentConfig<IPerson>('dob').label('Day of Birth')
    )
    .confirmChanges(true)
    .callbacks({
        onSubmit: (values) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (Math.random() < 0.5) reject({message: 'Ошибка сохранения', code: 400});
                    else resolve({data: values});
                }, 2000);
            });
        },
    })
    .getConfig();

export const TabulatorGridWithFormAsync = (): React.JSX.Element => {
    return (
        <>
            {/*Description Start*/}
            <h1>Пример простого грида Tabulator с формой редактирование</h1>
            {/*Description End*/}
            <TabulatorGrid
                id={'TabulatorGridWithFormAsync'}
                columns={columns}
                columnDefaults={columnDefaults}
                editFormProps={editFormConfig}
                confirmDelete
                height={500}
                layout={'fitColumns'}

                onDataFetch={() => {
                    return new Promise((resolve, reject) => {
                        setTimeout(() => {
                            if (Math.random() < 0.3) reject({message: 'Ошибка загрузки данных', code: 400});
                            else resolve({data: dataSet});
                        }, 2000);
                    });
                }}

                onDelete={() => {
                    return new Promise((resolve, reject) => {
                        setTimeout(() => {
                            if (Math.random() < 0.3) reject({message: 'Ошибка удаления строк', code: 400});
                            else resolve({data: {result: 'OK'}});
                        }, 2000);
                    });
                }}
            />
        </>
    );
};
