// noinspection DuplicatedCode

import React, {useCallback, useState} from 'react';

import {Button} from '@src/button';
import {TabulatorGrid, ITabulatorProps, IGridProps, IGridApi, IGridRowData} from '@src/tabulatorGrid';
import * as url from "url";

const columnDefaults: ITabulatorProps['columnDefaults'] = {
    resizable: 'header',
    headerFilter: true,
    headerFilterFunc: 'like'
};

const columns: ITabulatorProps['columns'] = [
    {title: 'Column 1', field: 'col1'},
    {title: 'Column 2', field: 'col2'},
    {title: 'Column 3', field: 'col3'},
];

const generateDataSet = (rows: number, prefix: string):IGridRowData[] => {
    if (!rows) rows = 10;
    const result = [];
    const colRow = prefix + 'Col';
    for (let i = 0; i < rows; i++) {
        result.push({id: i, col1: colRow + '1_' + Math.random(), col2: colRow + '2_' + Math.random(), col3: colRow + '3_' + Math.random()});
    }
    return result as IGridRowData[];
};

export const TabulatorGridChangeDataSet = (): React.JSX.Element => {
    const [dataSet, setDataSet] = useState<IGridProps['dataSet']>(undefined);
    const [gridApi] = useState({} as IGridApi);

    const updateDataViaState = useCallback(() => {
        setDataSet(generateDataSet(100, 'state'));
    }, []);

    const updateDataViaApi = useCallback(() => {
        gridApi.setDataSet(generateDataSet(100, 'api'));
    }, [gridApi]);

    const updateDataViaApiAsync = useCallback(() => {
        gridApi.fetchData(()=>{
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (Math.random() < 0.5) reject({message: 'Ошибка загрузки данных', code: 400});
                    else resolve({data: generateDataSet(100, 'async')});
                }, 1000);
            })}
        );
    }, [gridApi]);

    return (
        <>
            {/*Description Start*/}
            <h1>Пример обновбения dataSet грида Tabulator</h1>
            {/*Description End*/}
            <Button onClick={updateDataViaState}>Обновить DataSet через state</Button> - грид целиком перерендеривается
            <br />
            <br />
            <Button onClick={updateDataViaApi}>Обновить dataSet через Api.setDataSet</Button> - dataSet обновляется, но это не вызывает ререндер грида
            <br />
            <br />
            <Button onClick={updateDataViaApiAsync}>Обновить dataSet асинхронно через Api.fetchData</Button> - ререндер вызывается, так как закрывается лоадером на время
            загрузки, но используется мемоизированный компонет. Поэтому фактически ререндера нет.
            <TabulatorGrid id={'TabulatorGridSimple'} apiRef={gridApi} columnDefaults={columnDefaults} columns={columns} dataSet={dataSet} height={500} layout={'fitColumns'} ajaxResponse={(url, params, response)=>{
                //url - the URL of the request
                //params - the parameters passed with the request
                //response - the JSON object returned in the body of the response.
                console.log('responce')
                return response; //return the response data to tabulator
            }} />
        </>
    );
};
