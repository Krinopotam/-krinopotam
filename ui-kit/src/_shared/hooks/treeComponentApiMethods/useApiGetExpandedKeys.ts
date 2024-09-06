import React, {useCallback} from "react";

export const useApiGetExpandedKeys = (expandedKeys: React.Key[] | undefined) => {
    return useCallback(() => expandedKeys, [expandedKeys]);
};
