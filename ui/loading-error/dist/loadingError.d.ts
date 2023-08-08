import React from 'react';
export interface ILoadingErrorProps {
    errorMessage?: string;
    retryHandler?: () => void;
    children: React.ReactNode;
}
export declare const LoadingError: ({ errorMessage, children, retryHandler, }: ILoadingErrorProps) => React.JSX.Element;
