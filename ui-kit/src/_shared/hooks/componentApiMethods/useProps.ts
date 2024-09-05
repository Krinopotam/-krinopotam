import React, {useCallback} from 'react';

export const useGetProps = <T>(props: T) => {
    return useCallback(() => props, [props]);
};

export const useSetProps = <T>(setProps: React.Dispatch<React.SetStateAction<T>>): ((props: T) => void) => {
    return useCallback(
        (props: T) => {
            setProps(props);
        },
        [setProps]
    );
};

export const useUpdateProps = <T>(curProps: T, setProps: React.Dispatch<React.SetStateAction<T>>): ((props: Partial<T>) => void) => {
    return useCallback(
        props => {
            setProps({...curProps, ...props});
        },
        [curProps, setProps]
    );
};
