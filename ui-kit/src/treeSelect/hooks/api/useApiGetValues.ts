import {IBaseValueWithLabel} from "@src/treeSelect/types/types";
import {useCallback} from "react";

export const useApiGetValues = (value: IBaseValueWithLabel[] | undefined) => {
    return useCallback(()=>value, [value])
};
