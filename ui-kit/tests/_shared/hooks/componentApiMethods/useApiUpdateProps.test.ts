import React, {useCallback} from "react";

export const useApiUpdateProps = <T>(curProps: T, setProps: React.Dispatch<React.SetStateAction<T>>): ((props: Partial<T>) => void) => {
    return useCallback(
        props => {
            setProps({...curProps, ...props});
        },
        [curProps, setProps]
    );
};
