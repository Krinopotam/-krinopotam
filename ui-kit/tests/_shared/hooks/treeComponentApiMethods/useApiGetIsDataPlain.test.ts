import {useCallback} from "react";

export const useApiGetIsDataPlain = (isDataPlain: boolean) => {
    return useCallback(() => isDataPlain, [isDataPlain]);
};