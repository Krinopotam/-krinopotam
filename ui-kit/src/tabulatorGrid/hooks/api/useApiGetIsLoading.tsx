import {IGridApi} from '@src/tabulatorGrid';

export const useApiGetIsLoading = (isLoading: boolean): IGridApi['getIsLoading'] => {
    return () => isLoading;
};