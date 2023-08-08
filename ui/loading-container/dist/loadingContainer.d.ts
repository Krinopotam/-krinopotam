import React from 'react';
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
}
export declare const LoadingContainer: ({ isLoading, error, retryHandler, children, skeleton, notHideContent, caption, }: ILoginContainerProps) => React.JSX.Element;
