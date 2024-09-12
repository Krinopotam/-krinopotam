import {useCallback} from 'react';

export const useApiGetFetchError = (fetchError: string|undefined) => {
    return useCallback(() => fetchError, [fetchError]);
};