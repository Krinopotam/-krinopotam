import {useCallback, useRef} from 'react';
import {GetNanoId} from '@krinopotam/js-helpers/helpersString/getNanoId';

export const useApiGetId = (id: string | undefined) => {
    const identifier = useGetId(id);
    return useCallback(() => identifier, [identifier]);
};

const useGetId = (id: string | undefined) => {
    const idRef = useRef('');
    if (idRef.current) return idRef.current;
    idRef.current = id ?? GetNanoId();
    return idRef.current;
};
