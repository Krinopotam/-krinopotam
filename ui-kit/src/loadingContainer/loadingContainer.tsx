import React, {CSSProperties} from 'react';
import {LoadingError} from '../loadingError';
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
    errorStyle?: CSSProperties;
    spinStyle?: CSSProperties;
}

export const LoadingContainer = ({isLoading, error, retryHandler, children, skeleton, notHideContent, caption, spinStyle, errorStyle}: ILoginContainerProps): React.JSX.Element => {
    const tip = caption ?? 'Пожалуйста, подождите...';
    return (
        <LoadingError errorMessage={error?.message} retryHandler={retryHandler} style={errorStyle}>
            {
                <Spin spinning={isLoading} delay={0} tip={tip} style={spinStyle} wrapperClassName={'tabulator-grid-spinner'}>
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