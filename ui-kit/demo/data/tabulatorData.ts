import {IGridRowData, ITabulatorProps} from '@src/tabulatorGrid';
import {DateTimeFormatter, DateTimeSorter} from '@src/tabulatorBase';

export const TabulatorBaseColumnsDef: ITabulatorProps['columnDefaults'] = {
    resizable: 'header',
    headerFilter: true,
    headerFilterFunc: 'like',
};

export const TabulatorBaseColumns: ITabulatorProps['columns'] = [
    {field: 'num', title: '№', formatter: 'rownum', accessor: 'rownum',headerSort: false, vertAlign: 'middle'},
    {title: 'Name', field: 'name', headerFilter: true},
    {title: 'Age', field: 'age', hozAlign: 'left', formatter: 'progress'},
    {title: 'Favourite Color', field: 'col'},
    {
        title: 'Date Of Birth',
        field: 'dob',
        hozAlign: 'center',
        formatter: DateTimeFormatter,
        formatterParams: {inputFormat: 'DD/MM/YYYY', outputFormat: 'DD.MM.YYYY'},
        sorter: DateTimeSorter,
        sorterParams: {format: 'DD/MM/YYYY'},
    },
    {title: 'Rating', field: 'rating', hozAlign: 'center', formatter: 'star', headerFilterFunc: '='},
    {title: 'Passed?', field: 'passed', hozAlign: 'center', formatter: 'tickCross', headerFilterFunc: '='},
];

export const TabulatorBaseGroupedColumns: ITabulatorProps['columns'] = [
    {title: 'Name', field: 'name', formatter:'textarea'},
    {
        title: 'Info',
        headerFilter: undefined,
        columns: [
            {title: 'Age', field: 'age', hozAlign: 'left', formatter: 'progress'},
            {title: 'Favourite Color', field: 'col'},
        ],
    },
    {
        title: 'Date Of Birth',
        field: 'dob',
        hozAlign: 'center',
        formatter: DateTimeFormatter,
        formatterParams: {inputFormat: 'DD/MM/YYYY', outputFormat: 'DD.MM.YYYY'},
        sorter: DateTimeSorter,
        sorterParams: {format: 'DD/MM/YYYY'},
    },
    {
        title: 'Result',
        headerFilter: undefined,
        columns: [
            {title: 'Rating', field: 'rating', hozAlign: 'center', formatter: 'star', headerFilterFunc: '='},
            {title: 'Passed?', field: 'passed', hozAlign: 'center', formatter: 'tickCross', headerFilterFunc: '='},
        ],
    },
];

export const TabulatorPlainData: IGridRowData[] = [
    {id: '1', name: 'Oli Bob1', age: '12', col: 'red', dob: '', rating: 1, passed: false},
    {id: '2', name: 'Mary May1', age: '1', col: 'blue', dob: '14/05/1982', rating: 2, passed: false},
    {id: '3', name: 'Christine Kozubowski1', age: '42', col: 'green', dob: '22/05/1982', rating: 5, passed: true},
    {id: '4', name: 'Brendon Philips1', age: '125', col: 'orange', dob: '01/08/1980', rating: 4, passed: true},
    {id: '5', name: 'Margret Marmalade1', age: '16', col: 'yellow', dob: '31/01/1999', rating: 3, passed: true},
    {id: '6', name: 'Oli Bob2', age: '12', col: 'red', dob: '', rating: 5, passed: true},
    {id: '7', name: 'Mary May2', age: '1', col: 'blue', dob: '14/05/1982', rating: 2, passed: false},
    {id: '8', name: 'Christine Kozubowski2', age: '42', col: 'green', dob: '22/05/1982', rating: 3, passed: true},
    {id: '9', name: 'Brendon Philips2', age: '125', col: 'orange', dob: '01/08/1980', rating: 3, passed: true},
    {id: '10', name: 'Margret Marmalade2', age: '16', col: 'yellow', dob: '31/01/1999', rating: 2, passed: false},
    {id: '11', name: 'Oli Bob3', age: '12', col: 'red', dob: '', rating: 1, passed: false},
    {id: '12', name: 'Mary May3', age: '1', col: 'blue', dob: '14/05/1982', rating: 4, passed: true},
    {id: '13', name: 'Christine Kozubowski3', age: '42', col: 'green', dob: '22/05/1982', rating: 1, passed: false},
    {id: '14', name: 'Brendon Philips3', age: '125', col: 'orange', dob: '01/08/1980', rating: 5, passed: true},
    {id: '15', name: 'Margret Marmalade3', age: '16', col: 'yellow', dob: '31/01/1999', rating: 1, passed: false},
    {id: '16', name: 'Oli Bob4', age: '12', col: 'red', dob: '', rating: 5, passed: true},
    {id: '17', name: 'Mary May4', age: '1', col: 'blue', dob: '14/05/1982', rating: 2, passed: false},
    {id: '18', name: 'Christine Kozubowski4', age: '42', col: 'green', dob: '22/05/1982', rating: 3, passed: true},
    {id: '19', name: 'Brendon Philips4', age: '125', col: 'orange', dob: '01/08/1980', rating: 4, passed: true},
    {id: '20', name: 'Margret Marmalade4', age: '16', col: 'yellow', dob: '31/01/1999', rating: 1, passed: false},
];

