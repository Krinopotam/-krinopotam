// noinspection DuplicatedCode

import type {Meta, StoryObj} from '@storybook/react'
import Tabulator from "@src/tabulatorBase";
import React from "react";


export default {
    title: 'Controls/Tabulator',
    component: Tabulator,
    tags: ['autodocs'],
    parameters: {
        docs: {
            /* AUTO-SOURCE-INJECT-START */
            /* AUTO-SOURCE-INJECT-END */
        }
    },
} satisfies Meta<typeof Tabulator>


const dataSet = [
    {
        id: '1',
        name: 'Ivanov Ivan Ivanovich',
        age: '65',
        col: 'red',
        dob: '',
        children: [
            {id: '1_1', name: 'Ivanova Alina Ivanovna', age: '17', col: 'green', dob: '22/05/2019'},
            {id: '1_2', name: 'Ivanov Petr Ivanovich', age: '16', col: 'orange', dob: '01/08/2021'},
            {
                id: '1_3',
                name: 'Ivanov Sergey Ivanovich',
                age: '33',
                col: 'yellow',
                dob: '31/01/1990',
                children: [
                    {id: '1_3_1', name: 'Ivanova Olga Sergeevna', age: '1', col: 'blue', dob: '14/05/2022'},
                    {id: '1_3_2', name: 'Ivanov Maksim Sergeevich', age: '2', col: 'green', dob: '22/05/2021'},
                    {id: '1_3_3', name: 'Ivanov Danil Sergeevich', age: '3', col: 'orange', dob: '01/08/2020'},
                ],
            },
            {id: '1_4', name: 'Ivanov Oleg Ivanovich', age: '11', col: 'red', dob: '30/12/2012'},
        ],
    },
    {
        id: '2',
        name: 'Mary May1',
        age: '1',
        col: 'blue',
        dob: '14/05/1982',
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

type Story = StoryObj<typeof Tabulator>;
export const Simple: Story = {
    args: {
        data: dataSet,

        columns: [
            {title: 'Name', field: 'name'},
            {title: 'Age', field: 'age', hozAlign: 'left', formatter: 'progress'},
            {title: 'Favourite Color', field: 'col'},
            {title: 'Date Of Birth', field: 'dob', hozAlign: 'center'},
            {title: 'Rating', field: 'rating', hozAlign: 'center', formatter: 'star'},
            {title: 'Passed?', field: 'passed', hozAlign: 'center', formatter: 'tickCross'},
        ],

        height:500,
        layout:'fitColumns',
        footerElement:<div>dsfdsfdsfdsfdsfdsfdsfsdf</div>
    },
}
