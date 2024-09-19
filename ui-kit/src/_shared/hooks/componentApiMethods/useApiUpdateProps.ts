import React from 'react';

export const useApiUpdateProps = <T>(curProps: T, setProps: React.Dispatch<React.SetStateAction<T>>): ((props: Partial<T>) => void) => {
    return props => {
        setProps({...curProps, ...props});
    };
};
