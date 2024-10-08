import React, {CSSProperties} from 'react';
import {LoadingError} from '../loadingError';
import {Spin} from 'antd';

import './css/loadingContainer.css';

export interface ILoadingContainerProps {
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
    /** By default, spinner will have 100% height */
    noFullHeight?: boolean;
}

export const LoadingContainer = ({
    isLoading,
    error,
    retryHandler,
    children,
    skeleton,
    notHideContent,
    caption,
    spinStyle,
    errorStyle,
    noFullHeight,
}: ILoadingContainerProps): React.JSX.Element => {
    const tip = caption ?? 'Please wait...';
    return (
        <LoadingError errorMessage={error?.message} retryHandler={retryHandler} style={errorStyle}>
            {
                <Spin spinning={isLoading} delay={0} tip={tip} style={spinStyle} wrapperClassName={!noFullHeight ? 'wrapper-full-height-grid-spinner' : ''}>
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
