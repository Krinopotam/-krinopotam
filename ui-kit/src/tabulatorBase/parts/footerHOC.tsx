import React, {useEffect} from "react";

export interface IFooterHocProps {
    children: React.ReactNode
    onEffect?: () => void
}

export const FooterHOC = (props: IFooterHocProps): React.JSX.Element | null => {
    useEffect(() => {
        props.onEffect?.();
    }, [props])

    return (
        <>{props.children}</>
    );
};
