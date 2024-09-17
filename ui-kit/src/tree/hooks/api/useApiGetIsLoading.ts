import {IExtTreeApi} from '@src/tree/types/types';

export const useApiGetIsLoading =
    (isLoading: boolean): IExtTreeApi['getIsLoading'] =>
        () =>
            isLoading;