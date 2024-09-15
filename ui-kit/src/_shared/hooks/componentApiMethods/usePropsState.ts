import React from 'react';
import {useUpdateEffect} from '@krinopotam/common-hooks';

export const usePropsState = <T>(props: T): [T, React.Dispatch<React.SetStateAction<T>>] => {
    const [propsState, setPropsState] = React.useState(props);

    useUpdateEffect(() => {
        setPropsState(props);
    }, [props]);

    return [propsState, setPropsState];
};
