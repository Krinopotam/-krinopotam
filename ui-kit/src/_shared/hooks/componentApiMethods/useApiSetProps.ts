import React from 'react';

export const useApiSetProps = <T>(setProps: React.Dispatch<React.SetStateAction<T>>): ((props: T) => void) => {
    return (props: T) => {
        setProps(props);
    };
};
