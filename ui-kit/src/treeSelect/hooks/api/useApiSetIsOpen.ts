import React, {useCallback} from 'react';

export const useApiSetIsOpen = (setOpen: React.Dispatch<React.SetStateAction<boolean | undefined>>) => {
    return useCallback(
        (open: boolean | undefined) => {
            setOpen(open);
        },
        [setOpen]
    );
};