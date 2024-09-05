import { useRef, useState } from "react";
export const useGetActualProps = (props) => {
    const curPropsRef = useRef(props);
    const curExtPropsRef = useRef(props);
    const rerender = useGetRerender();
    const setProps = (props) => {
        if (typeof props === 'function')
            curExtPropsRef.current = props(curExtPropsRef.current);
        else
            curExtPropsRef.current = props;
        rerender();
    };
    if (curPropsRef.current !== props) {
        curPropsRef.current = props;
        curExtPropsRef.current = props;
        return [curPropsRef.current, setProps];
    }
    return [curExtPropsRef.current, setProps];
};
const useGetRerender = () => {
    const [, setUpdateComponent] = useState({});
    return () => setUpdateComponent({});
};
