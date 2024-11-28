import {translations} from '@src/loadingError/translations/translations';
import {Spin} from 'antd';
import React, {CSSProperties} from 'react';
import {LoadingError} from '../loadingError';

import './css/loadingContainer.css';

export interface ILoadingContainerProps {
    isLoading: boolean;
    error?: {code: number; message: string};
    retryHandler?: () => void;
    children: React.ReactNode;
    skeleton?: React.ReactNode;
    notHideContent?: boolean;
    caption?: React.ReactNode;
    errorStyle?: CSSProperties;
    spinStyle?: CSSProperties;
    /** By default, spinner will have 100% height */
    noFullHeight?: boolean;
    language?: keyof typeof translations;
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
    language,
}: ILoadingContainerProps): React.JSX.Element => {
    const tip = caption ?? 'Please wait...';

    return (
        <LoadingError errorMessage={error?.message} retryHandler={retryHandler} style={errorStyle} language={language}>
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
