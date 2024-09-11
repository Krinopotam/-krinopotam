import {ILabeledValue} from "@src/treeSelect/types/types";
import {useCallback} from "react";

export const useApiGetValues = (value: ILabeledValue[] | undefined) => {
    return useCallback(()=>value, [value])
};
