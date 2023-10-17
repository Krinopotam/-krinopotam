import React, { CSSProperties } from 'react';
export interface ILoadingErrorProps {
    errorMessage?: string;
    retryHandler?: () => void;
    style?: CSSProperties;
    children: React.ReactNode;
}
export declare const LoadingError: ({ errorMessage, children, retryHandler, style }: ILoadingErrorProps) => React.JSX.Element;
