import React, {useEffect} from "react";

export interface IBaseHocProps {
    children: React.ReactNode
    onEffect?: () => void
}

export const BaseHOC = (props: IBaseHocProps): React.JSX.Element | null => {
    useEffect(() => {
        props.onEffect?.();
    }, [props])

    return (
        <>{props.children}</>
    );
};
