import React, {useCallback, useRef} from "react";

export const useApiSetProps = <T>(setProps: React.Dispatch<React.SetStateAction<T>>): ((props: T) => void) => {
    const isFirstRender = useRef(true);

    return useCallback(
        (props: T) => {
            if (isFirstRender.current) {
                isFirstRender.current = false;
                return;
            }

            setProps(props);
        },
        [setProps]
    );
};