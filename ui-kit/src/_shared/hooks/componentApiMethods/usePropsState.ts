import React, {useEffect, useRef} from 'react';

export const usePropsState = <T>(props: T): [T, React.Dispatch<React.SetStateAction<T>>] => {
    const [propsState, setPropsState] = React.useState(props);
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        setPropsState(props);
    }, [props]);

    return [propsState, setPropsState];
};
