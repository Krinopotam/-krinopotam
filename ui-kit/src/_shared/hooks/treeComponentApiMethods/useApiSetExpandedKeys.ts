import React from 'react';
import {IKey} from '@krinopotam/service-types';

export const useApiSetExpandedKeys = (setExpandedKeys: React.Dispatch<React.SetStateAction<IKey[] | undefined>>) => {
    return (keys: IKey[] | undefined) => {
        setExpandedKeys(keys);
    };
};
