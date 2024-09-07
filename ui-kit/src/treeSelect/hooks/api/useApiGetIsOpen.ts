import {useCallback} from 'react';

export const useApiGetIsOpen = (open: boolean | undefined) => {
    return useCallback(() => open, [open]);
};