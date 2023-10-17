import React, { CSSProperties } from 'react';
export interface ILoginContainerProps {
    isLoading: boolean;
    error?: {
        code: number;
        message: string;
    };
    retryHandler?: () => void;
    children: React.ReactNode;
    skeleton?: React.ReactNode;
    allowNotLogged?: boolean;
    notHideContent?: boolean;
    caption?: React.ReactNode;
    errorStyle?: CSSProperties;
    spinStyle?: CSSProperties;
}
export declare const LoadingContainer: ({ isLoading, error, retryHandler, children, skeleton, notHideContent, caption, spinStyle, errorStyle }: ILoginContainerProps) => React.JSX.Element;
