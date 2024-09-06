import React, {useCallback} from 'react';

export const useApiSetExpandedKeys = (setExpandedKeys: React.Dispatch<React.SetStateAction<React.Key[] | undefined>>) => {
    return useCallback(
        (keys: React.Key[] | undefined) => {
            setExpandedKeys(keys);
        },
        [setExpandedKeys]
    );
};
