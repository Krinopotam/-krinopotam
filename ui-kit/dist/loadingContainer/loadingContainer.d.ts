import React, { CSSProperties } from 'react';
import './css/loadingContainer.css';
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
    noFullHeight?: boolean;
}
export declare const LoadingContainer: ({ isLoading, error, retryHandler, children, skeleton, notHideContent, caption, spinStyle, errorStyle, noFullHeight, }: ILoginContainerProps) => React.JSX.Element;
