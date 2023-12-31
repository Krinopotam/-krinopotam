import {DateTimeFormatter, DateTimeSorter, ITabulatorColumn} from "@src/tabulatorBase";

export const TabulatorTreeDataset = [
    {
        id: '1',
        name: 'Ivanov Ivan Ivanovich',
        age: '65',
        col: 'red',
        dob: '',
        rating: 2,
        passed: false,
        children: [
            {id: '1_1', name: 'Ivanova Alina Ivanovna', age: '17', col: 'green', dob: '22/05/2019', rating: 4, passed: true},
            {id: '1_2', name: 'Ivanov Petr Ivanovich', age: '16', col: 'orange', dob: '01/08/2021', rating: 2, passed: false},
            {
                id: '1_3',
                name: 'Ivanov Sergey Ivanovich',
                age: '33',
                col: 'yellow',
                dob: '31/01/1990',
                rating: 3, passed: true,
                children: [
                    {id: '1_3_1', name: 'Ivanova Olga Sergeevna', age: '1', col: 'blue', dob: '14/05/2022', rating: 1, passed: false},
                    {id: '1_3_2', name: 'Ivanov Maksim Sergeevich', age: '2', col: 'green', dob: '22/05/2021', rating: 4, passed: true},
                    {id: '1_3_3', name: 'Ivanov Danil Sergeevich', age: '3', col: 'orange', dob: '01/08/2020', rating: 2, passed: false},
                ],
            },
            {id: '1_4', name: 'Ivanov Oleg Ivanovich', age: '11', col: 'red', dob: '30/12/2012', rating: 5, passed: true},
        ],
    },
    {
        id: '2',
        name: 'Mary May1',
        age: '1',
        col: 'blue',
        dob: '14/05/1982',
        rating: 4, passed: true,
        children: [
            {id: '2_1', name: 'Mary May1 Child 1', age: '4', col: 'green', dob: '22/05/2019'},
            {id: '2_2', name: 'Mary May1 Child 2', age: '2', col: 'orange', dob: '01/08/2021'},
            {
                id: '2_3',
                name: 'Mary May1 Child 3',
                age: '23',
                col: 'yellow',
                dob: '31/01/2000',
                children: [
                    {id: '2_3_1', name: 'Mary May1 Grandson 1', age: '1', col: 'blue', dob: '14/05/2022'},
                    {id: '2_3_2', name: 'Mary May1 Grandson 2', age: '2', col: 'green', dob: '22/05/2021'},
                    {id: '2_3_3', name: 'Mary May1 Grandson 3', age: '3', col: 'orange', dob: '01/08/2020'},
                ],
            },
            {id: '2_4', name: 'Mary May1 Child 4', age: '11', col: 'red', dob: '30/12/2012'},
        ],
    },
    {id: '3', name: 'Christine Lobowski1', age: '42', col: 'green', dob: '22/05/1982', rating: 4, passed: true},
    {id: '4', name: 'Brendon Philips1', age: '125', col: 'orange', dob: '05/08/1980', rating: 3, passed: false},
    {id: '5', name: 'Margret Marmajuke1', age: '16', col: 'yellow', dob: '04/02/1999', rating: 5, passed: true},
    {id: '6', name: 'Oli Bob2', age: '12', col: 'red', dob: '', rating: 2, passed: true},
    {id: '7', name: 'Mary May2', age: '1', col: 'blue', dob: '14/05/1982', rating: 1, passed: true},
    {id: '8', name: 'Christine Lobowski2', age: '42', col: 'green', dob: '21/04/1982', rating: 0, passed: false},
    {id: '9', name: 'Brendon Philips2', age: '125', col: 'orange', dob: '01/08/1980', rating: 4, passed: true},
    {id: '10', name: 'Margret Marmajuke2', age: '16', col: 'yellow', dob: '17/01/1999', rating: 2, passed: false},
    {id: '11', name: 'Oli Bob3', age: '12', col: 'red', dob: '', rating: 4, passed: false},
    {id: '12', name: 'Mary May3', age: '1', col: 'blue', dob: '14/05/1982', rating: 5, passed: true},
    {id: '13', name: 'Christine Lobowski3', age: '42', col: 'green', dob: '15/05/1982', rating: 3, passed: true},
    {id: '14', name: 'Brendon Philips3', age: '125', col: 'orange', dob: '01/08/1980', rating: 1, passed: true},
    {id: '15', name: 'Margret Marmajuke3', age: '16', col: 'yellow', dob: '11/02/1999', rating: 0, passed: false},
    {id: '16', name: 'Oli Bob4', age: '12', col: 'red', dob: '', rating: 3, passed: false},
    {id: '17', name: 'Mary May4', age: '1', col: 'blue', dob: '14/05/1982', rating: 4, passed: true},
    {id: '18', name: 'Christine Lobowski4', age: '42', col: 'green', dob: '22/03/1982', rating: 4, passed: true},
    {id: '19', name: 'Brendon Philips4', age: '125', col: 'orange', dob: '17/06/1980', rating: 5, passed: false},
    {id: '20', name: 'Margret Marmajuke4', age: '16', col: 'yellow', dob: '20/01/1999', rating: 4, passed: true},
];

export const TabulatorGridColumns: ITabulatorColumn[] = [
    {title: 'Name', field: 'name', headerFilter: true, headerFilterFunc: 'like', frozen: true},
    {title: 'Age', field: 'age', hozAlign: 'left', formatter: 'progress', bottomCalc: "avg", bottomCalcParams: {precision: 3}, topCalc: 'sum'},
    {title: 'Favourite Color', field: 'col', headerFilter: true, headerFilterFunc: 'like'},
    {
        title: 'Results',
        columns: [
            {title: 'Rating', field: 'rating', hozAlign: 'center', formatter: 'star', headerFilter: 'star', headerFilterFunc: '='},
            {title: 'Passed?', field: 'passed', hozAlign: 'center', formatter: 'tickCross', headerFilter: 'tickCross', headerFilterFunc: '='},
        ]
    },

    {
        title: 'Date Of Birth', field: 'dob', hozAlign: 'center',
        formatter: DateTimeFormatter, formatterParams: {inputFormat: 'DD/MM/YYYY', outputFormat: 'DD.MM.YYYY'},
        sorter: DateTimeSorter, sorterParams: {format: 'DD/MM/YYYY'},
        headerFilter: true, headerFilterFunc: 'like'
    }
]