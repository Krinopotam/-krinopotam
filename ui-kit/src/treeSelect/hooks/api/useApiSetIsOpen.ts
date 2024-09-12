import React, {useCallback} from 'react';
import {ITreeSelectApi} from '@src/treeSelect';

export const useApiSetIsOpen = (setOpen: React.Dispatch<React.SetStateAction<boolean | undefined>>): ITreeSelectApi['setIsOpen'] => {
    return useCallback(
        open => {
            setOpen(open);
        },
        [setOpen]
    );
};