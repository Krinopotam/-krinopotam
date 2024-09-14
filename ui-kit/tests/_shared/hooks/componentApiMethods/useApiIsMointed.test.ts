import {useIsMountedRef} from "@krinopotam/common-hooks";
import {useCallback} from "react";

export const useApiIsMounted = () => {
    const isMountedRef = useIsMountedRef();
    return useCallback(() => isMountedRef.current, [isMountedRef]);
};