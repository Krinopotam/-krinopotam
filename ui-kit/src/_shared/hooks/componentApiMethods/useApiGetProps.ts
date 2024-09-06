import {useCallback} from "react";

export const useApiGetProps = <T>(props: T) => {
    return useCallback(() => props, [props]);
};