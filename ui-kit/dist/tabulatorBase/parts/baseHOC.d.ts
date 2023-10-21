import React from "react";
export interface IBaseHocProps {
    children: React.ReactNode;
    onEffect?: () => void;
}
export declare const BaseHOC: (props: IBaseHocProps) => React.JSX.Element | null;
