import React from "react";
export interface IButtonRowWrapperContext {
    wrapperId: string;
    wrapperRef: React.RefObject<HTMLDivElement> | undefined;
}
export declare const ButtonRowWrapperContext: React.Context<IButtonRowWrapperContext>;
export interface IButtonRowWrapperRemoteCallbacks {
    onParentComponentRendered?: () => void;
}
export interface IButtonRowWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
    remoteCallbacksRef?: React.RefObject<IButtonRowWrapperRemoteCallbacks>;
}
export declare const ButtonsRowWrapper: (props: IButtonRowWrapperProps) => React.JSX.Element;
export default ButtonsRowWrapper;
