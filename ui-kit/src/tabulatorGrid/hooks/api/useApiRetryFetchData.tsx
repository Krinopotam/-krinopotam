import {IGridApi} from '@src/tabulatorGrid';

export const useApiRetryFetchData = (gridApi: IGridApi): IGridApi['fetchData'] => {
    return () => {
        const [currentDataFetchHandler, currentFetchParams] = gridApi.getCurrentDataFetchHandler();
        if (currentDataFetchHandler) gridApi.fetchData(currentDataFetchHandler, currentFetchParams);
    };
};