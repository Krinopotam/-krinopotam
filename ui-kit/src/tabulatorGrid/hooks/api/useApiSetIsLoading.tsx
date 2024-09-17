import React from 'react';
import {IGridApi} from '@src/tabulatorGrid';

export const useApiSetIsLoading = (setIsLoading: React.Dispatch<React.SetStateAction<boolean>>): IGridApi['setIsLoading'] => {
    return (isLoading: boolean) => {
        setTimeout(() => {
            setIsLoading(isLoading);
        }, 0);
    };
};