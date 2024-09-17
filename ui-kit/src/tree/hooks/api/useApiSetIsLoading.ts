import React from 'react';
import {IExtTreeApi} from '@src/tree/types/types';

export const useApiSetIsLoading = (setIsLoading: React.Dispatch<React.SetStateAction<boolean>>): IExtTreeApi['setIsLoading'] => {
    return isLoading => {
        setTimeout(() => {
            setIsLoading(isLoading);
        }, 0);
    };
};