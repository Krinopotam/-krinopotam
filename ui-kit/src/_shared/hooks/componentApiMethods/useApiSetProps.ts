import React, {useCallback} from 'react';

export const useApiSetProps = <T>(setProps: React.Dispatch<React.SetStateAction<T>>): ((props: T) => void) => {
    return useCallback(
        (props: T) => {
            setProps(props);
        },
        [setProps]
    );
};