export const TabulatorTreeData: IGridRowData[] = [
    {
        id: '1',
        name: 'Oli Bob1',
        age: '12',
        col: 'red',
        dob: '',
        children: [
            {id: '1_1', name: 'Oli Bob1 Child 1', age: '4', col: 'green', dob: '22/05/20119'},
            {id: '1_2', name: 'Oli Bob1 Child 2', age: '2', col: 'orange', dob: '01/08/2021'},
            {
                id: '1_3',
                name: 'Oli Bob1 Child 3',
                age: '23',
                col: 'yellow',
                dob: '31/01/2000',
                children: [
                    {id: '1_3_1', name: 'Oli Bob1 Grandson 1', age: '1', col: 'blue', dob: '14/05/2022'},
                    {id: '1_3_2', name: 'Oli Bob1 Grandson 2', age: '2', col: 'green', dob: '22/05/2021'},
                    {id: '1_3_3', name: 'Oli Bob1 Grandson 3', age: '3', col: 'orange', dob: '01/08/2020'},
                ],
            },
            {id: '1_4', name: 'Oli Bob1 Child 4', age: '11', col: 'red', dob: '30/12/2012'},
        ],
    },
    {
        id: '2',
        name: 'Mary May1',
        age: '1',
        col: 'blue',
        dob: '14/05/1982',
        children: [
            {id: '2_1', name: 'Mary May1 Child 1', age: '4', col: 'green', dob: '22/05/20119'},
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
    {id: '3', name: 'Christine Lobowski1', age: '42', col: 'green', dob: '22/05/1982'},
    {id: '4', name: 'Brendon Philips1', age: '125', col: 'orange', dob: '01/08/1980'},
    {id: '5', name: 'Margret Marmajuke1', age: '16', col: 'yellow', dob: '31/01/1999'},
    {id: '6', name: 'Oli Bob2', age: '12', col: 'red', dob: ''},
    {id: '7', name: 'Mary May2', age: '1', col: 'blue', dob: '14/05/1982'},
    {id: '8', name: 'Christine Lobowski2', age: '42', col: 'green', dob: '22/05/1982'},
    {id: '9', name: 'Brendon Philips2', age: '125', col: 'orange', dob: '01/08/1980'},
    {id: '10', name: 'Margret Marmajuke2', age: '16', col: 'yellow', dob: '31/01/1999'},
    {id: '11', name: 'Oli Bob3', age: '12', col: 'red', dob: ''},
    {id: '12', name: 'Mary May3', age: '1', col: 'blue', dob: '14/05/1982'},
    {id: '13', name: 'Christine Lobowski3', age: '42', col: 'green', dob: '22/05/1982'},
    {id: '14', name: 'Brendon Philips3', age: '125', col: 'orange', dob: '01/08/1980'},
    {id: '15', name: 'Margret Marmajuke3', age: '16', col: 'yellow', dob: '31/01/1999'},
    {id: '16', name: 'Oli Bob4', age: '12', col: 'red', dob: ''},
    {id: '17', name: 'Mary May4', age: '1', col: 'blue', dob: '14/05/1982'},
    {id: '18', name: 'Christine Lobowski4', age: '42', col: 'green', dob: '22/05/1982'},
    {id: '19', name: 'Brendon Philips4', age: '125', col: 'orange', dob: '01/08/1980'},
    {id: '20', name: 'Margret Marmajuke4', age: '16', col: 'yellow', dob: '31/01/1999'},
];

export const TabulatorNamesPlainData: IGridRowData[] = [
    {id: '01', surname: 'Иванов', name: 'Иван', patronymic: 'Иванович', email: 'ivanov@mail.ru', birthday: '11.01.1980'},
    {id: '02', surname: 'Петров', name: 'Петр', patronymic: 'Петрович', email: 'petrov@mail.ru', birthday: '15.02.1975'},
    {id: '03', surname: 'Сидоров', name: 'Сидр', patronymic: 'Сидорович', email: 'sidorov@mail.ru', birthday: '17.03.1981'},
    {id: '04', surname: 'Смирнов', name: 'Смирен', patronymic: 'Смирнович', email: 'smirnov@mail.ru', birthday: '11.01.1958'},
    {id: '05', surname: 'Самойлов', name: 'Самойл', patronymic: 'Самойлович', email: 'samoylov@mail.ru', birthday: '15.02.1937'},
    {id: '06', surname: 'Арсенов', name: 'Арсен', patronymic: 'Арсенович', email: 'arsenov@mail.ru', birthday: '13.04.1989'},
    {id: '07', surname: 'Дмитриев', name: 'Дмитрий', patronymic: 'Дмитриевич', email: 'dmitriev@mail.ru', birthday: '31.08.1971'},
    {id: '08', surname: 'Александров', name: 'Александр', patronymic: 'Александрович', email: 'aleksandrov@mail.ru', birthday: '01.12.1956'},
    {id: '09', surname: 'Васильев', name: 'Василий', patronymic: 'Васильевич', email: 'vasilyev@mail.ru', birthday: '09.11.1969'},
    {id: '10', surname: 'Денисов', name: 'Денис', patronymic: 'Денисович', email: 'denisov@mail.ru', birthday: '21.04.1978'},
    {id: '11', surname: 'Максимов', name: 'Максим', patronymic: 'Максимович', email: 'maksimov@mail.ru', birthday: '10.08.1977'},
    {id: '12', surname: 'Протасов', name: 'Протас', patronymic: 'Протасович', email: 'protasov@mail.ru', birthday: '25.08.1973'},
    {id: '13', surname: 'Алексеев', name: 'Алексей', patronymic: 'Алексеевич', email: 'alekseev@mail.ru', birthday: '19.12.1985'},
    {id: '14', surname: 'Сергеев', name: 'Сергей', patronymic: 'Сергеевич', email: 'sergeev@mail.ru', birthday: '22.07.1990'},
    {id: '15', surname: 'Артемьев', name: 'Артем', patronymic: 'Артемович', email: 'artemyev@mail.ru', birthday: '06.11.1995'},
    {id: '16', surname: 'Демидов', name: 'Демид', patronymic: 'Демидович', email: 'demidov@mail.ru', birthday: '11.02.1997'},
    {id: '17', surname: 'Кимов', name: 'Ким', patronymic: 'Кимович', email: 'kimov@mail.ru', birthday: '18.01.1988'},
    {id: '18', surname: 'Абгазов', name: 'Абгаз', patronymic: 'Абгазович', email: 'abgazov@mail.ru', birthday: '03.09.1985'},
    {id: '19', surname: 'Мансуров', name: 'Мансур', patronymic: 'Мансурович', email: 'mansurov@mail.ru', birthday: '02.05.1995'},
    {id: '20', surname: 'Андросов', name: 'Андрей', patronymic: 'Андреевич', email: 'androsov@mail.ru', birthday: '10.04.1966'},
];

export const TabulatorNamesTreeData: IGridRowData[] = [
    {
        id: '01',
        surname: 'Иванов',
        name: 'Иван',
        patronymic: 'Иванович',
        email: 'ivanov@mail.ru',
        birthday: '11.01.1980',
        children: [
            {id: '02', surname: 'Петров', name: 'Петр', patronymic: 'Петрович', email: 'petrov@mail.ru', birthday: '15.02.1975'},
            {id: '03', surname: 'Сидоров', name: 'Сидр', patronymic: 'Сидорович', email: 'sidorov@mail.ru', birthday: '17.03.1981'},
            {id: '04', surname: 'Смирнов', name: 'Смирен', patronymic: 'Смирнович', email: 'smirnov@mail.ru', birthday: '11.01.1958'},
        ],
    },
    {
        id: '05',
        surname: 'Самойлов',
        name: 'Самойл',
        patronymic: 'Самойлович',
        email: 'samoylov@mail.ru',
        birthday: '15.02.1937',
        children: [
            {id: '06', surname: 'Арсенов', name: 'Арсен', patronymic: 'Арсенович', email: 'arsenov@mail.ru', birthday: '13.04.1989'},
            {id: '07', surname: 'Дмитриев', name: 'Дмитрий', patronymic: 'Дмитриевич', email: 'dmitriev@mail.ru', birthday: '31.08.1971'},
            {id: '08', surname: 'Александров', name: 'Александр', patronymic: 'Александрович', email: 'aleksandrov@mail.ru', birthday: '01.12.1956'},
        ],
    },
    {
        id: '09',
        surname: 'Васильев',
        name: 'Василий',
        patronymic: 'Васильевич',
        email: 'vasilyev@mail.ru',
        birthday: '09.11.1969',
        children: [
            {id: '10', surname: 'Денисов', name: 'Денис', patronymic: 'Денисович', email: 'denisov@mail.ru', birthday: '21.04.1978'},
            {id: '11', surname: 'Максимов', name: 'Максим', patronymic: 'Максимович', email: 'maksimov@mail.ru', birthday: '10.08.1977'},
            {id: '12', surname: 'Протасов', name: 'Протас', patronymic: 'Протасович', email: 'protasov@mail.ru', birthday: '25.08.1973'},
            {id: '13', surname: 'Алексеев', name: 'Алексей', patronymic: 'Алексеевич', email: 'alekseev@mail.ru', birthday: '19.12.1985'},
        ],
    },
    {
        id: '14',
        surname: 'Сергеев',
        name: 'Сергей',
        patronymic: 'Сергеевич',
        email: 'sergeev@mail.ru',
        birthday: '22.07.1990',
        children: [
            {id: '15', surname: 'Артемьев', name: 'Артем', patronymic: 'Артемович', email: 'artemyev@mail.ru', birthday: '06.11.1995'},
            {id: '16', surname: 'Демидов', name: 'Демид', patronymic: 'Демидович', email: 'demidov@mail.ru', birthday: '11.02.1997'},
            {id: '17', surname: 'Кимов', name: 'Ким', patronymic: 'Кимович', email: 'kimov@mail.ru', birthday: '18.01.1988'},
            {id: '18', surname: 'Абгазов', name: 'Абгаз', patronymic: 'Абгазович', email: 'abgazov@mail.ru', birthday: '03.09.1985'},
            {id: '19', surname: 'Мансуров', name: 'Мансур', patronymic: 'Мансурович', email: 'mansurov@mail.ru', birthday: '02.05.1995'},
            {id: '20', surname: 'Андросов', name: 'Андрей', patronymic: 'Андреевич', email: 'androsov@mail.ru', birthday: '10.04.1966'},
        ],
    },
];

export const GenerateDataSet = (rows: number, prefix: string): IGridRowData[] => {
    if (!rows) rows = 10;
    const result = [];
    const colRow = prefix + 'Col';
    for (let i = 0; i < rows; i++) {
        result.push({
            id: i,
            col1: colRow + '1_' + i + '-' + Math.random(),
            col2: colRow + '2_' + i + '-' + Math.random(),
            col3: colRow + '3_' + i + '-' + Math.random(),
        });
    }
    return result as IGridRowData[];
};
