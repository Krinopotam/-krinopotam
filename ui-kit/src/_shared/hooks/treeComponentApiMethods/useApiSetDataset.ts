import React, {useCallback} from 'react';

import {ITreeComponentApi} from "@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes";

export const useApiSetDataset = (setDataset: React.Dispatch<React.SetStateAction<Record<string, unknown>[] | undefined>>): ITreeComponentApi['setDataSet'] => {
    return useCallback(
        dataSet => {
            setDataset(dataSet ?? []);
        },
        [setDataset]
    );
};
