import {useRef, useState} from "react";

/**
 * Returns actual props and setProps function. The props can be changed both by the parent component and setProps function
 * @param props
 * @returns
 */

export const useGetActualProps = <T, >(props: T): [T, (props: T | ((prevValue: T) => T)) => void] => {
    const curPropsRef = useRef<T>(props); // props, changed by parent component
    const curExtPropsRef = useRef<T>(props); // props, changed setProps function

    const rerender = useGetRerender();
    const setProps = (props: T | ((prevValue: T) => T)) => {
        if (typeof props === 'function') curExtPropsRef.current = (props as (prevValue: T) => T)(curExtPropsRef.current);
        else curExtPropsRef.current = props;

        rerender();
    };

    if (curPropsRef.current !== props) {
        //props changed by parent component
        curPropsRef.current = props;
        curExtPropsRef.current = props;
        return [curPropsRef.current, setProps]; //returns props, changed by parent component
    }

    return [curExtPropsRef.current, setProps]; //returns props, changed by setProps
};

/** Get rerender modal form method */
const useGetRerender = () => {
    const [, setUpdateComponent] = useState({});
    return () => setUpdateComponent({});
};