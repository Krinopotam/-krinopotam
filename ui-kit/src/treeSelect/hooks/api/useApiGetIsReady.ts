import {useCallback} from 'react';

export const useApiGetIsReady = (isReady: boolean) => {
    return useCallback(() => isReady, [isReady]);
};