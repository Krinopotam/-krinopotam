import { useRef, useState } from "react";
/**
 * Returns actual props and setProps function. The props can be changed both by the parent component and setProps function
 * @param props
 * @returns
 */
export const useGetActualProps = (props) => {
    const curPropsRef = useRef(props); // props, changed by parent component
    const curExtPropsRef = useRef(props); // props, changed setProps function
    const rerender = useGetRerender();
    const setProps = (props) => {
        if (typeof props === 'function')
            curExtPropsRef.current = props(curExtPropsRef.current);
        else
            curExtPropsRef.current = props;
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
