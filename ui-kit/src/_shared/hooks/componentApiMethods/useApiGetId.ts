import {useCallback} from 'react';

export const useApiGetId = (id: string) => {
    return useCallback(() => id, [id]);
};
