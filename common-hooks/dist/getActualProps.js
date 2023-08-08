import { useRef, useState } from "react";
export const useGetActualProps = (props) => {
    const curPropsRef = useRef(props);
    const curExtPropsRef = useRef(props);
    const rerender = useGetRerender();
    const updateProps = (props) => {
        curExtPropsRef.current = props;
        rerender();
    };
    if (curPropsRef.current !== props) {
        curPropsRef.current = props;
        curExtPropsRef.current = props;
        return [curPropsRef.current, updateProps];
    }
    return [curExtPropsRef.current, updateProps];
};
const useGetRerender = () => {
    const [, setUpdateModal] = useState({});
    return () => setUpdateModal({});
};
