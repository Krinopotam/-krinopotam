import {AnyType} from "@krinopotam/service-types";
import React from 'react';
import {ITreeComponentApi} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';

export const useApiSetDataset = (
    setDataset: React.Dispatch<React.SetStateAction<Record<string, AnyType>[] | undefined>>,
    onDataSetChanged?: (dataSet: Record<string, AnyType>[] | undefined) => void
): ITreeComponentApi['setDataSet'] => {
    return dataSet => {
        setDataset(dataSet ?? []);
        onDataSetChanged?.(dataSet);
    };
};
