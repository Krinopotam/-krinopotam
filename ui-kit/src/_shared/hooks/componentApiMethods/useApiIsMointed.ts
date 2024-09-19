import {useIsMountedRef} from '@krinopotam/common-hooks';

export const useApiIsMounted = () => {
    const isMountedRef = useIsMountedRef();
    return () => isMountedRef.current;
};
