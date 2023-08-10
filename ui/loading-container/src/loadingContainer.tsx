import React from 'react';
import {LoadingError} from '@krinopotam/ui-loading-error';
import {Spin} from 'antd';

export interface ILoginContainerProps {
    isLoading: boolean;
    error?: {code: number; message: string};
    retryHandler?: () => void;
    children: React.ReactNode;
    skeleton?: React.ReactNode;
    allowNotLogged?: boolean;
    notHideContent?: boolean;
    caption?: React.ReactNode;
}

export const LoadingContainer = ({
    isLoading,
    error,
    retryHandler,
    children,
    skeleton,
    notHideContent,
    caption,
}: ILoginContainerProps): React.JSX.Element => {
    const tip = caption ?? 'Пожалуйста, подождите...';
    return (
        <LoadingError errorMessage={error?.message} retryHandler={retryHandler}>
            {
                <Spin spinning={isLoading} delay={0} tip={tip}>
                    {isLoading && !notHideContent ? (
                        <>
                            {skeleton ?? null}
                            <div style={{display: 'none'}}>{children}</div>
                        </>
                    ) : (
                        <>{children}</>
                    )}
                </Spin>
            }
        </LoadingError>
    );
};